<template>
  <div class="d-flex flex-column h-100">
    <div class="bg-primary">
      <Navbar></Navbar>
    </div>

    <div class="flex-grow-1">
      <router-view />
    </div>
    <div class="bg-dark border-top">
      <div class="container">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>
