<template>
    <LayoutModal/>
    <div class="grid grid-cols-2 gap-5 px-10 py-[20px] ">
        <div class="grid grid-flow-row">
            <h2>Товары</h2>
            <!-- <input type="text" class="owerflow-y-auto border-solid border-2 border-gray-500 rounded-[5px]"> -->
            <div class="border-solid border-2 border-gray-500 rounded-[5px] px-[10px] py-[10px]">
                <div v-for="(item) in data" class=" mt-[5px] border-solid border-2 border-gray-500 rounded-[5px] px-[3px] ">
                    <span class="mr-[15px]">{{ store.langProp.volume }}: {{ item.volume }}{{ store.langProp.volumeShort }} </span>
                    <span class="">{{ store.langProp.priceWord }}:  {{ item.price }}kgs</span>
                </div>
            </div>
            <h2>Блог</h2>
            <div>

            </div>
            <h2>Пользователи</h2>
            <div class="border-solid border-2 border-gray-500 rounded-[5px] ">

            </div>
            <h2>Заказы</h2>
            <div class="border-solid border-2 border-gray-500 rounded-[5px] ">

            </div>

        </div>
        <div class="grid grid-flow-row">
            <button @click="store.modal = true, store.comp = 'SetPrice', store.bg = 'bg-bee'"
                class=" bg-yellow-500 bg-opacity-[0.8] w-40 h-12 rounded-md  hover:text-amber-700 hover:underline underline-offset-4">Добавить1se</button>
            <button @click="store.modal = true, store.comp = 'SetBlog', store.bg = 'bg-bee'"
                class=" bg-yellow-500 bg-opacity-[0.8] w-40 h-12 rounded-md  hover:text-amber-700 hover:underline underline-offset-4">Добавить</button>
        </div>
    </div>
</template>
<script>
import { useStore } from '@/stores/test';
import LayoutModal from '@/layouts/LayoutModal.vue';

export default {
    data() {
        return {
            store: useStore(),
            dataOpt: {},
            data: {},
            
           


        };
    },
    props: {



    },
    methods: {
        async getData() {

            try {
                let res = await fetch('/api/productsList');
                this.data = await res.json();
                res = await fetch('/api/productsListOpt');
                this.dataOpt = await res.json();
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted() {
        this.getData()
    },
    components: {
        LayoutModal
    }
}

</script>