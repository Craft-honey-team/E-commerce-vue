import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useStore = defineStore('store', {
	state: () => ({
		bg: 'bg-white',
		modal: false,
		feedback: false,
		comp: 'Contacts',
		loggedIn: false,
		uid: '',
		lang: 'ru',
		langProp: {  }
	}),
	actions: {
		
		async process() {
		
			let res = await fetch('/api/language', {
			
				method: 'POST',
				headers: {
				
					'Content-Type': 'application/json'
				
				},
				body: JSON.stringify({ 1: this.lang })
			
			})
			this.langProp = await res.json();
			console.log('repeat')
		
		},
		checkStatus() {

			const auth = getAuth();
			onAuthStateChanged(auth, (user) => {
			  if (user) {
				console.log('works');
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				this.loggedIn = true;
				this.uid = user.uid;
				// ...
			  } else {
				// User is signed out
				// ...
			  }
			}); 

		}
	
	},
})
