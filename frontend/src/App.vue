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
  created(){
    const data = JSON.parse(localStorage.getItem('userData'))
    if(data){
      this.$store.commit("setUser", data)
    }
  }
};
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/titilliumtext');
                
#app {
  font-family: 'TitilliumText', sans-serif;
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
  border-bottom: 2px solid #5C8374;
}
</style>
