<template>
  <header>
    <img :src="logo" alt="Logo" />
    <div class="nav-links">
      <router-link to="/">HOME</router-link>
      <router-link to="">COACH</router-link>
    </div>
    <a href="#" class="logout" @click="logout1()">LOG OUT </a>
  </header>

  <form>
    <div class="links">
      <input
        v-model="search.text"
        type="search"
        id="Search"
        placeholder="Find you ad(email...)"
        class="inputseperation"
      />
      <router-link to="/fill-out">
        <button type="button" class="submit" id="test" @mouseover="ispis">
          Apply as Coach
        </button>
      </router-link>
    </div>
  </form>
  
  <div class="remove-ad">
    <button type="button" class="remove-ad-button" @click="deletead">Remove Ad</button>
  </div>

  <div class="showcase-box">
    <icon v-for="oglas in filteredOglasi" :key="oglas.mail" :oglas="oglas" />
  </div>

  <footer>
    <h3>Contact us!</h3>
    <p>placeholder@gmail.com</p>
  </footer>
</template>

<script>
import oglasi from "@/oglasi";
import icon from "@/components/Trainer-icon.vue";
import logo from "@/components/FinalLogo.png";
import { auth, signOut, db, setDoc, doc } from "@/firebase.js";
import "@/views/style.css";
import search from "@/search.js";

export default {
  name: "Links",
  data() {
    return {
      logo,
      oglasi,
      search,
    };
  },
  mounted() {
    this.provjera();
  
  },
  components: {
    icon,
  },

  methods: {
    logout1() {
      signOut(auth)
        .then(() => {
          this.$router.replace("/signup");
        })
        .catch((e) => console.log(e.message));
    },

    provjera() {
      if (oglasi.currentUser) {
        document.getElementById("test").disabled = false;
      } else {
        document.getElementById("test").disabled = true;
      }
    },
    ispis() {
      if (!oglasi.currentUser) {
        alert("You must be logged in to submit a bulletin.");
      }
    },
    async deletead(){
      const alreadyExists = oglasi.oglasi.some(
        (oglas) => oglas.mail == oglasi.currentUser
      );

      if (alreadyExists) {
        // remove old ad
        this.oglasi.oglasi = this.oglasi.oglasi.filter(
          (item) => item.mail != this.oglasi.currentUser
        );

        await setDoc(doc(db, "ads", "myAd"), {
          array: oglasi.oglasi,
        }, { merge: true });

        alert("You removed your ad.")

      }else{
        alert("You don't have an ad up!");
      }
    },
    
  },
  computed: {
    filteredOglasi() {
      let text = this.search.text;
      let newarray = [];

      for (let ad of this.oglasi.oglasi) {
        // 1 oglas iz arraya
        // console.log(ad.mail); // svaki put kad se search.text promijeni ponovno se zove funckija jer dobije nove vrijednosti pa se udpatea
        if (
          Object.values(ad).some(
            (item) =>
              String(item).toLowerCase().includes(text.toLowerCase()) &&
              !item.includes("@")
          )
        ) {
          // ako postoji slovo(vece od -1)
          newarray.push(ad);
        }
      }

      return newarray;
    },
  },
};

//oglasi.oglasikorisnika.length = 0; // Clear the array to avoid duplicates
</script>
