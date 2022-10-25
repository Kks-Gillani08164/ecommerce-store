<template>
  <router-link to="/" class="back-btn">&#8606; Back to Main</router-link>
  <div>
    <img :src="product.image" alt="Proudct Image" />
    <h1>{{ product.title }}</h1>
    <p>{{ product.detail }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"],

  computed: {
    product() {
      return this.$store.getters.getProduct(this.id);
    },
  },
};
</script>

<style scoped>
img {
  height: 15rem;
}

.back-btn {
  text-decoration: none;
  font-weight: bold;
}
</style>
