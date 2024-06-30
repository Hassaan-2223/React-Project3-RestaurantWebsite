import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer({
    cartitem:[],subtotal:0,shipping:0,tax:0,total:0
},{
    addToCart: (state,action) =>{
        const item = action.payload;
        const isitemexit = state.cartitem.find((curval)=> curval.id === item.id);
        if(isitemexit){
            state.cartitem.forEach((i)=>{
               if (i.id === item.id) i.quantity += 1;
            })
        }
        else{
            state.cartitem.push(item)
        }
        

    },
    incrementQuantity: (state, action) => {
        const itemId = action.payload;
        const item = state.cartitem.find((cartItem) => cartItem.id === itemId);
        if (item) {
          item.quantity += 1;
        }
      },
      decrementQuantity: (state, action) => {
        const itemId = action.payload;
        const item = state.cartitem.find((cartItem) => cartItem.id === itemId);
        if (item) {
          if (item.quantity > 1) {
            item.quantity -= 1;
          } else {
            state.cartitem = state.cartitem.filter((cartItem) => cartItem.id !== itemId);
          }
        }
      },
      calculateprice:(state)=>{
        let sum = 0;
        state.cartitem.forEach((i)=>{
            sum += i.price*i.quantity;
        })
        state.subtotal = sum
        state.shipping = state.subtotal > 1000 ? 200: 0;
        state.tax = state.subtotal*0.18;
        state.total = state.subtotal + state.shipping + state.tax;
      }   
});