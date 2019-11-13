<script lang="ts">
import Vue from "vue";

import { candidateApi } from "@/api";
import { Candidate, CandidatePartyEnum } from "@/api/candidate";

const defaultCandidate: Candidate = {
  firstName: "",
  lastName: "",
  party: CandidatePartyEnum.DEMOCRAT,
  electionYear: "2020",
  nationalPollingAverage: 0.0
};

export default Vue.extend({
  name: "AddCandidate",
  data() {
    return {
      CandidatePartyEnum,
      candidate: { ...defaultCandidate }
    };
  },
  methods: {
    async submitCandidate() {
      await candidateApi.addCandidate(this.candidate);
      this.$emit("candidateAdded");
      this.candidate = { ...defaultCandidate };
    }
  }
});
</script>

<template>
  <fieldset class="fields">
    <section class="fields-wrapper">
      <div class="field-group">
        <label for="first-name">First Name</label>
        <input v-model="candidate.firstName" type="text" id="first-name" />
      </div>
      <div class="field-group">
        <label for="last-name">Last Name</label>
        <input v-model="candidate.lastName" type="text" id="last-name" />
      </div>
      <div class="field-group">
        <label for="party">Party</label>
        <select v-model="candidate.party" id="party">
          <option>{{ CandidatePartyEnum.DEMOCRAT }}</option>
          <option>{{ CandidatePartyEnum.REPUBLICAN }}</option>
          <option>{{ CandidatePartyEnum.INDEPENDENT }}</option>
        </select>
      </div>
      <div class="field-group">
        <label for="election-year">Election Cycle</label>
        <select v-model="candidate.electionYear" id="election-year">
          <option>2016</option>
          <option>2018</option>
          <option>2020</option>
          <option>2022</option>
        </select>
      </div>
      <div class="field-group">
        <label for="national-polling-average"
          >Current National Polling Average</label
        >
        <input
          type="number"
          v-model="candidate.nationalPollingAverage"
          id="national-polling-average"
          step=".01"
        />
      </div>

      <div class="button-wrapper">
        <button type="submit" @click="submitCandidate">Add</button>
      </div>
    </section>
  </fieldset>
</template>

<style scoped lang="scss">
.fields {
  border: none;
  border-top: 4px solid #bbb;
  padding-top: 30px;
}

.fields-wrapper {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.field-group {
  display: flex;
  width: 100%;
  padding: 10px;
  justify-content: flex-start;

  @media screen and (min-width: 600px) {
    width: 47%;
  }

  label {
    margin-right: 10px;
    text-align: left;
  }

  input[type="number"] {
    width: 40px;
  }
}

.button-wrapper {
  width: 100%;

  button {
    background-color: MediumAquaMarine;
    box-shadow: 3px 3px 8px -1px #000;
    text-transform: uppercase;
    font-size: 20px;
    padding: 10px 20px;
  }
}
</style>
