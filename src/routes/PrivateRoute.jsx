import { useSelector } from "react-redux";
import LoginPage from "../componet/pages/LoginPage";

export default function PrivateRoute({children}){

    let {isAuth} = useSelector((state)=>state.authManager)
    if(isAuth){
        return children
    }

    return <LoginPage />

}