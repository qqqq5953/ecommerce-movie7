<template>
  <Navbar></Navbar>
  <div class="container py-5 px-5 px-xl-0 text-center">
    <h2 class="display-3 mt-4">404</h2>
    <div class="my-3">
      <i class="bi bi-emoji-dizzy text-warning display-2"></i>
      <i class="bi bi-emoji-dizzy text-warning display-2 mx-4"></i>
      <i class="bi bi-emoji-dizzy text-warning display-2"></i>
    </div>
    <h2 class="h1 lh-base">Oops ! The page doesn't exist !</h2>
    <div class="mt-4">
      <router-link :to="{ name: 'Home' }" class="btn btn-warning"
        >Home<i class="bi bi-house-door ms-2"></i
      ></router-link>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar
  }
};
</script>
