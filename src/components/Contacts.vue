<template>
   <div>
      <button @click="showContacts" class="bg-gray-800 text-white w-40 h-12 rounded-md ">{{ buttonName }}</button>

      <div @click="closeModal" v-if="contact" class="absolute z-5 inset-0  bg-black bg-opacity-80"></div>

      <div v-if="contact"
         class="bg-gray-100 px-[60px] absolute z-10 top-[8%] left-[15%] rounded-[10px] w-[1000px] h-[640px]">
         <div class="p-2  text-right">
            <button @click="closeModal" class="w-10 h-10 p-2 mr-[-40px] focus:outline-none text-[29px]">
               <strong>X</strong> </button>
         </div>
         <div class="flex overflow-hidden  ">
            <div class="mr-[]">
               <div class="">
                  <h2 class="text-5xl mb-[20px]"><strong>Контакты</strong></h2>
               </div>
               <p class="text-3xl mb-[5px] font-semibold font-roboto ">Адрес:</p>
               <p class="text-2xl font-roboto">770033, Кыргызстан</p>
               <p class="text-2xl mb-[20px] font-roboto">ул.Киевская 77</p>
               <p class="text-3xl mb-[5px]  font-roboto font-semibold ">Телефон:</p>
               <p class="text-2xl mb-[20px] font-roboto">+996779454233</p>
               <p class="text-3xl mb-[5px]  font-roboto font-semibold ">Соц. сети:</p>
               <div class="flex items-center"><img class="mr-[5px] mb-[10px] font-roboto" src="src/assets/Telegram.svg"
                     alt="">
                  <p class="text-2xl mt-[-5px] font-roboto">+996779454233</p>
               </div>
               <div class="flex items-center"><img class="mr-[9px] mb-[10px] font-roboto" src="src/assets/WhatsApp.svg"
                     alt="">
                  <p class="text-2xl mt-[-5px]">+79146089174</p>
               </div>
               <div class="flex items-center"><img class="mr-[12px] mb-[10px] font-roboto"
                     src="src/assets/Instagram.svg" alt="">
                  <p class="text-2xl mb-[20px] mt-[5px]font-roboto">crafthoney.kg</p>
               </div>
               <p class="text-3xl mb-[5px]  font-roboto font-semibold">E-mail:</p>
               <p class="text-2xl font-roboto">crafthoneykg@gmail.com</p>

            </div>
            <div class=" ml-[90px] flex flex-col items-center ">
               <input
                  class="border-solid border-2 rounded-[4px] border-gray-400 mb-[20px] w-[490px] h-[52px] text-center"
                  type="text" placeholder="Ваше Имя">
               <div class="flex">
                  <input
                     class="border-solid border-2 rounded-[4px] border-gray-400 mb-[20px] mr-[20px] w-[235px] h-[52px] px-[10px]"
                     type="text" placeholder="Email">
                  <input
                     class="border-solid border-2 rounded-[4px] border-gray-400 mb-[20px] w-[235px] h-[52px] px-[10px]"
                     type="text" placeholder="Телефон">
               </div>
               <textarea
                  class="border-solid border-2 rounded-[4px] border-gray-400 mb-[20px] w-[492px] h-[139px] px-[10px] py-[10px] "
                  placeholder="Сообщение" name="" id="" cols="30" rows="10"></textarea>
               <button
                  class="border-none bg-green-500 text-white rounded-[5px] mb-5 px-2 w-[184px] h-[35px]">Отправить</button>
            </div>
         </div>



      </div>
   </div>
</template>

<script>
export default {
   props: {
      buttonName: String
   },
   data: () => {
      return {
         contact: false
      }
   },
   methods: {
      showContacts() {
         this.contact = true
      },
      closeModal() {
         this.contact = false
      }
   },
}

</script>