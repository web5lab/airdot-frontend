import Web3 from "web3";
import { useDispatch, useSelector } from "react-redux";
import { wallet, xp } from "../redux/user/user.actions";


export const IntilizeData = async() => {
    let dispatch = useDispatch();
   const walletAd = localStorage.getItem('address');
//    const jwtToken = localStorage.getItem('jwtToken');
   const xpData = localStorage.getItem('Xp')
//    if (!walletAd || !jwtToken ) {
//     return null;
//    }
   dispatch(wallet(walletAd));
   dispatch(xp(xpData));
}