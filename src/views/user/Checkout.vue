<template>
  <Loading :active="isLoading"></Loading>
  <div class="container py-5 px-3 px-md-4">
    <header>
      <div class="d-flex align-items-center">
        <i class="bi bi-cart-plus-fill text-warning me-3 fs-2"></i>
        <h2 class="h1 mb-0 text-primary">Checkout</h2>
      </div>
    </header>
    <main class="row justify-content-center">
      <form class="col-lg-9 col-xl-6" @submit="payOrder">
        <table class="table align-middle">
          <thead>
            <th class="px-2">Products</th>
            <th class="px-2">Duration</th>
            <th class="text-end px-2">Amount</th>
          </thead>
          <tbody>
            <tr v-for="item in order.products" :key="item.id">
              <td class="px-2">
                <span v-if="item.product.imageUrl">{{
                  item.product.title
                }}</span>
                <span
                  v-else
                  class="badge bg-primary fst-italic text-warning rounded-pill"
                  >Subscription</span
                >
              </td>
              <td class="px-2">{{ item.qty }} / {{ item.product.unit }}</td>
              <td class="text-end px-2">${{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" class="text-end px-2">Total:</td>
              <td class="text-end text-danger px-2">
                ${{ totalAmount.toFixed(2) || 0 }}
              </td>
            </tr>
          </tfoot>
        </table>

        <table class="table">
          <tbody>
            <tr>
              <th>Email</th>
              <td>{{ user.email }}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{{ user.name }}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{{ user.tel }}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{{ user.address }}</td>
            </tr>
            <tr>
              <th>Payment</th>
              <td>
                <span v-if="!order.is_paid" class="text-danger"
                  >Unconfirmed</span
                >
                <span v-else class="text-success">Confirmed</span>
              </td>
            </tr>
            <tr v-if="order.is_paid">
              <th>Order date</th>
              <td>
                <span class="text-success">{{
                  $filters.date(order.paid_date)
                }}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-end">
          <button v-if="!order.is_paid" class="btn btn-warning" type="submit">
            Checkout
          </button>
          <router-link v-else class="btn btn-primary" :to="{ name: 'UserCMDB' }"
            >Continue shopping<i class="bi bi-arrow-right ms-2"></i
          ></router-link>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderId: '',
      order: {},
      user: {},
      isLoading: false
    };
  },
  computed: {
    totalAmount() {
      const total = [];

      for (const key of Object.keys({ ...this.order.products })) {
        total.push(this.order.products[key].final_total);
      }

      const finalTotal = total.reduce((total, item) => {
        return total + item;
      }, 0);

      return finalTotal;
    }
  },
  methods: {
    async payOrder() {
      // axios
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      const response = await this.$http
        .post(api)
        .catch((err) => console.log(err));

      // 重新渲染畫面
      this.getOrder();

      console.log('payOrder', response);
    },
    async getOrder() {
      this.isLoading = true;

      // axios
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      const response = await this.$http
        .get(api)
        .catch((err) => console.log(err));

      // 儲存回傳資料
      this.order = response.data.order;
      this.user = response.data.order.user;

      this.isLoading = false;
      console.log('getOrder', response);
      console.log('this.order', this.order);
      console.log('this.user', this.user);
    }
  },
  async created() {
    this.orderId = this.$route.params.orderID;
    await this.getOrder();
  }
};
</script>
