<template>
    <div>
        <h1 class="heading">USERS</h1>
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
                <td><img :src="user.userURL" :alt="user.firstname" loading="lazy" class="img-fluid image"></td>
                <td><updateUser :user="user" /><button>delete</button></td>
              </tr>
              <tr v-else>
                <Spinner/>
              </tr>
            </tbody>
          </table>
        </div>
        <h1 class="heading">PRODUCTS</h1>
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
                  <td><img :src="product.prodURL" :alt="product.prodName" loading="lazy" class="img-fluid"></td>
                  <td>{{ product.prodPrice }}</td>
                  <td>{{ product.category }}</td>
                  <td><updateProduct :product="product" /><button>delete</button></td>
                </tr>
              </tbody>
            </table>
        </div>
          <h1 class="heading">ORDERS</h1>
    </div>
</template>

<script>
import Spinner from '../components/SpinnerComp.vue'
import updateUser from '../components/UpdateUserComp.vue'
import updateProduct from '../components/UpdateProductComp.vue'
    export default {
        components: {
          Spinner,
          updateUser,
          updateProduct
        },
        computed: {
          users() {
            return this.$store.state.users
          },
          user() {
            return this.$store.state.user
          },
          product() {
            return this.$store.state.product
          },
          products() {
            return this.$store.state.products
          }
        },
        mounted() {
          this.$store.dispatch("fetchUsers")
          this.$store.dispatch("fetchUser")
          this.$store.dispatch("fetchProduct")
          this.$store.dispatch("fetchProducts")
        }
    }
</script>

<style scoped>
.image {
  width: 5rem;
}

.text{
  font-size: smaller;
}

.table{
  border: 10px solid #93B1A6;
}

.heading {
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-decoration: underline;
  font-weight: bolder;
}
</style>