<template>
	<div class = "flex justify-center">
    <div class="border-b-black border-b-[3px] w-fit">
        <h2 class="text-[40px] mt-0">Розничная</h2>
    </div> 
	</div>
    
    <div class="max-[1000px]:gap-[60px] max-[1000px]:grid-cols-2
    max-[370px]:gap-[40px] 
    max-[650px]:gap-[40px] max-[650px]:grid-cols-1
     grid grid-cols-3">
        <div class="justify-self-center " v-for="(item, index) in data">

            <div class="bg-white rounded-[12px] p-2 w-80">
                <div class="text-[25px]">
                    <h1>{{ item.name }}</h1>

                </div>
                <img class="rounded-[5px] h-68" src="@/assets/Group19.png">

                <div class="grid grid-cols-2 text-[20px]">
                    <p class="self-center">{{ item.volume }}л</p>
                    <div class="grid grid-cols-1 justify-self-end">
                        <span>{{ item.price }}cом</span>
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
    max-[650px]:gap-[40px] max-[650px]:grid-cols-1
     grid grid-cols-3">
        <div class="justify-self-center" v-for="(item) in dataOpt">
            <div class="bg-white rounded-[12px] p-2 w-80">
                <div class="text-[25px]">
                    <h1>{{ item.name }}</h1>

                </div>
                <img class="rounded-[5px] h-68 " src="@/assets/Group19.png">

                <div class="grid grid-cols-2 text-[20px]">
                    <p class="self-center">{{ item.volume }}л</p>
                    <div class="grid grid-cols-1 justify-self-end">
                        <span>{{ item.price }}сом</span>
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
		data: {},
		dataOpt: {}, 
    }),
    methods: {
        async getdata() {
			try {
				let res = await fetch('/api/productsList')	
				console.log(res);
				this.data = await res.json();
				res = await fetch('/api/productsListOpt')
				this.dataOpt = await res.json();
				console.log(this.dataPort)
			} catch (error) {
				console.log(error);
			}
        },
    },
	async mounted() {

		await this.getdata();

	}
}
</script>
