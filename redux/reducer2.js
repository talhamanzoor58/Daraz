import { ADD_ADDRESS, REMOVE_ADDRESS } from "./ActionTypes"


const initialState=[]
export const reducer2=(state=initialState,action)=>{
    switch(action.type){
        case ADD_ADDRESS:
            return[
                ...state,
                action.payload
            ]
        case REMOVE_ADDRESS:
            const deleteArray=state.filter((item)=>{
                return item!=action.payload
            })
            return[
                ...deleteArray
            ]
        default:
            return state
    }

}