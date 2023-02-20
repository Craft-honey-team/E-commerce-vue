<template>
	<div class = "flex justify-center">
    <div class="border-b-black border-b-[3px] w-fit">
        <h2 class="text-[40px] mt-0">Розничная</h2>
    </div> 
	</div>
    
    <div class="max-[1000px]:gap-[60px] max-[1000px]:grid-cols-2
    max-[370px]:gap-[40px] 
    max-[500px]:gap-[40px] max-[500px]:grid-cols-1
     grid grid-cols-3">
        <div class="justify-self-center " v-for="(item) in DATA">

            <div class="bg-white rounded-[12px] p-2 w-80">
                <div class="text-[25px]">
                    <h1>{{ item.name }}</h1>

                </div>
                <img class="rounded-[5px] h-68" :src="item.image">

                <div class="grid grid-cols-2 text-[20px]">
                    <p class="self-center">Lorem ipsum dolor.</p>
                    <div class="grid grid-cols-1 justify-self-end">
                        <span>1000c</span>
                        <button class="text-[#FF9900] ">Купить</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
	<div class = "flex justify-center">
	<div class="border-b-black border-b-[3px] w-fit">
		<h2 class="text-[40px]">Оптовая</h2>
	</div>
	</div>
    <div class="max-[1000px]:gap-[60px] max-[1000px]:grid-cols-2
    max-[370px]:gap-[40px] 
    max-[500px]:gap-[40px] max-[500px]:grid-cols-1
     grid grid-cols-3">
        <div class="justify-self-center" v-for="(item) in DATA">
            <div class="bg-white rounded-[12px] p-2 w-80">
                <div class="text-[25px]">
                    <h1>{{ item.name }}</h1>

                </div>
                <img class="rounded-[5px] h-68 " :src="item.image">

                <div class="grid grid-cols-2 text-[20px]">
                    <p class="self-center">Lorem ipsum dolor.</p>
                    <div class="grid grid-cols-1 justify-self-end">
                        <span>1000c</span>
                        <button class="text-[#FF9900] ">Купить</button>
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
                "image": "../src/assets/Group19.png"
            },
            {
                "id": 2,
                "name": "med2",
                "image": "../src/assets/Group19.png"
            },

            {
                "id": 3,
                "name": "med3",
                "image": "../src/assets/Group19.png"
            },
            // {
            // 	"id": 5,
            // 	"name": "med5",
            // 	"image": "../src/assets/Group19.png"
            // },
            // {
            // 	"id": 6,
            // 	"name": "med6",
            // 	"image": "../src/assets/Group19.png"
            // },

            // {
            // 	"id": 7,
            // 	"name": "med7",
            // 	"image": "../src/assets/Group19.png"
            // },
        ],
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
