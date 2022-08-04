import { createSlice } from "@reduxjs/toolkit";

// 购物车初始状态
const initialState = {
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    // 类似vuex
    reducers: {
        addToCart: (state, action) => {
            return { products: [...state.products, {...action.payload, amount: 1}]}
        },
        // 清空购物车
        clearCart: (state) => {
            return { products: []}
        },
        // 添加到购物车
        incrementProductAmount: (state, action) => {
            // console.log('increment');
            return { products: state.products.map(product => product.id === action.payload.id ? {...product, amount: product.amount + 1} : product)}
        },
        // 从购物车删除
        decrementProductAmount: (state, action) => {
            return { products: state.products.map(product => product.id === action.payload.id ? {...product, amount: product.amount - 1} : product)}
        }
    }
})

export const cartProducts = state => state.cart.products

export const {  addToCart, clearCart, incrementProductAmount, decrementProductAmount } = cartSlice.actions

export default cartSlice.reducer