<template>
    <Layout>
        <div>
            <div class="h-[10%] flex items-end ">
                <router-link to="/Personal">Мои заказы</router-link>/<router-link class="text-slate-500" to="/PersonalArea">Настройки</router-link>
            </div>
            <div
                class="flex justify-center items-center w-full h-[10%] text-[40px] font-[400] border-b-2 border-black mb-10">
                <h1>Личный кабинет</h1>
            </div>

            <div class="w-[70%] h-[10%] bg-[#ecd38e] text-[25px] flex items-center mb-7">
                <p>Мои заказы</p>
            </div>
            <div class="w-[70%] h-[30%] bg-[#beedb5]  ">
                <p class="text-[20px]">Заказ№1</p>
                <div class="flex justify-around">
                   <div class="w-[20%]">
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
    </Layout>
</template>

<script>

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

}

</script>
