import { createSlice } from '@reduxjs/toolkit'

const initialState = []
export const cartSlice = createSlice({
  name:'cart',
  initialState:[],
  reducers: {
    addToCart:(state,action)=>{
        state.push(action.payload)
    },
    removeFromCart:(state,action)=>{
       let arr=state.filter((dish)=>dish.name==action.payload)
       if(arr.length>0){
        let index= state.findIndex((dish)=>dish.name==action.payload)
         let dishArr=state.splice(index,1);
         state=dishArr;
       }
       
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,removeFromCart } = cartSlice.actions

export default cartSlice.reducer