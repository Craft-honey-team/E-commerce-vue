<template>

    <div class="mb-[40px] flex flex-wrap justify-around gap-[10px]">
        <div class = "w-[320px] mb-[40px]" v-for="(item, index) in data">

            <div class="bg-white rounded-[12px]">
                <div class="text-[25px]">
                    <h1 class="mb-[10px]">{{ store.langProp.med }}</h1>

                </div>
                <img class="rounded-[5px] mb-[10px]" src="@/assets/Group19.png">

                <div class="grid grid-flow-row gap-4">

                    <div class="grid grid-cols-2 gap-[50px] text-[20px]">
                        <span>{{ store.langProp.volume }}: {{ item.volume }}{{ store.langProp.volumeShort }}</span>
                        <span class = "justify-self-end">{{ store.langProp.priceWord }}: {{ item.price }}kgs</span>
                    </div>
                    <div class="">
                        <div class="grid grid-cols-2 gap-[20px]">
                            <p class="text-[20px] leading-none self-center">{{ store.langProp.quantity }}:</p>
                            <div class="grid grid-flow-col self-center justify-self-end gap-[2px] px-1">
                            
                                <button class="w-[30px] h-[30px] border-solid border-2 border-[#1C1B1F]  rounded-full  hover:bg-[#EAAD02]"
                                    v-on:click="decrementProductCount(index)">
                                    <p>-</p>
                                </button>
                                
                                <p class="text-[20px]">{{ item.quantity }} {{ store.langProp.quantityShort }}</p>

                                <button class=" w-[30px] h-[30px] border-solid border-2 border-[#1C1B1F]  rounded-full hover:bg-[#EAAD02]"
                                    v-on:click="incrementProductCount(index)">
                                    <p>+</p>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                    <div @click = "addToCart(index)" class="flex justify-center align-center bg-[#EAAD02] h-[35px] rounded-[6px] px-2 text-center text-white  hover:text-amber-700 hover:underline hover:cursor-pointer underline-offset-4">
                        <button>{{ store.langProp.buy }}</button>
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
		    store: useStore(),
	    };
    },
    props: {
    
    	data: Object,
    
    },
    methods: {
        
        incrementProductCount(index) {
        
            this.data[index].quantity++;
            
        },
        
        decrementProductCount(index) {
        
            if (this.data[index].quantity > 1) {
                this.data[index].quantity--;
            }
            
        },
        
        addToCart(index) {
        
			let data = this.data;
			
			try {
			
				this.store.cart[index].quantity += data[index].quantity;
			
			} catch(error) {
			
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
    },
}


</script>
