import { createStore } from "redux"

const initialvalue={
    value:0
}

function appReduser(prevState=initialvalue,action){
    switch(action.type){
        case "increment" :
            return {
                ...prevState,
                value:prevState.value+1
            
                }
        case "decrement" :
            return {
                ...prevState,
                value:prevState.value-1
            
                }
        case "clear" :
            return {
                ...prevState,
                value:0
            
                }
        default:
            return prevState
    }
}


const store=createStore(appReduser)


export default store