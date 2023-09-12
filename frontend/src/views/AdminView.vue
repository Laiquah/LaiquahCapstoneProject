<template>
  <div>
    <h1 class="heading">USERS</h1>
    <addUser/>
    <div class="table-responsive">
      <table class="table table-bordered border-#93B1A6 text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>SURNAME</th>
            <th>AGE</th>
            <th>GENDER</th>
            <th>ROLE</th>
            <th>EMAIL ADDRESS</th>
            <th>PROFILE IMAGE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody v-for="user in users" :key="user.userID">
          <tr v-if="users">
            <td>{{ user.userID }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.userRole }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>
              <img
                :src="user.userURL"
                :alt="user.firstname"
                loading="lazy"
                class="img-fluid image"
              />
            </td>
            <td><updateUser :user="user" /><button @click="deleteUser(user.userID)">delete</button></td>
          </tr>
          <tr v-else>
            <Spinner />
          </tr>
        </tbody>
      </table>
    </div>
    <h1 class="heading">PRODUCTS</h1>
    <div class="row">
      <div class="col-4">
        <button @click="sortByPrice" id="button">Sort by Price</button>
      </div>
      <div class="col-4">
        <select v-model="categoryFilter">
          <option value="">All Categories</option>
          <option value="GENERATOR">GENERATOR</option>
          <option value="INVERTERS">INVERTERS</option>
          <option value="UPS">UPS</option>
          <option value="SOLAR PANELS">SOLAR PANELS</option>
          <option value="POWER BANKS">POWER BANKS</option>
          <option value="GAS STOVES">GAS STOVES</option>
          <option value="LOADSHEDDING LIGHTS">LOADSHEDDING LIGHTS</option>
        </select>
      </div>
      <div class="col-4">
        <button @click="sortByAlphabet" id="button">Sort Alphabetically</button>
      </div>
    </div>
    <addProduct />
    <div class="table-responsive">
      <table class="table table-bordered border-#93B1A6 text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>MODEL</th>
            <th>DATA</th>
            <th>DIMENSIONS</th>
            <th>IMAGE</th>
            <th>PRICE (R)</th>
            <th>CATEGORY</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody v-for="product in products" :key="product.prodID">
          <tr v-if="product">
            <td>{{ product.prodID }}</td>
            <td>{{ product.prodName }}</td>
            <td class="text">{{ product.prodDesc }}</td>
            <td class="text">{{ product.prodModel }}</td>
            <td class="text">{{ product.prodData }}</td>
            <td class="text">{{ product.prodDW }}</td>
            <td>
              <img
                :src="product.prodURL"
                :alt="product.prodName"
                loading="lazy"
                class="img-fluid"
              />
            </td>
            <td>{{ product.prodPrice }}</td>
            <td>{{ product.category }}</td>
            <td><updateProduct :product="product" /><button @click="deleteProduct(product.prodID)">delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Spinner from "../components/SpinnerComp.vue";
import updateUser from "../components/UpdateUserComp.vue";
import updateProduct from "../components/UpdateProductComp.vue";
import addProduct from "../components/AddProductComp.vue";
import addUser from "../components/AddUserComp.vue"
export default {
  data() {
    return {
      sortBy: "prodName",
      sortOrder: "asc",
      categoryFilter: null,
      filteredProducts: []
    }
  },
  components: {
    Spinner,
    updateUser,
    updateProduct,
    addProduct,
    addUser
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    user() {
      return this.$store.state.user;
    },
    product() {
      return this.$store.state.product || [];
    },
    products() {
      return this.$store.state.products || [];
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchUser");
    this.$store.dispatch("fetchProduct");
    this.$store.dispatch("fetchProducts");
  },
  methods: {
    deleteProduct(prodID) {
      if (confirm("Are you sure you want to delete this product?")) {
        this.$store.dispatch("deleteProduct", prodID);
        setTimeout(() => {
          location.reload();
        }, 500);
      }
    },
    deleteUser(id) {
      if (confirm("Are you sure you want to delete this user?")) {
        this.$store.dispatch("deleteUser", id);
        setTimeout(() => {
          location.reload();
        }, 500);
      }
    },
    sortByPrice() {
      this.sortBy = "prodPrice";
      this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
      this.sortProducts();
    },
    sortByAlphabet() {
      console.log("reached")
      this.sortBy = "prodName";
      this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
      this.sortProducts();
    },
    sortProducts() {
      this.products.sort((a, b) => {
        const priceA = parseFloat(a[this.sortBy]);
      const priceB = parseFloat(b[this.sortBy]);
        if (this.sortBy === 'prodPrice') {
          if (this.sortOrder === "asc") {
            return priceA - priceB
          } else {
            return priceB - priceA
          }
        }else if (this.sortBy === 'prodName') {
          if (this.sortOrder === "asc") {
            return a[this.sortBy].localeCompare(b[this.sortBy])
          } else {
            return b[this.sortBy].localeCompare(a[this.sortBy])
          }
        }
      });
    },
    // filterByCategory() {
    //   console.log('Category Filter:', this.categoryFilter);
    // this.filteredProducts = this.products.filter((product) => {
    //   if (!this.categoryFilter) {
    //     return true;
    //   }
    //   return this.products.category === this.categoryFilter;
    // });
    // console.log('Filtered Products:', this.filteredProducts);
    filteredProducts() {
    const selectedCategory = this.categoryFilter;

    if (!selectedCategory) {
      return this.products;
    } else {
      return this.products.filter(product => product.category === selectedCategory);
    }
  },
  },
};
</script>

<style scoped>
.image {
  width: 5rem;
}

.text {
  font-size: smaller;
}

.table {
  border: 10px solid #93b1a6;
}

.heading {
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-decoration: underline;
  font-weight: bolder;
  text-shadow: 2px 2px #93b1a6
}

button {
  padding: 0.5rem;
  width: 5rem;
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

#button {
  padding: 0.5rem;
  width: 10rem;
  border: 2px solid #759e8f;
  background-color: #93b1a6;
  color: white;
  margin-bottom: 1rem;
  font-weight: bolder;
  border-radius: 5rem;
}

#button:hover {
  background-color: #5c8374;
}


</style>
