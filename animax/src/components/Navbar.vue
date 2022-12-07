<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "Navbar",
  computed: {
    ...mapState(useCounterStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["logout"]),
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <img src="../assets/img/animax-logo.png" alt="" style="width: 80px" />
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" style="color: white" href="#">Cart</a>
        </li>
        <li class="nav-item active">
          <a
            @click.prevent="logout"
            class="nav-link"
            style="color: white"
            href="#"
            >Sign out</a
          >
        </li>
      </ul>
    </div>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
  </nav>
</template>
