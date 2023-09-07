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
    <div class="sort-dropdown">
      <label for="sort" id="sort2">Sort by: </label>
      <select id="sort" v-model="sortBy">
        <option value="default">Default</option>
        <option value="price">Price</option>
        <option value="category">Category</option>
        <option value="alphabetical">Alphabetical</option>
      </select>
      <button class="btn" @click="toggleSortDirection">
        {{ sort === "asc" ? "ascending" : "descending" }}
      </button>
    </div>
    <div
      class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4"
      v-if="products"
    >
      <div class="col" v-for="product in filteredProducts" :key="product">
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
              category:
              <p class="card-text">{{ product.category }}</p>
            </div>
            <div class="price">
              price:
              <p class="card-text">R{{ product.prodPrice }}</p>
            </div>
            <div class="quantity">
              quantity:
              <select>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </div>
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
      if(this.sortBy === 'prodPrice'){
        filtered = filtered.sort((a, b)=> (this.sort === 'asc' ? a.prodPrice - b.prodPrice : b.prodPricerice - a.prodPrice))
      } else if(this.sortBy === 'category'){
        filtered = filtered.sort((a, b)=> a.category.localeCompare(b.category) * (this.sort === 'asc' ? 1 : -1))
      } else if(this.sortBy === 'alphabetical'){
        filtered = filtered.sort((a, b)=> a.prodName.localeCompare(b.prodName) * (this.sort === 'asc' ? 1 : -1))
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
      this.$store.dispatch("addToCart", product);
    },
    searchProducts(e) {
      e.preventDefault();
      this.searchProducts = this.searchProducts.trim();
    },
    toggleSortDirection() {
      this.sort = this.sort === 'asc' ? 'desc' : 'asc'
    },
  },
  data() {
    return {
      searchProducts: "",
      sortBy: "",
      sort: ""
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
}

.quantity {
  margin-top: 1.5rem;
}

.buttons {
  margin-top: 1.5rem;
}

.description {
  height: 144px;
  overflow: auto;
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
}

.card {
  border: 2px solid #759e8f;
  background-color: #93b1a6;
  padding: 0.4rem;
}

@media screen and (max-width: 300px) {
  .row {
    --bs-gutter-x: 0;
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
