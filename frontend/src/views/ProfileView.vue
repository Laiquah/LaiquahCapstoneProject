<template>
  <div>
    <div v-if="user">
      <h1 class="heading">
        welcome to your profile {{ user.firstName }} {{ user.lastName }}
      </h1>
      <img
        :src="user.userURL"
        :alt="user.firstName"
        loading="lazy"
        class="img-fluid"
      />
      <div class="userinformation">
        <label>name:</label>
        <p>{{ user.firstName }}</p>
        <br />
        <label>surname:</label>
        <p>{{ user.lastName }}</p>
        <br />
        <label>age:</label>
        <p>{{ user.age }}</p>
        <br />
        <label>gender:</label>
        <p>{{ user.gender }}</p>
        <br />
        <label>email:</label>
        <p>{{ user.emailAdd }}</p>
        <br />
        <label>role:</label>
        <p>{{ user.userRole }}</p>
        <br />
        <label>password:</label>
        <p>{{ user.userPass }}</p>
      </div>
    </div>
    <center>
      <button @click="logout">logout</button>
      <br />
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn"
        @click="openEditModal(userData.userID)"
        data-bs-toggle="modal"
        :data-bs-target="'#texampleModal' + userData.userID"
      >
        edit
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        :id="'texampleModal' + userData.userID"
        tabindex="-1"
        :aria-labelledby="'texampleModalLabel' + userData.userID"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="texampleModalLabel3">
                update your information
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
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
              <label>age:</label>
              <input type="text" placeholder="age" v-model="editingUser.age" />
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
              <label>user password:</label>
              <input
                type="text"
                placeholder="password"
                v-model="editingUser.userPass"
              />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn" data-bs-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                class="btn"
                @click="updateUser(userData.userID)"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <button @click="deleteUser(user.userID)">delete</button>
    </center>
  </div>
</template>

<script>
// import edit from '../components/UpdateUserComp.vue'
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
export default {
  data() {
    return {
      user: null,
      editingUser: {
        ...this.userData,
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
          userPass: "",
        },
      },
    };
  },
  created() {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }

    const data = JSON.parse(localStorage.getItem("userData"));
    if (data) {
      this.$store.commit("setUser", data);
    }
  },
  components: {
    // edit
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    thisUser() {
            return this.$store.state.userData;
        },
  },
  methods: {
    deleteUser(id) {
      if (confirm("Are you sure you want to delete this user?")) {
        this.$store.dispatch("deleteUser", id);
        setTimeout(() => {
          location.reload();
        }, 500);
      }
    },
    logout() {
      console.log("reached");
      cookies.remove("RealUser");
      const data = JSON.parse(localStorage.getItem("userData"));
      if (data) {
        localStorage.removeItem("userData");
      }
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.img-fluid {
  border-radius: 50rem;
  width: 20rem;
}

button {
  padding: 0.5rem;
  width: 10rem;
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

.heading {
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-decoration: underline;
  font-weight: bolder;
}
</style>
