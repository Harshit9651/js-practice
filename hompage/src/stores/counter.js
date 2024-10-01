import { defineStore } from "pinia";

export const userCounterStore = defineStore("counter", {
  state: () => ({
    count: 1,
  }),

  actions: {
    increment() {
      this.count++;
    },
  },
});

// we dont use ref in pinia store
