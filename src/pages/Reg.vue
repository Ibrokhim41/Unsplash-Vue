<template>
  <div class="h-screen w-screen flex justify-center items-center">
    <form class="w-1/5 p-2 bg-sidebar rounded" @submit.prevent="">
      <p class="flex flex-col justify-between">
        <label class="my-2 text-lg" for="email">Email:</label>
        <input
          id="email"
          type="email"
          v-model="email"
          :class="{ 'border-2 border-red': confirm }"
          class="px-2 py-1 rounded focus:outline-none"
          placeholder="email"
        />
      </p>
      <p class="flex flex-col justify-between mt-2">
        <label class="my-2 text-lg" for="password">Password:</label>
        <input
          id="password"
          type="password"
          v-model="password"
          :class="{ 'border-2 border-red': confirm }"
          class="px-2 py-1 rounded focus:outline-none"
          placeholder="password"
        />
      </p>
      <p class="flex flex-col justify-between mt-2">
        <label class="my-2 text-lg" for="ConfirmPassword"
          >Confirm Password:</label
        >
        <input
          id="ConfirmPassword"
          type="password"
          v-model="confirmPassword"
          :class="{ 'border-2 border-red': confirm }"
          class="px-2 py-1 rounded focus:outline-none"
          placeholder="confirm password"
        />
      </p>
      <div class="mt-4">
        <button class="py-1 px-2 rounded bg-custom" @click="onAuth()">
          Sign Up
        </button>
        <button class="ml-4 py-1 px-2 rounded bg-custom" @click="showReg()">
          Login
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
      confirmPassword: "",
      confirm: false,
    };
  },
  methods: {
    ...mapMutations(["showReg"]),
    ...mapActions(["regUser"]),
    onAuth() {
      const user = {
        email: this.email,
        password: this.password,
      };
      if (this.email == "" && this.password == "") {
        this.confirm = true;
      } else if (this.password === this.confirmPassword) {
        this.regUser(user);
        this.email = "";
        this.password = "";
        this.confirm = false;
      } else {
        this.confirm = true;
      }
      // this.password === this.confirmPassword
      //   ? this.regUser(user)
      //   : (this.confirm = true);
    },
  },
};
</script>
