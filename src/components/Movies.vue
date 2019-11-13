<script lang="ts">
import Vue from "vue";

import { timesMoviesApi } from "@/api";
import { Movie } from "@/api/timesmovies";

export default Vue.extend({
  name: "Movies",
  data() {
    return {
      isLoading: false,
      movies: [] as Movie[],
      keyword: ""
    };
  },
  async created() {
    await this.performSearch();
  },
  methods: {
    link(movie: Movie): string | undefined {
      return movie.link && movie.link.url;
    },
    async performSearch() {
      try {
        this.isLoading = true;
        const reviewsResponse = await timesMoviesApi.reviewsSearchJsonGet(
          this.keyword
        );
        this.movies = reviewsResponse.data?.results ?? [];
      } finally {
        this.isLoading = false;
      }
    }
  }
});
</script>

<template>
  <div class="movie">
    <div class="movie__search-wrapper">
      <input
        type="text"
        v-model="keyword"
        placeholder="Enter movie or review title..."
        class="movie__search"
        @keyup.enter="performSearch"
      />
      <button
        class="movie__search-button"
        :class="{ 'movie__search-button--loading': isLoading }"
        :disabled="isLoading"
      >
        Search
      </button>
    </div>
    <transition-group name="movie-list" tag="ul" class="movie-list">
      <li
        v-for="movie in movies"
        :key="movie.link"
        class="movie__card movie-list__item"
      >
        <component :is="link(movie) ? 'a' : 'div'" :href="link(movie)"
          ><h2 class="movie__header">
            {{ movie.display_title }}
          </h2>
          <p class="movie__byline">{{ movie.byline }}</p>
          <p class="movie__summary">{{ movie.summary_short }}</p>
        </component>
      </li>
    </transition-group>
  </div>
</template>

<style scoped lang="scss">
@keyframes shadow-pulse {
  0% {
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
  }
  100% {
    box-shadow: 0 0 0 35px rgba(0, 0, 0, 0);
  }
}
.movie {
  &__search-wrapper {
    display: flex;
    width: 50%;
    max-width: 500px;
    margin: 0 auto;
  }
  &__search {
    flex: auto;
    padding: 15px;
    font-size: 20px;
  }
  &__search-button {
    color: white;
    padding: 10px 15px;
    font-size: 20px;
    text-transform: uppercase;
    background-color: SlateBlue;

    &--loading {
      animation: shadow-pulse 0.5s infinite;
    }
  }
  &__card {
    list-style: none;
    box-shadow: 2px 2px 15px -4px #000;
    padding: 15px;
    margin: 15px;
    flex: 1 1 100%;

    @media screen and (min-width: 600px) {
      flex: 0 1 calc(50% - 60px);
    }
  }

  a {
    color: black;
    text-decoration: none;
  }
}
.movie-list {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
}
.movie-list__item {
  transition: all 1s;
}
.movie-list-enter,
.movie-list-leave-to {
  opacity: 0;
}
.movie-list-leave-active {
  position: absolute;
}
</style>
