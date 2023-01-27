<template>
    <!-- <div className="rounded-xl w-52 h-64 mx-auto  mt-10 bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
   <div className="flex flex-col justify-between h-full bg-white text-white rounded-lg p-4">

     </div>
</div> -->
    <div class=" grid grid-cols-4">
        <div v-for="(item) in DATA">
            <div
                class="rounded-xl w-440 h-650  bg-gradient-to-r p-[3px] from-[#4beb5b] via-[#f1d836cc] to-[#fcb229] mb-10 ml-10 mr-10  ">
                <div class="bg-white rounded-xl p-2 ">
                    <img class=" w-[100%] rounded-[5px]" :src="item.image">
                    <div class=" mb-[7%] flex justify-between text-[25px]">
                        <h1>{{ item.name }}</h1>
                        <span>1000c</span>
                    </div>
                    <div class="flex justify-between">
                        <p>Lorem ipsum dolor.</p>
                        <button class=" w-[35%] h-[25px] rounded-[12px] text-[#FF9900] ">Купить</button>
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