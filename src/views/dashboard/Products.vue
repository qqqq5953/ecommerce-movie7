<template>
  <Loading :active="isLoading"></Loading>
  <div class="container py-5 px-3 px-xl-0">
    <header>
      <div class="d-flex align-items-center mb-2">
        <i class="bi bi-box-seam text-warning me-3 fs-1"></i>
        <h2 class="h1 mb-0 text-primary">產品列表</h2>
        <button
          type="button"
          class="btn btn-dark ms-auto"
          @click="openModal(true)"
        >
          新增產品
        </button>
      </div>
      <div class="row">
        <div class="col-12 my-2">
          <!-- alert -->
          <div
            class="alert alert-danger alert-dismissible fade show d-flex align-items-center"
            role="alert"
            v-if="isLoading && processingCount"
          >
            <i class="bi bi-exclamation-triangle me-3"></i>
            <div>處理中: {{ processingCount }}</div>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-12 col-lg my-2">
          <button
            type="button"
            class="btn btn-outline-dark btn-sm h-100 w-100 rounded-pill"
            @click="toggleDisableButton"
          >
            切換按鈕狀態：
            <span :class="{ 'text-danger': !disableBtn }">{{
              disableBtn ? '關' : '開'
            }}</span>
          </button>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg my-2">
          <button
            type="button"
            class="btn btn-outline-dark btn-sm h-100 w-100"
            :disabled="disableBtn"
            @click="getNowPlaying"
          >
            快速新增 NowPlaying
          </button>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg my-2">
          <button
            type="button"
            class="btn btn-outline-dark btn-sm h-100 w-100"
            :disabled="disableBtn"
            @click="getUpcoming"
          >
            快速新增 upComing
          </button>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg my-2">
          <button
            type="button"
            class="btn btn-outline-danger btn-sm h-100 w-100"
            :disabled="disableBtn"
            @click="deleteAllProducts"
          >
            刪除全部 (訂閱除外)
          </button>
        </div>
      </div>
    </header>
    <!-- table -->
    <main class="table-responsive mb-4 mt-2">
      <table class="table align-middle">
        <thead>
          <tr>
            <th scope="col">產品名稱</th>
            <th scope="col">分類</th>
            <th scope="col" class="text-end text-nowrap">原價</th>
            <th scope="col" class="text-end text-nowrap">售價</th>
            <th scope="col" class="text-nowrap">是否啟用</th>
            <th scope="col">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{ item.title }}</td>
            <th scope="row">{{ item.category }}</th>
            <td class="text-end">${{ item.origin_price.toFixed(2) }}</td>
            <td class="text-end">${{ item.price.toFixed(2) }}</td>
            <td>
              <span class="text-success" v-if="item.is_enabled">啟用</span>
              <span class="text-muted" v-else>未啟用</span>
            </td>
            <td>
              <div class="btn-group btn-group-sm" role="group">
                <button
                  type="button"
                  class="btn btn-outline-primary text-nowrap"
                  @click="openModal(false, item, pagination)"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger text-nowrap"
                  :disabled="item.title.toLowerCase() === 'subscription'"
                  @click="openDeleteModal(item, pagination)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </main>

    <Pagination
      :pages="pagination"
      @change-page="getProducts"
      @previous-page="getProducts"
      @next-page="getProducts"
    ></Pagination>
    <EditModal
      ref="editModal"
      :product="tempProduct"
      @update-product="updateProduct"
    ></EditModal>
    <DeleteModal
      :product="tempDeleteProduct"
      @delete-product="deleteProduct"
      ref="deleteModal"
    ></DeleteModal>
  </div>
</template>

