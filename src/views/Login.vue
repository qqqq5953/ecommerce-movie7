<template>
  <div class="bg-primary">
    <Navbar></Navbar>
  </div>
  <div class="container py-4 py-sm-5 px-5 px-xl-0">
    <form class="row justify-content-center" @submit.prevent="signIn">
      <div class="col-md-10 col-lg-6 px-4 py-5 border border-dark login">
        <h1 class="h2 border-bottom border-dark pb-2 mb-4">Admin Login</h1>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label text-dark fw-bold"
            >Email address</label
          >
          <input
            type="email"
            class="form-control text-dark border border-dark"
            id="exampleInputEmail1"
            placeholder="Email address"
            aria-describedby="emailHelp"
            v-model="user.username"
            autofocus
            required
          />
          <div id="emailHelp" class="form-text text-dark fs-6 lh-sm">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label
            for="exampleInputPassword1"
            class="form-label text-dark fw-bold"
            >Password</label
          >
          <input
            type="password"
            class="form-control border border-dark"
            placeholder="Password"
            id="exampleInputPassword1"
            v-model="user.password"
            required
          />
        </div>
        <button type="submit" class="btn btn-dark">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar
  },
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    async signIn() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      const response = await this.$http.post(api, this.user).catch((err) => {
        console.log(err);
      });

      if (response.data.success) {
        const { token, expired } = response.data;
        document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
        this.$router.push({ name: 'Products' });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  background: rgba(240, 173, 78, 0.93);
  box-shadow: 0 3px 10px 1px rgba(52, 58, 64, 0.5);
}
</style>
