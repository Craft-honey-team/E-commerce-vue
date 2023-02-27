<template>
    <div class="flex justify-center">
        <div class="border-b-black border-b-[3px] w-fit mb-20">
            <h2 class="text-[40px]">Розничная продукция</h2>
        </div>
    </div>

    <div class="mb-[40px] max-[1000px]:gap-[60px] max-[1000px]:grid-cols-2
                        max-[370px]:gap-[40px] 
                        max-[650px]:gap-[40px] max-[650px]:grid-cols-1
                        grid grid-cols-3">
        <div class="justify-self-center " v-for="(item, index) in data">

            <div class="bg-white rounded-[12px] p-2 w-80">
                <div class="text-[25px]">
                    <h1 class="mb-[10px]">{{ item.name }}</h1>

                </div>
                <img class="rounded-[5px] mb-[10px] h-68" src="@/assets/Group19.png">

                <div class="grid grid-flow-row gap-4">

                    <div class="grid grid-cols-2 gap-[50px] text-[20px]">
                        <p class="self-center">Объем: {{ item.volume }}л</p>
                        <span>Цена: {{ item.price }}kgs</span>
                    </div>
                    <div class="">
                        <div class="grid grid-cols-2 gap-[20px]">
                            <div>
                                <p class="text-[20px] leading-none">Количество товаров:</p>
                            </div>
                            <div class="grid grid-flow-col self-center justify-self-end gap-[2px] px-1">
                                <button class="w-[30px] h-[30px] border-solid border-2 border-[#1C1B1F]  rounded-full  hover:bg-[#EAAD02]"
                                    v-on:click="decrementProductCount(index)">
                                    <p class="relative mb-[10px]">-</p>
                                </button>
                                <p class="text-[20px]">{{ item.quantity }} шт</p>

                                <button class=" w-[30px] h-[30px] border-solid border-2 border-[#1C1B1F]  rounded-full hover:bg-[#EAAD02]"
                                    v-on:click="incrementProductCount(index)">
                                    <p class="relative mb-[10px]">+</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex justify-center align-center bg-[#EAAD02] h-[35px] rounded-[6px] px-2 text-center text-white  hover:text-amber-700 hover:underline underline-offset-4">
                        <button class="">Купить</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div class="flex justify-center">
        <div class="border-b-black border-b-[3px] w-fit mb-20">
            <h2 class="text-[40px]">Оптовая продукция</h2>
        </div>
    </div>
    <div class="max-[1000px]:gap-[60px] max-[1000px]:grid-cols-2
               max-[370px]:gap-[40px] 
               max-[650px]:gap-[40px] max-[650px]:grid-cols-1
                grid grid-cols-3">
        <div class="justify-self-center" v-for="(item) in dataOpt">
            <div class="bg-white rounded-[12px] p-2 w-80">
                <div class="text-[25px]">
                    <h1 class="mb-[10px]">{{ item.name }}</h1>

                </div>
                <img class="rounded-[5px] mb-[10px] h-68" src="@/assets/Group19.png">

                <div class="grid grid-flow-row gap-4">

                    <div class="grid grid-cols-2 gap-[20px] text-[20px]">
                        <p class="self-center">Объем: {{ item.volume }}л</p>
                        <span>Цена: {{ item.price }}kgs</span>
                    </div>
                    <div class="">
                        <div class="grid grid-cols-2 gap-[20px]">
                            <div>
                                <p class="text-[20px] leading-none">Количество товаров:</p>
                            </div>
                            <div class="grid grid-flow-col self-center justify-self-end gap-[2px] px-1">
                                <button class="w-[30px] h-[30px] border-solid border-2 border-[#1C1B1F]  rounded-full  hover:bg-[#EAAD02]"
                                    v-on:click="decrementProductCount(index)">
                                    <p class="relative mb-[10px]">-</p>
                                </button>
                                <p class="text-[20px]">{{ item.quantity }} шт</p>

                                <button class=" w-[30px] h-[30px] border-solid border-2 border-[#1C1B1F]  rounded-full hover:bg-[#EAAD02]"
                                    v-on:click="incrementProductCount(index)">
                                    <p class="relative mb-[10px]">+</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex justify-center align-center bg-[#EAAD02] h-[35px] rounded-[6px] px-2 text-center text-white  hover:text-amber-700 hover:underline underline-offset-4">
                        <button class="">Купить</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [],
            dataOpt: [],
        };
    },
    methods: {
        async getdata() {
            try {
                let res = await fetch('/api/productsList');
                this.data = await res.json();
                res = await fetch('/api/productsListOpt');
                this.dataOpt = await res.json();
            } catch (error) {
                console.log(error);
            }
        },
        incrementProductCount: function (index) {
            this.data[index].quantity++;
        },
        decrementProductCount(index) {
            if (this.data[index].quantity > 1) {
                this.data[index].quantity--;
            }
        },
    },
    async mounted() {
        await this.getdata();
    }
}


</script>
