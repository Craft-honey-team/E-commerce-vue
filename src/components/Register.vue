<template>
  <div class="h-[500px] grid grid-cols-2 [&_*]:font-roboto [&_input]:pl-[8px]">

    <div class="grid auto-rows-min gap-[20px]">
      <div class="text-[30px] h-[45px] flex justify-center ">
        <button @click="store.comp = 'Login'" class="bg-[#EAAD02] rounded-[10px] px-2 text-white  hover:text-amber-700">{{
          store.langProp[store.lang].entrance }}</button>
        <span class="mx-2">|</span>
        <span class="bg-gray-300 rounded-[10px] px-2 text-black">{{ store.langProp[store.lang].registeration }}</span>
      </div>
      <button @click="loginGoogle"
        class="border-2 flex items-center justify-center rounded-[3px] border-none bg-gray-100 text-black h-[45px]  hover:text-amber-700">
        <img class="mr-[8px]" src="@/assets/Googlelogo.svg"> {{ store.langProp[store.lang].loginWithGoogle }}
      </button>
      <input v-model="name"
        class="bg-[url('@/assets/person.svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] font-roboto border-2 rounded-[3px] h-[45px] border-gray-400 "
        type="text" :placeholder="store.langProp[store.lang].username">
      <input v-model="email"
        class="bg-[url('@/assets/mail(1).svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] font-roboto border-2 rounded-[3px] h-[45px] border-gray-400 "
        type="email" :placeholder="store.langProp[store.lang].enterEmail" />

      <div class="relative">
        <input v-model="password" @focus="passwordMinLength = true"
          class="bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] px-[8px] w-full font-roboto border-2 rounded-[3px] h-[45px] border-gray-400"
          required v-bind:type="showPassword ? 'text' : 'password'" :placeholder="store.langProp[store.lang].password" />

        <button @click="eyechange" class="buttonPass absolute right-[30px] top-0 bottom-0">

          <img v-show="showPassword" src="@/assets/visibility_on.svg" alt="">
          <img v-show="!showPassword" src="@/assets/visibility_off.svg" alt="">

        </button>

      </div>

      <div class="relative">
        <input v-model="password2"
          class="bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] w-full px-[8px] flex items-center font-roboto border-2 rounded-[3px] h-[45px] border-gray-400"
          required v-bind:type="showPassword ? 'text' : 'password'"
          :placeholder="store.langProp[store.lang].confirmThePassword" />
        <button @click="showPassword = !showPassword" class="buttonPass absolute right-[30px] top-0 bottom-0">

          <img v-show="showPassword" src="@/assets/visibility_on.svg" alt="">
          <img v-show="!showPassword" src="@/assets/visibility_off.svg" alt="">

        </button>

      </div>
      <div v-if="password2 != password" class="text-red-500 font-roboto leading-[2px]">{{
        store.langProp[store.lang].passwordMismatch }}</div>
      <!-- <div v-if="passwordLenght < 5" class="text-red-500 font-roboto text-center">Пароль должен состоять <br> минимум из 5 символов</div> -->
      <div v-show="passwordMinLength && password.length <= 5" class="text-red-500 font-roboto leading-[2px]">{{
        store.langProp[store.lang].minimumNumberOfSymbols }} - {{ MinLength }} </div>


      <button @click="register"
        :disabled="name.length <= 2 || password.length <= 5 || email.length <= 5 || password !== password2"
        class=" bg-[#EAAD02] border-2 border-none rounded-[3px] text-white h-[45px] disabled:opacity-50 ">{{
          store.langProp[store.lang].toComeIn }}
      </button>
      <p class="text-center">{{ store.langProp[store.lang].doYouAlreadyHaveAnAccount }}<button
          @click="store.comp = 'Login'" class="ml-[8px]  text-blue-500 underline hover:text-amber-700">{{
            store.langProp[store.lang].toComeIn }}</button></p>

    </div>
  </div>
</template>

<script>
import { useStore } from '@/stores/test'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default {
  data() {
    return {
      showModal: false,
      name: '',
      password: '',
      password2: '',
      email: '',
      showPassword: false,
      passwordMinLength: false,
      MinLength: 5,
      eyepass: "src/assets/visibility_off.svg",
      store: useStore()
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
    async register() {
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
      if (this.password2 == this.password) {

        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${import.meta.env.VITE_FIREBASE_API_KEY}`, obj);


        if (response?.ok) {
          const res = response.json();
          this.store.comp = 'Login';

        }
      }
    },
    eyechange() {
      this.showPassword = !this.showPassword
      if (this.eyepass == "src/assets/visibility_off.svg") {
        this.eyepass = "src/assets/visibility_ON.svg"
      } else {
        this.eyepass = "src/assets/visibility_off.svg"
      }
    }
  }
}
</script>
