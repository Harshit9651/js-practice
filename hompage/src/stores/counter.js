
import { defineStore } from 'pinia';

export const useImageStore = defineStore('imageStore', {

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
  }),


  getters: {
 
    activeImage(state) {
      return state.activeIndex !== null ? state.images[state.activeIndex] : null;
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
