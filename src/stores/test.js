import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
  	bg: 'bg-white',
  	modal: false,
  	feedback: false,
  	comp: 'Contacts'
  }),
})
