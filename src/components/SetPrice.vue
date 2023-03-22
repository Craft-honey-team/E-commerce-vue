<template>
    <div class="grid grid-cols-2 gap-[200px]">
        <div class="z-50 grid grid-flow-row gap-5">
            <div>
                <h2>Добавление товаров РОЗНИЦА</h2>
                <div class="grid grid-flow-row border-solid border-2 border-gray-500 rounded-[5px] px-[5px]">
                    <span>Добавьте фото:</span>
                    <input type="file" class="border-solid border-2 border-gray-500 rounded-[5px] mb-[5px] text-[14px]">
                    <span>Наименивание (RUS):</span>
                    <input placeholder="Наименование RU" type="file"
                        class="border-solid border-2 border-gray-500 rounded-[5px] mb-[5px] text-[14px]">
                    <span>Наименивание (EN):</span>
                    <input placeholder="Наименование EN" type="file"
                        class="border-solid border-2 border-gray-500 rounded-[5px] mb-[5px] text-[14px]">
                    <span>Наименивание (KYR):</span>
                    <input placeholder="Наименование KYR" type="file"
                        class="border-solid border-2 border-gray-500 rounded-[5px] mb-[5px] text-[14px]">
                    <input placeholder="Введите цену" type="text"
                        class="border-solid border-2 border-gray-500 rounded-[5px] mb-[5px] text-[14px]">
                    <button @click="addPrice(event)"
                        class=" bg-yellow-500 bg-opacity-[0.8] w-40 h-10 mb-[5px] rounded-md  hover:text-amber-700 hover:underline underline-offset-4">Добавить</button>
                </div>
            </div>
            <div class=" ">
                <h2>Добавление товаров ОПТ</h2>
                <div class="grid grid-flow-row border-solid border-2 border-gray-500 rounded-[5px] px-[5px]">
                    <span>Добавьте фото:</span>
                    <input type="file" class="border-solid border-2 border-gray-500 rounded-[5px] mb-[5px] text-[14px]">
                    <span>Наименивание (RUS):</span>
                    <input placeholder="Наименование RU" type="file"
                        class="border-solid border-2 border-gray-500 rounded-[5px] mb-[5px] text-[14px]">
                    <span>Наименивание (EN):</span>
                    <input placeholder="Наименование EN" type="file"
                        class="border-solid border-2 border-gray-500 rounded-[5px] mb-[5px] text-[14px]">
                    <span>Наименивание (KYR):</span>
                    <input placeholder="Наименование KYR" type="file"
                        class="border-solid border-2 border-gray-500 rounded-[5px] mb-[5px] text-[14px]">
                    <input placeholder="Введите цену" type="text"
                        class="border-solid border-2 border-gray-500 rounded-[5px] mb-[5px] text-[14px]">
                    <button @click="addOptPrice"
                        class=" bg-yellow-500 bg-opacity-[0.8] w-40 h-10 mb-[5px] rounded-md  hover:text-amber-700 hover:underline underline-offset-4">Добавить</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useStore } from '@/stores/test';
export default {
    data() {
        return {
            store: useStore(),
            image: '',
        }
    },
    methods: {
        addPrice(event) {
            let file = event.target.files[0];
            let reader = new FileReader();
            reader.onload = async () => { this.image = reader.result; };
            reader.readAsDataURL(file)

            this.image = URL.createObjectURL(file);
        },

    }

}
</script>