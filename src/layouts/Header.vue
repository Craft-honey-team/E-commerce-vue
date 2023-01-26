<template>
   <header class="bg-white flex justify-between items-center px-20 py-2">
      <div class="flex justify-around items-center">
         <div class="ml-[30px]">
         	<router-link to="/">
            <img class = "w-20" src = "../assets/med5.png"/>
            </router-link>
         </div>
         <div >
            <input class="ml-[30px] border-2 h-[40px] rounded-[4px] px-4" type="text" placeholder="Поиск...">
         </div>
      </div>

      <div class="mr-[30px] mt-[3px] flex ">
         <p>Личный кабинет</p>
         <p>
            <img class="ml-[30px] mr-[100px] mt-[3px] max-[800px]:hidden" src="@/assets/basket.svg" alt="">
         </p>
         <p>
            <img class="ml-[30px] mb-[10px] max-[800px]:hidden" src="@/assets/facebook.svg" alt="">
         </p>
         <p>
            <img class="ml-[10px] mb-[5px] max-[800px]:hidden" src="@/assets/insta.svg" alt="">
         </p>


      </div>

   </header>
</template>

<script>
   
</script>
