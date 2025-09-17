<template>
  <router-view />
</template>

<script>
// No script needed
import "@/views/style.css";
import { auth, onAuthStateChanged } from "@/firebase.js";
import oglasi from "./oglasi";

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in:", user.email);
    oglasi.currentUser = user.email; // Store the email in the global state NE RADI IZ NEKOG RAZLOGA MAJKI MU JEBEM
  } else {
    console.log("No user is signed in.");
    oglasi.currentUser = null;
  }
});

export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<style>
/* No styles */
</style>
