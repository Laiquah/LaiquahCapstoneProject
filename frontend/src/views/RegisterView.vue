<template>
    <div>
        <h1 class="heading">REGISTER IF YOU DONT HAVE AN ACCOUNT WITH US</h1>
        <div class="row">
            <div class="col">
                <center>
                    <div class="card">
                        <label>First name:</label>
                        <input placeholder="first name">
                        <br>
                        <label>Last name:</label>
                        <input placeholder="last name">
                        <br>
                        <label>Age</label>
                        <input placeholder="age">
                        <br>
                        <label>Gender</label>
                        <input placeholder="gender">
                        <br>
                        <label>Role:</label>
                        <input placeholder="role">
                        <br>
                        <label>Email:</label>
                        <input placeholder="email address">
                        <br>
                        <label>Password:</label>
                        <input placeholder="password">
                        <br>
                        <label>Profile picture:</label>
                        <input placeholder="profile picture">
                        <br>
                        <center>
                            <button>REGISTER</button>
                        </center>
                        ALREADY HAVE AN ACCOUNT?<a href="">LOGIN</a>
                    </div>
                </center>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.heading {
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-decoration: underline;
    font-weight: bolder;
  }

  input{
    width: 100%;
    height: 2.5rem;
    border: 3px solid #5c8374;
    border-radius: 2rem;
  }

  .card{
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

  label{
    font-size: larger;
    font-weight: bolder;
  }
</style>