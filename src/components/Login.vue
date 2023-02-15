<template>
    <div class="w-[700px] h-[500px] grid grid-cols-2">

        <div class=" flex flex-col ">
            <div class="mb-[40px] text-[30px] h-[45px] flex justify-center ">
                <span class="bg-gray-300 rounded-[8px] px-2 text-black font-roboto  hover:text-amber-700">Вход</span>
                <span class="mx-2">|</span>
                <button @click="store.comp = 'Register'"
                    class="bg-[#EAAD02] rounded-[10px] px-2 text-white font-roboto  hover:text-amber-700">Регистрация</button>
            </div>

            <button @click="loginGoogle"
                class="w-[343px] mb-[20px] font-roboto border-2 flex items-center justify-center  rounded-[3px] border-none bg-[#E3EDFE] text-black h-[45px]  hover:text-amber-700"><img
                    class="mr-[8px]" src="/src/assets/Vector.svg">Вход через Google
            </button>
            <input v-model="email"
                class="bg-[url('src/assets/mail(1).svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] w-[343px] px-[8px] border-2 mb-[10px] rounded-[3px] h-[45px] border-gray-400 font-roboto "
                type="email" placeholder="Введите Email" />
            <div class="relative mb-[10px]">
                <input v-model="password"
                    class="bg-[url('src/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] w-[343px] px-[8px] flex items-center font-roboto border-2 rounded-[3px] h-[45px] border-gray-400"
                    required v-bind:type="showPassword ? 'text' : 'password'" placeholder="Введите пароль" />
                <button @click="eyechange" class="buttonPass absolute right-[30px] top-0 bottom-0"><img :src="eyepass"
                        alt=""></button>

            </div>
            <router-link to="/"
                class=" text-blue-500 mb-[20px] px-[10px] flex justify-end  hover:text-amber-700 hover:underline underline-offset-4 ">Забыли
                пароль?</router-link>
            <button @click="login" :disabled="email.length <= 2 || password.length <= 1"
                class="bg-[#EAAD02] w-[343px] mb-[8%] border-2 border-none rounded-[3px] text-white h-[45px] disabled:opacity-50 ">Войти
            </button>
            <p class="text-center">У Вас еще нет аккаунта?<button @click="store.comp = 'Register'"
                    class="ml-[8px] text-blue-500 underline hover:text-amber-700">Создать</button></p>

        </div>

    </div>
</template>
<style>

</style>

<script>
import { useStore } from '@/stores/test'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export default {
    props: {
        buttonName: String
    },
    data() {

        return {
            email: '',
            password: '',
            eyepass: "src/assets/visibility_off.svg",
            store: useStore(),
            showPassword: false
        }
    },
    methods: {
        loginGoogle() {


            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
                .then((result) => {

                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    const user = result.user;
                    this.store.modal = false;
                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    const email = error.customData.email;
                    const credential = GoogleAuthProvider.credentialFromError(error);
                });
        },
        async login() {
            let obj = {
                method: 'POST',
                header: {
                    'Contetnt-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.email,
                    password: this.password,
                    returnSecureToken: true,
                }),
            }

            const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${import.meta.env.VITE_FIREBASE_API_KEY}`, obj);

            if (response?.ok) {
                const res = response.json();
                this.store.modal = false;
            }

        },
        eyechange() {
            this.showPassword = !this.showPassword
            if (this.eyepass == "src/assets/visibility_off.svg") {
                this.eyepass = "src/assets/visibility_ON.svg"
            } else {
                this.eyepass = "src/assets/visibility_off.svg"
            }
        },

    }

}

</script>
