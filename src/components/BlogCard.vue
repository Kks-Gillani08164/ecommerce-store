<template>
  <div class="blog-container">
    <img :src="blog.thumbnail" alt="Thumbnail" />
    <h1>{{ blog.title }}</h1>
    <p>{{ blog.body }}</p>
  </div>
</template>

<script>
export default {
  props: ["blog"],
};
</script>

<style scoped>
.blog-container {
  width: 70rem;
  height: 20rem;
  border: 1px solid #000;
  padding: 2rem;
  border-radius: 0.5rem;
  margin: 0 auto;
  margin-bottom: 2rem;
}

.blog-container img {
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
}
</style>
