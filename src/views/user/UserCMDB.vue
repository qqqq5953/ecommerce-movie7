<template>
  <Loading :active="isLoading"></Loading>
  <div class="bg-primary">
    <div class="container-md">
      <header class="position-relative d-md-none">
        <!-- 手機test -->
        <section class="d-none" style="height: 373px; overflow: hidden">
          <div class="header-background header-background-img-mobile"></div>
          <div
            class="d-flex align-items-center position-absolute top-0 bottom-0 w-100 h-100"
            style="
              background: rgba(255, 255, 255, 0.2);
              backdrop-filter: blur(2px);
            "
          >
            <div
              class="mx-4 d-flex flex-column h-100 w-100 justify-content-center position-relative"
            >
              <div
                style="
                  background: url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
                  background-repeat: no-repeat !important;
                  background-position: 0% 60% !important;
                  background-size: cover !important;
                  height: 40vh;
                  -moz-transform: scaleX(-1);
                  -webkit-transform: scaleX(-1);
                  -o-transform: scaleX(-1);
                  transform: scaleX(-1);
                "
              ></div>
              <div
                class="w-100 position-absolute top-0 bottom-0 m-auto"
                style="background: rgba(0, 0, 0, 0.5); height: 213px"
              ></div>
              <div
                class="position-absolute top-0 bottom-0 start-0 w-100 d-flex flex-column justify-content-center align-items-center"
              >
                <h2 class="h4 mb-0 text-white text-center lh-base p-3">
                  <span class="d-block">Offer worldwide</span>
                  <span class="text-warning"> latest movies </span>
                  fitting your lifestyle
                </h2>
              </div>
              <div class="position-absolute bottom-0 start-0 end-0 mb-4">
                <router-link
                  :to="{ name: 'AllProducts' }"
                  class="btn btn-warning btn-sm fs-6 w-100 text-primary"
                >
                  <span>Pick a movie now</span>
                  <i class="bi bi-arrow-right ms-2"></i>
                </router-link>
              </div>
            </div>
          </div>
        </section>

        <!-- 手機 -->
        <section class="d-md-none" style="max-height: 373px; overflow: hidden">
          <div
            class="header-background header-background-adjusted-mobile header-background-img-mobile"
          ></div>
          <!-- 白色遮罩 -->
          <div
            class="header-background-img-cover position-absolute top-0 bottom-0 end-0 d-flex align-items-center w-100 h-100"
          >
            <div
              class="position-relative d-flex flex-column justify-content-center h-100 w-100 mx-4"
            >
              <!-- 黑色遮罩 -->
              <div
                class="header-foreground position-absolute top-0 bottom-0 m-auto w-100"
              ></div>
              <!-- header-title -->
              <div
                class="position-absolute d-flex justify-content-center align-items-center w-100"
              >
                <h2 class="text-white text-center lh-base p-3 mb-0">
                  <span class="d-block">Offer worldwide</span>
                  <span class="text-warning"> latest movies </span>
                  fitting your lifestyle
                </h2>
              </div>
              <!-- CTA button -->
              <div class="position-absolute bottom-0 start-0 end-0 mb-3">
                <router-link
                  :to="{ name: 'AllProducts' }"
                  class="btn btn-warning btn-sm fs-6 w-100 text-primary"
                >
                  <span>Pick a movie now</span>
                  <i class="bi bi-arrow-right ms-2"></i>
                </router-link>
              </div>
            </div>
          </div>
        </section>
      </header>
      <!-- 平板以上 -->
      <header class="position-relative d-none d-md-block">
        <section class="position-relative">
          <div class="header-background header-background-img"></div>
          <div
            class="header-background-img-cover d-flex align-items-center h-100 position-absolute top-0 bottom-0 end-0 start-0"
          >
            <div class="mb-0 mx-3 mx-md-4 mx-xl-5 p-4 header-foreground">
              <h2 class="text-white">
                <span class="d-block">Offer worldwide</span>
                <!-- <span>worldwide</span> -->
                <span class="text-warning"> latest movies </span>
                fitting your lifestyle
              </h2>

              <router-link
                :to="{ name: 'AllProducts' }"
                class="btn btn-warning fs-5 w-100 text-primary"
              >
                <span>Pick a movie now</span>
                <i class="bi bi-arrow-right ms-2"></i>
              </router-link>
            </div>
          </div>
        </section>
      </header>
      <main class="py-5 px-5 px-xl-0">
        <!-- why CMDB -->
        <section class="pb-xl-5">
          <h2 class="h1 text-white text-center mb-4">Why CMDB</h2>
          <ul class="row list-unstyled mb-xl-0">
            <li class="col mb-4 mb-xl-0">
              <div class="rounded-3 p-4 h-100 why-section-background">
                <h3 class="text-white text-center">Diversity</h3>
                <div class="d-flex justify-content-center my-3">
                  <i class="bi bi-globe display-1 text-warning"></i>
                </div>
                <p class="text-white">
                  We collect the latest movies from
                  <span class="fw-bold text-warning"
                    >Asia, Europe, United States of America and Canada</span
                  >
                  , ensuring to keep on track of the trends.
                </p>
              </div>
            </li>
            <li class="col mb-4 mb-xl-0">
              <div class="rounded-3 p-4 h-100 why-section-background">
                <h3 class="text-white text-center">Quality</h3>
                <div class="d-flex justify-content-center gap-3 my-3">
                  <i class="bi bi-badge-4k display-1 text-warning"></i>
                  <i class="bi bi-badge-hd display-1 text-warning"></i>
                </div>
                <p class="text-white">
                  We provide
                  <span class="fw-bold text-warning">either 4K or HD</span>
                  movies depending on the plan chosen, differentiating from the
                  market where only premium members are qualified for receiving
                  high quality entertainment.
                </p>
              </div>
            </li>
            <li class="col mb-4 mb-xl-0">
              <div class="rounded-3 p-4 h-100 why-section-background">
                <h3 class="text-white text-center">Flexibility</h3>
                <div class="d-flex justify-content-center my-3">
                  <i class="bi bi-calendar3 display-1 text-warning"></i>
                </div>
                <p class="text-white mb-4">
                  <span>We offer 2 flexible plans:</span>
                  <span class="d-block">
                    <span class="fw-bold text-warning">SUBSCRIPTION:</span>
                    unequaled entertainment experience</span
                  >
                  <span class="d-block">
                    <span class="fw-bold text-warning">RENTAL:</span>
                    prompt entertainment with high qualities.</span
                  >
                </p>
                <p class="text-white">
                  You can also subscribe for week
                  <span class="fw-bold text-warning">only 1 month</span> or rent
                  for
                  <span class="fw-bold text-warning">only 1 week</span>
                  if you like.
                </p>
              </div>
            </li>
          </ul>
        </section>

        <!-- Playing Now -->
        <section class="pb-5">
          <h2 class="h1 d-inline-block genre-title">
            <a
              href="#"
              @click.prevent="moreResultsOfCMDB('nowplaying')"
              class="text-white text-decoration-none d-flex align-items-center"
            >
              <div class="d-none d-md-flex">
                <i class="bi bi-camera-reels text-warning me-3 fs-4"></i>
                <i
                  class="bi bi-camera-reels-fill d-none text-warning me-3 fs-4"
                ></i>
              </div>

              <span>Now Playing</span>
              <i class="bi bi-chevron-right ms-2 fs-4"></i>
            </a>
          </h2>
          <div class="position-relative mt-3">
            <section class="overflow-auto card-scrollbar position-relative">
              <CardVertical
                :results="nowPlaying"
                :language="language"
              ></CardVertical>
            </section>
            <div class="position-absolute right-blur"></div>
          </div>
        </section>

        <!-- UpComing -->
        <section class="pb-5">
          <h2 class="h1 d-inline-block genre-title">
            <a
              href="#"
              @click.prevent="moreResultsOfCMDB('upcoming')"
              class="text-white text-decoration-none d-flex align-items-center"
            >
              <div class="d-none d-md-flex">
                <i class="bi bi-camera-reels text-warning me-3 fs-4"></i>
                <i
                  class="bi bi-camera-reels-fill d-none text-warning me-3 fs-4"
                ></i>
              </div>

              <span>UpComing</span>
              <i class="bi bi-chevron-right ms-2 fs-4"></i>
            </a>
          </h2>
          <div class="position-relative mt-3">
            <section
              class="overflow-auto mt-3 mb-5 card-scrollbar position-relative"
            >
              <CardVertical
                :results="upComing"
                :language="language"
              ></CardVertical>
            </section>
            <div class="position-absolute right-blur"></div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import CardVertical from '@/components/CardVerticalTest.vue';
