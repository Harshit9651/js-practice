import { defineStore } from "pinia";

export const piniaStore = defineStore('counter',{
    state:()=>({
        count:1
    }),
    getters:{
        doubblecount :state=>state.count*2
    },
    actions:{
        increment(){
            this.count++
        }
    }
})

// we dont use ref in pinia store
