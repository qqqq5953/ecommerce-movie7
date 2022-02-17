<template>
  <!-- <div class="container-fluid"></div> -->
  <!-- <div class="position-absolute left-0 right-0 w-100" style="z-index: 1">
  </div> -->
  <Navbar></Navbar>
  <div class="position-relative">
    <router-view />
  </div>
  <ToastMessage></ToastMessage>
</template>

<script>
import ToastMessage from '@/components/ToastMessage.vue';
import Navbar from '@/components/Navbar.vue';
import sortData from '@/methods/sortData';
import emitter from '@/methods/emitter';
import { pushMessageStateForUser } from '@/methods/pushMessageState';

export default {
  components: {
    Navbar,
    ToastMessage
  },
  provide() {
    return {
      sortData,
      emitter,
      pushMessageStateForUser
    };
  }
};
</script>
