<template>
    <div>
        <h1 class="heading">LOGIN IF YOU ALREADY HAVE AN ACCOUNT</h1>
        <center>
            <div class="card">
                <form @submit.prevent="Login">
                    <label>Email address:</label>
                    <input type="email" v-model="emailAdd" placeholder="Email address">
                    <br>
                    <label>Password:</label>
                    <input type="password" v-model="userPass" placeholder="Password">
                    <br>
                    <button type="submit">LOGIN</button>
                </form>
                DONT HAVE AN ACCOUNT? <a href="">REGISTER</a>
            </div>
        </center>
    </div>
</template>

<script>
import Swal from 'sweetalert2'
    export default {
        
        data(){
            return{
                emailAdd: '',
                userPass: ''
            }
        },
        methods:{
            async Login(){
                console.log("reached")
                try{
                    const payload = {
                        emailAdd: this.emailAdd,
                        userPass: this.userPass
                    }
                    const res = await this.$store.dispatch("login", payload)
                    if (res){
                        await Swal.fire({
                            icon: 'success',
                            title: "Login successful",
                            text: "You have logged in successfully"
                        })
                        this.$router.push("/")
                    } else{
                        await Swal.fire({
                            icon: "error",
                            title: "Login failed",
                            text:"Login failed :("
                        })
                    }
                } catch(e){
                    console.log(e)
                }
            }
        }

    }
</script>

<style scoped>
.heading {
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-decoration: underline;
    font-weight: bolder;
  }
.card{
    width: 30%;
    padding: 2rem;
    margin-bottom: 3rem;
    border: 2px solid #5c8374;
    background-color: #759e8f;
  }

  input{
    width: 100%;
    height: 2.5rem;
    border: 3px solid #5c8374;
    border-radius: 2rem;
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
</style>
