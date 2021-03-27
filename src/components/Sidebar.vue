<template>
  <div
    :class="{ '-left-1/4': !getBurger }"
    class="w-1/5 h-screen bg-sidebar absolute z-10 top-0 left-0 sidebar"
  >
    <h1>Sidebar</h1>
    <button @click="burgerToggle()">Click</button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: mapMutations(["burgerToggle"]),
  computed: mapGetters(["getBurger"]),
};
</script>

<style>
.sidebar {
  transition: 0.5s;
}
</style>
