<template>
    <Layout>
        <div>
            <div class="h-[10%] flex items-end ">
                <router-link class="text-slate-500" to="/Personal">Мои заказы</router-link>/<router-link to="/PersonalArea">Настройки</router-link>
            </div>
            <div
                class="flex justify-center items-center w-full h-[10%] text-[40px] font-[400] border-b-2 border-black mb-10">
                <h1>Личный кабинет</h1>
            </div>
             <div class=" w-[30%] h-[28%] flex justify-between text-[18px]">
                <div class="text-slate-500 w-[40%]">
                    <p class="py-[5px]">Ваше имя</p>
                    <p class="py-[5px]">Электронная почта</p>
                    <p class="py-[5px]">Телефон</p>
                    <p class="py-[5px]">Адрес для доставок</p>
                </div>
                <div>
                    <p class="py-[5px]">Иван иванов</p>
                    <p class="py-[5px]">mailti@gmail.com</p>
                    <p class="py-[5px]">+996555678349</p>
                    <p class="py-[5px]">г.Бишкек</p>
                </div>
             </div>
             <router-link class="text-blue-700 underline decoration-1 text-[18px]" to="">Изменить пароль</router-link>
             <div class="py-[2%] w-[25%]">
                <p class="font-bold text-[20px] ">Привязка социальных сетей</p>
                <p class="text-[18px] py-[5px]"> Привяжите учетную запись социальной сети и используйте ее для авторизации</p>
             </div>
             <div class="w-[15%] h-[40px] flex justify-around">
                <div>
                    <img class="w-[50px] h-[50px]" src="@/assets/Instagram.svg" alt="">
                </div>
             </div>
        </div>
    </Layout>
</template>
