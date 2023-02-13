<template>
    <div class="grid grid-cols-2">

        <div class=" flex flex-col ">
            <div class="mb-[40px] text-[30px] h-[45px] flex justify-center ">
                <span class="bg-gray-300 rounded-[8px] px-2 text-black font-roboto  hover:text-amber-700">Вход</span>
                <span class="mx-2">|</span>
                <button @click="store.comp = 'Register'"
                    class="bg-blue-500 rounded-[10px] px-2 text-white font-roboto  hover:text-amber-700">Регистрация</button>
            </div>

            <button
                class="mb-[20px] font-roboto border-2 flex items-center justify-center  rounded-[3px] border-none bg-[#E3EDFE] text-black h-[40px]  hover:text-amber-700"><img
                    class="mr-[10px]" src="/src/assets/Vector.svg">Вход через Google
            </button>
            <input v-model="userName"
                class="w-[300px] px-[8px] border-2 mb-[10px] rounded-[3px] h-[45px] border-gray-400 font-roboto "
                type="email" placeholder="Введите логин" />
            <div class="relative mb-[10px]">
                <input v-model="password"
                    class=" w-[300px] px-[8px] flex items-center font-roboto border-2 rounded-[3px] h-[45px] border-gray-400"
                    required v-bind:type="showPassword ? 'text' : 'password'" placeholder="Введите пароль" />
                <button @click="showPassword = !showPassword"
                    class="buttonPass absolute right-[30px] top-0 bottom-0"><img src="src/assets/visibility_off.svg"
                        alt=""></button>

            </div>
            <router-link to="/"
                class=" text-blue-500 mb-[20px] flex justify-end  hover:text-amber-700 hover:underline underline-offset-4 ">Забыли
                пароль?</router-link>
            <button @click="userCheck" :disabled="userName <= 5 || password <= 1"
                class="bg-blue-500 mb-[8%] border-2 border-none rounded-[3px] text-white h-[40px] disabled:opacity-60 ">Войти
            </button>
            <p>У вас уже есть аккаунт?<router-link to="/"
                    class="ml-[8px] text-blue-500 underline hover:text-amber-700">Войти</router-link></p>

        </div>

    </div>
</template>
<style>

</style>

<script>
import { useStore } from '@/stores/test'
export default {
    props: {
        buttonName: String
    },
    data() {
        DATA: null
        return {
            But: false,
            userName: "",
            password: null,
            store: useStore(),
            showPassword: false
        }
    },



}

</script>
