<template>
  <div class="card-container" :data-instance="_uid">
    <div class="gmailmatch">{{ oglas.mail }}</div>

    <div class="coachname">
      <h3></h3>
    </div>

    <div class="coachinfo"></div>

    <ul class="ul-0top">
      <li>Gender: {{ oglas.spol || "-" }}</li>
      <li>Age: {{ oglas.dob || "-" }}</li>
      <li>Location: {{ oglas.lokacija || "-" }}</li>
      <li>Contact info: {{ oglas.kontakt || "-" }}</li>
      <li>Experience: {{ oglas.iskustvo || "-" }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TrainerIcon",
  props: {
    oglas: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    // debug: show one mount per parent loop item
    console.log("TrainerIcon mounted:", this.oglas.mail, "uid:", this._uid);
  },
};
</script>
