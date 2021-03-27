<template>
  <div class="h-20 w-full bg-custom">
    <div
      class="container mx-auto h-full flex justify-between items-center px-4"
    >
      <div>Logo</div>
      <burger-button
        :active="getBurger"
        :bar-height="3.5"
        :bar-width="30"
        @click="burgerToggle()"
      />
    </div>
    <Sidebar />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import BurgerButton from "vue-burger-button";
import "vue-burger-button/dist/vue-burger-button.css";
import Sidebar from "./Sidebar";
export default {
  components: { BurgerButton, Sidebar },
  methods: mapMutations(["burgerToggle"]),
  computed: mapGetters(["getBurger"]),
};
</script>

<style>
.burguer-button:focus {
  outline: none !important;
}
.burguer-button > .bar {
  transition: opacity 0.1s ease-in, transform 0.1s ease-out;
}
</style>
