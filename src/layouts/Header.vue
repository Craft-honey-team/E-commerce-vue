<template>
   <header class="mt-[20px] flex justify-between ">
      <div class="flex justify-around ">
         <div class="ml-[30px]">
            Logo
         </div>
         <div>
            <input class="ml-[30px] border-2 border-red-500 rounded-[12px]" type="text" placeholder="Поиск...">
         </div>
      </div>
       <Register />
      <div class="mr-[30px] mt-[3px] flex ">
        
         <p>
            <img class="ml-[30px] mr-[100px] mt-[3px]" src="icons/basket.svg" alt="">
         </p>
         <p>
            <img class="ml-[30px] mb-[10px]" src="icons/facebook.svg" alt="">
         </p>
         <p>
            <img class="ml-[10px] mb-[5px]" src="icons/insta.svg" alt="">
         </p>
         

      </div>

   </header>
</template>

<script>
import Register from '@/components/Register.vue'
export default {
   components: {
      Register
   }
  }

</script>
