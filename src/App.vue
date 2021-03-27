<template>
  <div>
    <div v-if="getUserEmail === 'none' && !getRegShow">
      <Auth />
    </div>
    <div v-else-if="getUserEmail === 'none' && getRegShow">
      <Reg />
    </div>
    <div v-else>
      <User />
    </div>
  </div>
</template>

<script>
import Auth from "./pages/Auth";
import Reg from "./pages/Reg";
import User from "./pages/User";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Auth,
    Reg,
    User,
  },
  computed: mapGetters(["getUserEmail", "getRegShow"]),
  mounted() {
    this.$store.dispatch("userEmail");
  },
};
</script>

<style></style>
