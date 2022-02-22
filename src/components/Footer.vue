<template>
  <footer class="py-5 px-5 px-xl-0">
    <div class="row flex-column flex-md-row justify-content-md-between">
      <section class="col col-md-8 pe-md-4">
        <h2 class="h1 border border-2 rounded-3 p-2 mb-0 d-inline-block">
          <router-link
            class="text-white text-decoration-none"
            :to="{ name: 'Home' }"
            >CMDB</router-link
          >
        </h2>
        <p class="text-white mt-3 mb-md-0">
          CMDB Offer worldwide latest movies fitting your lifestyle.
        </p>
        <p class="text-white mt-3 mt-lg-0 mb-md-0">
          We differentiate ourselves with 3 advantages: Diversity, Quality and
          Flexibility.
        </p>
      </section>

      <section class="col py-2 py-md-0">
        <ul class="nav flex-column w-50">
          <li class="nav-item me-0">
            <router-link
              class="nav-link text-muted ps-0"
              :to="{ name: 'AllProducts' }"
            >
              <span>Products</span>
            </router-link>
          </li>
          <li class="nav-item me-0">
            <router-link
              class="nav-link text-muted ps-0"
              :to="{ name: 'Pricing' }"
            >
              <span>Pricing</span>
            </router-link>
          </li>

          <li class="nav-item me-0">
            <router-link
              class="nav-link text-muted ps-0"
              :to="{ name: 'Watchlist' }"
              >Watchlist</router-link
            >
          </li>
          <li class="nav-item me-0">
            <router-link
              class="nav-link text-muted ps-0"
              :to="{ name: 'Cart' }"
            >
              Cart</router-link
            >
          </li>
          <li class="nav-item me-0">
            <router-link
              class="nav-link text-muted ps-0"
              :to="{ name: 'Login' }"
              >Admin</router-link
            >
          </li>
        </ul>
      </section>
    </div>

    <div
      class="d-flex flex-column align-items-md-center d-md-block pt-3 fs-6 text-center"
    >
      <span>© 2022 Andy Hsieh.</span>
      <span> All rights reserved.</span>
    </div>
  </footer>
</template>
