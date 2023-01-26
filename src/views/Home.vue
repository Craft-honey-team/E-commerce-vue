<template>
<Layout>
<div @mousemove = "check" class = "absolute left-0 right-0 top-0 bottom-0 overflow-hidden">
  <img :style = "{'transform': `translate(${xPos/10}px, ${yPos/10}px)` }" class = "select-none max-w-none w-[120%] h-[56%] absolute left-[-10%] top-[-10%] -z-10" src="../assets/paralax1.png" />
  <img :style = "{'transform': `translate(${xPos/13}px, ${yPos/13}px)` }" class = "select-none max-w-none w-[120%] h-[50%] absolute left-[-10%] top-0 -z-10" src="../assets/paralax2.png" />
  <img :style = "{'transform': `translate(${xPos/24}px, ${yPos/24}px)` }" class = "select-none max-w-none w-[30%] h-[60%] absolute left-[90px] bottom-[20px] z-5" src="../assets/paralax3a.png" />
  <img :style = "{'transform': `translate(${xPos/24}px, ${yPos/24}px)` }" class = "select-none max-w-none w-[40%] h-[70%] absolute left-[38%] bottom-[-60px] -z-5" src="../assets/paralax3b.png" />
  <img :style = "{'transform': `translate(${xPos/18}px, ${yPos/20}px)` }" class = "select-none max-w-none w-[120%] h-[70%] absolute left-[-10%] bottom-[-4%] -z-10" src="../assets/paralax6.png" />
 
  <div class="justify-center flex">
    <div class="bg-no-repeat bg-contain mt-20  w-10/12 h-4/5">
      <div class="rounded-full justify-center flex">
        <div class="grid grid-col-2 gap-[10px]">
          <div class=" grid grid-cols-2  ">
          <button class="bg-gray-800 w-40 text-white h-12 rounded-md">Каталог</button>
          <button class="bg-gray-800 w-40 text-white h-12 rounded-md">о нас</button>
        </div>
        <div class="grid grid-cols-2    ">
          <button class="bg-gray-800 w-40 text-white h-12 rounded-md">ааxsа</button>
          <Contacts  buttonName="Контакты"/>
        </div>
        </div>
       
      </div>
    </div>
  </div>
 
</div>
</Layout>

</template>

<script>
import Layout from '@/layouts/Layout.vue'
import Contacts from '@/components/Contacts.vue'

export default {

	data() {
	
		return {
		
			xPos: 0,
			yPos: 0
		
		}
	
	},

	components: {
	
		Layout,
		Contacts
	
	},
	
	methods: {
	
		check(event) {
		
			this.xPos = (event.clientX - window.innerWidth / 2);
     		this.yPos = (event.clientY - window.innerHeight / 2);
		
		}
	
	}

}

</script>
