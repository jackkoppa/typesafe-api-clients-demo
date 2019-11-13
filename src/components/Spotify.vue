<script lang="ts">
import Vue from "vue";

import { DefaultApi } from "@/api/spotify";

export default Vue.extend({
  name: "Spotify",
  props: {
    accessToken: {
      type: String,
      required: true
    }
  },
  computed: {
    spotifyAuth(): string {
      const spotifyAuthEndpoint = "https://accounts.spotify.com/authorize";
      const params: { [key: string]: string } = {
        client_id: "48359bab79a948d695e46c37cbfe792b",
        redirect_uri: "https://localhost.jackkoppa.com:8080",
        response_type: "token",
        scope: "user-read-private user-read-email"
      };
      const queryParams = Object.keys(params)
        .map(key => `${key}=${encodeURIComponent(params[key])}`)
        .join("&");
      return `${spotifyAuthEndpoint}?${queryParams}`;
    }
  },
  async created() {
    console.log(this.accessToken);
    const spotifyApi = new DefaultApi({
      baseOptions: {
        headers: { Authorization: `Bearer ${this.accessToken}` }
      }
    });
    const meResponse = await spotifyApi.meTracksGet(25);
    console.log(meResponse.data.items);
  }
});
</script>

<template>
  <div class="spotify">
    <a :href="spotifyAuth">Authorize Spotify</a>
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
