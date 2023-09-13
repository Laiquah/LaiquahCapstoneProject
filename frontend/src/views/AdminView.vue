<template>
  <div>
    <h1 class="heading">USERS</h1>
    <addUser/>
    <div class="table-responsive">
      <table class="table table-bordered border-#93B1A6 text-center" data-aos="zoom-in-down">
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
            <td> <!-- Button trigger modal -->
              <button
                type="button"
                class="btn"
                @click="openEditModal(user.userID)"
                data-bs-toggle="modal"
                :data-bs-target="'#texampleModal' + user.userID"
              >
                edit
              </button>
          
              <!-- Modal -->
              <div
                class="modal fade"
                :id="'texampleModal' + user.userID"
                tabindex="-1"
                :aria-labelledby="'texampleModalLabel' + user.userID"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="texampleModalLabel3">
                        Edit an user here
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <label>userID:</label>
                      <input type="text" placeholder="ID" v-model="editingUser.userID" />
                      <label>first name:</label>
                      <input
                      oninvalid="this.setCustomValidity('new first name required')"
                            oninput="this.setCustomValidity('')" required
                        type="text"
                        placeholder="first name"
                        v-model="editingUser.firstName"
                      />
                      <label>last name:</label>
                      <input
                      oninvalid="this.setCustomValidity('new last name required')"
                            oninput="this.setCustomValidity('')" required
                        type="text"
                        placeholder="last name"
                        v-model="editingUser.lastName"
                      />
                      <label>Age:</label>
                      <input
                      oninvalid="this.setCustomValidity('new age required')"
                            oninput="this.setCustomValidity('')" required
                        type="number"
                        placeholder="age"
                        v-model="editingUser.age"
                      />
                      <label>gender:</label>
                      <input
                      oninvalid="this.setCustomValidity('new gender required')"
                            oninput="this.setCustomValidity('')" required
                        type="text"
                        placeholder="gender"
                        v-model="editingUser.gender"
                      />
                      <label>user role:</label>
                      <input
                      oninvalid="this.setCustomValidity('change in role')"
                            oninput="this.setCustomValidity('')" required
                        type="text"
                        placeholder="role"
                        v-model="editingUser.userRole"
                      />
                      <label>email address:</label>
                      <input
                      oninvalid="this.setCustomValidity('provide your new email')"
                            oninput="this.setCustomValidity('')" required
                        type="text"
                        placeholder="email address"
                        v-model="editingUser.emailAdd"
                      />
                      <label>user profile:</label>
                      <input
                      oninvalid="this.setCustomValidity('new profile required')"
                            oninput="this.setCustomValidity('')" required
                        type="text"
                        placeholder="profile image"
                        v-model="editingUser.userURL"
                      />
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn" data-bs-dismiss="modal">
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn"
                        @click="updateProduct(user.userID)"
                        data-bs-dismiss="modal"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div><button @click="deleteUser(user.userID)">delete</button></td>
          </tr>
          <tr v-else>
            <Spinner />
          </tr>
        </tbody>
      </table>
    </div>
    <h1 class="heading">PRODUCTS</h1>
    <div class="row">
      <div class="col-4" data-aos="zoom-in-down">
        <button @click="sortByPrice" id="button">Sort by Price</button>
      </div>
      <div class="col-4" data-aos="zoom-in-down">
        <select class="form-select m-auto" aria-label="Default select example" v-model="categoryFilter">
          <option value="default">Filter/Default</option>
          <option value="generator">generator</option>
          <option value="inverter">inverter</option>
          <option value="ups">ups</option>
          <option value="solar panel">solar panel</option>
          <option value="powerbank">powerbank</option>
          <option value="gas stoves">gas stoves</option>
          <option value="Loadshedding Lights">loadshedding lights</option>
        </select>
      </div>
      <div class="col-4" data-aos="zoom-in-down">
        <button @click="sortByAlphabet" id="button2">Sort Alphabetically</button>
      </div>
    </div>
    <addProduct/>
    <div class="table-responsive">
      <table class="table table-bordered border-#93B1A6 text-center" data-aos="zoom-in-down">
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
// import updateUser from '../components/UpdateUserComp.vue'
import updateProduct from "../components/UpdateProductComp.vue";
import addProduct from "../components/AddProductComp.vue";
import addUser from '../components/AddUserComp.vue'
export default {
  props: ["user"],
  data() {
    return {
      sortCategory: "",
      sortBy: "prodName",
      sortOrder: "asc",
      categoryFilter: "default",
      editingUser: {
        ...this.user,
      },
      editingUserID: null,
      model: {
        user: {
          firstName: "",
          lastName: "",
          age: "",
          gender: "",
          emailAdd: "",
          userRole: "",
          userURL: "",
        },
      },
    }
  },
  components: {
    Spinner,
    // updateUser,
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
    filteredProducts() {
    // let filtered = this.$store.state.products.filter((products) =>
      // products.prodName.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
      // (this.categoryFilter === 'default' || products.category === this.categoryFilter)
    // )
    return filtered;
  },
  currentUser() {
      return this.$store.state.user;
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
    // filteredProducts() {
    // let filtered = this.$store.state.products.filter((products) =>
      // products.prodName.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
    //   (this.categoryFilter === null || products.category === this.categoryFilter)
    // )
    // return filtered;
//  },
openEditModal(id) {
      console.log("reached");
      this.editingUserID = id;
      this.editingUser = {
        ...this.$store.state.users.find((user) => user.userID === id),
      };
    },
    updateProduct(id) {
      this.$store
        .dispatch("updateUser", {
          userID: id,
          data: { ...this.editingUser },
        })
        .then(() => {
          console.log("User updated!");
        })
        .catch((err) => {
          console.error("Error updating: ", err);
        });
        setTimeout(() => {
          location.reload();
        }, 500);
    },
  },
};
</script>

<style scoped>
.modal{
  height: max-content;
}
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
  width: 10rem;
  border: 2px solid #759e8f;
  background-color: #93b1a6;
  color: black;
  margin-bottom: 1rem;
  font-weight: bolder;
  border-radius: 5rem;
}

button:hover {
  color: white;
  border: 2px solid #93b1a6;
  background-color: #5c8374;
}


#button2 {
  padding: 0.5rem;
  width: 15rem;
  border: 2px solid #759e8f;
  background-color: #93b1a6;
  color: black;
  margin-bottom: 1rem;
  font-weight: bolder;
  border-radius: 5rem;
}

#button2:hover {
  color: white;
  border: 2px solid #93b1a6;
  background-color: #5c8374;
}


</style>
