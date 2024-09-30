import {defineStore} from 'pinia'
import {ref,computed} from 'vue'
export const userCounterStore = defineStore( 'counter',()=>{
    const count = ref(1);
    const dublecount = computed(()=>{
        function increment(){
            count.value++;

        }
        return {count,dublecount,increment}
    })
})
