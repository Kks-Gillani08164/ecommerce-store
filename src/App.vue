<template>
  <nav>
    <router-link :to="{ name: 'ProductListView' }">Products</router-link> |
    <router-link :to="{ name: 'BlogListView' }">Blogs</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.buttons-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.btn {
  cursor: pointer;
  padding: 0.7rem 0.5rem;
  color: #000;
  font-weight: bold;
  border: none;
  border-radius: 0.2rem;
  transition: all 0.3s;
  flex: 1;
}

.btn-delete {
  background-color: blueviolet;
  margin-right: 2rem;
}

.btn-update {
  background-color: aqua;
}

.btn-delete:hover,
.btn-update:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: #fff;
}
</style>
