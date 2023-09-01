<template>
    <div>
        <center>
            <a href="/products" class="btn">GO BACK</a>
            <div class="card" id="card">
              <div v-if="product">
                <h1>{{ product.prodName }}</h1>
                <div>
                  <img :src="product.prodUrl" :alt="product.prodName" loading="lazy" class="img-fluid" id="image" />
                  <p>Category: {{ product.category }}</p>
                  <div id="description">
                    <label>Description</label>
                    <br>
                    {{ product.prodDesc }}
                  </div>
                  <div id="model">
                    <label>Model</label>
                    <br>
                    {{ product.prodModel }}
                  </div>
                  <div id="data">
                    <label>Data</label>
                    <br>
                    {{ product.prodData }}
                  </div>
                  <div id="dimensions">
                    <label>Dimensions</label>
                    <br>
                    {{ product.prodDW }}
                  </div>
                  <p>Price: R{{ product.prodPrice }}</p>
                </div>
              </div>
              <div v-else>
                <Spinner />
              </div>
            </div>
            </center>
    </div>
</template>

<script>
import Spinner from './SpinnerComp.vue'
    export default {
        components: {
            Spinner
        },
        computed: {
            product() {
                return this.$store.state.selectedProduct
            }

        }
    }
</script>

<style scoped>
#image{
    width: 40rem;
    margin-bottom: 3rem;
  }
  
  #card{
    margin-top: 2rem;
    width: fit-content;
    padding: 2rem;
    margin-bottom: 2rem;
  }
  
  h1{
    margin-top: 3rem;
    margin-bottom: 3rem;
    font-size: xx-large;
    font-weight: bolder;
    text-decoration: underline;
  }
  
  #description{
    margin-bottom: 2rem;
    width: 30rem;
  }

  #model{
    margin-bottom: 2rem;
    width: 30rem;
  }

  #dimensions{
    margin-bottom: 2rem;
    width: 30rem;
  }

  #data{
    margin-bottom: 2rem;
    width: 30rem;
  }

  label{
    font-size: larger;
    font-weight: bolder;
    text-decoration: underline;
  }

  .btn {
    margin-top: 2rem;
    padding: 1rem;
    width: 15rem;
    background-color: #93b1a6;
    border: 2px solid #759e8f;
    color: white;
    margin-bottom: 1rem;
    font-weight: bolder;
    border-radius: 5rem;
  }
</style>