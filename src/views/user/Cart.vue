<template>
  <Loading :active="isLoading"></Loading>
  <div class="container py-5 px-3 px-md-4">
    <header>
      <div class="d-flex align-items-center">
        <i class="bi bi-cart-fill text-warning me-3 fs-2"></i>
        <h2 class="h1 mb-0 text-primary">My cart</h2>
      </div>
    </header>
    <main>
      <section>
        <!-- 購物車商品 -->
        <div
          class="border-bottom border-primary pb-3 pt-4"
          v-for="item in cart"
          :key="item.id"
        >
          <ul
            class="row align-items-start align-items-xl-center mb-0 list-unstyled"
          >
            <li class="col-2 col-md-1 align-self-lg-center text-center">
              <button
                @click.prevent="deleteProduct(item)"
                type="button"
                class="btn btn-outline-warning btn-sm px-1 py-0 border-1"
              >
                <i class="bi bi-x"></i>
              </button>
            </li>
            <li class="col-4 col-md-3 text-center">
              <img
                v-if="item.product.imageUrl"
                :src="item.product.imageUrl[0]"
                class="img-adjusted img-fluid d-inline-block"
                :alt="item.product.title"
              />
              <span
                v-else
                class="badge bg-primary fst-italic text-warning rounded-pill"
                >Subscription</span
              >
            </li>
            <li class="col-6 col-md-8">
              <div class="row justify-content-between align-items-xl-center">
                <!-- title -->
                <div class="col-12 col-md-6 col-lg-4 col-xl-4">
                  <h2 class="fs-5 mb-md-0">{{ item.product.title }}</h2>
                </div>
                <!-- 數量 -->
                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div class="input-group input-group-sm">
                    <input
                      type="number"
                      class="form-control"
                      aria-label="number"
                      v-model.number="item.qty"
                      min="1"
                      @change="updateProductTotal(item)"
                    />
                    <span class="input-group-text fs-6"
                      >/ {{ item.product.unit }}</span
                    >
                  </div>
                </div>
                <!-- 單價 -->
                <div class="col-12 col-lg-4 col-xl-2">
                  <div class="text-end py-2 py-lg-0 price-font border-adjusted">
                    Price: ${{ item.product.price }}
                  </div>
                </div>
                <!-- 單件商品總價 -->
                <div class="col-12 col-xl-3">
                  <div class="text-end pt-2 price-font">
                    <div v-if="!isCouponUsed">
                      Total: ${{ item.total.toFixed(2) }}
                    </div>
                    <div v-if="isCouponUsed">
                      <del>Total: ${{ item.total.toFixed(2) }}</del>
                      <div class="text-warning">
                        After discount: ${{ item.final_total.toFixed(2) }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- 購物車總金額 -->
        <div class="mt-2 total-price-font" v-if="cart.length">
          <div class="text-end text-danger" v-if="!isCouponUsed">
            Total: ${{ totalAmount.total.toFixed(2) }}
          </div>
          <!-- 用 coupon 後金額 -->
          <div v-else class="text-end">
            <del>Total: ${{ totalAmount.total.toFixed(2) }}</del>
            <div class="text-danger">
              After discount: ${{ totalAmount.finalTotal.toFixed(2) }}
            </div>
            <div class="text-danger fs-6">{{ discountRatio }}% off</div>
          </div>
        </div>
      </section>

      <section class="row justify-content-center" v-if="cart.length">
        <div class="col-lg-6">
          <!-- 優惠券 -->
          <section class="py-5">
            <h3 class="h4 mb-3">Use Coupon</h3>
            <div class="input-group input-group-sm">
              <input
                type="text"
                class="form-control"
                :placeholder="
                  totalAmount.total <= 120
                    ? 'No coupon available ...'
                    : 'Your coupon is ...'
                "
                v-model="couponCode"
                disabled
                aria-label="input coupon"
                aria-describedby="button-addon2"
              />
              <button
                class="btn btn-outline-secondary text-muted"
                id="button-addon2"
                type="button"
                @click="useCoupon"
                :disabled="isCouponUsed"
                v-if="isCouponUsed"
              >
                Coupon used
              </button>
              <button
                class="btn btn-outline-warning"
                type="button"
                @click="useCoupon"
                id="button-addon2"
                :disabled="totalAmount.total <= 120"
                v-else
              >
                Use Coupon
              </button>
            </div>
            <small class="text-warning fs-6" v-if="!isCouponUsed"
              >* Click the button to use a coupon
            </small>

            <!-- Coupon usage -->
            <div class="accordion mt-3" id="accordionExample">
              <div class="accordion-item">
                <h4 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button collapsed py-2 px-3 fs-6 text-muted"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#couponUsage"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Coupon usage
                  </button>
                </h4>
                <div
                  id="couponUsage"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <ul class="fs-6 list-unstyled mb-0">
                      <li>
                        <div class="d-flex py-1">
                          <div>
                            <span>$120</span>
                            <i class="bi bi-arrow-right mx-2"></i>
                            <span class="fst-italic fw-bold">CMDBTEN</span>
                          </div>
                          <span class="badge bg-primary ms-auto fst-italic"
                            >10% off</span
                          >
                        </div>
                      </li>
                      <li>
                        <div class="d-flex py-1">
                          <div>
                            <span>$240</span>
                            <i class="bi bi-arrow-right mx-2"></i>
                            <span class="fst-italic fw-bold">CMDBFIFTEEN</span>
                          </div>
                          <span class="badge bg-primary ms-auto fst-italic"
                            >15% off</span
                          >
                        </div>
                      </li>
                      <li>
                        <div class="d-flex py-1">
                          <div>
                            <span>$360</span>
                            <i class="bi bi-arrow-right mx-2"></i>
                            <span class="fst-italic fw-bold">CMDBTWENTY</span>
                          </div>
                          <span class="badge bg-primary ms-auto fst-italic"
                            >20% off</span
                          >
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- 送出訂單 -->
          <section>
            <h3 class="h4">Delivery Info</h3>
            <Form v-slot="{ errors }" @submit="onSubmit">
              <!-- email -->
              <div class="mb-3">
                <label for="email" class="form-label">Email*</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="請輸入 Email"
                  rules="email|required"
                  v-model="form.user.email"
                >
                </Field>
                <error-message
                  name="email"
                  class="invalid-feedback"
                ></error-message>
              </div>

              <!-- name -->
              <div class="mb-3">
                <label for="name" class="form-label">姓名*</label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['name'] }"
                  placeholder="請輸入姓名"
                  rules="required"
                  v-model="form.user.name"
                ></Field>
                <error-message
                  name="name"
                  class="invalid-feedback"
                ></error-message>
              </div>

              <!-- tel -->
              <div class="mb-3">
                <label for="tel" class="form-label">手機*</label>
                <Field
                  id="tel"
                  name="tel"
                  type="tel"
                  class="form-control"
                  :class="{ 'is-invalid': errors['tel'] }"
                  placeholder="請輸入手機"
                  rules="numeric|length: 10|required"
                  v-model="form.user.tel"
                ></Field>
                <error-message
                  name="tel"
                  class="invalid-feedback"
                ></error-message>
              </div>

              <!-- address -->
              <div class="mb-3">
                <label for="address" class="form-label">地址*</label>
                <Field
                  id="address"
                  name="address"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['address'] }"
                  placeholder="請輸入地址"
                  rules="required"
                  v-model="form.user.address"
                ></Field>
                <error-message
                  name="address"
                  class="invalid-feedback"
                ></error-message>
              </div>

              <!-- message -->
              <div class="mb-3">
                <label for="message" class="form-label">留言</label>
                <Field
                  id="message"
                  name="message"
                  as="textarea"
                  class="form-control"
                  v-model="form.message"
                ></Field>
              </div>

              <div class="text-end">
                <button class="btn btn-warning" type="submit">Submit</button>
              </div>
            </Form>
          </section>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
      discountTotal: '',
      couponCode: '',
      isLoading: false,
      isCouponUsed: false,
      // vee-validate
      form: {
        user: {
          name: 'Andy',
          email: '123@gmail.com',
          tel: '0987654321',
          address: 'asd'
        },
        message: ''
      }
    };
  },
  inject: ['emitter'],
  computed: {
    totalAmount() {
      const total = this.cart.reduce((total, item) => {
        return total + item.total;
      }, 0);
      const finalTotal = this.cart.reduce((total, item) => {
        return total + item.final_total;
      }, 0);
      return { total, finalTotal };
    },
    discountRatio() {
      const discount =
        (1 - this.totalAmount.finalTotal / this.totalAmount.total).toFixed(2) *
        100;

      return discount;
    }
  },
  methods: {
    assignCoupon() {
      if (this.totalAmount.total >= 120) this.couponCode = 'CMDBTEN';
      if (this.totalAmount.total >= 240) this.couponCode = 'CMDBFIFTEEN';
      if (this.totalAmount.total >= 360) this.couponCode = 'CMDBTWENTY';
    },
    clearCoupon() {
      this.isCouponUsed = false;
      this.couponCode = '';
    },
    async onSubmit() {
      this.isLoading = true;

      // axios
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      const response = await this.$http
        .post(api, { data: order })
        .catch((err) => console.log(err));

      this.isLoading = false;

      // 轉址
      this.$router.push({
        name: 'UserCheckout',
        params: { orderID: response.data.orderId }
      });

      console.log('onSubmit', response);
    },
    async useCoupon() {
      this.assignCoupon();

      // 取得優惠券資料
      const coupon = {
        code: this.couponCode
      };

      // axios
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const response = await this.$http
        .post(api, { data: coupon })
        .catch((err) => console.log(err));

      // 重新渲染畫面
      await this.getCartProduct();

      // 儲存回傳資料
      this.isCouponUsed = response.data.success;
      this.discountTotal = response.data.data.final_total;

      console.log('useCoupon', response);
    },
    async updateProductTotal(item) {
      this.isLoading = true;

      // 取得優惠券資料
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      };

      // axios
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const response = await this.$http
        .put(api, { data: cart })
        .catch((err) => console.log(err));

      // 重新渲染畫面
      await this.getCartProduct();

      // 清除上一個帶入的 coupon
      this.clearCoupon();

      this.isLoading = false;
      console.log('updateProductTotal', response.data);
    },
    async getCartProduct() {
      this.isLoading = true;

      // axios
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const response = await this.$http
        .get(api)
        .catch((err) => console.log(err));

      // 儲存回傳資料
      this.cart = response.data.data.carts;

      this.isLoading = false;
      console.log('getCartProduct', response);
    },
    async deleteProduct(item) {
      // axios
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      await this.$http.delete(api).catch((err) => console.log(err));

      // 重新渲染畫面
      await this.getCartProduct();

      // 更新 navbar cart 數量
      this.emitter.emit('calculate-product-number', this.cart.length);
    }
  },
  created() {
    this.getCartProduct();
  }
};
</script>

<style lang="scss" scoped>
.img-adjusted {
  object-fit: cover;
  object-position: center center;
  aspect-ratio: 3 / 4;
  max-height: 99px;

  @media (min-width: 768px) {
    max-height: 111px;
  }

  @media (min-width: 1200px) {
    max-height: 150px;
  }
}

.price-font {
  font-size: 0.75rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
}

.total-price-font {
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
}

.border-adjusted {
  border-bottom: 1px solid #eceeef;

  @media (min-width: 992px) {
    border-bottom: none;
  }
}
</style>
