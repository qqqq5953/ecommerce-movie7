<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <h1 class="mb-0">
        <router-link class="navbar-brand nav-link active" :to="{ name: 'Home' }"
          >CMDB</router-link
        >
      </h1>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarDropdownMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse row flex-column flex-lg-row"
        id="navbarSupportedContent"
        ref="navbarDropdownMenu"
      >
        <div class="col">
          <form class="d-flex my-3">
            <div class="position-relative w-100">
              <!-- search bar -->
              <input
                class="form-control form-control-sm h-100"
                type="search"
                placeholder="Search"
                v-model.trim="keywords"
                aria-label="Search with dropdown button"
                ref="searchBar"
                @input="searchInput"
              />
              <a
                href="#"
                class="position-absolute end-0 top-0 bottom-0 p-3 d-flex align-items-center"
                @click.prevent="clearSearchBar"
              >
                <i class="bi bi-x-lg"></i>
              </a>

              <!-- 搜尋結果 -->
              <ul
                class="text-white list-unstyled position-absolute bg-primary mb-0 start-0 end-0 pt-3 search-list"
                ref="searchList"
                v-if="keywords"
              >
                <Loading :active="isLoading" :is-full-page="false"></Loading>
                <template v-if="match.length">
                  <li
                    class="px-4 py-2 search-item"
                    v-for="item in match"
                    :key="item"
                  >
                    <router-link
                      :to="{
                        name: 'Product',
                        params: {
                          productID: item.id
                        }
                      }"
                      class="text-decoration-none d-flex"
                      @click="
                        clearSearchBar();
                        toggleNavbarDropdown();
                      "
                    >
                      <img
                        v-if="item.imageUrl[0]"
                        :src="item.imageUrl[0]"
                        class="card-img-top img-fluid d-block"
                        :alt="item.title"
                      />
                      <div class="ms-3 text-light">
                        <h5 class="text-light mb-0">
                          {{ item.title }}
                        </h5>
                        <small class="text-light">{{
                          item.content.split('|')[2]
                        }}</small>
                      </div>
                    </router-link>
                  </li>
                  <li><hr class="dropdown-divider my-0" /></li>
                  <li class="px-4 py-3 search-item">
                    <a href="#" class="text-light" @click.prevent="toAllResult"
                      >See all results</a
                    >
                  </li>
                </template>
                <template v-else>
                  <li class="px-4 pb-3 search-item">no result</li>
                </template>
              </ul>
            </div>
          </form>
        </div>
        <div class="col">
          <ul
            class="navbar-nav ms-auto mb-0 text-center align-items-center"
            @click="toggleNavbarDropdown"
          >
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Pricing' }">
                <span>Pricing</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'AllProducts' }">
                <span>Products</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Watchlist' }"
                >Watchlist</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Login' }"
                >Admin</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Cart' }">
                <i class="bi bi-cart fs-3 position-relative">
                  <span
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark fs-6"
                  >
                    {{ cartLength }}
                    <span class="visually-hidden">items in cart</span>
                  </span>
                </i></router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      collapse: {},
      isLoading: false,
      keywords: '',
      products: [],
      match: [],
      cartLength: ''
    };
  },
  inject: ['emitter'],
  emits: ['calculate-product-number'],
  methods: {
    async getCartProductNumber() {
      // axios
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const response = await this.$http.get(api).catch((err) => {
        console.log(err);
      });

      // 儲存回傳資料
      this.cartLength = response.data.data.carts.length;
    },
    async getAllProducts() {
      this.isLoading = true;

      // api
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      const response = await this.$http.get(api).catch((err) => {
        console.log(err);
      });

      // 儲存資料
      this.products = response.data.products;

      // 排除訂閱的類型（重要）
      this.products = this.products.filter((item) => {
        return item.category !== 'Subscription';
      });

      this.isLoading = false;
    },
    searchInput() {
      if (!this.keywords) return;

      this.match = this.products.filter((item) => {
        return item.title
          .split('-')
          .join(' ')
          .toUpperCase()
          .match(this.keywords.toUpperCase());
      });
    },
    toggleSearchMenu() {
      window.addEventListener('click', (e) => {
        const target = e.target;

        // 點擊 searchBar 以外區域，將 searchList 關閉
        if (target !== this.$refs.searchBar && this.keywords.length) {
          this.$refs.searchList.classList.add('d-none');
        }

        // 點擊 searchBar 區域，將 searchList 打開
        if (target === this.$refs.searchBar && this.keywords.length) {
          this.$refs.searchList.classList.remove('d-none');
        }
      });
    },
    clearSearchBar() {
      this.keywords = '';
    },
    toAllResult() {
      if (!this.keywords) return;
      this.$router.push({
        name: 'AllResults',
        params: {
          genre: this.keywords
        }
      });
      this.clearSearchBar();
      this.toggleNavbarDropdown();
    },
    toggleNavbarDropdown() {
      this.$refs.navbarDropdownMenu.classList.remove('show');
    }
  },
  created() {
    this.toggleSearchMenu();
    this.getAllProducts();
    this.getCartProductNumber();
  },
  mounted() {
    this.emitter.on('calculate-product-number', (data) => {
      this.cartLength = data;
    });
  }
};
</script>

<style lang="scss" scoped>
input[type='search']::-webkit-search-cancel-button {
  display: none;
}

img {
  height: 70px;
  width: 50px;
  object-fit: cover;
}

.search-list {
  z-index: 3;
}

.search-item:hover {
  background-color: rgba(81, 84, 87, 0.4);
}
</style>
