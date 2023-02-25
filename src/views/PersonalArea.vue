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
						<p class=" ">Ваше имя</p>
						<p class=" ">Электронная почта</p>
						<p class=" ">Телефон</p>
						<p class=" ">Адрес для доставки</p>
					</div>
					<div>
						<p class=" ">Иван иванов</p>
						<p class=" ">mailti@gmail.com</p>
						<p class=" ">+996555678349</p>
						<p class=" ">г.Бишкек</p>
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
            store: useStore()
        }
    },
	methods: {
		exitPersonalArea(){
		const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  this.store.uid = '';
  this.store.loggedIn = false;
  this.$router.push('/ru/home');
}).catch((error) => {
  // An error happened.
});
	},
	}

}

</script>

