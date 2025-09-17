<template>
  <header>
    <img src="@/components/FinalLogo.png" alt="" />
    <div class="nav-links">
      <router-link to="">HOME</router-link>
      <router-link to="/links">COACH</router-link>
    </div>
    <a href="#" class="logout" @click="logout1()">LOG OUT </a>
  </header>

  <div class="columns">
    <div class="text">
      <h1 class="text-title">About us</h1>
      <p>
        Meet Fit4life, the ideal app for beginners ready to start living a
        healthier, more active life. Fit4life can connect you directly with
        certified trainers for support, advice, and coaching as you build
        confidence and reach your goals. This app is simple, supportive, and
        completely beginner-friendly. Your fitness journey starts here.
      </p>
    </div>
    <img src="@/components/gym.jpg" alt="Placeholder picture" class="gym" />
  </div>

  <footer>
    <h3>Contact us!</h3>
    <p>placeholder@gmail.com</p>
  </footer>
</template>

<script>
import "@/views/style.css";
import { auth, signOut } from "@/firebase.js";

export default {
  name: "Index2",
  methods: {
    logout1() {
      signOut(auth)
        .then(() => {
          this.$router.replace("/signup");
        })
        .catch((e) => console.log(e.message));
    },
  },
};
</script>
