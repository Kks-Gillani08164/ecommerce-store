<template>
  <h2>{{ page }} a Product</h2>
  <div class="form-container">
    <form
      @submit.prevent="
        page === 'create' ? createProduct(this.data) : updateProduct(this.data)
      "
    >
      <div>
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Title Goes here ..."
          v-model="title"
        />
      </div>
      <div>
        <label for="image">Image</label>
        <input type="text" id="image" placeholder="Image URL" v-model="image" />
      </div>
      <div>
        <label for="detail">Details</label>
        <!-- prettier-ignore -->
        <textarea id="detail" name="detail" rows="10" v-model="detail">Product Details ...</textarea
        >
      </div>
      <div class="buttons-container">
        <button class="btn btn-update">{{ page }} Product</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      detail: "",
      image: "",
    };
  },
  computed: {
    ...mapGetters({
      products: "productStore/getAllProducts",
    }),

    page() {
      return this.$route.path.trim().split("/")[1];
    },

    data() {
      return {
        id: Number(this.id),
        title: this.title,
        detail: this.detail,
        image: this.image,
      };
    },
  },

  methods: {
    updateProduct(data) {
      this.$store.commit("productStore/UPDATEPRODUCT", data);
    },
    createProduct(data) {
      this.$store.commit("productStore/CREATEPRODUCT", {
        title: data.title,
        detail: data.detail,
        image: data.image,
      });
    },
  },

  created() {
    if (this.products && this.id) {
      this.title = this.products[this.id].title;
      this.detail = this.products[this.id].detail;
      this.image = this.products[this.id].image;
    }
  },
};
</script>

<style scoped>
h2 {
  text-transform: capitalize;
}

input,
textarea,
label {
  display: block;
  width: 100%;
  margin-top: 0.5rem;
  box-sizing: border-box;
}

textarea {
  resize: none;
}

.form-container {
  display: flex;
  justify-content: center;
}

form {
  text-align: left;
  width: 20rem;
}

form input,
textarea {
  padding: 0.3rem;
}

form label {
  font-weight: bold;
}

form div {
  margin-bottom: 1rem;
}

.btn-update {
  text-transform: capitalize;
}
</style>
