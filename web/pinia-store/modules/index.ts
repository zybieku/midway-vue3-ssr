import { defineStore } from "pinia";

interface IndexData {}

export const useIndexStore = defineStore("indexStore", {
  state: () => {
    return { data: {} as IndexData };
  },
  actions: {
    setData(indexData) {
      this.data = indexData;
    },
  },
});
