<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "Table",
  methods: {
    ...mapActions(useCounterStore, ["getDetail", "handleAddCart"]),
    formatIDR(value) {
      return value.toLocaleString("id-ID");
    },
  },
  computed: {
    ...mapState(useCounterStore, ["details"]),
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
      <tr v-for="detail in details" :key="detail.id">
        <th scope="row">{{ detail.id }}</th>
        <td>{{ detail.title }}</td>
        <td>Rp. {{ formatIDR(detail.price) }},-</td>
        <td @click.prevent="handleAddCart(detail.id)"><button>Buy</button></td>
      </tr>
    </tbody>
  </table>
</template>
