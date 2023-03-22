<template>
    <div>

    </div>
</template>
<script>
import { useStore } from '@/stores/test';
export default {
    data (){
        return {
            store: useStore()
        }
    }
}
</script>