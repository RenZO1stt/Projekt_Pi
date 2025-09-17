<template>
  <header>
    <img :src="logo" alt="" />
  </header>

  <form action="" class="logsign">
    <div class="singupbackground">
      <h3 class="signup-title"><strong>Signup</strong></h3>
    </div>

    <div class="input-fields">
      <label for="ime"><strong>Username: </strong></label>
      <input
        type="text"
        id="ime"
        placeholder="Username..."
        v-model="username"
        required
      />
    </div>

    <!--<div class="input-fields">
      <label for="city"><strong>City: </strong></label>
      <input type="text" id="city" placeholder="City..." />
    </div>-->

    <div class="input-fields">
      <label for="password1"><strong>Password: </strong></label>
      <input
        type="password"
        id="password1"
        placeholder="Password..."
        v-model="password"
        required
      />
    </div>

    <div class="input-fields">
      <label for="password-repeat"><strong>Repeat Password: </strong></label>
      <input
        type="password"
        id="password-repeat"
        placeholder="Password..."
        v-model="repeatPassword"
        required
      />
    </div>

    <button type="button" class="submit" @click="signup()">
      <strong>Submit</strong>
    </button>

    <p class="logintext">
      Already have an account?
      <router-link to="/login" class="login">Log in</router-link>
    </p>

    <p class="signup-under">
      Enter as <router-link to="/" class="login">Guest</router-link>
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
  name: "Signup",
  data() {
    return {
      logo,
      username: "",
      password: "",
      repeatPassword: "",
    };
  },
  methods: {
    signup() {
      if (this.password !== this.repeatPassword) {
        alert("Passwords do not match!");
        return;
      }
      // Here you would typically send the signup data to your server

      createUserWithEmailAndPassword(auth, this.username, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Signup successful:", user);
          // You can redirect the user or show a success message here
        })
        .catch((error) => {
          console.error("Error during signup:", error.message);
          alert(`Error: ${error.message}`);
        });
    },
  },
};
</script>
