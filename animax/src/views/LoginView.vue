<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "LoginView",
  data() {
    return {
      dataLogin: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState(useCounterStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["login", "loginGoogle"]),
    callback(resp) {
      this.loginGoogle(resp.credential);
    },
  },
};
</script>

<template>
  <section class="container">
    <div class="head">
      <img src="../assets/img/animax-logo.png" alt="" />
    </div>
  </section>
  <section class="banner">
    <img src="../assets/img/background.webp" class="fit" alt="" />

    <div class="login_body">
      <div class="login_box">
        <h2>Please sign in first</h2>
        <form @submit.prevent="login(dataLogin)">
          <div class="input_wrap">
            <input
              v-model="dataLogin.email"
              type="text"
              placeholder="Enter email here.."
            />
          </div>
          <div class="input_wrap">
            <input
              v-model="dataLogin.password"
              type="text"
              placeholder="Enter password here.."
            />
          </div>
          <div class="input_wrap">
            <button type="submit">Sign in</button>
          </div>
          <GoogleLogin v-bind:callback="callback" />
          <div class="sign_up">
            <p>
              Dont have an account?
              <RouterLink to="/register" href="">Create here.</RouterLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
