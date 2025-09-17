<template>
  <header>
    <img :src="logo" alt="" />
    <div class="nav-links">
      <router-link to="/">HOME</router-link>
      <router-link to="/links">COACH</router-link>
    </div>
    <a href="#" class="logout" @click="logout1()">LOG OUT </a>
  </header>

  <form action="" class="logsign3">
    <div class="input-fields">
      <label for="gender">Gender: </label>
      <input
        type="text"
        id="gender"
        placeholder="Male/Female"
        v-model="gender"
        required
      />
    </div>
    <div class="input-fields">
      <label for="age">Age: </label>
      <input type="text" id="age" placeholder="24..." v-model="age" required />
    </div>
    <div class="input-fields">
      <label for="location">Location: </label>
      <input
        type="text"
        id="location"
        placeholder="Where the trainings happen..."
        v-model="location"
        required
      />
    </div>
    <div class="input-fields">
      <label for="contact">Contact info: </label>
      <input
        type="text"
        id="contact"
        placeholder="Phone number/mail/discord..."
        v-model="contactinfo"
        required
      />
    </div>
    <div class="input-fields">
      <label for="experience">Experience: </label>
      <input
        type="text"
        id="experience"
        placeholder="Years of experience, certifications..."
        v-model="experience"
        required
      />
    </div>
    <router-link to="/links">
      <button type="button" class="submit" @click="predajPodatke()">
        Submit
      </button>
    </router-link>
  </form>

  <footer>
    <h3>Contact us!</h3>
    <p>placeholder@gmail.com</p>
  </footer>
</template>

<script>
import logo from "@/components/FinalLogo.png";
import oglasi from "@/oglasi";
import "@/views/style.css";
import { auth, signOut, db, setDoc, doc} from "@/firebase.js";

export default {
  name: "Inputbulletin",
  data() {
    return {
      logo,
      oglasi,
      gmail: oglasi.currentUser,
      gender: "",
      age: "",
      location: "",
      contactinfo: "",
      experience: "",

      // your form data here if needed
    };
  },
  methods: {
    async predajPodatke() {
      const alreadyExists = oglasi.oglasi.some(
        (oglas) => oglas.mail == oglasi.currentUser
      );

      if (alreadyExists) {
        // remove old ad -- from array
        oglasi.oglasi = oglasi.oglasi.filter(
          (item) => item.mail != oglasi.currentUser
        );
        
        alert("You have updated your bulletin.");
      } else {
        alert("Bulletin submitted successfully!");
      }

      // add (either new or updated)
      oglasi.oglasi.push({
        mail: this.gmail,
        spol: this.gender,
        dob: this.age,
        lokacija: this.location,
        kontakt: this.contactinfo,
        iskustvo: this.experience,
      })
      
      // push into firebase
      await setDoc(doc(db, "ads", "myAd"), {
        array: oglasi.oglasi,
      }, { merge: true });

      console.log(oglasi.oglasi);
    },
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
