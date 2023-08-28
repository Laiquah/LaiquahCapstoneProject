<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="" alt="logo" loading="lazy"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/">home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about">about</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products">products</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/help">FAQs</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact">contact</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin">admin</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/profile">profile</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>