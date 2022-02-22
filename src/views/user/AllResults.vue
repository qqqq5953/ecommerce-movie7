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
                  <!-- card -->
                  <div class="position-relative movie-card">
                    <!-- backdrop_image -->
                    <div
                      class="position-absolute backdrop_image"
                      :style="{ backgroundImage: `url(${item.imageUrl[1]})` }"
                    ></div>
                    <div class="position-relative info_section">
                      <div class="info_section_width px-4 py-3 py-lg-4">
                        <!-- card-header -->
                        <div class="row card-header-wrapper">
                          <div class="col-4 col-md-2 col-lg-3">
                            <img
                              v-if="item.imageUrl[0]"
                              :src="item.imageUrl[0]"
                              class="card-img-top card-img-top-adjusted img-fluid d-block"
                              :alt="item.title"
                            />
                          </div>
                          <div class="col-8 col-md-10 col-lg-9">
                            <h4 class="card-title mb-0 d-sm-none">
                              {{ item.title }}
                            </h4>
                            <h3 class="card-title mb-0 d-none d-sm-block">
                              {{ item.title }}
                            </h3>
                            <div class="fs-6">
                              <small class="d-inline-block">{{
                                item.content.split('|')[2]
                              }}</small>
                              <span class="d-none d-sm-inline-block mx-2 fs-5"
                                >|</span
                              >
                              <small class="d-inline-block"
                                >Popularity:
                                <span>{{
                                  parseFloat(
                                    item.content.split('|')[1]
                                  ).toFixed(0)
                                }}</span></small
                              >
                            </div>
                          </div>
                        </div>
                        <!-- card-body -->
                        <div class="row my-4 mt-md-4 mb-md-0 mt-lg-3">
                          <div class="col-12">
                            <div class="card-text d-flex flex-column">
                              <p class="lh-sm">{{ item.description }}</p>

                              <div class="text-end mt-auto px-2">
                                <span> &#171; see more &#187;</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
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
    </div>
  </div>
</template>

<script>
import PaginationForResults from '@/components/PaginationForResults.vue';

export default {
  props: {
    genre: {
      type: String
    }
  },
  components: {
    PaginationForResults
  },
  inject: ['emitter', 'sortData'],
  data() {
    return {
      allProducts: [],
      products: [],
      cart: [],
      status: {
        loadingItemsID: ''
      },
      isLoading: false,
      baseImageUrl: 'https://image.tmdb.org/t/p/w200',
      key: '7bbe6005cfda593dc21cceb93eaf9a8e',
      pagination: {},
      genrePassIn: '',
      slicePages: undefined,
      totalPages: undefined,
      currentPage: 1,
      perPage: 3,
      lastPage: undefined
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
    setMaxViewButtons() {
      if (this.currentPage === 1 && this.totalPages === 1) {
        this.slicePages = [1];
        console.log('第一頁，共一頁');
      }
      if (this.currentPage === 1 && this.totalPages !== 1) {
        this.slicePages = [
          this.currentPage,
          this.currentPage + 1,
          this.currentPage + 2
        ];
        console.log('第一頁，不只一頁');
      }
      if (this.currentPage !== 1 && this.currentPage !== this.totalPages) {
        this.slicePages = [
          this.currentPage - 1,
          this.currentPage,
          this.currentPage + 1
        ];
        console.log('在中間頁');
      }
      if (this.currentPage !== 1 && this.currentPage === this.totalPages) {
        this.slicePages = [
          this.totalPages - 2,
          this.totalPages - 1,
          this.totalPages
        ];
        console.log('在最後一頁');
      }
      this.lastPage = this.slicePages[this.slicePages.length - 1];
    },
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
      console.log('getAllProducts', response.data);
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

        console.log('nowplaying', this.allProducts);
      } else if (this.genrePassIn === 'upcoming') {
        // 首頁傳來為 Upcoming
        tempProduct = tempProduct.filter((item) => {
          const genre = item.category.split('|')[1];
          return genre === 'upcoming';
        });

        console.log('upcoming', this.allProducts);
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
    display: inline-grid;

    @media (min-width: 992px) {
      background: linear-gradient(to right, #e5e6e6 50%, transparent 90%);
    }

    .info_section_width {
      width: 100%;

      @media (min-width: 992px) {
        width: 60%;
      }
    }

    .card-header-wrapper {
      margin-top: 65px;

      @media (min-width: 576px) {
        margin-top: 85px;
      }

      @media (min-width: 992px) {
        margin-top: 0;
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

    @media (min-width: 768px) {
    }

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
