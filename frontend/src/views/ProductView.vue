<template>
    <div>
        <form class="d-flex mb-2 searchBTN" role="search">
            <input class="form-control" type="search" id="search" placeholder="Search" aria-label="Search"/>
        </form>
        <h1 class="heading">PRODUCTS</h1>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.searchBTN{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  
#search{
    margin-top: 2rem;
    width: 20rem;
    display: flex !important;
    justify-content: center !important;
  }

  .heading {
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-decoration: underline;
    font-weight: bolder;
  }
</style>