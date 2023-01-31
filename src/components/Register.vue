<template>

  <button @click="showModal = true">Register</button>
  <div v-if="showModal" class="absolute z-10  inset-0 flex justify-center items-center bg-black bg-opacity-80  ">
    <div class="h-[85%] w-[70%] bg-[url('/src/assets/Bee.png')] bg-cover">

      <div class="flex justify-end ">
        <button @click="showModal = false" class="p-2 focus:outline-none">
          <strong>X</strong>
        </button>
      </div>

      <div class="mx-20 flex flex-col  ">
        <div class="mb-[8px] text-[30px] w-[30%] h-[45px] flex justify-center ">
          <h1>Регистрация</h1>
        </div>
        <button
          class="mb-[20px] border-2 flex items-center justify-center  rounded-[3px] border-none bg-[#E3EDFE] text-black w-[30%] h-[40px]">
          <img class="mr-[8px]" src="/src/assets/Google logo.svg"> Вход через Google
        </button>
        <input v-model="name" class=" border-2 mb-[10px] rounded-[3px] w-[30%] h-[45px] border-gray-400 " type="text"
          placeholder="Имя пользователя">
        <input v-model="email" class="border-2 rounded-[3px] mb-[10px] w-[30%] h-[45px] border-gray-400 " type="text"
          placeholder="Email или телефон" />
        <input v-model="password" class="bg border-2 rounded-[3px] mb-[10px] w-[30%] h-[45px] border-gray-400 "
          type="password" placeholder="Пароль" />
        <input v-model="password2" class="mb-[30px] border-2 rounded-[3px] w-[30%] h-[45px] border-gray-400 "
          type="password" placeholder="Подвердите пароль" />
        <button @click="sendData"
          class=" bg-blue-500 border-2 border-none rounded-[3px] text-white w-[30%] h-[40px] ">Войти
        </button>

      </div>
    </div>
  </div>



</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      name: '',
      password: '',
      password2: '',
      email: ''
    }
  },
  methods: {
    sendData() {
      fetch('http://localhost:3000/users', {
        method: 'PUT',
        body: JSON.stringify({ data: { 'name': this.name, 'password': this.password, 'password2': this.password2 } }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>