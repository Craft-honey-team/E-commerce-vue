import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTest = defineStore('test', {
  state: () => ({
  	questions: new Map(),
  	switchFavs: false,
    id: 0,
    correctAnswers: 0,
    finished: false
  }),
  actions: {
  
  	async getData() {
  	
  		const questions = await fetch (`http://localhost:3000/questions`, {
				method: 'GET'
			
			});
		
		let data = await questions.json();
		
		for (let i in data) {
		
			this.questions.set(parseInt(i)+1, data[i]);
		
		}
  	
  	}

  },
})
