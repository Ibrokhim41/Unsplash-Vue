<template>
  <div class="h-screen w-screen flex justify-center items-center">
    <form class="w-1/5 p-2 bg-red rounded" @submit.prevent="">
      <p class="flex justify-between">
        <label for="email">Email:</label>
        <input
          id="email"
          type="email"
          v-model="email"
          class="px-2 rounded focus:outline-none"
          placeholder="email"
        />
      </p>
      <p class="flex justify-between mt-2">
        <label for="password">Password:</label>
        <input
          id="password"
          type="password"
          v-model="password"
          class="px-2 rounded focus:outline-none"
          placeholder="password"
        />
      </p>
      <div class="mt-4">
        <button
          class="py-1 px-2 rounded bg-custom"
          @click="authUser({ email, password })"
        >
          Login
        </button>
        <button class="ml-4 py-1 px-2 rounded bg-custom" @click="showReg()">
          Sign Up
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapMutations(["showReg"]),
    ...mapActions(["authUser"]),
    onAuth() {},
  },
};
</script>
