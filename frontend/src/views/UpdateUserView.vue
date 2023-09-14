<template>
  <div>
    <h1 class="heading">EDIT THE USER HERE</h1>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn"
      @click="openEditModal(editingUser.userID)"
      data-bs-toggle="modal"
      :data-bs-target="'#updateUserModal' + editingUser.userID"
    >
      Click here to edit the user
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'updateUserModal' + editingUser.userID"
      tabindex="-1"
      :aria-labelledby="'updateUserLabel' + editingUser.userID"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="updateUserModalLabel">
              Edit an user here
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <label>FIRST NAME:</label>
            <input
              type="text"
              placeholder="first name"
              oninvalid="this.setCustomValidity('first name required')"
              oninput="this.setCustomValidity('')"
              required
              v-model="editingUser.firstName"
            />
            <label>last name:</label>
            <input
              type="text"
              placeholder="last name"
              oninvalid="this.setCustomValidity('last name required')"
              oninput="this.setCustomValidity('')"
              required
              v-model="editingUser.lastName"
            />
            <label>age:</label>
            <input
              type="text"
              placeholder="age"
              oninvalid="this.setCustomValidity('please enter your age here')"
              oninput="this.setCustomValidity('')"
              required
              v-model="editingUser.age"
            />
            <label>gender:</label>
            <input
              type="text"
              placeholder="gender"
              oninvalid="this.setCustomValidity('please enter your gender here')"
              oninput="this.setCustomValidity('')"
              required
              v-model="editingUser.gender"
            />
            <label>email address:</label>
            <input
              type="email"
              placeholder="emailAdd"
              oninvalid="this.setCustomValidity('please enter email here')"
              oninput="this.setCustomValidity('')"
              required
              v-model="editingUser.emailAdd"
            />
            <label>user role:</label>
            <input
              type="email"
              placeholder="emailAdd"
              oninvalid="this.setCustomValidity('please enter email here')"
              oninput="this.setCustomValidity('')"
              required
              v-model="editingUser.userRole"
            />
            <label>user profile:</label>
            <input
              type="text"
              id="test"
              placeholder="profile image"
              oninvalid="this.setCustomValidity('please insert a profile picture')"
              oninput="this.setCustomValidity('')"
              required
              v-model="editingUser.userURL"
            />
          </div>
          <div class="modal-footer">
            <button type="button" data-bs-dismiss="modal">Close</button>
            <button type="button" @click="updateUser(editingUser.userID)">
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
      editingUser: {
        ...this.thisUser,
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
    thisUser() {
      return this.$store.state.user;
    },
  },
  methods: {
    openEditModal(id) {
      // this.editingUser = JSON.parse(JSON.stringify(this.currentUser));
      const data = JSON.parse(localStorage.getItem("userData"));
      if (data) {
        this.editingUser = JSON.parse(JSON.stringify(data));
      }
      this.editingUserID = id;
    },
    async updateUser(id) {
      console.log(this.editingUser);
      try {
        await this.$store.dispatch("updateUser", {
          userID: id,
          data: { ...this.editingUser },
        });
        setTimeout(() => {
          location.reload();
        }, 500);
        console.log(this.editingUser);
        console.log(id);
      } catch (e) {
        console.log(e);
      }
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
