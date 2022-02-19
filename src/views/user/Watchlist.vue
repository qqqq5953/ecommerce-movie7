<template>
  <div class="bg-dark">
    <div class="container py-5 px-5 px-xl-0">
      <header>
        <div class="d-flex align-items-center">
          <i class="bi bi-bookmark-plus text-warning me-3 fs-4"></i>
          <h2 class="h1 text-white mb-0">watchlist</h2>
        </div>
      </header>
      <main class="py-4">
        <ul class="row flex-wrap list-unstyled mb-0">
          <li
            class="col-6 col-md-4 col-lg-3 mb-4"
            v-for="item in listProductsPerPage"
            :key="item.id"
          >
            <div
              class="card rounded-3 border-0 card-img-box-shadow h-100 position-relative"
            >
              <a
                href="#"
                @click.prevent="removeProductFromList(item.id)"
                class="position-absolute watchlist-item-delete d-block"
              >
                <i class="bi bi-x-lg d-none d-md-block"></i>
                <i class="bi bi-x d-md-none"></i>
              </a>
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
      </main>

      <PaginationForResults
        :totalPages="totalPages"
        :currentPage="currentPage"
        @change-page="setPagination"
        @previous-page="setPagination"
        @next-page="setPagination"
      ></PaginationForResults>
    </div>
  </div>
</template>

<script>
import PaginationForResults from '@/components/PaginationForResults.vue';

export default {
  components: {
    PaginationForResults
  },
  data() {
    return {
      key: '7bbe6005cfda593dc21cceb93eaf9a8e',
      baseImageUrl: 'https://image.tmdb.org/t/p/w300',
      list_id: '8191517',
      sessionID: 'd13bca7b7450c217c5af3127e3a0a984db98ccb2',
      listProductsPerPage: [],
      listProducts: [],
      listStatusMessage: '',
      products: [],
      productID: '',
      // test
      requestToken: '',
      approvedPageUrl: '',
      listResponse: '',
      listResponseMessage: '',
      listID: '',
      id: '646385',
      // pagination
      totalPages: undefined,
      currentPage: 1,
      perPage: 12
    };
  },
  methods: {
    async getList() {
      const api = `https://api.themoviedb.org/3/list/${this.list_id}?api_key=${this.key}&language=en-US`;

      const response = await this.$http.get(api).catch((err) => {
        console.log(err);
      });

      this.listProducts = response.data.items;

      // 設置分頁
      this.setPagination();
      console.log('getList', response);
    },
    setPagination(page = 1) {
      this.currentPage = page;

      // 設定總頁數、起訖頁
      this.totalPages = Math.ceil(this.listProducts.length / this.perPage);
      const startPage = this.currentPage * this.perPage - this.perPage;
      const endPage = startPage + this.perPage;

      this.listProductsPerPage = this.listProducts.slice(startPage, endPage);
    },
    // 跳轉頁面用
    async getAllProducts() {
      // api
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      const response = await this.$http.get(api).catch((err) => {
        console.log(err);
      });

      console.log('getAllProducts', response.data);
      this.products = response.data.products;
    },
    getProductID(id) {
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
      const api = `https://api.themoviedb.org/3/list/${this.list_id}/remove_item?api_key=${this.key}&session_id=${this.sessionID}`;

      const requestBody = {
        media_id: id
      };

      const response = await this.$http.post(api, requestBody).catch((err) => {
        console.log(err);
      });

      console.log('removeProductFromList', response);

      this.listStatusMessage = response.data.status_message;

      this.getList();
    },
    // test
    async getRequestToken() {
      // api
      const api = `https://api.themoviedb.org/3/authentication/token/new?api_key=${this.key}`;
      const response = await this.$http.get(api).catch((err) => {
        console.log(err);
      });

      console.log('getRequestToken', response);

      this.requestToken = response.data.request_token;
    },
    goToAuthentication() {
      this.approvedPageUrl = `https://www.themoviedb.org/authenticate/${this.requestToken}`;
    },
    async createSessionID() {
      // api
      const api = `https://api.themoviedb.org/3/authentication/session/new?api_key=${this.key}`;
      const requestBody = {
        request_token: this.requestToken
      };
      const response = await this.$http.post(api, requestBody).catch((err) => {
        console.log(err);
      });

      console.log('createSessionID', response);

      this.sessionID = response.data.session_id;
    },
    async createList() {
      const api = `https://api.themoviedb.org/3/list?api_key=${this.key}&session_id=${this.sessionID}`;

      const requestBody = {
        name: 'Test 1',
        description: 'Test 1',
        language: 'en'
      };

      const response = await this.$http.post(api, requestBody).catch((err) => {
        console.log(err);
      });

      this.listResponse = response.data.success;
      this.listResponseMessage = response.data.status_message;
      this.listID = response.data.list_code;
      console.log('createList', response);
    }
  },
  created() {
    this.getList();
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

  @media (min-width: 768px) {
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

  @media (min-width: 768px) {
    padding: 65.8% 0;
  }
}

.card-img-box-shadow {
  box-shadow: rgba(178, 198, 206, 0.12) 0px 3px 4px 2px,
    rgba(174, 188, 194, 0.32) 0px 3px 15px 2px;
}

.card-img-border-adjusted {
  @media (min-width: 768px) {
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
}
</style>
