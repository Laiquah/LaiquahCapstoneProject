<template>
  <div>
    <h1 class="heading">EDIT THE PRODUCT HERE</h1>
    <!-- Button trigger modal -->
    <button
      type="button"
      @click="openEditModal(editingProduct.prodID)"
      data-bs-toggle="modal"
      :data-bs-target="'#updateProductModal' + editingProduct.prodID"
    >
      Click here to edit the product
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'updateProductModal' + editingProduct.prodID"
      tabindex="-1"
      :aria-labelledby="'updateProductModalLabel' + editingProduct.prodID"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="updateProductModalLabel">
              Edit a product here
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <label>product name:</label>
            <input
              type="text"
              placeholder="product name"
              oninvalid="this.setCustomValidity('first name required')"
              oninput="this.setCustomValidity('')"
              required
              v-model="editingProduct.prodName"
            />
            <label>product description:</label>
            <input
              type="text"
              placeholder="product description"
              oninvalid="this.setCustomValidity('last name required')"
              oninput="this.setCustomValidity('')"
              required
              v-model="editingProduct.prodDesc"
            />
            <label>product model:</label>
            <input
              type="text"
              placeholder="product model"
              oninvalid="this.setCustomValidity('please enter your age here')"
              oninput="this.setCustomValidity('')"
              required
              v-model="editingProduct.prodModel"
            />
            <label>product data:</label>
            <input
              type="text"
              placeholder="product data"
              oninvalid="this.setCustomValidity('please enter your gender here')"
              oninput="this.setCustomValidity('')"
              required
              v-model="editingProduct.prodData"
            />
            <label>product dimensions:</label>
            <input
              type="text"
              placeholder="product dimensions"
              oninvalid="this.setCustomValidity('please enter email here')"
              oninput="this.setCustomValidity('')"
              required
              v-model="editingProduct.prodDW"
            />
            <label>product category:</label>
            <input
              type="text"
              placeholder="category"
              oninvalid="this.setCustomValidity('please enter email here')"
              oninput="this.setCustomValidity('')"
              required
              v-model="editingProduct.category"
            />
            <label>product price:</label>
            <input
              type="text"
              id="test"
              placeholder="price"
              oninvalid="this.setCustomValidity('please insert a profile picture')"
              oninput="this.setCustomValidity('')"
              required
              v-model="editingProduct.prodPrice"
            />
            <label>product image:</label>
            <input
              type="text"
              id="test"
              placeholder="product image"
              oninvalid="this.setCustomValidity('please insert a profile picture')"
              oninput="this.setCustomValidity('')"
              required
              v-model="editingProduct.prodURL"
            />
          </div>
          <div class="modal-footer">
            <button type="button" data-bs-dismiss="modal">Close</button>
            <button type="button" @click="updateProduct(editingProduct.prodID)">
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
      // editingProduct: {
      //   ...this.currentProduct,
      // },
      editingProduct: {},
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
  mounted() {
    this.$store.dispatch("fetchProduct");
  },
  computed: {
    currentProduct() {
      return this.$store.state.product;
    },
  },
  methods: {
    // openEditModal(prodID) {
    //   this.editingProductID = prodID;
    //   this.editingProduct = {
    //     ...this.$store.state.products.find(
    //       (product) => product.prodID === prodID
    //     ),
    //   };
    // },
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
};
</script>

<style scoped>
.heading {
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-decoration: underline;
  font-weight: bolder;
  text-shadow: 2px 2px #93b1a6;
}

input {
  width: 100%;
  height: 3rem;
  margin-bottom: 2rem;
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

.btn {
  padding: 0.5rem;
  width: 15rem;
  border: 2px solid #759e8f;
  background-color: #93b1a6;
  color: black;
  margin-bottom: 1rem;
  font-weight: bolder;
  border-radius: 5rem;
}

.btn:hover {
  color: white;
  border: 2px solid #93b1a6;
  background-color: #5c8374;
}

label {
  font-size: larger;
  font-weight: bolder;
  color: white;
  text-shadow: 2px 2px 2px black;
}
</style>
