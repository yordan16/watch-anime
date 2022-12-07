<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "Card",
  methods: {
    ...mapActions(useCounterStore, ["getData"]),
  },
  computed: {
    ...mapState(useCounterStore, ["products"]),
  },
  props: ["product"],
};
</script>

<template>
  <div class="list" style="background-color: black; height: 500vh">
    <div
      v-for="product in products"
      :key="product.title"
      v-bind:product="product"
    >
      <img :src="product.poster" rel="stylesheet" />
      <div class="cards">
        <div class="card mt-5">
          <h2 class="card-title">{{ product.title }}</h2>
          <img
            src="https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
            alt=""
          />
          <div class="card-desc">
            <p>Price:</p>
            <p>Rating:</p>
            <button type="button" class="btn btn-danger">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  margin: px;
  position: absolute;
  max-width: 250px;
  max-height: 350px;
  box-shadow: 0 30px 60px -6px white;
}

.card-title {
  display: block;
  text-align: center;
  color: #fff;
  background-color: grey;
  padding: 2%;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}

.card img {
  width: 100%;
  height: 98%;
  object-fit: cover;
  display: block;
  position: relative;
}

.card-desc {
  display: block;
  font-size: 1.2rem;
  position: absolute;
  height: 0;
  top: 0;
  opacity: 0;
  padding: 18px 8%;
  background-color: white;
  overflow-y: scroll;
  transition: 0.8s ease;
}

.card:hover .card-desc {
  opacity: 1;
  height: 100%;
}
</style>
