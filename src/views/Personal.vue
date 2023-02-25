<template>
    <Layout>
		<div> 
			<div class = "pt-[20px] mt-[20px] mb-[40px] border-t-[3px] border-black">
				<p class = "text-[50px]">{{ store.langProp.personalarea}}</p>
			</div>
			<div class="grid grid-flow-col auto-cols-max mb-[20px] text-[20px] max-[700px]:grid-cols-1">
				<button @click="$router.push(`../PersonalArea/${$route.params.id}`)"
					class="bg-[#EAAD02] h-[30px] rounded-[10px] px-2 text-white">{{ store.langProp.settings
					}}</button>
				<span class="justify-self-center mx-2 max-[700px]:hidden">|</span>
				<span
					class="bg-gray-200 h-[30px] flex items-center font-bold font-roboto rounded-[10px] px-2 text-black text-center">{{ store.langProp.myorders }}
				</span>

			</div>
			<div class="grid grid-flow-row gap-5">
				
			   

				<div class="bg-[#ecd38e] rounded-lg text-[25px] flex items-center p-4">
					<p>{{ store.langProp.myorders }}</p>
				</div>
				<div class="bg-[#beedb5] p-4">
					<p class="text-[20px]">Заказ№1</p>
					<div class="flex justify-around mt-4">
						<div class="">
							<p class="text-slate-700">Адрес доставки</p>
							<p>Город Бишкек,
								Ленинский район, Комсомольский переулок 19.
							</p>
						</div>
						<div>
							<p class="text-slate-700">Дата, время</p>
							<p>15 Марта, 2023 12:00</p>
						</div>
						<div>
							<p class="text-slate-700">Способ оплаты</p>
							<p>Эл.кошелек</p>
						</div>
						<div>
							<p class="text-slate-700">Статус</p>
							<p>Оплачен</p>
						</div>
						<div>
							<p class="text-slate-700">Итого к оплате</p>
							<p>1000 сом</p>
						</div>
					</div>

				</div>
			</div>
		</div>
    </Layout>
</template>

<script>

import { useStore } from "@/stores/test";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {

	beforeRouteEnter(to, from, next) {
			
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
		  if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
			const uid = user.uid;
		  	console.log(uid)
		  	console.log(to)
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

			store: useStore()

		}

	}

}
</script>
