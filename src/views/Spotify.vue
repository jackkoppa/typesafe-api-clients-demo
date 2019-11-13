<script lang="ts">
import Vue from "vue";

import Spotify from "@/components/Spotify.vue";

export default Vue.extend({
  name: "SpotifyPage",
  props: {
    accessToken: {
      type: String,
      default: ''
    }
  },
  components: { Spotify }
});
</script>
<template>
  <Spotify :access-token="accessToken" />
</template>
