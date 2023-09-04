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
                    <form class="form">
                      <div class="credit-card-info--form">
                        <div class="input_container">
                          <label for="password_field" class="input_label">Card holder full name</label>
                          <input id="password_field" class="input_field" type="text" name="input-name" title="Inpit title" placeholder="Enter your full name">
                        </div>
                        <div class="input_container">
                          <label for="password_field" class="input_label">Card Number</label>
                          <input id="password_field" class="input_field" type="number" name="input-name" title="Inpit title" placeholder="0000 0000 0000 0000">
                        </div>
                        <div class="input_container">
                          <label for="password_field" class="input_label">Expiry Date / CVV</label>
                          <div class="split">
                          <input id="password_field" class="input_field" type="text" name="input-name" title="Expiry Date" placeholder="01/23">
                          <input id="password_field" class="input_field" type="number" name="cvv" title="CVV" placeholder="CVV">
                        </div>
                        </div>
                      </div>
                      <center>
                          <button class="purchase--btn" @click="$router.push('/thank')">Submit</button>
                      </center>
                    </form>
                </div>
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
.card {
    width: 30rem;
    height: max-content;
    padding: 2rem;
    margin-bottom: 2rem;
    background: #5C8374;
    box-shadow: #759e8f 0px 2px 4px, #759e8f 0px 7px 13px -3px, #759e8f 0px -3px 0px inset;
  }
  
  .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }
  
  .credit-card-info--form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .input_container {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  .split {
    display: grid;
    grid-template-columns: 4fr 2fr;
    gap: 15px;
  }
  
  .split input {
    width: 100%;
  }
  
  .input_label {
    font-size: 20px;
    color: black;
    font-weight: 600;
  }
  
  .input_field {
    width: auto;
    height: 40px;
    padding: 0 0 0 16px;
    border-radius: 9px;
    outline: none;
    background-color: #F2F2F2;
    border: 1px solid #e5e5e500;
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
  }
  
  .input_field:focus {
    border: 1px solid transparent;
    box-shadow: 0px 0px 0px 2px #242424;
    background-color: transparent;
  }
  
  .purchase--btn {
    height: 55px;
    border: 2px solid #759e8f;
    background-color: #93b1a6;
    color: white;
    border-radius: 11px;
    border: 0;
    outline: none;
    color: #ffffff;
    font-size: 13px;
    margin-bottom: 1.5rem;
    font-weight: 700;
    box-shadow: 0px 0px 0px 0px #FFFFFF, 0px 0px 0px 0px #000000;
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
  }
  
  .purchase--btn:hover {
    box-shadow: 0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #0000003a;
  }
  
  .input_field::-webkit-outer-spin-button,
  .input_field::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  .input_field[type=number] {
    -moz-appearance: textfield;
  }

  input{
    height: 2rem;
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