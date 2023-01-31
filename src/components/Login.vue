<template>
    <button class = "border-4 border-none" @click="But = true">{{ buttonName }}</button>
    <div v-if="But" class="flex items-center justify-center  absolute inset-0 z-10 bg-black bg-opacity-80">
        <div class="h-[85%] w-[70%] bg-[url('/src/assets/Be.png')] bg-cover" >
            
            <div class=" p-2 text-right">
                <button @click="closeBut" class="p-2 focus:outline-none">
                    <strong>X</strong>
                </button>
            </div>

            <div class="mx-20 flex flex-col ">
                <div class="mb-[20px] text-[30px] w-[30%] h-[45px] flex justify-center ">
                  <h1>Вход</h1>  
                </div>
                
                <button class="mb-[20px] border-2 flex items-center justify-center  rounded-[3px] border-none bg-[#E3EDFE] text-black w-[30%] h-[40px]"> <img src="/src/assets/Vector.svg"> Вход через Google
                    </button>
                <input v-model="userName" class="border-2 mb-[20px] rounded-[3px] w-[30%] h-[45px] border-gray-400 " type="email"
                    placeholder="  Ведите логин" />
                <input v-model="password" class="border-2 rounded-[3px] w-[30%] h-[45px] border-gray-400 " type="password"
                    placeholder=" Ведите пароль" />
                    <router-link to="/" class=" text-blue-500 mb-[20px] w-[30%] flex justify-end">Забыли пароль?</router-link>
                    <button @click = "userCheck" class="bg-blue-500 mb-[8%] border-2 border-none rounded-[3px] text-white w-[30%] h-[40px] ">Войти
                    </button>
                    <p>У вас уже есть аккаунт?<router-link to="/" class="text-blue-500">Войти</router-link></p>
                    
            </div>

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
    mounted(){
      this.users()
    }
   
}

</script>