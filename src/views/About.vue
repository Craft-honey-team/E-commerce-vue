<template>

  <Layout>
    <div>
      <h1 class="mb-[30px] mt-[20px] text-[40px]"> <strong>{{ store.langProp.aboutus }}</strong> </h1>
      <div class="justify-center flex  ">

        <img class="mb-[40px] w-[100%]" src="../assets/Rectangle17.png" alt="">
      </div>
      <div class=" text-justify ">
        <div class="text-[20px] mb-[40px]">
          <article
            class="indent-[60px] [&>*]:mb-[23px] max-[1024px]:text-[17px] max-[550px]:indent-[15px] max-[550px]:text-[15px] max-[440px]:text-[15px]">
            <p class=""> {{ store.langProp.aboutusp1 }}<span
                class="indent-[0px] text-center font-bold text-[20px]  mb-[7px] ml-3 max-[1024px]:text-[17px] max-[550px]:text-[15px] max-[400px]:text-[15px]">Craft
                Honey!</span> </p>

            <p>
              {{ store.langProp.aboutusp2 }}
            </p>
            <p>
              {{ store.langProp.aboutusp3 }}
            </p>
            <p>
              {{ store.langProp.aboutusp4 }}
            </p>
            <p>
              {{ store.langProp.aboutusp5 }}

            </p>
          </article>

        </div>
      </div>
    </div>

  </Layout>



</template>

<script>
import { useStore } from '@/stores/test'

export default {
  data () {
    return {
    store: useStore()
    }
  },
}

</script>
