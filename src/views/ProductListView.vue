<template>
  <div class="home">
    <h1>All Products</h1>
    <router-link :to="{ name: 'CreateProduct' }" class="btn btn-create"
      >Create Product</router-link
    >
    <div class="product-list">
      <ProductCard
        v-for="(product, index) in products"
        :key="index"
        :product="{ ...product, id: index }"
        @deleteThisProduct="deleteProduct(index)"
        @updateThisProduct="routeToUpdatePage(index)"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from "@/components/ProductCard.vue";
import { mapGetters } from "vuex";
export default {
  name: "ProductListView",
  components: {
    ProductCard,
  },

  computed: {
    ...mapGetters({
      products: "productStore/getAllProducts",
    }),
  },

  methods: {
    deleteProduct(index) {
      this.$store.commit("productStore/DELETEPRODUCT", index);
    },

    routeToUpdatePage(index) {
      this.$router.push({ name: "UpdateProduct", params: { id: index } });
    },
  },
};
</script>
<style scoped>
.product-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.btn-create {
  text-decoration: none;
  background-color: brown;
  color: #fff;
  padding-inline: 1rem;
}
</style>
