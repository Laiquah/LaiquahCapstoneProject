<template>
    <div>
        <h1 class="headings">CHECKOUT</h1>
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th class="heading">PRODUCT NAME</th>
                        <th class="heading">PRODUCT IMAGE</th>
                        <th class="heading">PRODUCT QUANTITY</th>
                        <th class="heading">PRODUCT PRICE</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr v-for="product in cartItems" :key="product.prodID">
                            <td>{{ product.prodName }}</td>
                            <td><img :src="product.prodURL" :alt="product.prodName" loading="lazy" class="img-fluid"></td>
                            <td>{{ product.quantity }}</td>
                            <td>R{{ product.prodPrice }}</td>
                        </tr>
                        <tr>
                            <td>TOTAL PRICE:R {{ $store.getters.cartTotal }}</td>
                        </tr>
                    </tbody>
            </table>

        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            cartItems() {
                return this.$store.state.cart
            }
        }
    }
</script>

<style scoped>
.heading {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: black;
    text-decoration: underline;
    font-weight: bolder;
  }
.headings {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: white;
    text-decoration: underline;
    font-weight: bolder;
  }
</style>