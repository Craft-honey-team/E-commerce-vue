<template>
    <Layout>
        <div class = "pt-[20px] mt-[20px] mb-[40px] border-t-[3px] border-black">
            <p class = "text-[50px]">{{ store.langProp[store.lang].personalArea}}</p>
        </div>
        <div class="grid grid-flow-col auto-cols-max mb-[20px] text-[20px] max-[700px]:grid-cols-1">
            <button @click="$router.push(`/PersonalArea/${$route.params.id}`)"
                class="bg-[#EAAD02] h-[30px] rounded-[10px] px-2 text-white">{{ store.langProp[store.lang].settings
                }}</button>
            <span class="justify-self-center mx-2 max-[700px]:hidden">|</span>
            <span
                class="bg-gray-200 h-[30px] flex items-center font-bold font-roboto rounded-[10px] px-2 text-black text-center">{{
                    store.langProp[store.lang].myOrders }}</span>


        </div>
        <div class="grid grid-flow-row gap-5">
            
           

            <div class="w-[792px] h-[53px]  bg-[#ecd38e] rounded-lg text-[25px] flex items-center mb-7">
                <p>{{ store.langProp[store.lang].myOrders }}</p>
            </div>
            <div class="w-[70%] h-[30%] bg-[#beedb5]  ">
                <p class="text-[20px]">Заказ№1</p>
                <div class="flex justify-around">
                    <div class="w-[20%]">
                        <p class="text-slate-700">Адрес доставки</p>
                        <p>Город Бишкек,
                            Ленинский район, Комсомольский переулок 19.
                        </p>
                    </div>
                    <div>
                        <p class="text-slate-700">Дата, время</p>
                        <p>15 Марта, 2023 12:00</p>
                    </div>
                    <div>
                        <p class="text-slate-700">Способ оплаты</p>
                        <p>Эл.кошелек</p>
                    </div>
                    <div>
                        <p class="text-slate-700">Статус</p>
                        <p>Оплачен</p>
                    </div>
                    <div>
                        <p class="text-slate-700">Итого к оплате</p>
                        <p>1000 сом</p>
                    </div>
                </div>

            </div>
        </div>
    </Layout>
</template>
<script>
import { useStore } from '@/stores/test'
export default {
    data() {
        return {
            store: useStore()
        }
    }

}
</script>
