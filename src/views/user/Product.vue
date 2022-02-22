<template>
  <Loading :active="isLoading"></Loading>
  <div class="bg-primary">
    <div class="container py-5 px-5 px-xl-0">
      <header class="text-white d-none">
        <section class="row">
          <div class="col-8">
            <h2 class="h1 text-white mb-3">{{ title }}</h2>
            <h3 class="h6 text-white">Original title: {{ originalTitle }}</h3>
            <span class="fs-6 me-2">{{ releaseDate.split('-')[0] }}</span> |
            <span class="fs-6 ms-2"
              >{{ runTime.hour }}h {{ runTime.minute }}m</span
            >
          </div>
          <div class="col-4 d-flex align-items-end">
            <div class="ms-auto">
              <h4 class="h6 text-white text-end">popularity</h4>
              <div class="d-block text-end">
                <i class="fs-4 bi bi-star-fill text-warning me-2"></i>
                <span class="fs-3">{{ popularity }}</span>
              </div>
            </div>
            <div class="ms-4">
              <h4 class="h6 text-white text-end">Vote Average</h4>
              <div class="d-block text-end">
                <i class="fs-4 bi bi-people-fill text-info me-2"></i>
                <span class="fs-3">{{ voteAverage }}</span>
              </div>
            </div>
          </div>
        </section>
      </header>
      <main class="text-white">
        <div class="row flex-column flex-sm-row gap-4 gap-md-5 gap-xl-0">
          <section class="col-xl-9">
            <div class="row flex-column flex-sm-row gap-4 gap-md-0">
              <!-- poster -->
              <div class="col-8 col-sm-5 col-md-6 col-xl-5 mx-auto">
                <div
                  class="position-relative poster-box-shadow rounded-3 h-100 w-100"
                  style=""
                >
                  <img
                    v-if="posterUrl"
                    class="img-fluid rounded-3 h-100 w-100"
                    style="object-fit: cover"
                    :src="baseImageUrl + posterUrl"
                    :alt="title"
                  />
                  <div
                    class="position-absolute top-0 bottom-0 w-100 rounded-3"
                    style="background: rgba(255, 255, 255, 0.1)"
                  ></div>
                </div>
              </div>
              <!-- content -->
              <section
                class="col-12 col-md-6 col-xl-7 d-flex flex-column mt-2 mt-md-0"
              >
                <div
                  class="d-flex align-items-start justify-content-between mb-2"
                >
                  <h2 class="display-5 text-white mb-0">{{ title }}</h2>
                  <!-- watchlist -->
                  <a
                    href="#"
                    class="text-white"
                    @click.prevent="addProductToList"
                  >
                    <i
                      class="bi bi-bookmark-plus fs-3"
                      v-if="!status.isProductInList"
                    ></i>
                    <i class="bi bi-bookmark-check-fill fs-3" v-else></i>
                  </a>
                </div>

                <!-- Original title -->
                <h3 class="h6 text-white mb-1">
                  Original title:
                  <span class="fw-normal">{{ originalTitle }}</span>
                </h3>

                <!-- date / time -->
                <div class="text-muted">
                  <span class="fs-6 me-2">{{ releaseDate.split('-')[0] }}</span>
                  |
                  <span class="fs-6 ms-2"
                    >{{ runTime.hour }}H {{ runTime.minute }}M</span
                  >
                </div>

                <!-- overview -->
                <p class="overview mt-3 fs-5">{{ overview }}</p>

                <!-- badge -->
                <div class="d-flex pb-3">
                  <span
                    class="badge rounded-pill border-secondary me-2"
                    v-for="item in genres"
                    :key="item"
                    >{{ item.name }}</span
                  >
                </div>

                <!-- now playing 類別出現的 button -->
                <div
                  class="row justify-content-between mt-auto flex-column-reverse flex-xl-row"
                  :class="{ 'mt-auto': isNowOrUpcoming === 'upcoming' }"
                  role="group"
                  v-if="isNowOrUpcoming === 'nowplaying'"
                >
                  <!-- rent -->
                  <div class="col-12 col-xl-6">
                    <button
                      type="button"
                      class="btn text-center rounded-3 w-100"
                      :class="{
                        'btn-outline-secondary text-muted ':
                          !status.isSubscriptionInCart,
                        'btn-outline-light text-light ':
                          status.isSubscriptionInCart
                      }"
                      :disabled="status.loadingProductID === productID"
                      @click="addProductToCart(idPassIn)"
                    >
                      <span
                        class="spinner-border spinner-grow-sm"
                        v-if="status.loadingProductID === productID"
                      ></span>
                      <i
                        v-if="status.loadingProductID !== productID"
                        class="bi bi-arrow-right-circle me-2"
                      ></i>
                      RENT $0.99
                    </button>
                  </div>
                  <!-- subscribe -->
                  <div class="col-12 col-xl-6 mb-3 mb-xl-0">
                    <button
                      type="button"
                      class="btn btn-warning text-center border border-warning text-primary rounded-3 w-100"
                      :disabled="status.loadingProductID === subscriptionID"
                      @click="addProductToCart(subscriptionID)"
                      v-if="!status.isSubscriptionInCart"
                    >
                      <span
                        class="spinner-border spinner-grow-sm"
                        v-if="status.loadingProductID === subscriptionID"
                      ></span>
                      <i
                        v-if="status.loadingProductID !== subscriptionID"
                        class="bi bi-hand-index-thumb me-2"
                      ></i>
                      SUBSCRIBE $9.99
                    </button>

                    <router-link
                      v-else
                      :to="{ name: 'Cart' }"
                      class="w-100 btn btn-warning mt-auto border border-warning border-2 rounded-3"
                    >
                      <i class="bi bi-cart-check me-2"></i>
                      <span class="text-light">SUBSCRIBED !</span>
                    </router-link>
                  </div>
                </div>

                <!-- Upcoming 類別出現的 button -->
                <div v-else class="mt-auto">
                  <button
                    class="btn btn-primary border text-warning fst-italic w-100 disabled rounded-3"
                  >
                    Upcoming
                  </button>
                </div>
              </section>
            </div>
          </section>

          <section class="col-xl-3">
            <aside
              class="d-flex flex-column aside-background h-100 p-3 rounded-3"
            >
              <div class="mb-3 d-flex flex-column gap-3">
                <!-- popularity -->
                <section
                  class="d-flex align-items-center justify-content-between"
                >
                  <h4 class="h6 text-white text-end mb-0">popularity</h4>
                  <div class="text-end">
                    <i class="bi bi-trophy-fill text-danger me-2"></i>
                    <span>{{ parseFloat(popularity).toFixed(0) }}</span>
                  </div>
                </section>

                <!-- vote -->
                <section
                  class="d-flex align-items-center justify-content-between"
                >
                  <h4 class="h6 text-white text-end mb-0">Vote Average</h4>
                  <div class="text-end">
                    <i class="bi bi-people-fill text-info me-2"></i>
                    <span>{{ voteAverage }}</span>
                  </div>
                </section>

                <!-- 手機版 rate -->
                <section
                  class="d-flex align-items-center justify-content-between d-lg-none"
                >
                  <h4 class="h6 text-white mb-0">Rating</h4>
                  <div>
                    <a
                      v-if="status.rating"
                      href="#"
                      class="px-2 me-1"
                      @click.prevent="deleteRating"
                    >
                      <i class="bi bi-dash-circle-fill text-muted fs-6"></i>
                    </a>
                    <i
                      v-if="status.rating"
                      class="bi bi-star-fill text-warning me-2"
                    ></i>
                    <select
                      class="form-select form-select-sm py-1 rounded-3"
                      aria-label="form-select-sm example"
                      @change="ratingOnMobile($event)"
                      v-else
                    >
                      <option selected>Rate</option>
                      <option :value="item" v-for="item in 10" :key="item">
                        {{ item }}
                      </option>
                    </select>
                    <span v-if="status.rating">{{ result }}</span>
                  </div>
                </section>
                <!-- 網頁版 rate -->
                <section
                  class="d-none d-lg-flex align-items-lg-center justify-content-lg-between"
                >
                  <div>
                    <h4 class="h6 text-white mb-0">Rating</h4>
                  </div>
                  <div
                    class="position-relative d-flex align-items-center"
                    style="min-height: 25px"
                  >
                    <div
                      class="position-absolute end-0 d-flex align-items-center"
                    >
                      <a
                        v-if="status.rating"
                        href="#"
                        class="px-2 me-1"
                        @click.prevent="deleteRating"
                      >
                        <i class="bi bi-dash-circle-fill text-muted fs-6"></i>
                      </a>
                      <a
                        href="#"
                        class="d-flex justify-content-end align-items-center"
                        :class="{ 'me-4': result }"
                        @mousemove.prevent="hoverRating($event)"
                        @mouseenter.prevent="offsetWidthCount"
                        @click.prevent="rating"
                        ref="ratingContainer"
                      >
                        <i
                          style="z-index: -1"
                          v-for="item in starsArray"
                          :key="item.id"
                          class="bi text-warning"
                          :class="{
                            'bi-star': item.star,
                            'bi-star-half': item.starHalf,
                            'bi-star-fill': item.starFill
                          }"
                        ></i>
                      </a>
                    </div>
                    <div v-if="result">{{ result * 2 }}</div>
                  </div>
                </section>
              </div>
              <ul
                class="d-flex flex-column justify-content-between flex-grow-1 list-unstyled more-video-list mb-0 gap-3 gap-xl-0"
              >
                <li
                  class="rounded-3 bg-dark"
                  v-for="item in Object.values(videoType)"
                  :key="item"
                >
                  <a
                    href="#"
                    class="btn d-flex justify-content-between text-white w-100 px-3 py-3 py-xl-2 text-decoration-none fs-6"
                    :class="{ disabled: !item.content.length }"
                    @click.prevent="moreVideos(item.type)"
                  >
                    <div>
                      {{ item.type }}
                      <span> ({{ item.content.length }}) </span>
                    </div>

                    <i class="bi bi-chevron-compact-right"></i>
                  </a>
                </li>
              </ul>
            </aside>
          </section>
        </div>

        <!-- video -->
        <div class="row mt-5">
          <div class="col-12">
            <h2 class="h1 text-white d-flex align-items-center">
              <i
                class="bi bi-camera-reels text-warning me-3 fs-4 d-none d-md-block"
              ></i
              >Watch Trailer
            </h2>
          </div>

          <section class="col-xl-9">
            <div class="video-wrapper">
              <iframe
                class="test"
                type="text/html"
                allowfullscreen
                width="100%"
                height="100%"
                v-if="trailers.length"
                :src="
                  baseYoutubeUrl + trailers[0].key ||
                  baseYoutubeUrl + teaser[0].key
                "
              >
              </iframe>
            </div>
          </section>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productID: {
      type: String
    }
  },
  inject: ['emitter', 'pushMessageStateForUser'],
  data() {
    return {
      // TMDB
      key: '7bbe6005cfda593dc21cceb93eaf9a8e',
      sessionID: 'd13bca7b7450c217c5af3127e3a0a984db98ccb2',
      list_id: '8191517',
      baseImageUrl: 'https://image.tmdb.org/t/p/w300',
      baseYoutubeUrl: 'https://www.youtube.com/embed/',
      // watchlist
      listStatusMessage: '',
      isLoading: false,
      // Movie
      title: '',
      originalTitle: '',
      runTime: {
        hour: '',
        minute: ''
      },
      trailers: [],
      teasers: [],
      // 共用
      idPassIn: '',
      releaseDate: '',
      popularity: '',
      voteAverage: '',
      posterUrl: '',
      genres: [],
      overview: '',
      id: '',
      genre: '',
      isNowOrUpcoming: '',
      price: '',
      language: 'en-US',
      videoType: {
        behindTheScenes: { type: 'Behind the Scenes', content: [] },
        clips: { type: 'Clips', content: [] },
        teasers: { type: 'Teasers', content: [] },
        trailers: { type: 'Trailers', content: [] },
        featurettes: { type: 'Featurettes', content: [] },
        others: { type: 'Others', content: [] }
      },
      // add to Cart status
      status: {
        loadingProductID: '',
        watchlistProductID: '',
        isProductInList: '',
        isSubscriptionInCart: false,
        rating: ''
      },
      // rating
      starsArray: [
        { star: true, starHalf: false, starFill: false, id: '1' },
        { star: true, starHalf: false, starFill: false, id: '2' },
        { star: true, starHalf: false, starFill: false, id: '3' },
        { star: true, starHalf: false, starFill: false, id: '4' },
        { star: true, starHalf: false, starFill: false, id: '5' }
      ],
      offsetX: '',
      ratingContainerWidth: '',
      ratio: 0,
      result: ''
    };
  },
  computed: {
    queriesChange() {
      return this.$route.params.productID;
    },
    subscriptionID() {
      return process.env.VUE_APP_SUBSCRIPTION_ID;
    }
  },
  watch: {
    queriesChange(newVal) {
      // 防止跳回首頁會更新資料
      if (this.$route.name === 'Product') {
        this.idPassIn = newVal;
        this.getProductDetails();
      }
    }
  },
  methods: {
    /// rating
    ratingOnMobile(e) {
      this.result = Number(e.target.value);

      this.rating();
    },
    async rating() {
      // rating 後禁止點擊
      if (window.screen.width >= 992) {
        this.$refs.ratingContainer.style.pointerEvents = 'none';
      }

      // api
      const api = `https://api.themoviedb.org/3/movie/${this.id}/rating?api_key=${this.key}&session_id=${this.sessionID}`;

      const requestBody = {
        value: this.result
      };

      const response = await this.$http.post(api, requestBody).catch((err) => {
        console.log(err);
      });

      // toast
      this.pushMessageStateForUser(
        response.data.status_message,
        this.title,
        'rating'
      );

      // 控制刪除rating鈕狀態
      this.status.rating = response.data.success;
    },
    async deleteRating() {
      // delete rating 後可點擊
      if (window.screen.width >= 992) {
        this.$refs.ratingContainer.style.pointerEvents = 'auto';
      }

      // api
      const api = `https://api.themoviedb.org/3/movie/${this.id}/rating?api_key=${this.key}&session_id=${this.sessionID}`;

      const requestBody = {
        value: this.result
      };

      const response = await this.$http
        .delete(api, requestBody)
        .catch((err) => {
          console.log(err);
        });

      // 控制刪除rating鈕狀態
      this.status.rating = !response.data.success;

      // 清空rating星星及數字
      this.result = 0;
      for (let i = 0; i < this.starsArray.length; i++) {
        this.starsArray[i].star = true;
        this.starsArray[i].starHalf = false;
        this.starsArray[i].starFill = false;
      }

      // toast
      this.pushMessageStateForUser(
        response.data.status_message,
        this.title,
        'delete rating'
      );
    },
    offsetWidthCount() {
      // 計算元素寬度
      this.ratingContainerWidth = this.$refs.ratingContainer.offsetWidth;
    },
    halfStar(ratio) {
      if (ratio > 0 && ratio <= 0.1) this.result = 0.5;
      if (ratio > 0.2 && ratio <= 0.3) this.result = 1.5;
      if (ratio > 0.4 && ratio <= 0.5) this.result = 2.5;
      if (ratio > 0.6 && ratio <= 0.7) this.result = 3.5;
      if (ratio > 0.8 && ratio <= 0.9) this.result = 4.5;

      // 防止 fullStar this.result 干擾
      if (Math.floor(this.result) === 5) return;

      // 填滿半顆星的部分
      this.starsArray[Math.floor(this.result)].star = false;
      this.starsArray[Math.floor(this.result)].starHalf = true;
      this.starsArray[Math.floor(this.result)].starFill = false;
    },
    fullStar(ratio) {
      if (ratio <= 0) this.result = 0;
      if (ratio > 0.1 && ratio <= 0.2) this.result = 1;
      if (ratio > 0.3 && ratio <= 0.4) this.result = 2;
      if (ratio > 0.5 && ratio <= 0.6) this.result = 3;
      if (ratio > 0.7 && ratio <= 0.8) this.result = 4;
      if (ratio > 0.9 && ratio <= 1) this.result = 5;
    },
    hoverRating(e) {
      // 計算點到的位置距離元素左邊界多遠 及 佔元素寬度幾%
      this.offsetX = e.offsetX;
      this.ratio = this.offsetX / this.ratingContainerWidth;

      // 根據ratio計算是半顆星還是一顆星
      this.halfStar(this.ratio);
      this.fullStar(this.ratio);

      // 該星星前全部填滿
      for (let i = 0; i < Math.floor(this.result); i++) {
        this.starsArray[i].star = false;
        this.starsArray[i].starHalf = false;
        this.starsArray[i].starFill = true;
      }

      // 該星星後全部空心
      for (let i = Math.ceil(this.result); i < this.starsArray.length; i++) {
        this.starsArray[i].star = true;
        this.starsArray[i].starHalf = false;
        this.starsArray[i].starFill = false;
      }
    },
    /// video
    moreVideos(type) {
      this.$router.push({
        name: 'ProductVideos',
        params: { movieID: this.id, movieTitle: this.title, videoType: type }
      });
    },
    arrangeVideoType(types) {
      // 清空每個類別的 content
      Object.values(this.videoType).forEach((item) => {
        item.content.length = 0;
      });

      // 根據影片類別歸類
      types.forEach((item) => {
        if (item.type === 'Clip') {
          this.videoType.clips.content.push(item);
        } else if (item.type === 'Teaser') {
          this.videoType.teasers.content.push(item);
        } else if (item.type === 'Trailer') {
          this.videoType.trailers.content.push(item);
        } else if (item.type === 'Featurette') {
          this.videoType.featurettes.content.push(item);
        } else if (item.type === 'Behind the Scenes') {
          this.videoType.behindTheScenes.content.push(item);
        } else {
          this.videoType.others.content.push(item);
        }
      });
    },
    /// product
    async getProductDetails() {
      this.isLoading = true;

      // api
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.idPassIn}`;
      const response = await this.$http
        .get(api)
        .catch((err) => console.log(err));

      // 產品在 TMDB api 中的id
      this.id = response.data.product.content.split('|')[0];

      // 產品在 TMDB api 中的id
      this.price = response.data.product.price;

      // 產品屬於 movie 或 tv 類別
      this.genre = response.data.product.category.split('|')[0];

      // 產品屬於 nowplaying 或 Upcoming 類別
      this.isNowOrUpcoming = response.data.product.category.split('|')[1];

      // 再透過 TMDB api 獲得更多產品資料
      await this.getData();

      this.isLoading = false;
    },
    async getData() {
      // TMDB api
      const response = await this.$http.get(
        `https://api.themoviedb.org/3/${this.genre}/${this.id}?api_key=${this.key}&language=${this.language}&append_to_response=videos,images`
      );

      if (this.genre === 'movie') this.getMovieDetail(response);
      if (this.genre === 'tv') this.getTVDetail(response);

      this.posterUrl = response.data.poster_path;
      this.genres = response.data.genres;
      this.overview = response.data.overview;
      this.popularity = response.data.popularity;
      this.voteAverage = response.data.vote_average;

      // video 分類
      this.arrangeVideoType(response.data.videos.results);

      // 預設呈現 trailers
      this.trailers = response.data.videos.results.filter((item) => {
        return item.type === 'Trailer';
      });

      // 如果沒有 trailers 就呈現 teasers
      this.teasers = response.data.videos.results.filter((item) => {
        return item.type === 'Teaser';
      });
    },
    getMovieDetail(response) {
      this.title = response.data.title;
      this.originalTitle = response.data.original_title;
      this.releaseDate = response.data.release_date;

      this.runTime.hour = Math.floor(response.data.runtime / 60);
      this.runTime.minute = response.data.runtime % 60;
    },
    /// watchlist
    async checkProductStatus() {
      const api = `https://api.themoviedb.org/3/list/${this.list_id}/item_status?api_key=${this.key}&movie_id=${this.id}`;

      const response = await this.$http.get(api).catch((err) => {
        console.log(err);
      });

      this.status.isProductInList = response.data.item_present;
    },
    async removeProductFromList() {
      // spinner on
      this.status.watchlistProductID = this.idPassIn;

      // api
      const api = `https://api.themoviedb.org/3/list/${this.list_id}/remove_item?api_key=${this.key}&session_id=${this.sessionID}`;

      const requestBody = {
        media_id: this.id
      };

      const response = await this.$http.post(api, requestBody).catch((err) => {
        console.log(err);
      });

      // 切換icon
      this.status.isProductInList = !response.data.success;
      this.listStatusMessage = response.data.status_message;

      // toast
      this.pushMessageStateForUser(
        this.listStatusMessage,
        this.title,
        'remove from watchlist'
      );

      // spinner off
      this.status.watchlistProductID = '';
    },
    async addProductToList() {
      // spinner on
      this.status.watchlistProductID = this.idPassIn;

      // 檢查是否已經加入 watchlist
      await this.checkProductStatus();
      if (this.status.isProductInList) {
        await this.removeProductFromList();
        return;
      }

      // api
      const api = `https://api.themoviedb.org/3/list/${this.list_id}/add_item?api_key=${this.key}&session_id=${this.sessionID}`;

      const requestBody = {
        media_id: this.id
      };

      const response = await this.$http.post(api, requestBody).catch((err) => {
        console.log(err);
      });

      // 切換icon
      this.status.isProductInList = response.data.success;
      this.listStatusMessage = response.data.status_message;

      // toast
      this.pushMessageStateForUser(
        this.listStatusMessage,
        this.title,
        'add to watchlist'
      );

      // spinner off
      this.status.watchlistProductID = '';
    },
    /// cart
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
      this.emitter.emit('calculate-product-number', cartLength);

      // 檢查是否已訂閱
      if (id === this.subscriptionID) await this.hasSubscription();

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

      this.status.isSubscriptionInCart = hasSubscription.includes(true);
    }
  },
  async created() {
    window.scrollTo(0, -1000);

    this.idPassIn = this.productID;
    await this.getProductDetails();
    this.checkProductStatus();
    this.hasSubscription();
  }
};
</script>

<style lang="scss" scoped>
.overview {
  line-height: 2;

  @media (min-width: 1200px) {
    line-height: 1.5;
  }
}

.poster-box-shadow {
  box-shadow: rgba(178, 198, 206, 0.12) 0px 2px 4px 2px,
    rgba(174, 188, 194, 0.32) 0px 2px 16px 2px;
}

.aside-background {
  background: rgba(52, 58, 64, 0.3);
  border-radius: 16px;
  box-shadow: 0 0 4px rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
}

:hover:is(.btn-outline-warning, .btn-outline-secondary, .btn-outline-light) {
  color: rgba(26, 26, 26, 1) !important;
}

:hover:is(.btn-warning) {
  color: #fff !important;
}

.more-video-list {
  li a:hover {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 0.3rem;
    outline: 1px solid rgba(255, 255, 255, 0.9);
  }
}

.delete-rating-btn {
  padding: 1px 4px 0 6px !important;
}

.bi-dash-circle-fill:hover {
  color: white !important;
}

.video-wrapper {
  aspect-ratio: 16/9;

  @supports not (aspect-ratio: 16/9) {
    position: relative;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
  }
}

iframe {
  @supports not (aspect-ratio: 16/9) {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
}
</style>
