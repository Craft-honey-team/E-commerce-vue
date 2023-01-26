<template>
   <header class="grid grid-cols-4 items-center px-20 py-2 relative z-[1] max-[800px]:grid-cols-3">
    
         <div class="ml-[30px]">
         	<router-link class = "w-fit" to="/">
            <img class = "w-20" src = "../assets/med2.png"/>
            </router-link>
         </div>
         <div class = "">
            <input class="border-2 w-[90%] h-[40px] rounded-[4px] px-4" type="text" placeholder="Поиск...">
         </div>

    
      <span class = "flex text-center justify-end"><img class = "mr-2" src = "@/assets/account_circle.png">Личный кабинет</span>
   
      <div class = "flex justify-end">
            <img class="max-[800px]:hidden mr-4" src="@/assets/basket.svg" alt="">
      
            <img class="max-[800px]:hidden mr-4" src="@/assets/facebook.svg" alt="">
       
            <img class="max-[800px]:hidden mr-4" src="@/assets/insta.svg" alt="">
      


      </div>

   </header>
</template>

<script>
   
</script>
