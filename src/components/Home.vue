<template>
  <div class="container mx-auto bg-sidebar  fit">
    <div v-for="(photo, i) in getRandomPhotos" :key="i">
      <div class="border inline-block relative">
        <button class="flex" @click="() => addFav(photo)">
          <icon
            :class="{ 'text-red': photo.like, 'text-white': !photo.like }"
            class="w-8 absolute top-0 right-0 m-2  cursor-pointer hover:text-red"
            name="heart"
          />
        </button>
        <img
          class="w-1/3 h-96 object-contain w-full h-auto"
          :src="photo.photo.urls.small"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getRandomPhotos"]),
  methods: {
    addFav(e) {
      e.like = !e.like;
      const photos = {
        like: e.like,
        photos: e.photo.urls,
      };
      this.$store.dispatch("createRecord", photos);
    },
  },
  mounted() {
    this.$store.dispatch("fetchRandomPhotos");
  },
};
</script>

<style>
.fit {
  column-count: 3;
}
</style>

<!-- 
    <img
      class="p-4 w-1/3 h-96 object-contain w-full h-auto inline-block"
      src="https://images.unsplash.com/photo-1612831819304-ae93943d8d5c?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt=""
    />

    <img
      class="p-4 w-1/3 h-96 object-contain w-full h-auto inline-block"
      src="https://images.unsplash.com/photo-1612831819304-ae93943d8d5c?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt=""
    />

    <img
      class="p-4 w-1/3 h-96 object-contain w-full h-auto inline-block"
      src="https://images.unsplash.com/photo-1616623653304-4e878e186568?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt=""
    />

    <img
      class="p-4 w-1/3 h-96 object-contain w-full h-auto inline-block"
      src="https://images.unsplash.com/photo-1606151273403-61b31371922c?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt=""
    />
    <img
      class="p-4 w-1/3 h-96 object-contain w-full h-auto inline-block"
      src="https://images.unsplash.com/photo-1616623653304-4e878e186568?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt=""
    />
    <img
      class="p-4 w-1/3 h-96 object-contain w-full h-auto inline-block"
      src="https://images.unsplash.com/photo-1616740795271-abd6ce1a5a5a?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt=""
    />
    <img
      class="p-4 w-1/3 h-96 object-contain w-full h-auto inline-block"
      src="https://images.unsplash.com/photo-1616748467068-3211ac33b0f2?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt=""
    />
    <img
      class="p-4 w-1/3 h-96 object-contain w-full h-auto inline-block"
      src="https://images.unsplash.com/photo-1616707424144-03c58bbba79f?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt=""
    />
    <img
      class="p-4 w-1/3 h-96 object-contain w-full h-auto inline-block"
      src="https://images.unsplash.com/photo-1616724319135-2370dbb4424c?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt=""
    />
    <img
      class="p-4 w-1/3 h-96 object-contain w-full h-auto inline-block"
      src="https://images.unsplash.com/photo-1616732651360-da08bee1e76c?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt=""
    />
    <img
      class="p-4 w-1/3 h-96 object-contain w-full h-auto inline-block"
      src="https://images.unsplash.com/photo-1616696695535-98369e260e7a?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt=""
    /> -->