// import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    CardVertical
    // Navbar
  },
  inject: ['sortData', 'emitter'],
  data() {
    return {
      basrUrl: 'https://api.themoviedb.org/3/',
      key: '7bbe6005cfda593dc21cceb93eaf9a8e',
      products: [],
      nowPlaying: [],
      upComing: [],
      language: 'en-US',
      region: 'US',
      isLoading: false
    };
  },
  methods: {
    moreResultsOfCMDB(genre) {
      this.$router.push({ name: 'AllResults', params: { genre } });
    },
    async getProducts() {
      this.isLoading = true;

      // api
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      const response = await this.$http.get(api).catch((err) => {
        console.log(err);
      });
      console.log('res', response.data);

      // 儲存資料
      this.products = response.data.products;

      // 將 nowPlaying 分離出來
      this.getNowPlaying();

      // 將 upComing 分離出來
      this.getUpcoming();

      this.isLoading = false;
    },
    getNowPlaying() {
      this.nowPlaying = this.products.filter((item) => {
        const genre = item.category.split('|')[1];
        return genre === 'nowplaying';
      });

      // 照熱門度分類
      this.nowPlaying = this.sortData(this.nowPlaying, 'content');
    },
    getUpcoming() {
      this.upComing = this.products.filter((item) => {
        const genre = item.category.split('|')[1];
        return genre === 'upcoming';
      });

      // 照熱門度分類
      this.upComing = this.sortData(this.upComing, 'content');
    }
  },
  created() {
    window.scrollTo(0, -1000);

    this.getProducts();
  }
};
</script>

