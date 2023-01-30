<template>
  <div class="justify-center flex ">
    <div class="bg-amber-500 mt-20  w-10/12 h-4/5">
      <div class="rounded-full justify-center flex">
        <div class="grid grid-col-2 gap-[10px]">
          <div class=" grid grid-cols-2  ">
          <button class="bg-gray-800 w-40 text-white h-12 rounded-md">Каталог</button>
          <button class="bg-gray-800 w-40 text-white h-12 rounded-md">о нас</button>
        </div>
        <img class=" w-96 h-96" src="/src/assets/Ellipse 9.svg" />
        <div class="grid grid-cols-2    ">
          <Feedback buttonName= "Обратная связь"/>
          <Contacts  buttonName="Контакты"/>
        </div></div>
    
        
       
      </div>
    </div>
  </div>



</template>

<script>
import Contacts from '../components/Contacts.vue'
import Feedback from '../components/Feedback.vue'
export default {
   components: {
    Contacts, Feedback
  },

   
   
}


</script>
