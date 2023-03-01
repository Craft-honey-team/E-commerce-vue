<template>
    <Layout>
		<div>
			<div class="pt-[20px] mt-[20px] mb-[40px] border-t-[3px] border-black">
				<p class="text-[50px]">{{ store.langProp.personalarea }}</p>
			</div>
			<div class="grid grid-flow-row gap-20">
				<div class="grid grid-flow-col auto-cols-max text-[20px] max-[700px]:grid-cols-1">
					<span
						class="bg-gray-200 h-[30px] flex items-center font-bold font-roboto rounded-[10px] px-2 text-black text-center">{{
							store.langProp.settings }}</span>
					<span class="justify-self-center mx-2 max-[700px]:hidden">|</span>
					<button @click="$router.push(`../Personal/${$route.params.id}`)"
						class="bg-[#EAAD02] h-[30px] rounded-[10px] px-2 text-white">{{ store.langProp.myorders
						}}</button>
				</div>
				<div class="grid grid-flow-col auto-cols-max gap-[30px] text-[20px]">
					<div class="text-slate-500 ">
						<p class=" ">{{ store.langProp.yourname }}:</p>
						<p class=" ">Email:</p>
						<p class=" ">{{ store.langProp.telephone }}</p>
						<p class=" ">{{ store.langProp.delivery }}:</p>
					</div>
					<div>
						<p class=" ">{{ store.name }}</p>
						<p class=" ">{{ store.email }}</p>
						<div v-show="setPhone">
							<input @input="handleInput" v-model="store.number " placeholder="Введите номер телефона" class="border-solid border-2 border-grey-600 rounded-[10px] px-[5px] w-[190px] text-[14px] mr-[20px]">
							<button @click="setPhone = false, savePhone(phone)" class="text-blue-700 underline decoration-1 text-[18px] hover:text-amber-700 hover:underline underline-offset-4">Добавить</button>
						</div>
						<div v-show="!setPhone">
							<span v-if="store.number.length" class="mr-[20px]">{{ store.number }}</span>
							<button @click="setPhone = true" class="text-blue-700 underline decoration-1 text-[18px] hover:text-amber-700 hover:underline underline-offset-4">Изменить номер</button>
						</div>
						<div v-show="setAddress">
							<input @input="handleInputAddress" v-model="store.address " placeholder="Введите адрес" class="border-solid border-2 border-grey-600 rounded-[10px] px-[5px] w-[190px] text-[14px] mr-[20px]">
							<button @click="setAddress = false" class="text-blue-700 underline decoration-1 text-[18px] hover:text-amber-700 hover:underline underline-offset-4">Добавить</button>
						</div>
						<div v-show="!setAddress">
							<span v-if="store.address.length" class="mr-[20px]">{{ store.address }}</span>
							<button @click="setAddress = true" class="text-blue-700 underline decoration-1 text-[18px] hover:text-amber-700 hover:underline underline-offset-4">Изменить адрес</button>
						</div>
						
						
						
					</div>
				</div>
				<router-link class="text-blue-700 underline decoration-1 text-[18px] hover:text-amber-700 hover:underline underline-offset-4" to="">Изменить пароль</router-link>
				<button @click="exitPersonalArea" class="bg-[#EAAD02] h-[30px] w-[200px] rounded-[10px] px-2 text-center text-white  hover:text-amber-700 hover:underline underline-offset-4">Выйти из АКК</button>
			</div>        
		</div>
    </Layout>
</template>
<script>
import { useStore } from '@/stores/test';
import { getAuth, signOut } from "firebase/auth";
export default {
    data() {
        return {
            store: useStore(),			
			setPhone: false,			
			setAddress: false,
			
        }
    },
	methods: {
		exitPersonalArea(){
		const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  this.store.uid = '';
  this.store.loggedIn = false;
  this.store.getCart();
  this.$router.push('/ru/home');
}).catch((error) => {
  // An error happened.
});
	},
	handleInput(){
	this.store.number = this.store.number.replace(/[^0-9+]/g, '');
	this.store.number = this.store.number.substr(0 , 16);
	
	},
	handleInputAddress(){

	},
	savePhone(phone){
		fetch('/api/updateUsers', {
				
				method: 'POST',
				headers: {
				
					'Content-Type': 'application/json'
				
				},
				body: JSON.stringify({ 1: 'phone', 2: this.store.number, 3: this.store.uid})
			
			})
	}
}

}

</script>

