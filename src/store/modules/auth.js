import firebase from "firebase";

export default {
  state: {
    userEmail: "none",
    userId: "",
    userPhotos: [],
  },
  actions: {
    userEmail(ctx) {
      firebase.auth().onAuthStateChanged((user) => {
        user ? ctx.commit("userEmail", user.email) : null;
      });
    },
    userLogout() {
      firebase.auth().signOut();
    },
    authUser(ctx, { email, password }) {
      const auth = firebase.auth();
      auth.signInWithEmailAndPassword(email, password).then(
        () => {
          alert("kirding");
        },
        (err) => {
          alert(err.message);
        }
      );
    },
    regUser(ctx, { email, password }) {
      const auth = firebase.auth();
      auth.createUserWithEmailAndPassword(email, password).then(
        () => {
          alert("all Ok");
        },
        (err) => {
          alert(err.message);
        }
      );
    },
    getUid({ commit }) {
      const user = firebase.auth().currentUser;
      commit("setUserId", user);
      return user ? user.uid : null;
    },
    async createRecord({ dispatch }, record) {
      try {
        const uid = await dispatch("getUid");
        return await firebase
          .database()
          .ref(`/users/${uid}/records`)
          .push(record);
      } catch (e) {
        console.log(e);
      }
    },
    async getRecord({ commit, dispatch }) {
      const uid = await dispatch("getUid");
      try {
        const photo = await firebase.database().ref(`/users/${uid}/records`);
        photo.on("value", (snapshot) => {
          const data = snapshot.val();
          commit("setUserPhotos", data);
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
  mutations: {
    userEmail(state, email) {
      return (state.userEmail = email);
    },
    setUserId(state, id) {
      return (state.userId = id);
    },
    setUserPhotos(state, photos) {
      return (state.userPhotos = photos);
    },
  },
  getters: {
    getUserEmail(state) {
      return state.userEmail;
    },
    getUserId(state) {
      return state.userId;
    },
    getUserPhotos(state) {
      return state.userPhotos;
    },
  },
};
