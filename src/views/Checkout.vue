<template>
  <Layout>
    <div>
      <div class="flex justify-center text-[30px] mb-[10px]">
        <h1 class="text-gray-700">{{ store.langProp.cart }}</h1>
      </div>
      <div class="flex justify-center mb-[5%]">
        <hr class="w-full bg-gray-700 h-[2px]">
      </div>
      <div class="grid grid-flow-row gap-20">
      <div class="flex justify-center max-[1199px]:justify-between min-[1200px]:gap-x-[100px] max-[650px]:grid min-[500px]:grid-cols-2 max-[499px]:grid-cols-1" v-for="(item, index) in store.cart">

        <div class="relative max-[650px]:justify-self-center">
          <img class="w-[100px] h-[100px] rounded-[5px]" src="@/assets/Group19.png">
        </div>
        <div class="text-[25px] text-center">
          <h1 class="mb-[10px]">{{ store.langProp.med }}</h1>
          <span>{{ store.langProp.volume }}: {{ item.volume }}{{ store.langProp.volumeShort }}</span>
        </div>
        
          <div class="my-[10px] grid grid-flow-col self-center justify-self-center w-[160px] min-[1200px]:ml-[200px]">

            <button class="w-[30px] h-[30px] border-solid border-2 border-[#1C1B1F] pb-[2px] rounded-full  hover:bg-[#EAAD02]"
              v-on:click="decrementProductCount(index)">
              <p>-</p>
            </button>
            <p class="justify-self-center text-[20px] mx-[4px]">{{ item.quantity }} {{ store.langProp.quantityShort }}</p>

            <button class="justify-self-end w-[30px] h-[30px] pb-[2px] border-solid border-2 border-[#1C1B1F]  rounded-full hover:bg-[#EAAD02]"
              v-on:click="incrementProductCount(index)">
              <p>+</p>
            </button>

          </div>
        
        <div class = "justify-self-center">
          <p class="text-[30px] text-center">{{ store.sumItem(index) }} {{ store.langProp.currency }}</p>
          <div @click="removeCart(index)"          
            class="flex justify-center  bg-[#EAAD02] h-[35px] w-[160px] rounded-[6px] px-2 text-center text-white  hover:text-amber-700 hover:underline hover:cursor-pointer underline-offset-4">
            <button >{{ store.langProp.remove }}</button>
          </div>
        </div>
      </div>
      </div>











      <!-- <div class="justify-self-center " v-for="(item, index) in store.cart">

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
                    <div @click = "removeCart(index)" class="flex justify-center align-center bg-[#EAAD02] h-[35px] rounded-[6px] px-2 text-center text-white  hover:text-amber-700 hover:underline hover:cursor-pointer underline-offset-4">
                        <button>Убрать</button>
                    </div>
                </div>
            </div>

        </div> -->

      <div class="text-center mt-[60px] mb-[60px]">
        <p class="text-[40px]">{{ store.langProp.total }}: {{ store.sum() }} {{ store.langProp.currency }}</p>
        <button @click="purchaseUser"
          class="w-[200px] text-center bg-[#EAAD02] px-4 py-2 rounded-[12px] text-white  hover:text-amber-700 hover:underline hover:cursor-pointer underline-offset-4">
          {{ store.langProp.buy }}
        </button>

        
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/layouts/Layout.vue";
import { useStore } from "@/stores/test";

export default {

  data() {

    return {

      store: useStore(),
      controller: new AbortController(),
      timer: setTimeout(console.log('will it'), 2000)

    }

  },

  components: {
    Layout
  },
  methods: {


    removeCart(index) {

      delete this.store.cart[index];

      if (this.store.uid != '') {

        fetch('/api/deleteCart', {

          method: 'POST',
          headers: {

            'Content-Type': 'application/json'

          },
          body: JSON.stringify({ 1: index, 2: this.store.uid })

        })

      } else {

        localStorage.setItem('cart', JSON.stringify(this.store.cart));

      }

    },

    incrementProductCount: function (index) {

      this.store.cart[index].quantity++;

      clearTimeout(this.timer);

      this.timer = setTimeout(() => this.updateCart(index), 1000);

    },

    decrementProductCount(index) {

      if (this.store.cart[index].quantity > 1) {

        this.store.cart[index].quantity--;

        clearTimeout(this.timer);

        this.timer = setTimeout(() => this.updateCart(index), 1000);

      }
    },

    updateCart(index) {

      console.log("works");

      if (this.store.uid != '') {

        fetch('/api/updateCart', {

          method: 'POST',
          signal: this.controller.signal,
          headers: {

            'Content-Type': 'application/json'

          },
          body: JSON.stringify({ 1: parseInt(index), 2: this.store.cart[index].quantity, 3: this.store.uid })

        })

      } else {

        localStorage.setItem('cart', JSON.stringify(this.store.cart));

      }

    }

  }

};
</script>
