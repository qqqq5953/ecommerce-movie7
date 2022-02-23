<template>
  <div class="position-relative movie-card">
    <!-- backdrop_image -->
    <div
      class="position-absolute backdrop_image"
      :style="{ backgroundImage: `url(${product.imageUrl[1]})` }"
    ></div>

    <!-- badge for mobile for upcoming movie-->
    <slot name="badge-for-mobile" :itemForBadge="product"></slot>

    <div class="position-relative info_section">
      <div class="info_section_width px-4 py-3 py-lg-4">
        <!-- card-header -->
        <div class="row card-header-wrapper rounded-3 py-3">
          <div class="col-4 col-md-2 col-lg-3">
            <img
              v-if="product.imageUrl[0]"
              :src="product.imageUrl[0]"
              class="card-img-top card-img-top-adjusted img-fluid d-block"
              :alt="product.title"
            />
          </div>
          <div class="col-8 col-md-10 col-lg-9 ps-0 ps-sm-2">
            <!-- sm 以下的 title -->
            <h2 class="h4 card-title mb-0 d-sm-none">
              {{ product.title }}
            </h2>

            <!-- sm 以上的 title -->
            <h2 class="h3 card-title mb-0 d-none d-sm-block">
              {{ product.title }}
            </h2>
            <div class="fs-6">
              <small class="d-block d-sm-inline-block">{{
                product.content.split('|')[2]
              }}</small>
              <span class="d-none d-sm-inline-block mx-2 fs-5">|</span>
              <small class="d-block d-sm-inline-block"
                >Popularity:
                <span>{{
                  parseFloat(product.content.split('|')[1]).toFixed(0)
                }}</span></small
              >
            </div>

            <!-- badge for pad 以上 for upcoming movie-->
            <slot name="badge-for-mobile-above" :itemForBadge="product"></slot>
          </div>
        </div>

        <!-- card-body -->
        <div class="row my-4 mt-md-4 mb-md-0 mt-lg-3">
          <div class="col-12">
            <div class="card-text d-flex flex-column">
              <p class="lh-sm">{{ product.description }}</p>

              <div class="text-end mt-auto px-2">
                <span> &#171; see more &#187;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object
    }
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
    box-shadow: -6px 0px 55px -30px rgba(255, 255, 255, 1);
    transition: all 0.4s;
  }

  .info_section {
    background-blend-mode: multiply;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: linear-gradient(to top, #e5e6e6 40%, transparent 75%);

    @media (min-width: 992px) {
      background: linear-gradient(to right, #e5e6e6 50%, transparent 83%);
    }

    .info_section_width {
      width: 100%;

      @media (min-width: 992px) {
        width: 60%;
      }
    }

    .card-header-wrapper {
      margin-top: 65px;
      background: rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(3px);

      @media (min-width: 576px) {
        margin-top: 85px;
      }

      @media (min-width: 992px) {
        margin-top: 0;
        background: none;
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
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
