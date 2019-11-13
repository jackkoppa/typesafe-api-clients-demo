<script>
import Vue from "vue";

import Movies from "@/components/Movies.vue";

export default Vue.extend({
  name: "MoviesPage",
  components: {
    Movies
  }
});
</script>

<template>
  <Movies />
</template>
