<template>
    <div class="flex justify-center">
        <div class="border-b-black border-b-[3px] w-fit mb-20">
            <h2 class="text-[40px]">Розничная продукция</h2>
        </div>
    </div>

    <div class="mb-[40px] gap-x-[160px] max-[1000px]:gap-[60px] max-[1000px]:grid-cols-2
                        max-[370px]:gap-[40px] 
                        max-[650px]:gap-[40px] max-[650px]:grid-cols-1
                        grid grid-cols-3">
        <div class="justify-self-center " v-for="(item, index) in data">

            <div class="bg-white rounded-[12px] p-2">
                <div class="text-[25px]">
                    <h1 class="mb-[10px]">{{ item.name }}</h1>

                </div>
                <img class="rounded-[5px] mb-[10px]" src="@/assets/Group19.png">

                <div class="grid grid-flow-row gap-4">

                    <div class="grid grid-cols-2 gap-[50px] text-[20px]">
                        <span>Объем: {{ item.volume }}л</span>
                        <span class = "justify-self-end">Цена: {{ item.price }}kgs</span>
                    </div>
                    <div class="">
                        <div class="grid grid-cols-2 gap-[20px]">
                            <p class="text-[20px] leading-none self-center">Количество товаров:</p>
                            <div class="grid grid-flow-col self-center justify-self-end gap-[2px] px-1">
                                <button class="w-[30px] h-[30px] border-solid border-2 border-[#1C1B1F]  rounded-full  hover:bg-[#EAAD02]"
                                    v-on:click="decrementProductCount(index)">
                                    <p>-</p>
                                </button>
                                <p class="text-[20px]">{{ item.quantity }} шт</p>

                                <button class=" w-[30px] h-[30px] border-solid border-2 border-[#1C1B1F]  rounded-full hover:bg-[#EAAD02]"
                                    v-on:click="incrementProductCount(index)">
                                    <p>+</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div @click = "addToCart(index, 'orders')" class="flex justify-center align-center bg-[#EAAD02] h-[35px] rounded-[6px] px-2 text-center text-white  hover:text-amber-700 hover:underline hover:cursor-pointer underline-offset-4">
                        <button>Купить</button>
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
    <div class="mb-[40px] gap-x-[160px] max-[1000px]:gap-[60px] max-[1000px]:grid-cols-2
               max-[370px]:gap-[40px] 
               max-[650px]:gap-[40px] max-[650px]:grid-cols-1
                grid grid-cols-3">
        <div class="justify-self-center" v-for="(item, index) in dataOpt">
            <div class="bg-white rounded-[12px] p-2">
                <div class="text-[25px]">
                    <h1 class="mb-[10px]">{{ item.name }}</h1>

                </div>
                <img class="rounded-[5px] mb-[10px] h-68" src="@/assets/Group19.png">

                <div class="grid grid-flow-row gap-4">

                    <div class="grid grid-cols-2 gap-[20px] text-[20px]">
                        <span>Объем: {{ item.volume }}л</span>
                        <span class = "justify-self-end">Цена: {{ item.price }}kgs</span>
                    </div>
                    <div class="">
                        <div class="grid grid-cols-2 gap-[20px]">
                            <p class="text-[20px] leading-none self-center">Количество товаров:</p>
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
                    <div @click = "addToCart(index, 'ordersOpt')" class="flex justify-center align-center bg-[#EAAD02] h-[35px] rounded-[6px] px-2 text-center text-white  hover:text-amber-700 hover:underline hover:cursor-pointer underline-offset-4">
                        <button class="">Купить</button>
                    </div>
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
		    data: useStore().data,
		    dataOpt: useStore().dataOpt,
		    store: useStore()
	    };
    },
    methods: {
        
        incrementProductCount: function (index) {
            this.data[index].quantity++;
        },
        
        decrementProductCount(index) {
            if (this.data[index].quantity > 1) {
                this.data[index].quantity--;
            }
        },
        
        addToCart(index, type) {
        
        	console.log(index);
        	
			let data;
	
			type == 'orders' ? data = this.data : data = this.dataOpt;
			
			try {
			
				this.store.cart[index].quantity += data[index].quantity;
			
			} catch(error) {
			
				console.log(error);
				console.log(typeof this.store.cart)
				this.store.cart[index] = JSON.parse(JSON.stringify(data[index]));
			
			}
			
        	if (this.store.uid != '') {
	
				fetch('/api/usersAddCart', {
				
					method: 'POST',
					headers: {
					
						'Content-Type': 'application/json'
					
					},
					body: JSON.stringify({ 1: parseInt(index), 2: this.store.uid, 3: type, 4: data[index].quantity })
				
				})
					.then((res) => console.log('ok'))
					.catch((err) => console.log(err));
	
			} else {
				
				localStorage.setItem('cart', JSON.stringify(this.store.cart));
							
			}
		},
    }
}


</script>
