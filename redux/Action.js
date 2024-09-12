import { ADD_ADDRESS, ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_ADDRESS, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "./ActionTypes";

export function addItemToCart(data){
    return{
    type:ADD_TO_CART,
    payload:data
    }

}
export function removeFromCart(item){
    return{
        type:REMOVE_FROM_CART,
        payload:item
    }
}

export function addToWishlist(data){
    return{
        type:ADD_TO_WISHLIST,
        payload:data

    }

}
export function removeFromWishlist(item){
    return{
        type:REMOVE_FROM_WISHLIST,
        payload:item

    }

}

export function addAddress(data){
    return{
        type:ADD_ADDRESS,
        payload:data
    }

}

export function removeAddress(data){
    return{
        type:REMOVE_ADDRESS,
        payload:data
    }     
}