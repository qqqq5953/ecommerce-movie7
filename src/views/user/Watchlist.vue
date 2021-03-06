<template>
  <div class="bg-dark h-100">
    <div
      class="container py-5 px-5 px-xl-0"
      :class="{ 'h-100': !listProductsPerPage.length }"
    >
      <header>
        <div class="d-flex align-items-center">
          <i class="bi bi-bookmark-plus text-warning me-3 fs-4"></i>
          <h2 class="h1 text-white mb-0">watchlist</h2>
        </div>
      </header>
      <main class="py-4" :class="{ 'h-100': !listProductsPerPage.length }">
        <ul class="row flex-wrap list-unstyled mb-0">
          <li
            class="col-6 col-md-4 col-lg-3 mb-4"
            v-for="item in listProductsPerPage"
            :key="item.id"
          >
            <div
              class="card rounded-3 border-0 card-img-box-shadow h-100 position-relative"
            >
              <!-- delete button -->
              <a
                href="#"
                @click.prevent="removeProductFromList(item.id)"
                class="position-absolute watchlist-item-delete d-block"
              >
                <i class="bi bi-x-lg d-none d-md-block"></i>
                <i class="bi bi-x d-md-none"></i>
              </a>
              <!-- card image -->
              <a
                href="#"
                class="text-decoration-none d-block overflow-hidden"
                @click.prevent="getProductID(item.id)"
              >
                <div
                  class="card-background rounded-3 card-img-border-adjusted"
                  :style="{
                    backgroundImage: `url(${baseImageUrl + item.poster_path})`
                  }"
                ></div>
              </a>

              <div class="card-body d-flex flex-column d-none d-md-block">
                <h5 class="card-title h4">{{ item.title }}</h5>
                <small class="mt-auto">{{ item.release_date }}</small>
              </div>
            </div>
          </li>
        </ul>
        <div
          class="d-flex align-items-center justify-content-center h-100"
          v-if="!listProductsPerPage.length"
        >
          <router-link :to="{ name: 'AllProducts' }" class="btn btn-warning"
            >pick some movies now</router-link
          >
        </div>
      </main>

      <PaginationForUser
        v-if="listProducts.length"
        :totalPages="totalPages"
        :currentPage="currentPage"
        @change-page="setPagination"
        @previous-page="setPagination"
        @next-page="setPagination"
      ></PaginationForUser>
    </div>
  </div>
</template>

<script>
import PaginationForUser from '@/components/PaginationForUser.vue';

export default {
  components: {
    PaginationForUser
  },
  data() {
    return {
      baseImageUrl: 'https://image.tmdb.org/t/p/w300',
      listProductsPerPage: [],
      listProducts: [],
      products: [],
      productID: '',
      // pagination
      totalPages: undefined,
      currentPage: 1,
      perPage: 12
    };
  },
  methods: {
    async getList() {
      const api = `https://api.themoviedb.org/3/list/${process.env.VUE_APP_LIST_ID}?api_key=${process.env.VUE_APP_KEY}&language=en-US`;

      const response = await this.$http.get(api).catch((err) => {
        console.log(err);
      });

      this.listProducts = response.data.items;

      // 設置分頁
      this.setPagination();
    },
    setPagination(page = 1) {
      this.currentPage = page;

      // 設定總頁數、起訖頁
      this.totalPages = Math.ceil(this.listProducts.length / this.perPage);
      const startPage = this.currentPage * this.perPage - this.perPage;
      const endPage = startPage + this.perPage;

      this.listProductsPerPage = this.listProducts.slice(startPage, endPage);

      // 畫面滾動至最上方
      window.scrollTo(0, -1000);
    },
    async getAllProducts() {
      // api
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      const response = await this.$http.get(api).catch((err) => {
        console.log(err);
      });

      this.products = response.data.products;

      // 排除訂閱的類型（重要）
      this.products = this.products.filter((item) => {
        return item.category !== 'Subscription';
      });
    },
    getProductID(id) {
      // 找出產品 id
      const filterProductArray = this.products.filter((item) => {
        return item.content.split('|')[0] === id.toString();
      });

      this.productID = filterProductArray[0].id;

      this.$router.push({
        name: 'Product',
        params: {
          productID: this.productID
        }
      });
    },
    async removeProductFromList(id) {
      // api
      const api = `https://api.themoviedb.org/3/list/${process.env.VUE_APP_LIST_ID}/remove_item?api_key=${process.env.VUE_APP_KEY}&session_id=${process.env.VUE_APP_SESSION_ID}`;

      const requestBody = {
        media_id: id
      };

      await this.$http.post(api, requestBody).catch((err) => {
        console.log(err);
      });

      // 重新 render 畫面
      this.getList();
    }
  },
  created() {
    // 畫面滾動至最上方
    window.scrollTo(0, -1000);

    // 獲得 watchlist 資料
    this.getList();

    /* 點擊指定產品並前往該產品頁面，
    得到 this.products 後給 this.getProductID() 使用 */
    this.getAllProducts();
  }
};
</script>

<style lang="scss" scoped>
.watchlist-item-delete {
  z-index: 2;
  top: 5px;
  right: 5px;

  padding: 1px 2.5px 0px 4.5px;
  color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);

  @include md {
    top: 10px;
    right: 10px;
    padding: 4px 7px 3px;
  }

  &:hover {
    color: white;
  }
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 80px -25px rgba(0, 0, 0, 0.5);
  transition: all 0.4s;
  border: 1px solid rgba(255, 255, 255, 0.6) !important;
}

.card-background {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding: 70% 0;

  @include md {
    padding: 65.8% 0;
  }
}

.card-img-box-shadow {
  box-shadow: rgba(178, 198, 206, 0.12) 0px 3px 4px 2px,
    rgba(174, 188, 194, 0.32) 0px 3px 15px 2px;
}

.card-img-border-adjusted {
  @include md {
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
}
</style>
