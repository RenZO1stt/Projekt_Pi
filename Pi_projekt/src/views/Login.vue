<template>
  <header>
    <img :src="logo" alt="Logo" />
  </header>

  <form action="" class="logsign2">
    <div class="singupbackground">
      <h3 class="signup-title"><strong>Log in</strong></h3>
    </div>

    <div class="input-fields">
      <label for="ime"><strong>Username: </strong></label>
      <input
        type="text"
        id="ime"
        placeholder="Username..."
        v-model="username"
      />
    </div>

    <div class="input-fields">
      <label for="password1"><strong>Password: </strong></label>
      <input
        type="password"
        id="password1"
        placeholder="Password..."
        v-model="password"
      />
    </div>

    <button type="button" class="submit">
      <strong @click="login()">Submit</strong>
    </button>

    <p class="returnmargin">
      Want to go
      <router-link to="/signup" class="login">back?</router-link>
    </p>
  </form>

  <footer>
    <h3>Contact us!</h3>
    <p>placeholder@gmail.com</p>
  </footer>
</template>

<script>
import logo from "@/components/FinalLogo.png";
import "@/views/style.css";
import { app, db, auth, createUserWithEmailAndPassword } from "@/firebase.js";

export default {
  name: "Login",
  data() {
    return {
      logo,
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Here you would typically send the signup data to your server

      createUserWithEmailAndPassword(auth, this.username, this.password)
        .then((result) => {
          this.$router.replace("/");
        })
        .catch(function (e) {
          // izbaci ako je neispravan gmail, kratak password...
          console.log(e.message);
          alert(`Error: ${e.message}`);
        });
    },
  },
};
</script>
