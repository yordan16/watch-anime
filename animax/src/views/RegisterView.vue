<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "RegisterView",
  data() {
    return {
      dataRegis: {
        email: "",
        passwor: "",
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["register"]),
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
        <h2>Please sign up here</h2>
        <form @submit.prevent="register(dataRegis)">
          <div class="input_wrap">
            <input
              v-model="dataRegis.email"
              type="text"
              placeholder="Enter email here.."
            />
          </div>
          <div class="input_wrap">
            <input
              v-model="dataRegis.password"
              type="text"
              placeholder="Enter password here.."
            />
          </div>
          <div class="input_wrap">
            <button type="submit">Sign in</button>
          </div>
          <div class="sign_up">
            <p>Already have an account? <a href="">Sign in now.</a></p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
