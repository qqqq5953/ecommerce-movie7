<template>
  <Loading :active="isLoading"></Loading>
  <div class="container py-5 px-3 px-xl-0">
    <header>
      <div class="d-flex align-items-center">
        <i class="bi bi-card-checklist text-warning me-3 fs-1"></i>
        <h2 class="h1 mb-0 text-primary">訂單</h2>
      </div>
    </header>
    <main class="table-responsive my-4">
      <table class="table align-middle">
        <thead>
          <tr>
            <th scope="col">購買時間</th>
            <th scope="col">Email</th>
            <th scope="col">購買品項</th>
            <th scope="col" class="text-end text-nowrap">應付金額</th>
            <th scope="col" class="text-nowrap">是否付款</th>
            <th scope="col">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <th scope="row">{{ $filters.date(order.paid_date) }}</th>
            <td>{{ order.user.email }}</td>
            <td>
              <ul>
                <li v-for="item in order.products" :key="item.id">
                  {{ item.product.title }}
                </li>
              </ul>
            </td>
            <td class="text-end" v-if="order.total">
              {{ order.total.toFixed(2) }}
            </td>
            <td>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  :checked="order.is_paid"
                  disabled
                />
                <label
                  class="form-check-label text-nowrap text-success fw-bold"
                  for="flexSwitchCheckChecked"
                  v-if="order.is_paid"
                  >已付款</label
                >
                <label
                  class="form-check-label text-nowrap text-muted fw-bold"
                  for="flexSwitchCheckChecked"
                  v-else
                  >未付款</label
                >
              </div>
            </td>
            <td>
              <div class="btn-group btn-group-sm" role="group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-primary text-nowrap"
                  @click="openOrderModal(order)"
                >
                  檢視
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-danger text-nowrap"
                  @click="openOrderDeleteModal(order, pagination)"
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
      @change-page="getOrders"
      @previous-page="getOrders"
      @next-page="getOrders"
    ></Pagination>
    <OrderEditModal ref="orderEditModal" :order="tempOrder"></OrderEditModal>
    <OrderDeleteModal
      ref="orderDeleteModal"
      :order="tempDeleteOrder"
      @delete-order="deleteOrder"
    ></OrderDeleteModal>
  </div>
</template>

<script>
import OrderEditModal from '@/components/OrderEditModal.vue';
import OrderDeleteModal from '@/components/OrderDeleteModal.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    OrderEditModal,
    OrderDeleteModal,
    Pagination
  },
  inject: ['pushMessageStateForDashboard'],
  data() {
    return {
      isLoading: false,
      tempOrder: {},
      tempDeleteOrder: {},
      orders: [],
      pagination: {}
    };
  },
  methods: {
    openOrderModal(order) {
      this.tempOrder = order;
      this.$refs.orderEditModal.showModal();
    },
    openOrderDeleteModal(order, pagination) {
      this.tempDeleteOrder = { ...order, ...pagination };
      this.$refs.orderDeleteModal.showModal();
    },
    async deleteOrder(order) {
      try {
        // axios
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${order.id}`;
        const response = await this.$http.delete(api);

        // 取得分頁資料
        const currentPage = order.current_page;

        // 重新渲染畫面
        this.getOrders(currentPage);

        // 關閉modal
        this.$refs.orderDeleteModal.hideModal();

        // toast
        this.pushMessageStateForDashboard(response, order, '刪除');
      } catch (err) {}
    },
    async getOrders(page) {
      try {
        this.isLoading = true;

        // axios
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
        const response = await this.$http.get(api);

        // 儲存回傳資料
        this.orders = response.data.orders;
        this.pagination = response.data.pagination;

        this.isLoading = false;
      } catch (err) {
        console.log(err);
      }
    }
  },
  created() {
    this.getOrders();
  }
};
</script>