<style lang="scss" scoped>
// 通用背景設定
.header-background {
  background-repeat: no-repeat !important;
  background-position: center center !important;
  background-size: cover !important;
  min-height: 350px;
  max-height: 375px;
  // -moz-transform: scaleX(-1);
  // -webkit-transform: scaleX(-1);
  // -o-transform: scaleX(-1);
  // transform: scaleX(-1);

  @media (min-width: 768px) {
    background-position: 10% 60% !important;
    background-size: initial !important;
    min-height: 380px;
    max-height: 55vh;
    // height: minmax(380px, 55vh);
  }
  @media (min-width: 992px) {
    background-size: cover !important;
  }
  @media (min-width: 1200px) {
    background-position: 225% 100% !important;
    background-size: initial !important;

    // background-position: 0% 90% !important;
    // background-size: cover !important;

    min-height: 480px;
    max-height: 85vh;
  }
  @media (min-width: 1400px) {
    background-position: 100% 100% !important;
  }
}

.header-background-img-cover {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2.5px);

  @media (min-width: 768px) {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(0);
  }
}

.header-foreground {
  background: rgba(0, 0, 0, 0.5);
  height: 200px;
  width: 100%;

  @media (min-width: 768px) {
    background: rgba(0, 0, 0, 0.45);
    height: 85%;
    width: 45%;
  }

  @media (min-width: 992px) {
    background: rgba(62, 73, 83, 0.45);
    height: 90%;
    width: 37%;
    height: auto;
  }

  @media (min-width: 1200px) {
    background: rgba(62, 73, 83, 0.415);
    width: 45%;
  }

  h2 {
    @media (min-width: 768px) {
      font-size: calc(1.125rem + 1.5vw) !important;
      line-height: 1.4;
    }

    @media (min-width: 1200px) {
      // display-6
      font-size: calc(1.375rem + 1.6vw) !important;
      line-height: 1.5;
    }

    @media (min-width: 1400px) {
      font-size: 3rem !important;
    }
  }
}

// 手機版背景
.header-background-img-mobile {
  background: url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
}

// pad 以上背景
.header-background-img {
  background: url('https://images.pexels.com/photos/3769029/pexels-photo-3769029.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500');
}

.why-section-background {
  background: rgba(52, 58, 64, 0.3);
  border-radius: 16px;
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);

  p {
    font-size: 14px;
  }
}

.genre-title:hover {
  .bi-chevron-right {
    color: #f0ad4e;
  }

  .bi-camera-reels {
    display: none;
  }

  .bi-camera-reels-fill {
    display: block !important;
  }
}

.right-blur {
  width: 2.5rem;
  height: 100%;
  top: 0;
  right: -3px;
  bottom: 0;
  z-index: 10;
  background: linear-gradient(
    to left,
    rgba(24, 24, 24, 0.9) 12%,
    transparent 100%
  );
}

.card-scrollbar {
  scroll-snap-type: x mandatory;
  overscroll-behavior-inline: contain;

  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    // background-color: rgba(85, 89, 92, 1);
    background-color: rgba(69, 67, 56, 0.7);
    border-radius: 100vw;
    margin-inline: 10vw;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.75);

    border-radius: 100vw;
    border: 2px solid rgba(85, 89, 92, 1);

    &:hover {
      background-color: rgba(26, 26, 26, 1);

      // background-color: #f0ad4e;
      border: 2px solid rgba(255, 255, 255, 0.7);
      border: 2px solid #f0ad4e;
    }
  }
}
</style>
