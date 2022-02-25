<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <h1 class="h3 mb-0 text-white px-2 px-md-0">DashBoard</h1>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
        ref="navbarDropdownMenu"
      >
        <ul class="navbar-nav ms-auto mb-0 px-3" @click="toggleNavbarDropdown">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Products' }"
              >產品</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Orders' }"
              >訂單</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Coupon' }"
              >優惠券</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="logOut">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logOut() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api).then((res) => {
        if (res.data.success) this.$router.push({ name: 'Login' });
      });
    },
    toggleNavbarDropdown() {
      this.$refs.navbarDropdownMenu.classList.remove('show');
    }
  }
};
</script>
