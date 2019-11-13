<script lang="ts">
import Vue from "vue";

import { DefaultApi } from "@/api/spotify";
import { candidateApi } from "@/api";
import { Candidate, CandidatePartyEnum } from "@/api/candidate";
import AddCandidate from "@/components/AddCandidate.vue";

export default Vue.extend({
  name: "Candidate",
  components: { AddCandidate },
  data() {
    return { candidates: [] as Candidate[] };
  },
  async created() {
    await this.getCandidates();
  },
  methods: {
    async deleteCandidate(id?: number) {
      if (id != null) {
        await candidateApi.deleteCandidate(id);
        await this.getCandidates();
      }
    },
    async getCandidates() {
      const candidatesResponse = await candidateApi.getCandidates();
      this.candidates = candidatesResponse.data;
    }
  }
});
</script>

<template>
  <div class="candidate">
    <transition-group name="candidate-list" tag="ul" class="candidate-list">
      <li
        v-for="candidate in candidates"
        :key="`${candidate.firstName}-${candidate.lastName}`"
        class="candidate__card candidate-list__item"
      >
        <button
          @click="deleteCandidate(candidate.id)"
          class="candidate__close-button"
        >
          X
        </button>
        <h2 class="candidate__header">
          {{ candidate.firstName }} {{ candidate.lastName }}
        </h2>
        <span
          :class="`candidate__party candidate__party--${candidate.party}`"
          >{{ candidate.party }}</span
        >
        <p>Polling @ {{ candidate.nationalPollingAverage }}%</p>
      </li>
    </transition-group>
    <AddCandidate @candidateAdded="getCandidates" />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.candidate {
  &__card {
    list-style: none;
    box-shadow: 2px 2px 15px -4px #000;
    padding: 15px;
    margin: 15px;
  }

  &__close-button {
    background-color: #bbb;
    cursor: pointer;
    font-weight: bold;
    font-size: 20px;
    border: none;
    float: right;
    padding: 0 5px;
  }

  &__header {
    margin-top: 40px;
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
.candidate-list {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
}
.candidate-list__item {
  transition: all 1s;
}
.candidate-list-enter,
.candidate-list-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
.candidate-list-leave-active {
  position: absolute;
}
</style>
