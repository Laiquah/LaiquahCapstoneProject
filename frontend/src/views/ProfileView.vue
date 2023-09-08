<template>
  <div>
    <div v-if="user">
      <h1 class="heading">
        welcome to your profile {{ user.firstName }} {{ user.lastName }}
      </h1>
      <div class="row">
        <div class="col-6">
          <center>
            <img
              :src="user.userURL"
              :alt="user.firstName"
              loading="lazy"
              class="img-fluid"
            />
          </center>
        </div>
        <div class="col-6">
          <div class="userinformation">
            <center>
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
            </center>
          </div>
        </div>
      </div>
    </div>
    <center>
      <button @click="logout">logout</button>
      <br />
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn1"
        @click="openEditModal(thisUser.userID)"
        data-bs-toggle="modal"
        :data-bs-target="'#mexampleModal' + editingUser.userID"
      >
        edit
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        :id="'mexampleModal' + editingUser.userID"
        tabindex="-1"
        :aria-labelledby="'mexampleModalLabel' + editingUser.userID"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="mexampleModalLabel3">
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
                v-model="user.firstName"
              />
              <label>last name:</label>
              <input
                type="text"
                placeholder="last name"
                v-model="user.lastName"
              />
              <label>age:</label>
              <input type="text" placeholder="age" v-model="user.age" />
              <label>gender:</label>
              <input
                type="text"
                placeholder="gender"
                v-model="user.gender"
              />
              <label>email address:</label>
              <input
                type="text"
                placeholder="emailAdd"
                v-model="user.emailAdd"
              />
              <label>user profile:</label>
              <input
                type="text"
                id="test"
                placeholder="profile image"
                v-model="user.userURL"
              />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn" data-bs-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                class="btn"
                @click="updateUser(editingUser.userID)"
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
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
export default {
  data() {
    return {
      editingUser: {
        ...this.thisUser,
      },
      editingUserID: null,
      model:{
        user: {
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        emailAdd: "",
        userURL: "",
      },
      }
      
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
    thisUser() {
      return this.$store.state.user;
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
    openEditModal(id) {
      // this.editingUser = JSON.parse(JSON.stringify(this.currentUser));
      const data = JSON.parse(localStorage.getItem("userData"))
      if (data) {
        this.user = JSON.stringify(data)
      }
      this.editingUserID = id;
    },
    async updateUser(id) {
      console.log(this.editingUser)
      try {
        await this.$store.dispatch("updateUser", {
          userID: id,
          data: { ...this.editingUser },
        });
        console.log(this.editingUser)
        console.log(id)
      } catch (e) {
        console.log(e);
      }
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
.btn1 {
  padding: 0.5rem;
  width: 10rem;
  border: 2px solid #759e8f;
  background-color: #93b1a6;
  color: white;
  margin-bottom: 1rem;
  font-weight: bolder;
  border-radius: 5rem;
}

.btn1:hover {
  background-color: #5c8374;
}

.btn-close {
  padding: 0.5rem;
  width: 4rem;
  border: 2px solid #759e8f;
  background-color: #93b1a6;
  color: white;
  margin-bottom: 1rem;
  font-weight: bolder;
  border-radius: 5rem;
}

.btn-close:hover {
  background-color: #5c8374;
}


.heading {
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-decoration: underline;
  font-weight: bolder;
}

p{
  border: 3px solid white;
  background-color: white;
  color: black;
  width: 50%;
  height: 2rem;
}

input {
  width: 100%;
  height: 3rem;
  margin-bottom: 2rem;
}

</style>
