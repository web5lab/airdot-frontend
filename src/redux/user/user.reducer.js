import { SET_WALLET ,SET_Xp } from "./user.type"

const initialState = {
    walletAddress:"Connet to wallet",
    connectionStatus:false,
    pointXp:0,
    secretToken:"",
    userData:[]
}


export const userReducer = (state=initialState,{type,payload})=>{

    switch(type){

        case SET_WALLET:{
            console.log("payloadmy",payload,type);
            return {...state,walletAddress:payload,connectionStatus:true}
             
        }


        case SET_Xp:{
            console.log("payloadmy",payload,type);
            return {...state,pointXp:payload}
             
        }
        
        default:{
            return state
        }
    }

}
