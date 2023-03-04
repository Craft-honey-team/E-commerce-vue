<template>
    <div class="h-[500px] grid grid-cols-2 max-[450px]:grid-cols-1 [&_*]:font-roboto [&_input]:pl-[8px]">

        <div class="grid auto-rows-min gap-[20px]">
            <div class="text-[30px] flex justify-center ">
                <span class="bg-gray-200 rounded-[10px] px-2 text-black font-roboto">{{ store.langProp.login
                }}</span>
                <span class="mx-2">|</span>
                <button @click="store.comp = 'Register'"
                    class="bg-[#EAAD02] rounded-[10px] px-2 text-white font-roboto hover:text-amber-700">{{
                        store.langProp.registration }}</button>
            </div>

            <button @click="loginGoogle"
                class="border-2 flex items-center justify-center rounded-[3px] border-none bg-gray-100 text-black h-[45px] hover:text-amber-700"><img
                    class="mr-[8px]" src="@/assets/Vector.svg">{{ store.langProp.loginwithgoogle }}
            </button>
            <!--w-[343px]-->
            <input v-model="email"
                class="bg-[url('@/assets/mail(1).svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] border-2 rounded-[3px] h-[45px] border-gray-400 font-roboto "
                type="email" :placeholder="store.langProp.enteremail" />
            <div class="relative">
                <input v-model="password"
                    class="bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] w-full px-[8px] flex items-center font-roboto border-2 rounded-[3px] h-[45px] border-gray-400"
                    required v-bind:type="showPassword ? 'text' : 'password'"
                    :placeholder="store.langProp.enterpassword" />
                <button @click="eyechange" class="buttonPass absolute right-[30px] top-0 bottom-0">
                    <img v-show="showPassword" src="@/assets/visibility_on.svg" alt="">
                    <img v-show="!showPassword" src="@/assets/visibility_off.svg" alt="">
                </button>

            </div>
            <router-link to="/"
                class=" text-blue-500 px-[10px] flex justify-end  hover:text-amber-700 hover:underline underline-offset-4 ">{{
                    store.langProp.forgotyourpassword }}</router-link>
            <button @click="login" :disabled="email.length <= 2 || password.length <= 1"
                class="bg-[#EAAD02] border-2 border-none rounded-[3px] text-white h-[45px] disabled:opacity-50 ">{{
                    store.langProp.login }}
            </button>
            <p class="text-center">{{ store.langProp.donthaveaccount }}<button
                    @click="store.comp = 'Register'" class="ml-[8px] text-blue-500 underline hover:text-amber-700">{{
                        store.langProp.createaccount }}</button></p>

        </div>

    </div>
</template>
<style></style>

<script>
import { useStore } from '@/stores/test'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default {
    props: {
        buttonName: String
    },
    data() {

        return {
            email: '',
            password: '',
            store: useStore(),
            showPassword: false,
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
                    fetch('/api/users', {
		  
					  	method: 'POST',
					  	headers: {
					  	
					  		'Content-Type': 'application/json'
					  	
					  	},
					  	body: JSON.stringify({ 1: user.uid })
		  			})		
		  			this.store.getCart();
		  			this.store.name = user.displayName;
                    this.$router.push(`/${this.store.lang}/PersonalArea/${user.uid}`);
                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    //const email = error.customData.email;
                    const credential = GoogleAuthProvider.credentialFromError(error);
                });

        },
        async login() {
            const auth = getAuth();
			signInWithEmailAndPassword(auth, this.email, this.password)
			  .then((userCredential) => {
				const user = userCredential.user;
				console.log(user)
				this.store.modal = false;
				this.store.getCart();
				this.store.name = user.displayName;
                this.$router.push(`/${this.store.lang}/PersonalArea/${user.uid}`);
			  })
			  .catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			  });

        },
        eyechange() {
            this.showPassword = !this.showPassword
        },

    }

}

</script>
