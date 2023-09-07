<template>
  <div>
     <!-- Button trigger modal -->
    <button
      type="button"
      class="btn"
      @click="openEditModal(user.userID)"
      data-bs-toggle="modal"
      :data-bs-target="'#texampleModal' + user.userID"
    >
      edit
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'texampleModal' + user.userID"
      tabindex="-1"
      :aria-labelledby="'texampleModalLabel' + user.userID"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="texampleModalLabel3">
              Modal title
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <label>userID:</label>
            <input type="text" placeholder="ID" v-model="editingUser.userID" />
            <label>first name:</label>
            <input
              type="text"
              placeholder="first name"
              v-model="editingUser.firstName"
            />
            <label>last name:</label>
            <input
              type="text"
              placeholder="last name"
              v-model="editingUser.lastName"
            />
            <label>Age:</label>
            <input
              type="number"
              placeholder="age"
              v-model="editingUser.age"
            />
            <label>gender:</label>
            <input
              type="text"
              placeholder="gender"
              v-model="editingUser.gender"
            />
            <label>email address:</label>
            <input
              type="text"
              placeholder="email address"
              v-model="editingUser.emailAdd"
            />
            <label>user role:</label>
            <input
              type="text"
              placeholder="role"
              v-model="editingUser.userRole"
            />
            <label>user profile:</label>
            <input
              type="text"
              placeholder="profile image"
              v-model="editingUser.userURL"
            />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal">
              Close
            </button>
            <button
              type="button"
              class="btn"
              @click="updateProduct(user.userID)"
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
  props: ["user"],
  data() {
    return {
      editingUser: {
        ...this.user,
      },
      editingUserID: null,
      model: {
        user: {
          firstName: "",
          lastName: "",
          age: "",
          gender: "",
          emailAdd: "",
          userRole: "",
          userURL: "",
        },
      },
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.user;
    },
  },
  methods: {
    openEditModal(id) {
      console.log("reached");
      this.editingUserID = id;
      console.log(this.$store.state.users)
      this.editingUser = {
        ...this.$store.state.users.find((user) => user.userID === id),
      };
    },
    updateProduct(id) {
      this.$store
        .dispatch("updateUser", {
          userID: id,
          data: { ...this.editingUser },
        })
        .then(() => {
          console.log("User updated!");
        })
        .catch((err) => {
          console.error("Error updating: ", err);
        });
    },
  },
};
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
