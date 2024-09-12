
import { ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "./ActionTypes"

const initialState=[]
export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return[
                ...state,
                action.payload
            ]
            
        case REMOVE_FROM_CART:
            const deleteArray1=state.filter((item)=>{
                return item.name!=action.payload

            })
            return[
                ...deleteArray1
                  
            ] 
        default:
            return state

            
    

           
    }
    

}