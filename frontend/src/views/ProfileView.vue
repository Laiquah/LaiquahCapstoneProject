<template>
  <div>
    <h1 class="heading">WELCOME TO YOUR PROFILE</h1>
    <center>
      <button @click="logout">logout</button>
      <br>
      <!-- <EditProfile :userData="userData"/> -->
      <br>
      <button @click="deleteUser(user.userID)">delete</button>
    </center>
  </div>
</template>

<script>
// import EditProfile from "../components/EditProfileComp.vue";
import { useCookies } from 'vue3-cookies';
const { cookies } = useCookies()
export default {
  components: {
    // EditProfile,
  },
  computed: {
    user() {
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
      console.log("reached")
      cookies.remove("RealUser")
      const data = JSON.parse(localStorage.getItem("userData"))
      if(data){
        localStorage.removeItem("userData")
      }
      this.$router.push("/login")
    }
  },
};
</script>

<style scoped>
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
