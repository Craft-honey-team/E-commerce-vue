<template>
    <div class="grid grid-cols-2 [&_*]:font-roboto [&_input]:mb-[20px] [&_input]:pl-[8px]">

            <div class="flex flex-col">
                <div class="mb-[20px] text-[30px] h-[45px] flex justify-center">
                  <span class = "bg-gray-200 rounded-[10px] px-2 text-black">Вход</span>
                  <span class = "mx-2">|</span>
                  <button @click = "store.comp = 'Register'" class = "bg-[#EAAD02] rounded-[10px] px-2 text-white">Регистрация</button>  
                </div>
                
                <button @click = "signInWithGoogle" class="mb-[20px] border-2 flex items-center justify-center  rounded-[3px] border-none bg-gray-100 text-black h-[40px]">
                	<img src="/src/assets/Vector.svg"><p class="ml-2">Вход через Google</p>
                </button>
                <input v-model="userName" class="border-2 mb-[20px] rounded-[3px] h-[45px] border-gray-400 " type="email"
                    placeholder="Ведите логин" />
                <input v-model="password" class="border-2 mb-[5px] rounded-[3px] h-[45px] border-gray-400 " type="password"
                    placeholder="Ведите пароль" />
                <router-link to="/" class=" text-blue-500 mb-[20px] flex justify-end">Забыли пароль?</router-link>
                    <button @click = "userCheck" class="bg-[#EAAD02] mb-[8%] border-2 border-none rounded-[3px] text-white h-[40px] ">Войти
                    </button>
                    <p>У вас уже есть аккаунт?<router-link to="/" class="pl-2 text-blue-500">Войти</router-link></p>
                    
            </div>

        </div>
</template>

<script>
import { useStore } from '@/stores/test'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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
            store: useStore()
        }
    },
    methods: {
    	async signInWithGoogle() {
    	
    		const auth = getAuth();
			signInWithPopup(auth, provider)
			  .then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				// IdP data available using getAdditionalUserInfo(result)
				// ...
			  }).catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			  });
						
    	},
        async users() {
            const response = await fetch(`http://localhost:3000/users`)
            const data = await response.json()
            this.DATA = await data
        },
        loginBut() {

            this.But = true
        },
        closeBut() {

            this.But = false
        },
        userCheck() {

            console.log("this works")

            for (let i of this.DATA) {
                console.log(i.email)
                console.log(i.password)
                if (i.email == this.userName && i.password == this.password) {
                    console.log("easy")
                    return true
                }

            }
        }
    },
    mounted() {
        this.users()
    }

}

</script>
