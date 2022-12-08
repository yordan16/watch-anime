<script>
import { mapActions, mapState } from "pinia";
import Navbar from "../components/Navbar.vue";
import TableCarts from "../components/TableCarts.vue";
import { useCounterStore } from "../stores/counter";

export default {
  name: "CartView",
  components: { Navbar, TableCarts },
  methods: {
    ...mapActions(useCounterStore, ["fetchCart", "payment"]),
  },
  computed: {
    ...mapState(useCounterStore, ["carts"]),
  },
  created() {
    this.fetchCart();
  },
};
</script>

<template>
  <Navbar />
  <TableCarts />
</template>
