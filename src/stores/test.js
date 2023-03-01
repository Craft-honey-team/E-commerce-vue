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
		name: '',
		email: '',
		data: {},
		dataOpt: {},
		cart: {},
		lang: 'ru',
		langProp: {},
		number: '',
		address: '',
		

	}),
	getters: {
	
	},
	actions: {
		
		sum() {
		
			let sum = 0;
			
			for(let i in this.cart) {
			
				console.log(this.cart[i].price);
				sum += this.cart[i].price * this.cart[i].quantity;
			
			}
			
			return sum
		
		},
		
		sumItem(index) {
		
			let sum = this.cart[index].quantity * this.cart[index].price;
			
			return sum
		
		},
		
		async process() {
		
			let res = await fetch(`/api/language/?lang=${this.lang}`)
			this.langProp = await res.json();
		
		},
		async checkStatus() {

			return new Promise((resolve, reject) => {
				const auth = getAuth();
				onAuthStateChanged(auth, (user) => {
				  if (user) {
					console.log('works');
					// User is signed in, see docs for a list of available properties
					// https://firebase.google.com/docs/reference/js/firebase.User
					this.loggedIn = true;
					this.uid = user.uid;
					this.name = user.displayName;
					this.email = user.email;
					console.log(user)
					resolve(user);
					// ...
				  } else {
					// User is signed out
					// ...\
					resolve(user);
				  }
				});
				reject
			})

		},
		async getData() {
		
			try {
                let res = await fetch('/api/productsList');
                this.data = await res.json();
                res = await fetch('/api/productsListOpt');
                this.dataOpt = await res.json();
            } catch(error) {
                console.log(error);
            }
		
		},
		async getCart() {
		
			try {
			
				let res = await fetch('/api/usersCart', {
				
					method: 'POST',
					headers: {
						
						'Content-Type': 'application/json'
					
					},
					body: JSON.stringify({ 1: this.uid })
				
				});
				
				let data = await res.json();
				
				console.log(data);
				
				data = JSON.parse(data.orders)
				
				console.log(data)
				
				for(let i in data) {
				
					console.log(i);
					let item;
					try {
						item = JSON.parse(JSON.stringify(this.data[data[i].id]));
						item.quantity = data[i].quantity;
						console.log(item);
						this.cart[item.id] = item;
					} catch(error) {
						console.log(error);
						item = JSON.parse(JSON.stringify(this.dataOpt[data[i].id]));
						item.quantity = data[i].quantity;
						this.cart[item.id] = item;
					}
					
				}
				
			} catch(error) {
			
				if (localStorage.getItem('cart') != null) {
					console.log("work bitch");
					this.cart = JSON.parse(localStorage.getItem('cart'));
				}
				console.log(error);
			
			}
		
		}	
	},
})
