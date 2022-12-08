<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "TableCarts",
  methods: {
    ...mapActions(useCounterStore, [
      "fetchCart",
      "handleDeleteCart",
      "payment",
    ]),
    formatIDR(value) {
      return value.toLocaleString("id-ID");
    },
  },
  computed: {
    ...mapState(useCounterStore, ["carts"]),
  },
};
</script>
<template>
  <table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Price</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="cart in carts" :key="cart.id">
        <th scope="row">{{ cart.id }}</th>
        <td>{{ cart.Product.title }}</td>
        <td>Rp. {{ formatIDR(cart.Product.price) }},-</td>
        <td @click.prevent="handleDeleteCart(cart.id)">
          <button>Delete</button>
        </td>
      </tr>
    </tbody>
    <button @click.prevent="payment" type="button" class="btn btn-danger">
      Pay
    </button>
  </table>
</template>
