import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { questReducer } from "./quest/quest.reducer";
import {userReducer} from "./user/user.reducer"

const rootReducer = combineReducers({
    authManager:authReducer,
    questManager:questReducer,
    userManager:userReducer,
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))