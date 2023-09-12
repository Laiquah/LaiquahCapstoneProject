<template>
    <div>
        <button
      type="button"
      class="btn"
      data-bs-toggle="modal"
      data-bs-target="#addProductModal"
    >
      add product
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="addProductModal"
      tabindex="-1"
      aria-labelledby="addProductModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModal2Label">New Product</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <label for="productname">Product name:</label>
            <input
            oninvalid="this.setCustomValidity('provide product name')"
            oninput="this.setCustomValidity('')" required
              id="productname"
              placeholder="product Name"
              type="text"
              v-model="model.product.prodName"
            />
            <label for="description">Product description:</label>
            <input
            oninvalid="this.setCustomValidity('provide a description')"
            oninput="this.setCustomValidity('')" required
              id="description"
              placeholder="product desc"
              type="text"
              v-model="model.product.prodDesc"
            />
            <label for="description">Product model:</label>
            <input
            oninvalid="this.setCustomValidity('provide model for the product')"
            oninput="this.setCustomValidity('')" required
              id="model"
              placeholder="model"
              type="text"
              v-model="model.product.prodModel"
            />
            <label for="quantity">Product data:</label>
            <input
            oninvalid="this.setCustomValidity('provide data about the product')"
            oninput="this.setCustomValidity('')" required
              id="data"
              placeholder="data"
              type="text"
              v-model="model.product.prodData"
            />
            <label for="price">Product dimensions:</label>
            <input
            oninvalid="this.setCustomValidity('provide product dimensions')"
            oninput="this.setCustomValidity('')" required
              id="dimensions"
              placeholder="dimensions"
              type="text"
              v-model="model.product.prodDW"
            />
            <label for="category">Product category:</label>
            <input
            oninvalid="this.setCustomValidity('provide a category')"
            oninput="this.setCustomValidity('')" required
              id="category"
              placeholder="category"
              type="text"
              v-model="model.product.category"
            />
            <label for="category">Product price:</label>
            <input
            oninvalid="this.setCustomValidity('provide a price for the product')"
            oninput="this.setCustomValidity('')" required
              id="price"
              placeholder="price"
              type="number"
              v-model="model.product.prodPrice"
            />
            <label for="productUrl">Product Image:</label>
            <input
            oninvalid="this.setCustomValidity('provide an image for the product')"
            oninput="this.setCustomValidity('')" required
              id="productUrl"
              placeholder="product image"
              type="text"
              v-model="model.product.prodUrl"
            />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn" @click="createProduct" data-bs-dismiss="modal">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        data() {
    return {
      model: {
        product: {
          prodName: "",
          prodDesc: "",
          prodModel: "",
          prodData: "",
          prodDW: "",
          category: "",
          prodPrice: "",
          prodUrl: "",
        },
      },
    };
  },
  computed:{
    product(){
      return this.$store.state.product
    }
  },
  methods: {
    createProduct() {
      this.$store.dispatch("addProduct", this.model.product);
    },
  },
    }
</script>

<style scoped>
input {
    width: 100%;
    height: 3rem;
    margin-bottom: 2rem;
  }

  button {
    padding: .5rem;
    width: 10rem;
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