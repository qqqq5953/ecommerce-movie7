<template>
  <Loading :active="isLoading"></Loading>
  <div class="container py-5 px-3 px-xl-0">
    <header>
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <i class="bi bi-ticket-perforated-fill text-warning me-3 fs-1"></i>
          <h2 class="h1 mb-0 text-primary">優惠券</h2>
        </div>
        <div class="text-end">
          <button
            type="button"
            class="btn btn-primary"
            @click="openCouponEditModal(true)"
          >
            新增優惠券
          </button>
        </div>
      </div>
    </header>

    <main class="table-responsive my-4">
      <table class="table align-middle">
        <thead>
          <tr>
            <th scope="col">名稱</th>
            <th scope="col">代碼</th>
            <th scope="col" class="text-end text-nowrap">折扣百分比</th>
            <th scope="col">到期日</th>
            <th scope="col" class="text-nowrap">是否套用</th>
            <th scope="col">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in coupons" :key="item.id">
            <th scope="row">{{ item.title }}</th>
            <td>{{ item.code }}</td>
            <td class="text-end">{{ item.percent }} %</td>
            <td>{{ $filters.date(item.due_date) }}</td>
            <td>
              <span class="text-success" v-if="item.is_enabled">啟用</span>
              <span class="text-muted" v-else>未啟用</span>
            </td>
            <td>
              <div class="btn-group btn-group-sm" role="group">
                <button
                  type="button"
                  class="btn btn-outline-primary text-nowrap"
                  @click="openCouponEditModal(false, item, pagination)"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger text-nowrap"
                  @click="openCouponDeleteModal(item, pagination)"
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
      @change-page="getCoupons"
      @previous-page="getCoupons"
      @next-page="getCoupons"
    ></Pagination>

    <CouponEditModal
      ref="couponEditModal"
      :coupon="tempCoupon"
      @update-coupon="updateCoupons"
    ></CouponEditModal>
    <CouponDeleteModal
      ref="couponDeleteModal"
      :coupon="tempDeleteCoupon"
      @delete-coupon="deleteCoupon"
    ></CouponDeleteModal>
  </div>
</template>

<script>
import CouponEditModal from '@/components/CouponEditModal.vue';
import CouponDeleteModal from '@/components/CouponDeleteModal.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    CouponEditModal,
    CouponDeleteModal,
    Pagination
  },
  inject: ['pushMessageStateForDashboard'],
  data() {
    return {
      coupons: [],
      pagination: {},
      tempCoupon: {},
      tempDeleteCoupon: {},
      isNew: false,
      isLoading: false
    };
  },
  methods: {
    openCouponDeleteModal(item, pagination) {
      this.tempDeleteCoupon = { ...item, ...pagination };
      this.$refs.couponDeleteModal.showModal();
    },
    async deleteCoupon(coupon) {
      // axios
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${coupon.id}`;
      const response = await this.$http
        .delete(api)
        .catch((err) => console.log(err));

      // 取得分頁資料
      const currentPage = coupon.current_page;

      // 重新渲染畫面
      await this.getCoupons(currentPage);

      // 關閉modal
      this.$refs.couponDeleteModal.hideModal();

      // toast
      this.pushMessageStateForDashboard(response, coupon, '刪除');
    },
    openCouponEditModal(isNew, item, pagination) {
      // 新增
      if (isNew) this.tempCoupon = {};

      // 編輯
      if (!isNew) {
        // 將日期轉換為YYYY-MM-DD
        const coupon = { ...item };
        const localDate = this.$filters.date(coupon.due_date);
        coupon.due_date = this.$filters.formatDate(localDate);
        this.tempCoupon = { ...coupon, ...pagination };
      }

      // 打開 modal
      this.$refs.couponEditModal.showModal();

      // 儲存modal狀態
      this.isNew = isNew;
    },
    async updateCoupons(coupon) {
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
      let httpMethod = 'post';

      // 編輯
      let currentPage;
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${coupon.id}`;
        httpMethod = 'put';

        // 取得分頁資料
        currentPage = coupon.current_page;
      }

      // API參數
      const couponDetail = {
        title: coupon.title,
        code: coupon.code,
        percent: coupon.percent,
        due_date: this.$filters.toUnixTimeStamp(coupon.due_date),
        is_enabled: coupon.is_enabled
      };

      // axios
      const response = await this.$http[httpMethod](api, {
        data: couponDetail
      }).catch((err) => console.log(err));

      // 重新渲染畫面
      await this.getCoupons(currentPage);

      // 關閉modal
      this.$refs.couponEditModal.hideModal();

      // toast
      this.pushMessageStateForDashboard(
        response,
        coupon,
        currentPage ? '更新' : '新增'
      );
    },
    async getCoupons(page) {
      this.isLoading = true;

      // axios
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      const response = await this.$http
        .get(api)
        .catch((err) => console.log(err));

      // 儲存回傳資料
      this.coupons = response.data.coupons;
      this.pagination = response.data.pagination;

      this.isLoading = false;
    }
  },
  created() {
    this.getCoupons();
  }
};
</script>
