<template>

    <div class="max-[1000px]:gap-[60px] max-[1000px]:grid-cols-2
    max-[370px]:gap-[40px] 
    max-[500px]:gap-[40px] max-[500px]:grid-cols-1
     grid grid-cols-4 gap-[40px]">
        <div class="justify-self-center" v-for="(item) in DATA">
            <div class="rounded-[14px] max-[500px]:w-[220px] w-440 h-650  bg-gradient-to-bl p-[3px] from-[#FB9D01] to-[#66FC01]">
                <div class="bg-white rounded-[12px] p-2 ">
                    <div class="text-[25px]">
                        <h1>{{ item.name }}</h1>
                        
                    </div>
                    <img class="rounded-[10px]" :src="item.image">
                    
                    <div class="grid grid-cols-2 text-[20px]">
                        <p class = "self-center">Lorem ipsum dolor.</p>
                        <div class = "grid grid-cols-1 justify-self-end">
                        	<span>1000c</span>
                        	<button class="text-[#FF9900] ">Купить</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
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
    ]
    }),
    methods: {
        async getdata() {
            const response = await fetch(`http://localhost:3000/products`)
            const data = await response.json()
            this.DATA = await data
            console.log(this.DATA);
        },
    },
}
</script>
