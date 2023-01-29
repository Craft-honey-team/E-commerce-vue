<template>

    <div class=" grid grid-cols-4 gap-[40px]">
        <div v-for="(item) in DATA">
            <div
                class="rounded-[14px] w-440 h-650  bg-gradient-to-bl p-[3px] from-[#FB9D01] to-[#66FC01]">
                <div class="bg-white rounded-[12px] p-2 ">
                    <div class="text-[25px]">
                        <h1>{{ item.name }}</h1>
                        
                    </div>
                    <img class="rounded-[10px]" :src="item.image">
                    
                    <div class="grid grid-cols-2">
                        <p class = "text-[20px] self-center">Lorem ipsum dolor.</p>
                        <div class = "grid grid-cols-1 justify-self-end">
                        	<span class = "text-[20px]">1000c</span>
                        	<button class="text-[20px] text-[#FF9900] ">Купить</button>
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
        DATA: null
    }),
    methods: {
        async getdata() {
            const response = await fetch(`http://localhost:3000/products`)
            const data = await response.json()
            this.DATA = await data
            console.log(this.DATA);
        },
    },
    mounted() {
        this.getdata()
    }
}
</script>
