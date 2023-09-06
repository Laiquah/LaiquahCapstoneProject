<template>
    <div>
        <button
      type="button"
      class="btn"
      @click="openEditModal(product.prodID)"
      data-bs-toggle="modal"
      :data-bs-target="'#exampleModal' + product.prodID"
    >
      edit
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'exampleModal' + product.prodID"
      tabindex="-1"
      :aria-labelledby="'exampleModalLabel' + product.prodID"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Edit Product
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <label>Product ID:</label>
            <input
              placeholder="name"
              type="text"
              v-model="editingProduct.prodID"
            />
            <label>Product name:</label>
            <input
              placeholder="name"
              type="text"
              v-model="editingProduct.prodName"
            />
            <label>Product description:</label>
            <input
              placeholder="description"
              type="text"
              v-model="editingProduct.prodDesc"
            />
            <label>Product Model:</label>
            <input
              placeholder="quantity"
              type="text"
              v-model="editingProduct.prodModel"
            />
            <label>Product Data:</label>
            <input
              placeholder="price"
              type="text"
              v-model="editingProduct.prodData"
            />
            <label>Product Dimensions:</label>
            <input
              placeholder="category"
              type="text"
              v-model="editingProduct.prodDesc"
            />
            <label>Product category:</label>
            <input
              placeholder="image"
              type="text"
              v-model="editingProduct.category"
            />
            <label>Product price:</label>
            <input
              placeholder="image"
              type="text"
              v-model="editingProduct.prodPrice"
            />
            <label>Product image:</label>
            <input
              placeholder="image"
              type="text"
              v-model="editingProduct.prodURL"
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn"
              @click="updateProduct(product.prodID)"
              data-bs-dismiss="modal"
            >
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
        props: ["product"],
  data() {
    return {
      editingProduct: {
        ...this.product,
      },
      editingProductID: null,
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
  computed: {
    currentProduct() {
      return this.$store.state.product;
    },
  },
  methods: {
    openEditModal(prodID) {
      this.editingProductID = prodID;
      this.editingProduct = {
        ...this.$store.state.products.find(
          (product) => product.prodID === prodID
        ),
      };
    },
    updateProduct(prodID) {
      this.$store
        .dispatch("updateProduct", {
          prodID: prodID,
          ...this.editingProduct,
        })
        .then(() => {
          console.log("Product updated!");
        })
        .catch((err) => {
          console.error("Error updating: ", err);
        });
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
    width: 5rem;
    border: 2px solid #759e8f;
    background-color: #5C8374;
    color: white;
    margin-bottom: 1rem;
    font-weight: bolder;
    border-radius: 5rem;
  }

  button:hover{
    background-color: #93b1a6;
  }
</style>