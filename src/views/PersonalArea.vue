<template>
	<Layout>
		<div>
			<div class="my-[40px]">
				<p class="text-[50px]">{{ store.langProp.personalarea }}</p>
			</div>
			<div class="grid grid-flow-row gap-20">
				<div class="grid grid-flow-col auto-cols-max text-[20px]">
					<span
						class="bg-gray-200 h-[30px] flex items-center font-bold font-roboto rounded-[10px] px-2 text-black text-center">{{
							store.langProp.settings }}</span>
					<span class="justify-self-center mx-2 max-[700px]:hidden">|</span>
					<button @click="$router.push(`../Personal/${$route.params.id}`)"
						class="bg-[#EAAD02] h-[30px] rounded-[10px] px-2 text-white">{{ store.langProp.myorders }}</button>
				</div>
				<div class = "grid grid-flow-col">
				<div class="grid grid-cols-2 text-[20px]">
					<div class="text-slate-500 grid grid-rows-4">
						<p class=" ">{{ store.langProp.yourname }}:</p>
						<p class=" ">Email:</p>
						<p class=" ">{{ store.langProp.telephone }}</p>
						<p class=" ">{{ store.langProp.delivery }}:</p>
					</div>
					<div class = "grid grid-rows-4">
						<p class=" ">{{ store.name }}</p>
						<p class=" ">{{ store.email }}</p>
						<div v-show="setPhone">
							<input @input="handleInput" v-model="store.number" :placeholder="store.langProp.placeholderPhone" class="border-solid border-2 border-grey-600 rounded-[10px] px-[5px] w-[190px] text-[14px] mr-[20px]">
							<button @click="setPhone = false, savePhone(phone)" class="text-blue-700 underline decoration-1 text-[18px] hover:text-amber-700 hover:underline underline-offset-4">{{ store.langProp.addBut }}</button>
						</div>
						<div v-show="!setPhone">
							<span v-if="store.number.length" class="mr-[20px]">{{ store.number }}</span>
							<button @click="setPhone = true" class="text-blue-700 underline decoration-1 text-[18px] hover:text-amber-700 hover:underline underline-offset-4">{{ store.langProp.changePhone }}</button>
						</div>
						<div v-show="setAddress">
							<input v-model="store.address" :placeholder="store.langProp.placeholderAddress" class="border-solid border-2 border-grey-600 rounded-[10px] px-[5px] w-[190px] text-[14px] mr-[20px]">
							<button @click="setAddress = false, handleInputAddress()" class="text-blue-700 underline decoration-1 text-[18px] hover:text-amber-700 hover:underline underline-offset-4">{{ store.langProp.addBut }}</button>
						</div>
						<div v-show="!setAddress">
							<span v-if="store.address.length" class="mr-[20px]">{{ store.address }}</span>
							<button @click="setAddress = true" class="text-blue-700 underline decoration-1 text-[18px] hover:text-amber-700 hover:underline underline-offset-4">{{ store.langProp.changeAddress }}</button>
						</div>
						<div class="">
							<div v-show="dhl">
								<img class="w-[100px] h-[80px] " src="@/assets/dhl-express.svg" alt="">
							</div>
							<div v-show="dpd">
								<img class="w-[100px] h-[80px] " src="@/assets/dpd-logo-2015-.svg" alt="">
							</div>
							<div v-show="cdek">
								<img class="w-[100px] h-[80px] " src="@/assets/cdek-1.svg" alt="">
							</div>
						</div>

					</div>
				</div>
				<div class="ml-[50px] gap-[10px] justify-self-start">
					<div class = "grid grid-rows-3">
						<h2>Выберите способ доставки:</h2>
						<span class="text-[14px] text-red-600 break-all">Внимание: бесплатная доставка
							осуществляется при заказе на
							сумму свыше 112500сом!</span>
						<span class="text-[14px] text-red-600 break-all">При заказе на сумму ниже 112500сом
							доставка осуществляется
							за счет ПОКУПАТЕЛЯ по тарифам транспортной компании!</span>
					</div>
					<div class="grid grid-flow-col gap-[10px]">
						<input v-model="store.delivery" value = "dhl" id = "dhl" @click = "deliveryOption" class = "self-center h-[20px]" name = "address" type = "radio"/>
						<img class="w-[100px] h-[80px] hover:cursor-pointer"
							src="@/assets/dhl-express.svg" alt="">
						<input v-model="store.delivery" value = "dpd" id = "dpd" @click = "deliveryOption" class = "self-center h-[20px]" name = "address" type = "radio"/>
						<img class="w-[100px] h-[80px] hover:cursor-pointer"
							src="@/assets/dpd-logo-2015-.svg" alt="">
						<input v-model="store.delivery" value = "cdek" id = "cdek" @click = "deliveryOption" class = "self-center h-[20px]" name = "address" type = "radio"/>
						<img class="w-[100px] h-[80px] hover:cursor-pointer"
							src="@/assets/cdek-1.svg" alt="">
					</div>

				</div>
				
				</div>
				
				<button @click="resetPassword" class="text-blue-700 underline decoration-1 text-[18px] hover:text-amber-700 hover:underline underline-offset-4 w-max" to="">{{ store.langProp.changePassword }}</button>
				<button @click="exitPersonalArea" class="bg-[#EAAD02] h-[30px] w-[200px] rounded-[10px] px-2 text-center text-white  hover:text-amber-700 hover:underline underline-offset-4">{{ store.langProp.leave }}</button>
			</div>        
		</div>
	</Layout>
