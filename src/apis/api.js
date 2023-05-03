const BASE_URL="http://31.220.48.246:4000/"
export const REGISTER_API =()=>BASE_URL+"user/register"
export const LOGIN_API =()=>BASE_URL+"user/login"
export const CREATE_QUEST =()=>BASE_URL+"quest/create"
export const GET_ALL_QUEST =()=>BASE_URL+"quest"
export const ALL_QUEST = ()=>BASE_URL+"quest/allquest"
export const GET_ONE_QUEST =(id)=>BASE_URL+`quest/${id}`
export const UPDATE_QUEST =(id)=>BASE_URL+`quest/${id}`
export const DELETE_QUEST =(id)=>BASE_URL+`quest/${id}`