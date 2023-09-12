<template>
  <div>
    <h1 class="heading">REGISTER IF YOU DONT HAVE AN ACCOUNT WITH US</h1>
    <div class="row">
      <div class="col">
        <center>
          <div class="card">
            <form @submit.prevent="register">
              <label>First name:</label>
              <input placeholder="first name" type="name" required v-model="payload.firstName" />
              <br />
              <label>Last name:</label>
              <input placeholder="last name" type="name" required v-model="payload.lastName" />
              <br />
              <label>Age</label>
              <input placeholder="age" type="number" required v-model="payload.age" />
              <br />
              <label>Gender</label>
              <input placeholder="gender" type="gender" required v-model="payload.gender" />
              <br /> 
              <label>Email:</label>
              <input placeholder="email address" type="email" required v-model="payload.emailAdd" />
              <br />
              <label>Password:</label>
              <input placeholder="password" type="password" required v-model="payload.userPass" />
              <br />
              <label>Profile picture:</label>
              <input placeholder="profile picture" type="picture" v-model="payload.userURL" />
              <br />
              <center>
                <button type="submit">REGISTER</button>
              </center>
              ALREADY HAVE AN ACCOUNT?<a href="/login">LOGIN</a>
            </form>
          </div>
        </center>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payload: {
        firstName: null,
        lastName: null,
        age: null,
        gender: null,
        emailAdd: null,
        userRole: "user",
        userURL: "https://i.postimg.cc/3rZ0H0D8/profile-Image.png",
        userPass: null,
      },
    };
  },
  methods: {
    register() {
      this.$store.dispatch("regUser", this.payload);
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
  text-shadow: 2px 2px #93b1a6
}

input {
  width: 100%;
  height: 2.5rem;
  border: 2px solid #5c8374;
  border-radius: .5rem;
}

.card {
  width: 30%;
  padding: 2rem;
  margin-bottom: 3rem;
  border: 2px solid #5c8374;
  background-color: #759e8f;
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

label {
  font-size: larger;
  font-weight: bolder;
}
</style>
