<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/NavbarComp.vue";
import Footer from "./components/FooterComp.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },

};
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/granstander-clean');
                
#app {
  font-family: 'Granstander Clean', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #5C8374;
  color: white;
}

nav {
  padding: 30px;
}

a{
  text-decoration: none !important;
  color: white !important;
}

nav a.router-link-exact-active{
  color: #5C8374;
  text-shadow: 2px 2px white;
}
</style>
