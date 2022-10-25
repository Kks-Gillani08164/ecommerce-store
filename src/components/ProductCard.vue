<template>
  <div class="card-container">
    <router-link
      :to="{ name: 'ProductDetail', params: { id: product.id } }"
      class="card-link"
    >
      <div class="product-card">
        <img :src="product.image" alt="Product Image" />
        <h1>{{ product.title }}</h1>
        <p>{{ product.detail }}</p>
      </div>
    </router-link>
    <div class="buttons-container">
      <button class="btn btn-delete" @click="emitDeleteEvent(product.index)">
        Delete
      </button>
      <button class="btn btn-update" @click="emitUpdateEvent(product.index)">
        Update
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  methods: {
    emitDeleteEvent(index) {
      return this.$emit("deleteThisProduct", index);
    },
    emitUpdateEvent(index) {
      return this.$emit("updateThisProduct", index);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-container {
  height: 20rem;
  width: 20rem;

  margin: 2rem;
  display: flex;
  flex-direction: column;
}

.product-card {
  padding: 1rem;
  box-sizing: border-box;
  border: 1px solid #000;
  max-width: fit-content;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
}

.card-link {
  color: #000;
  text-decoration: none;
}

.card-link img {
  width: 10rem;
}

.card-link h1 {
  font-size: 1.2rem;
}

.card-link p {
  font-size: 0.8rem;
}
</style>
