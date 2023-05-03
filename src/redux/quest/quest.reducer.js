import { CREATE_QUEST_ERROR, CREATE_QUEST_LOADING, CREATE_QUEST_SUCCESS, DELETE_QUEST_ERROR, DELETE_QUEST_LOADING, DELETE_QUEST_SUCCESS, GET_QUEST_ERROR, GET_QUEST_LOADING, GET_QUEST_SUCCESS, UPDATE_QUEST_ERROR, UPDATE_QUEST_LOADING, UPDATE_QUEST_SUCCESS } from "./quest.types"

const initialState = {
    loading:false,
    error:false,
    data:[]
}


export const questReducer = (state=initialState,{type,payload})=>{
    switch(type){

        case GET_QUEST_LOADING:{
            return {...state,loading:true}
        }
        case GET_QUEST_SUCCESS:{
            console.log(payload,"red")
            return {...state,loading:false,error:false,data:payload}
        }

        case GET_QUEST_ERROR:{
            return {...state,loading:false,error:true}
        }

        case CREATE_QUEST_LOADING:{
            return {...state,loading:true}
        }
        case CREATE_QUEST_SUCCESS:{
            return {...state,loading:false,error:false}
        }

        case CREATE_QUEST_ERROR:{
            return {...state,loading:false,error:true}
        }


        case UPDATE_QUEST_LOADING:{
            return {...state,loading:true}
        }
        case UPDATE_QUEST_SUCCESS:{
            return {...state,loading:false,error:false}
        }

        case UPDATE_QUEST_ERROR:{
            return {...state,loading:false,error:true}
        }


        case DELETE_QUEST_LOADING:{
            return {...state,loading:true}
        }
        case DELETE_QUEST_SUCCESS:{
            return {...state,loading:false,error:false}
        }

        case DELETE_QUEST_ERROR:{
            return {...state,loading:false,error:true}
        }



        default:{
            return state
        }
    }

}