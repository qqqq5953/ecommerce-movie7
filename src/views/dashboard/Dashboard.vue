<template>
  <AdminNavbar></AdminNavbar>
  <div class="container-fluid position-relative">
    <router-view />
  </div>
</template>

<script>
import AdminNavbar from '@/components/AdminNavbar.vue';
export default {
  components: {
    AdminNavbar
  },
  created() {
    // 取出 cookie
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    );

    // 加入 global headers
    this.$http.defaults.headers.common.Authorization = token;

    // 驗證登入狀態
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api).then((res) => {
      if (!res.data.success) this.$router.push({ name: 'Login' });
    });
  }
};
</script>
