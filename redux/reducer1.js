import { ADD_TO_WISHLIST,  REMOVE_FROM_WISHLIST } from "./ActionTypes"

const initialState=[]
export const reducer1=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_WISHLIST:
            return [
                ...state,
                action.payload
            ]
        case REMOVE_FROM_WISHLIST:
            const deleteArray2=state.filter((item)=>{
                return item.name!=action.payload
            })
            return [
                ...deleteArray2
            ]
                
            

        default:
            return state
       
    }

}