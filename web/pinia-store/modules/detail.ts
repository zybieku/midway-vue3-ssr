
import { defineStore } from 'pinia'

export const useDetailStore = defineStore('detailStore', {
  state: () => {
    return {
       data: {} 
      } as any
  },
  actions: {
    setData (payload: any) {
      this.data = payload.data
    }
  }
})