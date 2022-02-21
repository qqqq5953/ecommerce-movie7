<template>
  <div
    class="toast rounded-3"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    ref="toast"
  >
    <div class="toast-header rounded-3">
      <span
        :class="`bg-${msg.style}`"
        class="p-2 rounded me-2 d-inline-block"
      ></span>
      <strong class="mx-2">{{ msg.title }}</strong>
      <button
        type="button"
        class="btn-close ms-auto"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
    <div class="toast-body">
      <strong class="me-auto">{{ msg.status }}</strong>
      <p v-if="msg.content">{{ msg.content }}</p>
    </div>
  </div>
</template>
<script>
import Toast from 'bootstrap/js/dist/toast';

export default {
  name: 'Toast',
  props: ['msg'],
  mounted() {
    const toastEl = this.$refs.toast;
    const toast = new Toast(toastEl, {
      delay: 6000
    });
    toast.show();
  }
};
</script>
