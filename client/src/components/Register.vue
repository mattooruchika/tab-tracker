<template>
 <div> <h1> register page </h1>
 <input type="email"
  name= "email" 
  placeholder="enter mail" 
  v-model="email"
  /><br><br><br>
 <input type="password"
  name= "password" 
  placeholder="enter psd"
  v-model="password"
   /><br><br><br>
   <button @click="register()">Submit/Register </button>
</div>

</template>
<script>
import auth from '@/Services/AuthServices'
export default {
  name: 'Register',
  data () {
    return {
      email:"",
      password:""
    }
  },

  methods:{
      async register(){
          const response=await auth.register({
              email: this.email,
              password: this.password
          })
          console.log(response.data)
      }
  }

}
</script>

