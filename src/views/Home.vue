<template>

<Contacts buttonName="Контакты"/>

<div @touchmove = "touch" @mousemove = "check" >


<Layout class = "absolute inset-0 overflow-hidden">
  <div class = "relative overflow-hidden -mx-[100px]">
  <img :style = "{'transform': `translate(${xPos/10}px, ${yPos/10}px)` }" class = "select-none max-w-none w-[120%] h-[56%] absolute left-[-10%] top-[-10%] -z-10" src="../assets/paralax1.png" />
  <img :style = "{'transform': `translate(${xPos/13}px, ${yPos/13}px)` }" class = "select-none max-w-none w-[120%] h-[50%] absolute left-[-10%] top-0 -z-10" src="../assets/paralax2.png" />
  <img :style = "{'transform': `translate(${xPos/24}px, ${yPos/24}px)` }" class = "select-none max-w-none w-[30%] h-[56%] absolute left-[4%] bottom-[6%] z-[-9] max-[800px]:w-[40%]" src="../assets/paralax3a.png" />
  <img :style = "{'transform': `translate(${xPos/24}px, ${yPos/24}px)` }" class = "select-none max-w-none w-[32%] h-[66%] absolute left-[40%] bottom-[-1%] z-[-9] max-[800px]:w-[50%]" src="../assets/paralax3b.png" />
  <img :style = "{'transform': `translate(${xPos/18}px, ${yPos/20}px)` }" class = "select-none max-w-none w-[120%] h-[70%] absolute left-[-10%] bottom-[-4%] -z-10 max-[800px]:w-[140%]" src="../assets/paralax9.png" />
 
  <div class="h-full justify-center flex items-center">
    <div class = "grid gap-[10vh] [&_*]:text-white">
      <div class="rounded-full justify-center flex">
          <div class=" grid grid-cols-2 gap-[40vw] max-[800px]:grid-cols-1 max-[800px]:gap-[10px]">
          	<router-link to="/Products" class="relative z-10 text-black flex items-center justify-center bg-yellow-500 w-40 h-12 rounded-md">Каталог</router-link>
          	<router-link to="/about" class="relative z-10 text-black flex items-center justify-center bg-yellow-500 w-40 h-12 rounded-md">О нас</router-link>
          </div>
      </div>
      <div class="rounded-full justify-center flex max-[800px]:pt-[10px]">
      	  <div class="grid grid-cols-2 gap-[20vw] max-[800px]:grid-cols-1 max-[800px]:gap-[10px]">
          	<button class="relative z-10 bg-yellow-500 w-40 h-12 rounded-md">Блог</button>
          	<button @click = "store.modal = true" class="relative z-10 bg-yellow-500 w-40 h-12 rounded-md">Контакты</button>
          </div>
      </div>
    </div>
  </div>
 </div>
 </Layout>

</div>



</template>

<script>
import Layout from '@/layouts/Layout.vue'
import Contacts from '@/components/Contacts.vue'
import { useStore } from '@/stores/test'

export default {

	data() {

		return {

			xPos: 0,
			yPos: 0,
			store: useStore()
			
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

		},
		touch(event) {

			this.xPos = (event.touches[0].clientX - window.innerWidth / 2);
     		this.yPos = (event.touches[0].clientY - window.innerHeight / 2);
	
		}

	},
	computed: {

		parallaxHeight() {

			return window.innerHeight - (102 * 2)

		}

	}
}

</script>
