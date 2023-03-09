<template>
    <div class="grid grid-cols-2  h-[500px] [&_*]:font-roboto [&_input]:pl-[8px]">
        <div class="grid grid-flow-row self-center gap-[20px] ">
        <h1 class="text-[30px] max-[350px]:text-[20px]">{{ store.langProp.passwordRecovery }}</h1>
        <input v-model="email"
                class="bg-[url('@/assets/mail(1).svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] border-2 rounded-[3px] h-[45px] border-gray-400 font-roboto "
                type="email" :placeholder="store.langProp.enteremail" />
                <button @click="resetPassword" :disabled="email.length <= 2" class="bg-[#EAAD02] border-2 border-none rounded-[3px] text-white h-[45px] disabled:opacity-50 ">
                    {{ store.langProp.getPassword }}
                </button>
                <span v-if="errorMessge" class="text-red-500 font-roboto">{{ store.langProp.notFound }}</span>
        </div>
    </div>


</template>
<script>
import { useStore } from '@/stores/test'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
export default {
    data (){
        return {
            email:'',
            store: useStore(),
            errorMessge: false
        }
    },
    methods: {
        resetPassword(){
			const auth = getAuth();                  
			sendPasswordResetEmail(auth, this.email)
	  			.then(() => {
                    this.store.comp = 'Login';
	  			})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
                    this.errorMessge = true;
				});
            
		},
}
}
</script>
