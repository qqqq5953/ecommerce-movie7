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
                  <CardHorizontal :product="item">
                    <!-- badge for mobile for upcoming movie-->
                    <template #badge-for-mobile="{ itemForBadge }">
                      <div
                        v-if="
                          itemForBadge.category.split('|')[1] === 'upcoming'
                        "
                        class="position-absolute end-0 badge badge-mobile rounded-pill mt-3 me-3 text-warning fst-italic d-sm-none"
                      >
                        {{ itemForBadge.category.split('|')[1] }}
                      </div>
                    </template>
                    <!-- badge for pad 以上 for upcoming movie-->
                    <template #badge-for-mobile-above="{ itemForBadge }">
                      <div
                        v-if="
                          itemForBadge.category.split('|')[1] === 'upcoming'
                        "
                        class="badge bg-primary rounded-pill text-warning fst-italic d-none d-sm-inline-block"
                      >
                        {{ itemForBadge.category.split('|')[1] }}
                      </div>
                    </template>
                  </CardHorizontal>
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
      // pagination
      totalPages: undefined,
      currentPage: 1,
      perPage: 6
    };
  },
  methods: {
    async getAllProducts() {
      // api
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      const response = await this.$http.get(api).catch((err) => {
        console.log(err);
      });

      // 儲存資料
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

    this.getAllProducts();
  }
};
</script>

<style lang="scss" scoped>
.badge-mobile {
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
}
</style>
