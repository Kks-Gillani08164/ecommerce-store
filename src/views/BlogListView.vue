<template>
  <h1>All Blogs</h1>
  <div>
    <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
  </div>
</template>

<script>
import BlogCard from "@/components/BlogCard.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    BlogCard,
  },

  computed: {
    ...mapGetters({
      blogs: "blogStore/getAllBlogs",
    }),
  },
};
</script>

<style scoped></style>
