import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";
import feather from "vue-icon";
import "./assets/styles/index.css";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyDIZ9M8zGkn-5CZxmScsz1XTB-zyj7As4M",
  authDomain: "test-db972.firebaseapp.com",
  databaseURL: "https://test-db972.firebaseio.com",
  projectId: "test-db972",
  storageBucket: "test-db972.appspot.com",
  messagingSenderId: "643686862947",
  appId: "1:643686862947:web:692d566f2b2b91ea07a856",
  measurementId: "G-ETD1BEP23R",
};

firebase.initializeApp(firebaseConfig);

Vue.use(feather);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
