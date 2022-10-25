import { createRouter, createWebHistory } from "vue-router";
import ProductListView from "../views/ProductListView.vue";
import BlogListView from "../views/BlogListView.vue";
import ProductForm from "../components/ProductForm";
import ProductDetail from "../views/ProductDetail";

const routes = [
  {
    path: "/",
    name: "ProductListView",
    component: ProductListView,
  },
  {
    path: "/update/:id",
    name: "UpdateProduct",
    component: ProductForm,
    props: true,
  },
  {
    path: "/details/:id",
    name: "ProductDetail",
    component: ProductDetail,
    props: true,
  },
  {
    path: "/create",
    name: "CreateProduct",
    component: ProductForm,
  },
  {
    path: "/blogs",
    name: "BlogListView",
    component: BlogListView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
