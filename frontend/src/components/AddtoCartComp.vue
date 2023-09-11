<template>
  <div>
    <h2 class="headings">YOUR CART</h2>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th class="heading">PRODUCT NAME</th>
            <th class="heading">PRODUCT IMAGE</th>
            <th class="heading">PRODUCT QUANTITY</th>
            <th class="heading">PRODUCT PRICE</th>
            <th class="heading">REMOVE</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in cart" :key="product.prodID">
            <td>{{ product.prodName }}</td>
            <td>
              <img
                :src="product.prodURL"
                :alt="product.prodName"
                loading="lazy"
                class="img-fluid"
              />
            </td>
            <td>{{ product.quantity }}</td>
            <td>R{{ product.prodPrice }}</td>
            <td><button @click="removeFromCart(index)">Remove</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <button @click="$router.push('/checkout')">PROCEED TO CHECKOUT</button>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
  methods: {
    removeFromCart(index) {
      this.$store.dispatch('removeFromCartAction', index);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    updateQuantity(index) {
      const item = this.cart[index];
      this.$store.dispatch('addToCartAction', { product: item, quantity: item.quantity });
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },

  },
};
</script>

<style scoped>
tbody {
  width: 100%;
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
  padding: 0.5rem;
  width: 15rem;
  border: 2px solid #759e8f;
  background-color: #93b1a6;
  color: white;
  margin-bottom: 1rem;
  font-weight: bolder;
  border-radius: 5rem;
}

button:hover {
  background-color: #5c8374;
}

.img-fluid {
  width: 15rem;
}

hr {
  width: 75%;
  border: 2px solid white;
}
</style>
