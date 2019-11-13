<script lang="ts">
import Vue from "vue";

import { DefaultApi } from "@/api/spotify";
import { customCandidateApi } from '../api';
import { Candidate } from '../api/fecgov';

export default Vue.extend({
  name: "Spotify",
  data() {
    return { candidates: [] as Candidate[] }
  },
  async created() {
    try {
      const candidatesResponse = await customCandidateApi.getCandidatesUsingGET()
      this.candidates = candidatesResponse.data
      console.log(candidatesResponse)

    } catch (error) {
      console.warn(error)
    }
  }
});
</script>

<template>
  <div class="custom">
    <section 
      v-for="candidate in candidates" 
      :key="`${candidate.firstName}-${candidate.lastName}`"
    >
      <h2>{{ candidate.firstName }} {{ candidate.lastName }}</h2>
    </section>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
