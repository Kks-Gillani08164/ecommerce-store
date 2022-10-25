import { createStore } from "vuex";
import router from "@/router/index";

const productStore = {
  namespaced: true,
  state: {
    products: [
      {
        image:
          "https://www.whiskas.de/content/img/product/detail/5900951265358.png",
        title: "1+ Mit Huhn 800g",
        detail:
          "Wir von Whiskas® verstehen was Ihre Katze von Natur aus braucht und liebt.",
      },

      {
        image:
          "https://www.whiskas.de/content/img/product/detail/5900951259098.png",
        title: "1+ Mit Rind 800g",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur",
      },

      {
        image:
          "https://www.whiskas.de/content/img/product/detail/5900951259289.png",
        title: "Indoor mit Huhn 800g",
        detail:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, nihil!",
      },
      {
        image:
          "https://www.whiskas.de/content/img/product/detail/5900951259470.png",
        title: "7+ Mit Huhn 800g",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, aspernatur!",
      },
      {
        image:
          "https://www.whiskas.de/content/img/product/detail/5900951265310.png",
        title: "Junior Mit Lachs 800g",
        detail:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus",
      },
    ],
  },

  getters: {
    getAllProducts(state) {
      return state.products;
    },

    getProduct: (state) => (index) => {
      return state.products[Number(index)];
    },
  },

  mutations: {
    DELETEPRODUCT(state, index) {
      state.products.splice(index, 1);
    },
    UPDATEPRODUCT(state, data) {
      state.products[data.id].title = data.title;
      state.products[data.id].detail = data.detail;
      router.push("/");
    },
    CREATEPRODUCT(state, data) {
      state.products.push(data);
      router.push("/");
    },
  },
};

const blogStore = {
  namespaced: true,
  state: {
    blogs: [
      {
        id: 1,
        title: "His mother had always taught him",
        body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
        thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      },
      {
        id: 2,
        title: "He was an expert but not in a discipline",
        body: "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
        thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
      },
      {
        id: 3,
        title: "Dave watched as the forest burned up on the hill.",
        body: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
        thumbnail: "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
      },
      {
        id: 4,
        title: "All he wanted was a candy bar.",
        body: "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.",
        thumbnail: "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
      },
      {
        id: 5,
        title: "Hopes and dreams were dashed that day.",
        body: "Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down.",
        thumbnail: "https://dummyjson.com/image/i/products/5/thumbnail.jpg",
      },
    ],
  },
  getters: {
    getAllBlogs(state) {
      return state.blogs;
    },
  },
};

export default createStore({
  modules: {
    productStore,
    blogStore,
  },
});
