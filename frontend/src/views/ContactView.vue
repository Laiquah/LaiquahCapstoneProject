<template>
    <div>
        <h1 class="heading">LETS KEEP IN TOUCH</h1>
        <center>
            <form class="form" action="https://formspree.io/f/xqkvqvnz" method="POST">
                <h3 class="heading">CONTACT US</h3>
                <label>FULL NAME:</label>
                <div class="field">
                  <input placeholder="first and last name" oninvalid="this.setCustomValidity('provide your name and surname')"
                  oninput="this.setCustomValidity('')" required class="input-field" type="text" name="name">
                </div>
                <label>CONTACT NUMBER:</label>
                <div class="field">
                  <input placeholder="0658190250" class="input-field" oninvalid="this.setCustomValidity('provide your number')"
                  oninput="this.setCustomValidity('')" required type="text" name="number">
                </div>
                <label>EMAIL ADDRESS:</label>
                <div class="field">
                  <input placeholder="cotielaiquah@gmail.com" class="input-field" oninvalid="this.setCustomValidity('provide your email')"
                  oninput="this.setCustomValidity('')" required type="email" name="email">
                </div>
                <label>LEAVE YOUR MESSAGE HERE:</label>
                <div class="field">
                  <input placeholder="textarea" class="input-field" oninvalid="this.setCustomValidity('please enter text here')"
                  oninput="this.setCustomValidity('')" required type="textarea" name="text">
                </div>
                <div class="btn">
                    <div class="kkl">
                    <button type="submit" class="btn1">submit</button>
                    </div><div class="kkj">
                    <button type="reset" class="btn1">clear</button>
                </div>
                </div>
            </form>
            <center>
                <div class="text" id="div">
                    Thank you for stopping by Power Outage Innovations! I hope you found what you were looking for and enjoyed your stay.
                </div>
                <div class="text" id="div2">
                    Hope to see you next time!
                </div>
            </center>
        </center>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#div2{
    margin-bottom: 2rem;
}

#div{
    width: 75%;
    margin-bottom: 7rem;
}
.heading {
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-decoration: underline;
    font-weight: bolder;
    text-shadow: 2px 2px #93b1a6
  }

  .text{
    font-size: xx-large;
    font-weight: bold;
  }
.form {
    margin-bottom: 3rem;
    height: 85vh;
    width: 75%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 2em;
    padding-right: 2em;
    padding-bottom: 0.4em;
    background-image: url("https://i.postimg.cc/d3dTSt4D/eugene-chystiakov-6-Gq-R6nwbz6c-unsplash.jpg");
    border-radius: 25px;
    transition: .4s ease-in-out;
  }
  
  .form:hover {
    transform: scale(1.05);
    border: 1px solid black;
  }
  
  #heading {
    text-align: center;
    margin: 2em;
    color: rgb(255, 255, 255);
    font-size: 1.2em;
  }
  
  .field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 25px;
    padding: 0.6em;
    border: none;
    outline: none;
    color: white;
    background-color: #171717;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  }

  
  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #d3d3d3;
  }
  
  .form .btn {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
  button {
    padding: 0.5rem;
    width: 15rem;
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
  .kkl{
    padding: 2rem;
  }

  .kkj{
    padding: 2rem;
  }
</style>