<template>
  <div>
    <h1>User Photos</h1>
    <div v-for="(photo, i) in getUserPhotos" :key="i">
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
          :src="photo.photos.small"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getUserPhotos"]),
  mounted() {
    this.$store.dispatch("getRecord");
  },
};
</script>
