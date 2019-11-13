<script lang="ts">
import Vue from "vue";

import HelloWorld from "@/components/HelloWorld.vue";

export default Vue.extend({
  name: "HomePage",
  components: {
    HelloWorld
  }
});
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Demo Vue App, for Type-Safe APIs" />
  </div>
</template>
