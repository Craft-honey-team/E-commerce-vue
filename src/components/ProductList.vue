<template>
    <div class = "grid grid-cols-4">
    <div v-for="(item) in DATA">
        <div class=" mb-10 ml-10 mr-10 border-solid border-slate-400 border-[3px]">
            <img :src="item.image">
            <h1 class="text-3xl">{{ item.name }}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repellen
              provident id! Excepturi.</p>
              <button class=" ml-[175px] w-[120px] h-[25px] rounded-[12px] text-black bg-slate-300 ">Купить</button>
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