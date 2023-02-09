<template>
    <div class="grid grid-cols-2">

        <div class=" flex flex-col">
            <div class="mb-[20px] text-[30px] h-[45px] ">
                <h1 class="font-roboto">Вход</h1>
            </div>

            <button
                class="mb-[20px] border-2 flex items-center justify-center  rounded-[3px] border-none bg-[#E3EDFE] text-black h-[40px]">
                <img src="/src/assets/Vector.svg"><p class="font-roboto ml-2">Вход через Google</p> 
            </button>
            <input v-model="userName" class="font-roboto border-2 mb-[20px] rounded-[3px] h-[45px] border-gray-400 " type="email"
                placeholder="  Email или Телефон*" />
            <input v-model="password" class=" font-roboto mb-[5px] border-2 rounded-[3px] h-[45px] border-gray-400 " type="password"
                placeholder=" Введите пароль" />
            <router-link to="/" class=" text-blue-500 mb-[20px] flex justify-end font-roboto">Забыли пароль?</router-link>
            <button @click="userCheck"
                class="bg-blue-500 mb-[8%] border-2 border-none rounded-[3px] text-white h-[40px] font-roboto ">Войти
            </button>
            <p class="font-roboto">У вас уже есть аккаунт?<router-link to="/" class="text-blue-500 underline underline-offset-4 ml-[10px] font-roboto">Войти</router-link></p>

        </div>

    </div>
</template>

<script>
export default {
    props: {
        buttonName: String
    },
    data() {
        DATA: null
        return {
            But: false,
            userName: "",
            password: null
        }
    },
    methods: {
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