<script>
import EditModal from '@/components/EditModal.vue';
import DeleteModal from '@/components/DeleteModal.vue';
import Pagination from '@/components/Pagination.vue';
export default {
  components: {
    EditModal,
    DeleteModal,
    Pagination
  },
  inject: [
    'emitter',
    'pushMessageStateForDashboard',
    'pushMessageStateForUser',
    'sortData'
  ],
  data() {
    return {
      allProducts: [],
      products: [],
      pagination: {},
      tempProduct: {},
      tempDeleteProduct: {},
      processingCount: 0,
      isNew: false,
      isLoading: false,
      disableBtn: true,
      // CMDB
      top20nowPlaying: [],
      top20upComing: [],
      language: 'en-US',
      region: 'US',
      baseImageUrl: 'https://image.tmdb.org/t/p/w300'
    };
  },
  methods: {
    getTodayDate() {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const yyyy = today.getFullYear();
      return yyyy + '-' + mm + '-' + dd;
    },
    /// 新增 NowPlaying
    async getNowPlaying() {
      this.isLoading = true;
      this.processingCount = 0;

      const response = await this.$http
        .get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.VUE_APP_KEY}&language=${this.language}&region=${this.region}&page=1`
        )
        .catch((err) => {
          console.log(err);
        });

      const totalPages = response.data.total_pages;

      let allData;
      if (totalPages > 1) {
        allData = await this.getAllNowPlayingData();
      } else {
        allData = response.data.results;
      }

      // 篩選出今天日期以前的電影
      const todayDate = this.getTodayDate();
      const filterDate = allData.filter((item) => {
        return new Date(item.release_date) <= new Date(todayDate);
      });

      // 取前 20 (如果 filterDate 超過 20 筆)
      this.top20nowPlaying = filterDate.slice(0, 20);

      // 快速新增產品
      await this.addManyProducts(this.top20nowPlaying, 20, 'nowplaying');

      this.isLoading = false;

      // 重新渲染畫面
      await this.getProducts();
    },
    async getAllNowPlayingData() {
      const temp = [];
      for (let page = 1; page <= 2; page++) {
        const response = await this.$http
          .get(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.VUE_APP_KEY}&language=${this.language}&region=${this.region}&page=${page}`
          )
          .catch((err) => {
            console.log(err);
          });

        response.data.results.forEach((item) => {
          temp.push(item);
        });
      }
      return temp;
    },
    /// 新增 getUpcoming
    async getUpcoming() {
      this.isLoading = true;
      this.processingCount = 0;

      const response = await this.$http.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.VUE_APP_KEY}&language=${this.language}&region=${this.region}&page=1`
      );

      // 獲得所有資料
      const totalPages = response.data.total_pages;
      const allData = await this.getAllUpComingData(totalPages).catch((err) => {
        console.log(err);
      });

      // 獲得今天日期
      const todayDate = this.getTodayDate();

      // 篩選出今天日期以後的電影
      const filterDate = allData.filter((item) => {
        return new Date(item.release_date) >= new Date(todayDate);
      });

      // 取前 20 (如果 filterDate 超過 20 筆)
      this.top20upComing = filterDate.slice(0, 20);

      // 快速新增產品
      await this.addManyProducts(this.top20upComing, 20, 'upcoming');

      this.isLoading = false;

      // 重新渲染畫面
      await this.getProducts();
    },
    async getAllUpComingData(totalPages) {
      const temp = [];
      for (let page = 1; page <= totalPages; page++) {
        const response = await this.$http.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.VUE_APP_KEY}&language=${this.language}&region=${this.region}&page=${page}`
        );

        response.data.results.forEach((item) => {
          temp.push(item);
        });
      }
      return temp;
    },
    /// 快速新增多樣產品
    async addManyProducts(top20Array, length, genre) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;

      for (let i = 0; i < length; i++) {
        this.tempProduct = {};
        this.tempProduct.title = top20Array[i].title;
        this.tempProduct.category = `movie|${genre}`;
        this.tempProduct.origin_price = 1.99;
        this.tempProduct.price = 0.99;
        this.tempProduct.unit = 'week';
        this.tempProduct.description = top20Array[i].overview;
        this.tempProduct.is_enabled = true;

        // 判斷是否有背景圖
        if (top20Array[i].backdrop_path) {
          this.tempProduct.imageUrl = [
            this.baseImageUrl + top20Array[i].poster_path,
            this.baseImageUrl + top20Array[i].backdrop_path
          ];
        } else {
          this.tempProduct.imageUrl = [
            this.baseImageUrl + top20Array[i].poster_path
          ];
        }

        // 透過content傳送其餘資料
        this.tempProduct.content = `${top20Array[i].id}|${top20Array[i].popularity}|${top20Array[i].release_date}`;

        await this.$http
          .post(api, {
            data: this.tempProduct
          })
          .catch((err) => {
            console.log(err);
          });

        this.processingCount += 1;
      }
    },
    /// 取得產品列表
    async getProducts(page) {
      this.isLoading = true;

      // axios
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      const response = await this.$http.get(api).catch((err) => {
        console.log(err);
      });

      // 儲存回傳資料
      this.products = response.data.products;
      this.pagination = response.data.pagination;

      this.isLoading = false;
    },
    /// 更新產品
    async updateProduct(item) {
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = 'post';

      // 編輯
      let currentPage;
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = 'put';

        // 存取當前頁面
        currentPage = item.pagination.current_page;
      }

      // 刪除 pagination 這個 key
      delete item.pagination;

      // item 存進 tempProduct（API參數）
      this.tempProduct = item;

      // axios
      const response = await this.$http[httpMethod](api, {
        data: this.tempProduct
      }).catch((err) => {
        console.log(err);
      });

      // 重新渲染畫面
      await this.getProducts(currentPage);

      // 關閉modal
      this.$refs.editModal.hideModal();

      // toast
      this.pushMessageStateForDashboard(
        response,
        item,
        currentPage ? '更新' : '新增'
      );
    },
    /// 快速刪除 全部產品
    async deleteAllProducts() {
      this.isLoading = true;
      this.processingCount = 0;

      await this.getAllProducts();

      let response;
      for (let i = 0; i < this.allProducts.length; i++) {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.allProducts[i].id}`;

        if (this.allProducts[i].category.toUpperCase() === 'SUBSCRIPTION') {
          continue;
        } else {
          response = await this.$http.delete(api).catch((err) => {
            console.log(err);
          });
          this.processingCount += 1;
        }
      }

      this.isLoading = false;

      // 重新render畫面
      await this.getProducts();

      // toast
      this.pushMessageStateForUser(response, '全品項', '刪除');
    },
    async getAllProducts() {
      // api
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      const response = await this.$http.get(api).catch((err) => {
        console.log(err);
      });

      // 儲存資料
      this.allProducts = response.data.products;
    },
    /// 刪除 單一產品
    async deleteProduct(item) {
      // axios
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
      const response = await this.$http.delete(api).catch((err) => {
        console.log(err);
      });

      // 重新渲染畫面
      await this.getProducts(item.current_page);

      // 關閉modal
      this.$refs.deleteModal.hideModal();

      // toast
      this.pushMessageStateForDashboard(response, item, '刪除');
    },
    /// Modal
    openModal(isNew, item, pagination) {
      // 新增
      if (isNew) this.tempProduct = {};

      // 編輯
      this.tempProduct = { ...item, pagination };

      // 打開 modal
      this.$refs.editModal.showModal();

      // 儲存modal狀態
      this.isNew = isNew;
    },
    openDeleteModal(item, pagination) {
      this.tempDeleteProduct = { ...item, ...pagination };
      this.$refs.deleteModal.showModal();
    },
    toggleDisableButton() {
      this.disableBtn = !this.disableBtn;
    }
  },
  created() {
    this.getProducts();
    this.getAllProducts();
  }
};
</script>
