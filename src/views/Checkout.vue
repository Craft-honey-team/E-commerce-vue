<template>
  <Layout>
  	<div>
    <div class="flex justify-center text-[30px] mb-[10px]">
      <h1 class= "text-gray-700">Корзина</h1>
    </div>
    <div class="flex justify-center mb-[5%]">
      <hr class="w-[900px] bg-gray-700 h-[2px]">
    </div>
    
    <div class="grid grid-cols-4 max-[1100px]:grid-cols-2">
      
      <div   v-for="item in DATA" >
        <div
          class="rounded-xl w-440 h-650 bg-gradient-to-r p-[3px] from-[#4beb5b] via-[#f1d836cc] to-[#fcb229] mb-10 ml-10 mr-10  "
        >
          <div class="bg-white rounded-xl p-3  ">
            <img class="w-[100%] rounded-[5px]" :src="item.image" />
            <div class="flex-wrap mb-[7%] flex justify-between text-[25px]">
              <h1>{{ item.name }}</h1>
              <span>1000c</span>
            </div>
            <div class="">
              <p>Lorem ipsum dolor.</p>
              <button class="h-[25px]  rounded-[12px] text-[#FF9900]">
                Убрать  
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class = "flex justify-center">
    	<button class="text-center border-4 border-black bg-black px-4 py-2 rounded-[12px] text-white">
                Купить
              </button>
    </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/layouts/Layout.vue";

export default {
  data: () => ({
    DATA: [
  		
  		{
  			"id": 1,
  			"name": "med1",
  			"image": "https://tea.ua/upload/blog/1221/2112/honey/2.png"
  		},
  		{
  			"id": 2,
  			"name": "med2",
  			"image": "https://tea.ua/upload/blog/1221/2112/honey/2.png"
  		},
  		
  		{
  			"id": 3,
  			"name": "med3",
  			"image": "https://tea.ua/upload/blog/1221/2112/honey/2.png"
  		},
  		{
  			"id": 4,
  			"name": "med4",
  			"image": "https://tea.ua/upload/blog/1221/2112/honey/2.png"
  		},
        {
  			"id": 5,
  			"name": "med5",
  			"image": "https://tea.ua/upload/blog/1221/2112/honey/2.png"
  		},
  		{
  			"id": 6,
  			"name": "med6",
  			"image": "https://tea.ua/upload/blog/1221/2112/honey/2.png"
  		},
  		
  		{
  			"id": 7,
  			"name": "med7",
  			"image": "https://tea.ua/upload/blog/1221/2112/honey/2.png"
  		},
  		{
  			"id": 8,
  			"name": "med8",
  			"image": "https://tea.ua/upload/blog/1221/2112/honey/2.png"
  		},
    ],
  }),
  components: {
     Layout
  },
  methods: {
    async getdata() {
      const response = await fetch(`http://localhost:3000/products`);
      const data = await response.json();
      this.DATA = await data;
      console.log(this.DATA);
    },
  },
  mounted() {
    //this.getdata();
  },
};
</script>
