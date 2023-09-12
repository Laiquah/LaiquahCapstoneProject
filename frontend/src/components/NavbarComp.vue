<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="https://i.postimg.cc/1XHKthPf/Screenshot-2023-08-27-131317-removebg-preview.png" alt="logo" loading="lazy" id="logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/">HOME</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about">ABOUT</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products">PRODUCTS</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/help">FAQs</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact">CONTACT</router-link>
            </li>
            <li class="nav-item" v-if="user ? user.userRole === 'admin' : null">
              <router-link to="/admin">ADMIN</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" v-if="!user">LOGIN</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register" v-if="!user">REGISTER</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/profile"><i class="bi bi-person" id="person"></i></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cart"><i class="bi bi-cart-check" id="person"></i></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
    import { useCookies } from "vue3-cookies";
const {cookies} = useCookies();
  export default {
  computed: {
    user() {
      return this.$store.state.user
      console.log(user)
    },
    result() {
      return this.user?.results
    },
    isAdmin() {
      return this.result?.userRole?.toLowerCase() === "admin"
    }
  }, 
  created() {
    const user = JSON.parse(localStorage.getItem('userData')) 
  }
}
;

</script>

<style scoped>
.nav-item{
  margin-left: 2rem;
  font-weight: bold;
  font-size: x-large;
  text-shadow: 2px 2px #528974;
}

.navbar{
  background-color: #040D12;
}

#logo{
  width: 6rem;
}

#person{
  width: 5rem;
}
</style>