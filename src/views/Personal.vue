<template>
    <Layout>
		<div> 
			<div class = "my-[40px]">
				<p class = "text-[50px]">{{ store.langProp.personalarea }}</p>
			</div>
			<div class="grid grid-flow-col auto-cols-max mb-[20px] text-[20px]">
				<button @click="$router.push(`../PersonalArea/${$route.params.id}`)"
					class="bg-[#EAAD02] h-[30px] rounded-[10px] px-2 text-white">{{ store.langProp.settings
					}}</button>
				<span class="justify-self-center mx-2 max-[700px]:hidden">|</span>
				<span
					class="bg-gray-200 h-[30px] flex items-center font-bold font-roboto rounded-[10px] px-2 text-black text-center">{{ store.langProp.myorders }}
				</span>

			</div>
			<div class="grid grid-flow-row gap-5" >
				
			   

				<div class="bg-[#ecd38e] rounded-lg text-[25px] flex items-center p-4">
					<p>{{ store.langProp.myorders }}</p>
				</div>
				<div class="bg-[#beedb5] p-4" v-for = "(item, index) in store.orders">
					<p class="text-[20px]">{{ store.langProp.orders }} №{{index}}</p>
					<div class="flex justify-around mt-4">
						<div class="">
							<p class="text-slate-700">{{ store.langProp.delivery }}</p>
							<p>{{item.address}}
							</p>
						</div>
						<div>
							<p class="text-slate-700">{{ store.langProp.paymentMethod }}</p>
							<p>{{item.payment}}</p>
						</div>
						<div>
							<p class="text-slate-700">{{ store.langProp.deliveryType }}</p>
							<p>{{ item.delivery }}</p>
						</div>
						<div>
							<p class="text-slate-700">{{ store.langProp.total }}</p>
							<p>{{ item.sum }} kgs</p>
						</div>
					</div>

				</div>
			</div>
		</div>
		<button @click="exitPersonalArea" class="bg-[#EAAD02] h-[30px] w-[200px] rounded-[10px] px-2 text-center text-white  hover:text-amber-700 hover:underline underline-offset-4">Выйти из АКК</button>
    </Layout>
</template>

<script>

import { useStore } from "@/stores/test";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default {
	

	beforeRouteEnter(to, from, next) {
		
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
		  if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
			const uid = user.uid;
		  	console.log(uid)
		  	console.log(from)
			if (uid != to.params.id) next('/')
			next()
			// ...
		  } else {
			// User is signed out
			// ...
			
			
		  }
		});
	
	},
	data() {

		return {

			store: useStore(),
			

		}

	},

	methods: {

		exitPersonalArea(){
		const auth = getAuth();
		signOut(auth).then(() => {
			this.store.uid = '';
			this.store.loggedIn = false;
			this.store.getCart();
			this.$router.push(`/${this.store.lang}/Home`);
		}).catch((error) => {
		});
	},
	

	}

}
</script>
