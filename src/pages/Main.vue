<template>
  <div>
    
    <h1>Страница авторизации</h1>
    
    <button
    @click="signIn"
    class="green"
    >
      Войти
    </button>
    <button
    @click="signOut"
    class="red"
    >
      Выйти
    </button>
    
  </div>
</template>

<script>
import { signOut, signInWithEmailAndPassword } from "firebase/auth";
import { fs_auth } from "./../../firebase";


export default {
methods: {
  signIn(){
    // console.log("sign In")
signInWithEmailAndPassword(fs_auth, "23378@gmail.com", "1234567")
  },
  signOut(){
    console.log("sign out")
    signOut(fs_auth)
  },
}
}
</script>



<style scoped>
.green {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.red {
  background-color: #f44336;; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}


</style>
