<template>
  <div>
    <div class="modal-body">
      <form @submit.prevent="updateProduct">
        <label>Product name:</label>
        <br>
        <input
          placeholder="name"
          type="text"
          v-model="editingProduct.prodName"
        />
        <br>
        <label>product description:</label>
        <br>
        <input
          placeholder="description"
          type="text"
          v-model="editingProduct.prodDesc"
        />
        <br>
        <label>product model:</label>
        <br>
        <input
          placeholder="model"
          type="text"
          v-model="editingProduct.prodModel"
        />
        <br>
        <label>product data:</label>
        <br>
        <input
          placeholder="data"
          type="text"
          v-model="editingProduct.prodData"
        />
        <br>
        <label>product dimensions:</label>
        <br>
        <input
          placeholder="dimensions"
          type="text"
          v-model="editingProduct.prodDW"
        />
        <br>
        <label>product category:</label>
        <br>
        <input
          placeholder="category"
          type="text"
          v-model="editingProduct.category"
        />
        <br>
        <label>product price:</label>
        <br>
        <input
          placeholder="price"
          type="text"
          v-model="editingProduct.prodPrice"
        />
        <br>
        <label>product image:</label>
        <br>
        <input
          placeholder="image"
          type="text"
          v-model="editingProduct.prodURL"
        />
        <br>
        <button type="submit">Update Product</button>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  data(){
    return {
      editingProduct: {}
    }
  },
  computed:{
    products(){
      return this.$store.state.products
    }
  },
  mounted(){
    const prodID = parseInt(this.$route.params.prodID);
    this.editingProduct = this.products.find(product => product.prodID === prodID)
    console.log("Editing product: ", this.editingProduct)
  },
  methods:{
    async updateProduct(){
      await this.$store.dispatch("updateProduct", this.editingProduct)
      Swal.fire({
        icon: "success",
        title:"Product updated",
        text:"You have successfully updated this product"
      }).then(()=>{
        this.$router.push('/admin')
      })
    }
  }
}
</script>

<style scoped>
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

input {
  width: 75%;
  height: 3rem;
  margin-bottom: 2rem;
}

label {
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: larger;
  font-weight: bolder;
  color: white;
  text-shadow: 2px 2px 2px black;
}
</style>
