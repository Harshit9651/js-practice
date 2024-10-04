import { defineStore } from "pinia";

export const useImageStore = defineStore("imageStore", {
  state: () => ({
    images: [
      {
        label: "Bedroom",
        src: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        label: "Kitchen",
        src: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        label: "Bathroom",
        src: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
    activeIndex: null,
    uploadBackgroundGrid: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M16.9614 5.6002L13.6281 7.98353C13.1864 8.3002 12.5531 8.10853 12.3614 7.6002L10.7864 3.4002C10.5198 2.6752 9.49478 2.6752 9.22811 3.4002L7.64478 7.59186C7.45311 8.10853 6.82811 8.3002 6.38644 7.9752L3.05311 5.59186C2.38645 5.1252 1.50311 5.78353 1.77811 6.55853L5.24478 16.2669C5.36144 16.6002 5.67811 16.8169 6.02811 16.8169H13.9698C14.3198 16.8169 14.6364 16.5919 14.7531 16.2669L18.2198 6.55853C18.5031 5.78353 17.6198 5.1252 16.9614 5.6002ZM12.0864 13.2919H7.91978C7.57811 13.2919 7.29478 13.0085 7.29478 12.6669C7.29478 12.3252 7.57811 12.0419 7.91978 12.0419H12.0864C12.4281 12.0419 12.7114 12.3252 12.7114 12.6669C12.7114 13.0085 12.4281 13.2919 12.0864 13.2919Z" fill="white"/>
</svg>`,
  }),

  getters: {
    activeImage(state) {
      return state.activeIndex !== null
        ? state.images[state.activeIndex]
        : null;
    },

    totalImages(state) {
      return state.images.length;
    },
  },

  actions: {
    selectImage(index) {
      if (index >= 0 && index < this.images.length) {
        this.activeIndex = index;
      }
    },

    addImage(label, src) {
      this.images.push({ label, src });
    },
  },
});

// we dont use ref in pinia store
// state is like data
// getters is like computed property (like some this changs in view or model then it will executed)
// actions is just like function or we can say in optional api it is like methods