</template>
<script>
import { useStore } from '@/stores/test';
import { getAuth, signOut, sendPasswordResetEmail } from "firebase/auth";
export default {
	data() {
		return {
			store: useStore(),
			setPhone: false,
			setAddress: false,
			dpd: false,
			dhl: false,
			cdek: false,
        }
    },
	methods: {
		exitPersonalArea() {
		const auth = getAuth();
		signOut(auth).then(() => {
		  // Sign-out successful.
		  this.store.uid = '';
		  this.store.loggedIn = false;
		  this.store.getCart();
		  this.$router.push(`/${this.store.lang}/Home`);
		}).catch((error) => {
		  // An error happened.
		});
	},
	deliveryOption() {
	
		setTimeout(() => {
		fetch('/api/updateUsers', {

				method: 'POST',
				headers: {

					'Content-Type': 'application/json'

				},
				body: JSON.stringify({ 1: 'delivery', 2: this.store.delivery, 3: this.store.uid })

			})	
			
		}, 500);
	
	},
	handleInput(){
	this.store.number = this.store.number.replace(/[^0-9+]/g, '');
	this.store.number = this.store.number.substr(0 , 16);
	
	},
	handleInputAddress(){
		
		fetch('/api/updateUsers', {

				method: 'POST',
				headers: {

					'Content-Type': 'application/json'

				},
				body: JSON.stringify({ 1: 'adress', 2: this.store.address, 3: this.store.uid })

			})	

		},
		exitPersonalArea() {
			const auth = getAuth();
			signOut(auth).then(() => {
				// Sign-out successful.
				this.store.uid = '';
				this.store.loggedIn = false;
				this.store.getCart();
				this.$router.push(`/${this.store.lang}/Home`);
			}).catch((error) => {
				// An error happened.
			});
		},
		savePhone(phone) {
			fetch('/api/updateUsers', {

				method: 'POST',
				headers: {

					'Content-Type': 'application/json'

				},
				body: JSON.stringify({ 1: 'phone', 2: this.store.number, 3: this.store.uid })

			})
	},
		resetPassword(){
			const auth = getAuth();
			sendPasswordResetEmail(auth, this.store.email)
	  			.then(() => {
	  			})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
				});
		},
	}
}

</script>

