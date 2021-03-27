<template>
  <div>
    <Header />
    <Home />
    <hr />
    <UserPhotos />
  </div>
</template>

<script>
import Header from "../components/Header";
import Home from "../components/Home";
import UserPhotos from "../components/UserPhotos";

export default {
  components: {
    Header,
    Home,
    UserPhotos,
  },
};
</script>
