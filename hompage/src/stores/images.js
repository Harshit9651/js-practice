import { defineStore } from 'pinia';

export const useImageStoreHomePage = defineStore('imageStore', {
  state: () => ({
    images: [
      {
        label: "Beautiful Living Room",
        src: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: 'A cozy and stylish living room that makes you feel at home.',
        buttonText: 'Re-Imagine My Room',
      },
      {
        label: "Elegant Bedroom",
        src: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: 'A serene and comfortable space to relax and unwind.',
        buttonText: 'Re-Imagine My Room',
      },
      {
        label: "Modern Kitchen",
        src: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: 'A sleek and functional kitchen design for all your needs.',
        buttonText: 'Re-Imagine My Room',
      },
      {
        label: "Chic Office Space",
        src: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: 'A stylish workspace that boosts creativity and productivity.',
        buttonText: 'Re-Imagine My Room',
      },
      {
        label: "Chic Office Space",
        src: "https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: 'A stylish workspace that boosts creativity and productivity.',
        buttonText: 'Re-Imagine My Room',
      },
      {
        label: "Chic Office Space",
        src: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: 'A stylish workspace that boosts creativity and productivity.',
        buttonText: 'Re-Imagine My Room',
      }, 
    ],
  }),

  getters: {
    totalImages(state) {
      return state.images.length;
    },
  },

  actions: {
    addImage(label, src, description, buttonText) {
      this.images.push({ label, src, description, buttonText });
    },
  },
});
