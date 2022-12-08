<script>
import { mapActions, mapState } from "pinia";
import Table from "../components/Table.vue";
import Navbar from "../components/Navbar.vue";
import { useCounterStore } from "../stores/counter";

export default {
  name: "ListView",
  components: { Navbar, Table },
  methods: {
    ...mapActions(useCounterStore, ["getDetail"]),
  },
  computed: {
    ...mapState(useCounterStore, ["details"]),
  },
  created() {
    this.getDetail();
  },
};
</script>
<template>
  <Navbar />
  <Table />
</template>
