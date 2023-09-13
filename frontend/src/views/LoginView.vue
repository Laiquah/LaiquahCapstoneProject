<template>
    <div>
        <h1 class="heading">LOGIN IF YOU ALREADY HAVE AN ACCOUNT</h1>
        <center>
            <div class="card">
                <form @submit.prevent="login">
                    <label>Email address:</label>
                    <input type="email" v-model="payload.emailAdd" placeholder="Email address" oninvalid="this.setCustomValidity('please enter your email')"
                    oninput="this.setCustomValidity('')" required>
                    <br>
                    <label>Password:</label>
                    <input type="password" v-model="payload.userPass" placeholder="Password" oninvalid="this.setCustomValidity('please enter your password')"
                    oninput="this.setCustomValidity('')" required>
                    <br>
                    <button type="submit">LOGIN</button>
                </form>
                DONT HAVE AN ACCOUNT? <a href="/register">REGISTER</a>
            </div>
        </center>
    </div>
</template>

<script>
import { useCookies } from 'vue3-cookies';
const { cookies } = useCookies()
export default {
  data() {
    return {
      payload: {
        emailAdd: "",
        userPass: "",
      },
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.payload);
    },
  },
  beforeCreate() {
    this.$store.dispatch("fetchUsers");
  },
  mounted() {
    console.log(cookies.get("RealUser"));
 },
};
</script>

<style scoped>
.heading {
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-decoration: underline;
    font-weight: bolder;
    text-shadow: 2px 2px #93b1a6
  }
.card{
    padding: 2rem;
    margin-bottom: 3rem;
    border: 2px solid #5c8374;
    background-color: #759e8f;
  }

  input{
    width: 100%;
    height: max-content;
    border: 2px solid #5c8374;
    border-radius: .5rem;
  }

  button {
    padding: 0.5rem;
    width: 10rem;
    border: 2px solid #759e8f;
    background-color: #5c8374;
    color: white;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    font-weight: bolder;
    border-radius: 5rem;
  }
  
  button:hover {
    background-color: #93b1a6;
  }

  label{
    font-size: larger;
    font-weight: bolder;
  }

  @media screen and (max-width:700px) {
    .card{
      width: 75%;
      margin: 0;
    }
  }
</style>
