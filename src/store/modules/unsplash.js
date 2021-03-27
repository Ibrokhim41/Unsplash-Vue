export default {
  state: {
    randomPhotos: [],
  },
  actions: {
    async fetchRandomPhotos(ctx) {
      const res = await fetch(
        "https://api.unsplash.com/photos/random/?client_id=ChprKPwDRGdBEnLyf6YR8n0tAe1PsUnFfAd2oAQ19xE&count=20"
      );
      const data = await res.json();
      ctx.commit("setPhotos", data);
    },
  },
  mutations: {
    setPhotos(state, data) {
      const photos = data.map((photo) => {
        return {
          like: false,
          photo,
        };
      });
      return (state.randomPhotos = photos);
    },
  },
  getters: {
    getRandomPhotos(state) {
      return state.randomPhotos;
    },
  },
};
