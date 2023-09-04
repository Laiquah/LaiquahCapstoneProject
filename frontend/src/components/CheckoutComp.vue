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
                        <th class="heading">PRODUCT PRICE (R)</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr v-for="product in cartItems" :key="product.prodID">
                            <td>{{ product.prodName }}</td>
                            <td><img :src="product.prodURL" :alt="product.prodName" loading="lazy" class="img-fluid"></td>
                            <td>{{ product.quantity }}</td>
                            <td>R{{ product.prodPrice }}</td>
                        </tr>
                    </tbody>
            </table>
            <center>
                <hr>
            </center>
            <div>
                <div class="price">TOTAL PRICE:R {{ $store.getters.cartTotal }}</div>
            </div>
            <h1 class="headings">CARD DETAILS</h1>
            <center>
                <div class="card">
                    <label>Card Number:</label>
                    <input>
                    <br>
                    <label>Expiration Date:</label>
                    <div class="row">
                        <div class="col">
                            <input class="month">
                        </div>
                        <div class="col">
                            <input class="month">
                        </div>
                    </div>
                    <br>
                    <label>Security Code:</label>
                    <input>
                    <br>
                </div>
                <button>Submit</button>
            </center>
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
label{
    font-weight: bolder;
    font-size: 1rem;
}

.month{
    width: 10rem;
}
.card {
    width: 30rem;
    height: 19rem;
    padding: 2rem;
    margin-bottom: 2rem;
    background: #5C8374;
    box-shadow: #759e8f 0px 2px 4px, #759e8f 0px 7px 13px -3px, #759e8f 0px -3px 0px inset;
  }

hr {
    width: 75%;
    border: 2px solid white
  }

.price{
    display: flex;
    justify-content: space-evenly;
    border: 2px solid white;
    background: white;
    color: black;
    font-weight: bold;
}
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

  button {
    padding: .5rem;
    width: 15rem;
    border: 2px solid #759e8f;
    background-color: #93b1a6;
    color: white;
    margin-bottom: 1rem;
    font-weight: bolder;
    border-radius: 5rem;
  }
  
  button:hover{
    background-color: #5C8374;
  }
</style>