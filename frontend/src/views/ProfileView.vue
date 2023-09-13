<template>
  <div>
    <div v-if="user">
      <h1 class="heading">
        WELCOME TO YOUR PROFILE :: {{ user.firstName }} {{ user.lastName }}
      </h1>
      <div class="row">
        <div class="col-6">
          <label>PROFILE IMAGE:</label>
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
              <label>NAME:</label>
              <p>{{ user.firstName }}</p>
              <br />
              <label>SURNAME:</label>
              <p>{{ user.lastName }}</p>
              <br />
              <label>AGE:</label>
              <p>{{ user.age }}</p>
              <br />
              <label>GENDER:</label>
              <p>{{ user.gender }}</p>
              <br />
              <label>EMAIL:</label>
              <p>{{ user.emailAdd }}</p>
              <br />
              <label>ROLE:</label>
              <p>{{ user.userRole }}</p>
            </center>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <center>
          <button @click="logout">logout</button>
          <button
            type="button"
            class="btn1"
            @click="openEditModal(thisUser.userID)"
            data-bs-toggle="modal"
            :data-bs-target="'#mexampleModal' + editingUser.userID"
          >
            edit
          </button>
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
                    oninvalid="this.setCustomValidity('first name required')"
                  oninput="this.setCustomValidity('')" required
                    v-model="editingUser.firstName"
                  />
                  <label>last name:</label>
                  <input
                    type="text"
                    placeholder="last name"
                    oninvalid="this.setCustomValidity('last name required')"
                  oninput="this.setCustomValidity('')" required
                    v-model="editingUser.lastName"
                  />
                  <label>age:</label>
                  <input type="text" placeholder="age" oninvalid="this.setCustomValidity('please enter your age here')"
                  oninput="this.setCustomValidity('')" required v-model="editingUser.age" />
                  <label>gender:</label>
                  <input type="text" placeholder="gender" oninvalid="this.setCustomValidity('please enter your gender here')"
                  oninput="this.setCustomValidity('')" required v-model="editingUser.gender" />
                  <label>email address:</label>
                  <input
                    type="email"
                    placeholder="emailAdd"
                    oninvalid="this.setCustomValidity('please enter email here')"
                  oninput="this.setCustomValidity('')" required
                    v-model="editingUser.emailAdd"
                  />
                  <label>user profile:</label>
                  <input
                    type="text"
                    id="test"
                    placeholder="profile image"
                    oninvalid="this.setCustomValidity('please insert a profile picture')"
                  oninput="this.setCustomValidity('')" required
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
                    @click="updateUser(editingUser.userID)"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button @click="deleteUser(user.userID)">delete</button>
      </center>
    </div>
  </div>
</template>

<script>
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import swal from "sweetalert";
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
.row {
  margin-bottom: 3rem;
  display: flex !important;
  justify-content: space-between !important;
}
.img-fluid {
  border: 10px solid #759e8f;
  background-color: #93b1a6;
  border-radius: 5rem;
  width: 35.5rem;
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
  text-shadow: 2px 2px #93b1a6
}

p {
  border: 3px solid #759e8f;
  background-color: #93b1a6;
  border-radius: 2rem;
  color: black;
  width: 50%;
  height: 2rem;
  font-weight: bolder;
}

input {
  width: 100%;
  height: 3rem;
  margin-bottom: 2rem;
}

label{
  font-size: larger;
  font-weight: bolder;
  color: white;
  text-shadow: 2px 2px 2px black;
}

@media screen and (max-width:300px) {
  .row{
    --bs-gutter-x: 0;
    flex-direction: column;
  }

  .col-6{
    width: 100%;
  }

  p{
    font-size: small;
    width: 100%;
  }
}

@media screen and (max-width:700px) {
  .row{
    --bs-gutter-x: 0;
    flex-direction: column;
  }

  .col-6{
    width: 100%;
  }

  p{
    font-size: small;
    width: 100%;
  }
}
</style>
