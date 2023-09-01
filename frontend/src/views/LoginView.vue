<template>
    <div>
        <form @submit.prevent="Login">
            <input type="email" v-model="emailAdd" placeholder="Email address">
            <input type="password" v-model="userPass" placeholder="Password">
            <button type="submit">Log in</button>
        </form>
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

</style>