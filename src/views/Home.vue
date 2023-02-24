<template>


<div @touchmove = "touch" @mousemove = "check">


<Layout>


  <div class = "relative grid overflow-hidden -mx-[100px] [&>img]:max-w-none [&>img]:select-none">
  <div class = "absolute w-full h-full bg-gray-900 bg-opacity-[.3]"></div>
  <img :style = "{'transform': `translate(${xPos/10}px, ${yPos/10}px)` }" class = "w-[2200px] absolute left-[-10%] top-[-10%] -z-10" src="../assets/paralax1.png" />
  <img :style = "{'transform': `translate(${xPos/13}px, ${yPos/13}px)` }" class = "w-[2200px] h-[70%] absolute left-[-10%] top-0 -z-10" src="../assets/paralax2.png" />
  <img :style = "{'transform': `translate(${xPos/24}px, ${yPos/24}px)` }" class = "w-[440px] absolute justify-self-center mr-[1120px] bottom-[60px] z-[-9]" src="../assets/paralax3a.png" />
  <img :style = "{'transform': `translate(${xPos/24}px, ${yPos/24}px)` }" class = "w-[500px] absolute justify-self-center ml-[220px] bottom-[40px] z-[-9]" src="../assets/paralax3b.png" />
  <img :style = "{'transform': `translate(${xPos/18}px, ${yPos/20}px)` }" class = "w-[2200px] absolute justify-self-center bottom-[-4%] -z-10" src="../assets/paralax9.png" />
  <div class="h-full justify-center flex items-center">
    <div class = "grid gap-[10vh] [&_*]:text-white">
      <div class="justify-center flex">
          <div class=" grid grid-cols-2 gap-[40vw] max-[800px]:grid-cols-1 max-[800px]:gap-[10px]">
          	<router-link to="Products" class="relative z-10 flex items-center justify-center bg-yellow-500 bg-opacity-[0.8]  w-40 h-12 rounded-md">{{ store.langProp.catalogue }}</router-link>
          	<router-link to="about" class="relative z-10 flex items-center justify-center bg-yellow-500 bg-opacity-[0.8] w-40 h-12 rounded-md">{{ store.langProp.about }}</router-link>
          </div>
      </div>
      <div class="justify-center flex max-[800px]:pt-[10px]">
      	  <div class="grid grid-cols-2 gap-[20vw] max-[800px]:grid-cols-1 max-[800px]:gap-[10px]">
		<router-link to="Blog" class="relative z-10  flex items-center justify-center bg-yellow-500 bg-opacity-[0.8] w-40 h-12 rounded-md">{{ store.langProp.blog }}</router-link>          	
          	<button @click = "store.modal = true, store.comp = 'Contacts', store.bg = 'bg-white'" class="relative z-10 bg-yellow-500 bg-opacity-[0.8] w-40 h-12 rounded-md">{{ store.langProp.contacts }}</button>
          </div>
      </div>
    </div>
  </div>
 </div>
 </Layout>

</div>



</template>

<script>
import { useStore } from '@/stores/test'

export default {

	data() {

		return {

			xPos: 0,
			yPos: 0,
			store: useStore()
			
		}

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
