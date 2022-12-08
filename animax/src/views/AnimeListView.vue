<script>
import { mapActions, mapState } from "pinia";
import Card from "../components/Card.vue";
import Navbar from "../components/Navbar.vue";
import { useCounterStore } from "../stores/counter";

export default {
  name: "AnimeListView",
  components: { Card, Navbar },
  computed: {
    ...mapState(useCounterStore, ["products"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["getData"]),
  },
  created() {
    this.getData();
  },
};
</script>
<template>
  <Navbar />
  <div class="list" style="height: auto">
    <link rel="stylesheet" />
    <div class="cards">
      <Card />
    </div>
  </div>
</template>
