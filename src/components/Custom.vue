<script lang="ts">
import Vue from "vue";

import { DefaultApi } from "@/api/spotify";
import { customCandidateApi } from "@/api";
import { Candidate, CandidatePartyEnum } from "@/api/custom";

export default Vue.extend({
  name: "Spotify",
  data() {
    return { candidates: [] as Candidate[] };
  },
  async created() {
    await this.getCandidates();
  },
  methods: {
    async deleteCandidate(id?: number) {
      if (id != null) {
        await customCandidateApi.deleteCandidate(id);
        await this.getCandidates();
      }
    },
    async getCandidates() {
      const candidatesResponse = await customCandidateApi.getCandidates();
      this.candidates = candidatesResponse.data;
    }
  }
});
</script>

<template>
  <div class="custom">
    <section
      v-for="candidate in candidates"
      :key="`${candidate.firstName}-${candidate.lastName}`"
      class="custom__candidate-card"
    >
      <button
        @click="deleteCandidate(candidate.id)"
        class="custom__close-button"
      >
        X
      </button>
      <h2>{{ candidate.firstName }} {{ candidate.lastName }}</h2>
      <span :class="`custom__party custom__party--${candidate.party}`">{{
        candidate.party
      }}</span>
      <p>Polling @ {{ candidate.nationalPollingAverage }}%</p>
    </section>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.custom {
  display: flex;

  &__candidate-card {
    box-shadow: 2px 2px 15px -4px #000;
    padding: 15px;
    margin: 15px;
  }

  &__close-button {
    float: right;
  }

  &__party {
    font-weight: 700;
    font-size: 12px;
    margin: 0;

    &--DEMOCRAT {
      color: blue;
    }

    &--REPUBLICAN {
      color: red;
    }

    &--INDEPENDENT {
      color: orange;
    }
  }
}
</style>
