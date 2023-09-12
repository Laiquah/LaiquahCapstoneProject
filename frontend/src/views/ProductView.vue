<template>
  <div>
    <h1 class="heading">PRODUCTS</h1>
    <form
      class="d-flex mb-2 searchBTN"
      role="search"
      @submit.prevent="searchProducts"
    >
      <input
        class="form-control"
        type="search"
        id="search"
        placeholder="Search"
        aria-label="Search"
        v-model="searchProducts"
      />
    </form>
    <div
      class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4"
      v-if="products"
    >
      <div class="col" v-for="product in filteredProducts" :key="product" data-aos="flip-right">
        <div class="card">
          <center>
            <img
              :src="product.prodUrl"
              class="card-img-top"
              :alt="product.prodName"
            />
          </center>
          <div class="card-body">
            <div class="title">
              <h5 class="card-title">{{ product.prodName }}</h5>
            </div>
            <div class="description">
              <p class="card-text">{{ product.prodDesc }}</p>
            </div>
            <div class="category">
              CATEGORY:
            </div>
              <p class="card-text">{{ product.category }}</p>
            <div class="price">
              PRICE:
            </div>
              <p class="card-text">R{{ product.prodPrice }}</p>
            <div class="buttons">
              <button @click="viewProduct(product.prodID)">VIEW MORE</button>
              <button @click="addToCart(product)">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from "../components/SpinnerComp.vue";
import swal from 'sweetalert'
export default {
  components: {
    Spinner,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    filteredProducts() {
      let filtered = this.products;
      if (this.searchProducts !== "") {
        filtered = filtered.filter(
          (product) =>
            product.prodName
              .toLowerCase()
              .includes(this.searchProducts.toLowerCase()) ||
            product.category
              .toLowerCase()
              .includes(this.searchProducts.toLowerCase())
        );
      }
      return filtered;
    },
  },

  methods: {
    viewProduct(prodID) {
      const chosenProd = this.products.find(
        (product) => product.prodID === prodID
      );
      this.$store.commit("setSelectedProduct", chosenProd);
      this.$router.push({ name: "ProductView", params: { prodID: prodID } });
    },
    addToCart(product) {
      if (product) {
        this.$store.dispatch("addToCartAction", product);
        localStorage.setItem('cart', JSON.stringify(this.$store.state.cart))
        swal({
          title: "ADDED TO CART",
          text: "You successfully added to cart!",
          type: "success",
          timer: 2000,
        });
      } else {
        swal({
          title: "DID NOT ADD TO CART",
          text: "It did not add to cart!",
          type: "error",
          timer: 2000
        })
      }
    },
    searchProducts(e) {
      e.preventDefault();
      this.searchProducts = this.searchProducts.trim();
    },
  },
  data() {
    return {
      searchProducts: "",
    };
  },
};
</script>

<style scoped>
.searchBTN {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  height: 72px;
  margin-bottom: 1.5rem;
}

.card-title{
  font-size: larger
}

.card {
  margin-bottom: 2rem;
  padding: 1rem;
}

h5 {
  font-weight: bolder;
}

.category {
  margin-top: 1.5rem;
  width: 100%;
  font-weight: bolder;
  font-size: large;
}

.price{
  font-weight: bolder;
  font-size: large;
}

.buttons {
  margin-top: 1.5rem;
}

.description {
  height: 144px;
  overflow: auto;
}

::-webkit-scrollbar {
  width: 2px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  background: #84a7a1;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
}

.card-img-top {
  aspect-ratio: 1/1;
  width: 15rem;
  padding: 1rem;
}

button {
  padding: 0.5rem;
  width: 10rem;
  border: 2px solid #759e8f;
  background-color: #5c8374;
  color: white;
  margin-bottom: 1rem;
  font-weight: bolder;
  border-radius: 5rem;
}

button:hover {
  background-color: #93b1a6;
}

#search {
  width: 20rem;
  display: flex !important;
  justify-content: center !important;
}

.heading {
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-decoration: underline;
  font-weight: bolder;
  text-shadow: 2px 2px #93b1a6
}

.card {
  border: 8px solid #759e8f;
  background-color: #93b1a6;
  padding: 0.4rem;
}

@media screen and (max-width: 300px) {
  .row {
    --bs-gutter-x: 0;
    flex-direction: column;
  }

  .card{
    width: 300px;
  }
}

@media screen and (max-width: 700px) {
  .row {
    --bs-gutter-x: 0;
  }

  .col {
    width: 50%;
  }
}
</style>
