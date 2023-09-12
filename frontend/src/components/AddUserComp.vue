<template>
    <div>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal3"
      >
        ADD AN USER
      </button>
  
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal3"
        tabindex="-1"
        aria-labelledby="exampleModal3Label"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel1">New User</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <label for="firstName">First Name:</label>
              <input
              oninvalid="this.setCustomValidity('provide your first name')"
              oninput="this.setCustomValidity('')" required
                id="firstName"
                type="text"
                placeholder="first name"
                v-model="model.user.firstName"
              />
              <label for="lastName">Last Name:</label>
              <input
              oninvalid="this.setCustomValidity('provide your last name')"
              oninput="this.setCustomValidity('')" required
                id="lastName"
                type="text"
                placeholder="last name"
                v-model="model.user.lastName"
              />
              <label for="userAge">Age:</label>
              <input
              oninvalid="this.setCustomValidity('provide your age')"
              oninput="this.setCustomValidity('')" required
                id="userAge"
                type="number"
                placeholder="age"
                v-model="model.user.age"
              />
              <label for="gender">Gender:</label>
              <input
              oninvalid="this.setCustomValidity('provide your gender')"
              oninput="this.setCustomValidity('')" required
                id="gender"
                type="text"
                placeholder="gender"
                v-model="model.user.gender"
              />
              <label for="userRole">Role:</label>
              <input
              oninvalid="this.setCustomValidity('provide your user role')"
              oninput="this.setCustomValidity('')" required
                id="userRole"
                type="text"
                placeholder="role"
                v-model="model.user.userRole"
              />
              <label for="email">Email Address</label>
              <input
              oninvalid="this.setCustomValidity('provide your email')"
              oninput="this.setCustomValidity('')" required
                id="email"
                type="text"
                placeholder="email address"
                v-model="model.user.emailAdd"
              />
              <label for="password">Password:</label>
              <input
              oninvalid="this.setCustomValidity('provide your password')"
              oninput="this.setCustomValidity('')" required
                id="password"
                type="text"
                placeholder="password"
                v-model="model.user.userPass"
              />
              <label for="profilePic">Profile Image:</label>
              <input
              oninvalid="this.setCustomValidity('provide your profile image')"
              oninput="this.setCustomValidity('')" required
                id="profilePic"
                type="text"
                placeholder="profile image"
                v-model="model.user.userURL"
              />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn" @click="createUser" data-bs-dismiss="modal">
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
        addingUserID: null,
        model: {
          user: {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            emailAdd: "",
            userRole: "",
            userURL: "",
            userPass: ""
          },
        },
      };
    },
    methods: {
      createUser() {
        this.$store.dispatch("addUser", this.model.user);
        console.log(this.model.user);
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
    padding: 0.5rem;
    width: 10rem;
    border: 2px solid #759e8f;
    background-color: #5c8374;
    color: white;
    margin-bottom: 1rem;
    font-weight: bolder;
    border-radius: 5rem;
  }
  
  button:hover {
    background-color: #93b1a6;
  }

  label{
    color:black;
  }
  </style>