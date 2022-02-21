<template>
  <div class="toast-container position-fixed px-3 end-0" style="top: 35px">
    <Toast v-for="(msg, key) in messages" :key="key" :msg="msg" />
  </div>
</template>

<script>
import Toast from '@/components/Toast.vue';

export default {
  components: { Toast },
  data() {
    return {
      messages: []
    };
  },
  inject: ['emitter'],
  mounted() {
    this.emitter.on('push-message', (message) => {
      const { title, style, status, content } = message;
      this.messages.push({ title, style, status, content });
    });
  }
};
</script>
