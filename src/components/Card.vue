<template>
  <ul class="card-wrapper row flex-nowrap list-unstyled">
    <li
      class="col-12 col-sm-8 col-md-5 col-lg-4 movie-poster"
      v-for="item in results"
      :key="item.id"
      style="scroll-snap-align: start"
    >
      <a
        href="#"
        class="d-block text-decoration-none h-100"
        @click.prevent="getProductDetails(item.id)"
      >
        <div class="position-relative h-100">
          <img
            v-if="item.imageUrl[0]"
            :src="item.imageUrl[0]"
            class="img-fluid d-block h-100 w-100"
            :alt="item.title"
            style="object-fit: cover; object-position: center center"
          />
          <div
            class="movie-intro position-absolute top-0 bottom-0 left-0 right-0 w-100 h-100 d-none d-xl-block"
            style="background: rgba(0, 0, 0, 0.7)"
          >
            <div
              class="d-flex flex-column text-white position-absolute bottom-0 m-auto p-4 w-100"
              style="top: 35%"
            >
              <h3 class="text-white text-center">
                {{ item.title }}
              </h3>
              <p class="mt-auto">{{ item.description }}</p>
              <small class="d-block fs-6 text-end">{{
                item.content.split('|')[2]
              }}</small>
            </div>
          </div>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    results: {
      type: Array
    }
  },
  methods: {
    getProductDetails(id) {
      this.$router.push({ name: 'Product', params: { productID: id } });
    }
  }
};
</script>

<style lang="scss" scoped>
.card-wrapper {
  width: 90%;
  height: 300px;

  @media (min-width: 414px) {
    width: 90%;
    height: 345px;
  }

  @media (min-width: 768px) {
    width: 90%;
    height: 325px;
  }

  @media (min-width: 1200px) {
    width: 90%;
    height: 435px;
  }

  @media (min-width: 1400px) {
    width: 90%;
    height: 500px;
  }
}

.movie-intro {
  opacity: 0;
  transition: opacity 0.5s;
  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

.movie-poster:hover {
  .movie-intro {
    opacity: 1;
    width: 100%;
  }
}
</style>
