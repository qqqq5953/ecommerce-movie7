<template>
  <Navbar></Navbar>

  <router-view />

  <div class="bg-dark">
    <div class="container">
      <Footer></Footer>
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
