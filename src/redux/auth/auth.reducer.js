import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./auth.types"

const initialState = {
    loading:false,
    error:false,
    data:JSON.parse(sessionStorage.getItem("user"))||null,
    isAuth:JSON.parse(sessionStorage.getItem("user"))==null?false:true
}


export const authReducer = (state=initialState,{type,payload})=>{

    switch(type){

        case LOGIN_LOADING:{
            return {...state,loading:true}
        }

        case LOGIN_SUCCESS:{
            return {...state,loading:false,error:false,data:payload,isAuth:true}
        }
        case LOGIN_ERROR:{
            return {...state,loading:false,error:true}
        }
        case LOGOUT:{
            sessionStorage.setItem("user",null)
            return initialState
        }

        default:{
            return state
        }
    }

}

