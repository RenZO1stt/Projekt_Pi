// oglasi.js
import { ref, reactive } from "vue";
import { db, doc, onSnapshot } from "@/firebase.js";


const oglasi = reactive([]);
const currentUser = ref(null);


const docRef = doc(db, "ads", "myAd");

// Real-time listener
onSnapshot(docRef, (docSnap) => {
  if (docSnap.exists()) {
    const data = docSnap.data();
   //Updatea content
    oglasi.splice(0, oglasi.length, ...(data.array || []));
  } else {
    oglasi.splice(0, oglasi.length); 
  }
});

export default {
  oglasi,
  currentUser,
};
