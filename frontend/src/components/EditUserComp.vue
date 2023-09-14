<template>
    <div>
        <button
      type="button"
      @click="openEditModal(thisProduct.prodID)"
      data-bs-toggle="modal"
      :data-bs-target="'#updateProductModal' + editingProduct.prodID"
    >
      Click here to edit the product
    </button>

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
              v-model="editingProduct.prodUrL"
            />
          </div>
          <div class="modal-footer">
            <button type="button" data-bs-dismiss="modal">Close</button>
            <button type="button" @click="updateProduct(editingProduct.prodID)" data-bs-dismiss="modal">
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
        props: ["products"],
  data() {
    return {
      editingProduct: {...this.thisProduct},
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
    thisProduct() {
      return this.$store.state.products || {};
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
};
</script>

<style scoped>

</style>