<template>
  <div>
    <div v-if="user">
      <h1 class="heading">welcome to your profile {{ user.firstName }} {{ user.lastName }}</h1>
      <img :src="user.userURL" :alt="user.firstName" loading="lazy" class="img-fluid">
      <div class="userinformation">
        <label>name:</label>
        <p>{{ user.firstName }}</p>
        <br>
        <label>surname:</label>
        <p>{{ user.lastName }}</p>
        <br>
        <label>age:</label>
        <p>{{ user.age }}</p>
        <br>
        <label>gender:</label>
        <p>{{ user.gender }}</p>
        <br>
        <label>email:</label>
        <p>{{ user.emailAdd }}</p>
        <br>
        <label>role:</label>
        <p>{{ user.userRole }}</p>
        <br>
        <label>password:</label>
        <p>{{ user.userPass }}</p>
      </div>
    </div>
    <center>
      <button @click="logout">logout</button>
      <br>
      <button>edit</button>
      <br>
      <button @click="deleteUser(user.userID)">delete</button>
    </center>
  </div>
</template>

<script>
// import edit from '../components/UpdateUserComp.vue'
import { useCookies } from 'vue3-cookies';
const { cookies } = useCookies()
export default {
  data() {
    return{
      user: null
    }
  },
  mounted() {
    const storedUser = localStorage.getItem("userData")
    if (storedUser) {
      this.user = JSON.parse(storedUser)
    }
  },
  components: {
    // edit
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
.img-fluid{
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
