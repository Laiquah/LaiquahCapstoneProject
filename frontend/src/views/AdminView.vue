<template>
    <div>
        <h1>USERS</h1>
        <table class="table">
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
              <td><button>edit</button><button>delete</button></td>
            </tr>
            <tr v-else>
              <Spinner/>
            </tr>
          </tbody>
        </table>
        <h1>PRODUCTS</h1>
        <table class="table">
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
                <th>QUANTITY</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody v-for="product in products" :key="product.prodID">
              <tr v-if="product">
                <td>{{ product.prodID }}</td>
                <td>{{ product.prodName }}</td>
                <td>{{ product.prodDesc }}</td>
                <td>{{ product.prodModel }}</td>
                <td>{{ product.prodData }}</td>
                <td>{{ product.prodDW }}</td>
                <td><img :src="product.prodURL" :alt="product.prodName" loading="lazy" class="img-fluid"></td>
                <td>{{ product.prodPrice }}</td>
                <td>{{ product.category }}</td>
                <td>{{ product.quantity }}</td>
                <td><button>edit</button><button>delete</button></td>
              </tr>
            </tbody>
          </table>
          <h1>ORDERS</h1>
    </div>
</template>

<script>
import Spinner from '../components/SpinnerComp.vue'
    export default {
        components: {
          Spinner
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
</style>