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
// state is like data
// getters is like computed property (like some this changs in view or model then it will executed)
// actions is just like function or we can say in optional api it is like methods
