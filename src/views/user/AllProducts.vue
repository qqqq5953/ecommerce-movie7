<template>
  <Loading :active="isLoading"></Loading>
  <div class="bg-dark">
    <div class="container py-5 px-5 px-xl-0">
      <div class="row justify-content-center mb-5">
        <div class="col-xl-9">
          <header>
            <div class="d-flex align-items-center">
              <i class="bi bi-play-btn-fill text-warning me-3 fs-2"></i>
              <h2 class="h1 mb-0 text-white">Our Movies</h2>
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
                    <!-- badge-mobile -->
                    <div
                      v-if="item.category.split('|')[1] === 'upcoming'"
                      class="position-absolute end-0 badge badge-mobile bg-primary rounded-pill mt-3 me-3 text-warning fst-italic d-sm-none"
                    >
                      {{ item.category.split('|')[1] }}
                    </div>
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
                            <div
                              v-if="item.category.split('|')[1] === 'upcoming'"
                              class="badge bg-primary rounded-pill text-warning fst-italic d-none d-sm-inline-block"
                            >
                              {{ item.category.split('|')[1] }}
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
      // pagination
      totalPages: undefined,
      currentPage: 1,
      perPage: 6
      // genrePassIn: ''
    };
  },
  methods: {
    async getProducts(page = 1) {
      this.isLoading = true;

      // api
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      const response = await this.$http.get(api).catch((err) => {
        console.log(err);
      });

      // 資料存入
      this.pagination = response.data.pagination;
      this.products = response.data.products;

      this.products.reverse();
      // this.products = this.sortData(this.products, 'content.split[1]');

      this.isLoading = false;
      console.log('res', response.data);
    },
    async getAllProducts() {
      // api
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      const response = await this.$http.get(api).catch((err) => {
        console.log(err);
      });

      console.log('getAllProducts', response);

      // 儲存資料並
      this.allProducts = response.data.products;

      // 排除訂閱的類型（重要）
      this.allProducts = this.allProducts.filter((item) => {
        return item.category !== 'Subscription';
      });

      // 照熱門度分類
      this.allProducts = this.sortData(this.allProducts, 'content');

      // 設置分頁
      this.setPagination();
    },
    setPagination(page = 1) {
      this.currentPage = page;

      // 設定總頁數、起訖頁
      this.totalPages = Math.ceil(this.allProducts.length / this.perPage);
      const startPage = this.currentPage * this.perPage - this.perPage;
      const endPage = startPage + this.perPage;

      this.products = this.allProducts.slice(startPage, endPage);
    },
    getProductDetails(id) {
      this.$router.push({ name: 'Product', params: { productID: id } });
    }
  },
  created() {
    window.scrollTo(0, -1000);

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
    text-decoration: underline;
    font-weight: bold;
  }
}
</style>
