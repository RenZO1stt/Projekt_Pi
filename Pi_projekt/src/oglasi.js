// oglasi.js
import { ref, reactive } from "vue";
import { db, doc, onSnapshot } from "@/firebase.js";


// Make oglasi a reactive array directly
const oglasi = reactive([]);
const currentUser = ref(null);

// Reference the single document /ads/myAd
const docRef = doc(db, "ads", "myAd");

// Real-time listener
onSnapshot(docRef, (docSnap) => {
  if (docSnap.exists()) {
    const data = docSnap.data();
    // Replace array contents reactively
    oglasi.splice(0, oglasi.length, ...(data.array || []));
  } else {
    oglasi.splice(0, oglasi.length); // clear if no doc
  }
});

export default {
  oglasi,
  currentUser,
};