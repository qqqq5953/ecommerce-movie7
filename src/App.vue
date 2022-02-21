<template>
  <router-view></router-view>
  <ToastMessage></ToastMessage>
</template>

<script>
import ToastMessage from '@/components/ToastMessage.vue';
import sortData from '@/methods/sortData';
import emitter from '@/methods/emitter';
import {
  pushMessageStateForUser,
  pushMessageStateForDashboard
} from '@/methods/pushMessageState';

export default {
  components: {
    ToastMessage
  },
  provide() {
    return {
      sortData,
      emitter,
      pushMessageStateForUser,
      pushMessageStateForDashboard
    };
  }
};
</script>

<style lang="scss">
@import './assets/all';

html,
body,
#app {
  height: 100%;
}

body {
  scroll-behavior: smooth;
}
</style>
