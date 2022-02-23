<template>
  <div class="container py-5 px-5 px-xl-0">
    <header>
      <div
        class="d-flex align-items-center justify-content-center justify-content-sm-start"
      >
        <i
          class="bi bi-columns-gap text-warning me-3 fs-2 d-none d-sm-inline-block"
        ></i>
        <h2 class="h1 mb-0">Pricing</h2>
      </div>
    </header>

    <main class="py-4">
      <ul class="row row-cols-1 row-cols-lg-3 mb-5 text-center list-unstyled">
        <!-- FREE -->
        <li class="col mb-4 mb-lg-0">
          <div class="card mb-4 rounded-3 shadow-sm h-100">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">Free</h4>
            </div>
            <div class="card-body d-flex flex-column">
              <h1 class="card-title pricing-card-title">
                NT$0<small class="text-muted fw-light">/month</small>
              </h1>
              <ul class="mt-3 mb-4 text-start">
                <li class="mb-3">Unlimited access to details of Movies</li>
                <li class="mb-3">10 quotas for Watchlist</li>
              </ul>
              <router-link
                :to="{ name: 'AllProducts' }"
                class="w-100 btn btn-outline-primary mt-auto mb-2"
                >See our products</router-link
              >
            </div>
          </div>
        </li>

        <!-- Rent -->
        <li class="col mb-4 mb-lg-0">
          <div class="card mb-4 rounded-3 shadow-sm h-100">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">Rent a disc</h4>
            </div>
            <div class="card-body d-flex flex-column">
              <h1 class="card-title pricing-card-title">
                $0.99<small class="text-muted fw-light">/week</small>
              </h1>
              <ul class="mt-3 mb-4 text-start">
                <li class="mb-3">Unlimited access to details of Movies</li>
                <li class="mb-3">50 quotas for Watchlist</li>
                <li class="mb-3">
                  Enjoy the rented Movies with
                  <strong class="fw-bold">HD</strong> quality
                </li>
                <li>Access to rating the rented Movies</li>
                <li>Watch on 1 screen only</li>
              </ul>
              <router-link
                :to="{ name: 'AllProducts' }"
                class="w-100 btn btn-outline-primary mt-auto mb-2"
                >Pick a movie</router-link
              >
            </div>
          </div>
        </li>
        <!-- SUBSCRIPTION -->
        <li class="col">
          <div class="card mb-4 rounded-3 shadow-sm border-primary h-100">
            <div class="card-header py-3 bg-primary border-primary">
              <h4 class="my-0 fw-normal text-white">SUBSCRIPTION</h4>
            </div>
            <div class="card-body d-flex flex-column">
              <h1 class="card-title pricing-card-title">
                $9.99<small class="text-muted fw-light">/month</small>
              </h1>
              <ul class="mt-3 mb-4 text-start">
                <li class="mb-3">Unlimited access to details of Movies</li>
                <li class="mb-3">50 quotas for Watchlist</li>
                <li class="mb-3">
                  Enjoy
                  <strong class="fw-bold">ALL</strong> Movies with
                  <strong class="fw-bold">4K</strong> quality
                </li>
                <li class="mb-3">
                  Unlimited access to rating
                  <strong class="fw-bold">ALL</strong>
                  Movies
                </li>
                <li>
                  Watch on <strong class="fw-bold">2</strong> screens at the
                  same time
                </li>
                <li>
                  Receive seasonal promotions up to
                  <strong class="fw-bold">20% DISCOUNT</strong>
                </li>
              </ul>
              <button
                type="button"
                class="btn btn-primary border border-primary mt-auto mb-2 w-100"
                :disabled="status.loadingProductID === subscriptionID"
                @click="addProductToCart(subscriptionID)"
                v-if="!isSubscriptionInCart"
              >
                <span
                  class="spinner-border spinner-grow-sm"
                  v-if="status.loadingProductID === subscriptionID"
                ></span>

                <span>SUBSCRIBE NOW</span>
              </button>
              <div v-else class="mt-auto">
                <div class="text-muted">SUBSCRIBED !</div>
                <router-link
                  :to="{ name: 'Cart' }"
                  class="w-100 btn btn-warning mt-2 mb-2 border border-warning border-2"
                >
                  <span class="text-light">View my cart</span>
                </router-link>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div
        class="d-flex align-items-center justify-content-center justify-content-sm-start"
      >
        <i
          class="bi bi-columns-gap text-warning me-3 fs-2 d-none d-sm-inline-block"
        ></i>
        <h2 class="h1 mb-0">Compare plans</h2>
      </div>
      <div class="table-responsive">
        <table class="table text-center align-middle">
          <thead>
            <tr>
              <th style="width: 34%"></th>
              <th style="width: 22%">Free</th>
              <th style="width: 22%">Rent</th>
              <th style="width: 22%">SUBSCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" class="text-start">Content Details</th>
              <td>
                <i class="bi bi-check2 fs-4"></i>
              </td>
              <td>
                <i class="bi bi-check2 fs-4"></i>
              </td>
              <td>
                <i class="bi bi-check2 fs-4"></i>
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-start">Watchlist</th>
              <td>
                <i class="bi bi-check2 fs-4"></i>
              </td>
              <td>
                <i class="bi bi-check2 fs-4"></i>
              </td>
              <td>
                <i class="bi bi-check2 fs-4"></i>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <th scope="row" class="text-start">Quality</th>
              <td></td>
              <td>HD</td>
              <td>4K</td>
            </tr>
            <tr>
              <th scope="row" class="text-start">Rating</th>
              <td></td>
              <td>
                <i class="bi bi-check2 fs-4"></i>
                <div>(Limited)</div>
              </td>
              <td>
                <i class="bi bi-check2 fs-4"></i>
                <div>(Unlimited)</div>
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-start">Discount</th>
              <td></td>
              <td></td>
              <td>
                <i class="bi bi-check2 fs-4"></i>
                <div>(Up to 20%)</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';

export default {
  data() {
    return {
      status: {
        loadingProductID: ''
      },
      isSubscriptionInCart: false
    };
  },
  computed: {
    subscriptionID() {
      return process.env.VUE_APP_SUBSCRIPTION_ID;
    }
  },
  methods: {
    async addProductToCart(id) {
      // spinner on
      this.status.loadingProductID = id;

      // api
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;

      const requestBody = {
        data: { product_id: id, qty: 1 }
      };

      await this.$http.post(api, requestBody).catch((err) => {
        console.log(err);
      });

      // 更新 navbar cart 數量
      const cartLength = await this.getCartProductNumber();
      emitter.emit('calculate-product-number', cartLength);

      // 檢查是否已訂閱
      await this.hasSubscription();

      // spinner off
      this.status.loadingProductID = '';
    },
    cartAPIResponse() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      return this.$http.get(api);
    },
    async getCartProductNumber() {
      // axios
      const response = await this.cartAPIResponse().catch((err) => {
        console.log(err);
      });

      // 回傳購物車資料
      return response.data.data.carts.length;
    },
    async hasSubscription() {
      // axios
      const response = await this.cartAPIResponse().catch((err) => {
        console.log(err);
      });

      // 查看購物車品項的 product_id 是否為 subscription_id
      const hasSubscription = [];
      response.data.data.carts.forEach((item) => {
        hasSubscription.push(
          item.product_id.includes(process.env.VUE_APP_SUBSCRIPTION_ID)
        );
      });

      this.isSubscriptionInCart = hasSubscription.includes(true);
    }
  },
  created() {
    window.scrollTo(0, -1000);
    this.hasSubscription();
  }
};
</script>
