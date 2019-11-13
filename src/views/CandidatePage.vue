<script lang="ts">
import Vue from "vue";

import Candidate from "@/components/Candidate.vue";

export default Vue.extend({
  name: "CandidatePage",
  components: { Candidate }
});
</script>

<template>
  <Candidate />
</template>
