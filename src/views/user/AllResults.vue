<template>
  <Loading :active="isLoading"></Loading>
  <div class="bg-dark">
    <div class="container py-5 px-5 px-xl-0">
      <div class="row justify-content-center mb-5">
        <div class="col-xl-9">
          <header>
            <div class="d-flex align-items-center">
              <i
                class="bi bi-film text-warning me-3 fs-3 d-none d-md-inline-block"
              ></i>
              <h2 class="h1 mb-0 text-white">
                {{ allProducts.length }} results for:
                <span class="text-warning">{{ genrePassIn }}</span>
              </h2>
            </div>
          </header>
          <main class="py-4">
            <ul class="list-unstyled">
              <li class="mb-4" v-for="item in products" :key="item.id">
                <a
                  href="#"
                  class="text-decoration-none d-block"
                  @click.prevent="getProductDetails(item.id)"
                >
                  <CardHorizontal :product="item"></CardHorizontal>
                </a>
              </li>
            </ul>
          </main>

          <PaginationForUser
            :totalPages="totalPages"
            :currentPage="currentPage"
            @change-page="setPagination"
            @previous-page="setPagination"
            @next-page="setPagination"
          ></PaginationForUser>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaginationForUser from '@/components/PaginationForUser.vue';
import CardHorizontal from '@/components/CardHorizontal.vue';

export default {
  props: {
    genre: {
      type: String
    }
  },
  components: {
    PaginationForUser,
    CardHorizontal
  },
  inject: ['emitter', 'sortData'],
  data() {
    return {
      allProducts: [],
      products: [],
      isLoading: false,
      pagination: {},
      genrePassIn: '',
      // pagination
      totalPages: undefined,
      currentPage: 1,
      perPage: 6
    };
  },
  computed: {
    queriesChange() {
      return this.$route.params.genre;
    }
  },
  watch: {
    queriesChange(newVal) {
      const newGenre = newVal;

      // 防止跳回首頁會更新資料
      if (this.$route.name === 'AllResults') {
        this.genrePassIn = newGenre.toLowerCase();
        this.getAllProducts();
      }
    }
  },
  methods: {
    async getAllProducts() {
      this.isLoading = true;

      // api
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      const response = await this.$http.get(api).catch((err) => {
        console.log(err);
      });

      // 根據不同 Genre 決定 allProducts 資料內容
      this.allProducts = this.classifyGenre(response);

      // 照熱門度分類
      this.allProducts = this.sortData(this.allProducts, 'content');

      // 設定分頁
      this.setPagination();

      this.isLoading = false;
    },
    classifyGenre(response) {
      let tempProduct = [];

      // 排除訂閱的類型（重要）
      tempProduct = response.data.products.filter((item) => {
        return item.category !== 'Subscription';
      });

      if (this.genrePassIn === 'nowplaying') {
        // 首頁傳來為 NowPlaying
        tempProduct = tempProduct.filter((item) => {
          const genre = item.category.split('|')[1];
          return genre === 'nowplaying';
        });
      } else if (this.genrePassIn === 'upcoming') {
        // 首頁傳來為 Upcoming
        tempProduct = tempProduct.filter((item) => {
          const genre = item.category.split('|')[1];
          return genre === 'upcoming';
        });
      } else {
        // see all results
        tempProduct = tempProduct.filter((item) => {
          return item.title
            .split('-')
            .join(' ')
            .toUpperCase()
            .match(this.genrePassIn.toUpperCase());
        });
      }

      return tempProduct;
    },
    setPagination(page = 1) {
      this.currentPage = page;

      // 設定總頁數、起訖頁
      this.totalPages = Math.ceil(this.allProducts.length / this.perPage);
      const startPage = this.currentPage * this.perPage - this.perPage;
      const endPage = startPage + this.perPage;

      this.products = this.allProducts.slice(startPage, endPage);

      // 畫面滾動至最上方
      window.scrollTo(0, -1000);
    },
    getProductDetails(id) {
      this.$router.push({ name: 'Product', params: { productID: id } });
    }
  },
  created() {
    // 畫面滾動至最上方
    window.scrollTo(0, -1000);

    this.genrePassIn = this.$route.params.genre;
    this.getAllProducts();
  }
};
</script>

<style lang="scss" scoped>
.movie-card {
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 0px 120px -20px rgba(0, 0, 0, 0.5);
  box-shadow: -6px 0px 50px -30px rgba(255, 255, 255, 0.8);

  &:hover {
    transform: scale(1.02);
    // box-shadow: 0px 0px 80px -25px rgba(0, 0, 0, 0.5);
    box-shadow: -6px 0px 55px -30px rgba(255, 255, 255, 1);
    transition: all 0.4s;
  }

  .badge-mobile {
    z-index: 2;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8.5px);
    -webkit-backdrop-filter: blur(8.5px);
  }

  .info_section {
    background-blend-mode: multiply;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: linear-gradient(to top, #e5e6e6 45%, transparent 100%);

    @media (min-width: 992px) {
      background: linear-gradient(
        to right,
        rgba(229, 230, 230, 1) 50%,
        transparent 83%
      );
    }

    .info_section_width {
      width: 100%;

      @media (min-width: 992px) {
        width: 60%;
      }
    }

    .card-header-wrapper {
      margin-top: 65px;
      background: rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(3px);

      @media (min-width: 576px) {
        margin-top: 85px;
      }

      @media (min-width: 992px) {
        margin-top: 0;
        background: none;
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
      }
    }

    .card-img-top-adjusted {
      object-fit: cover;
      object-position: center center;
      aspect-ratio: 2 / 3;
      max-height: 250px;
    }
  }

  .backdrop_image {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    top: 0;
    right: 0;
    z-index: 1;
    height: 100%;
    width: 100%;

    @media (min-width: 992px) {
      position: absolute;
      background-repeat: no-repeat;
      background-size: cover;
      top: 0;
      right: 0;
      z-index: 1;
      height: 100%;
      width: 80%;
    }
  }
}

.card-text {
  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  span:hover {
    color: #f0ad4e;
    font-weight: bold;
  }
}
</style>
