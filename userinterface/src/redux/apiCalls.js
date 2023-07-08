import { publicRequest } from "../requestMethod"
import { loginFailure, loginStart, loginSucess } from "./userRedux"

export const  login = async (dispatch,user)=>{
    dispatch(loginStart())
    try {
        const res = await publicRequest.post("/auth/login",user);
        dispatch(loginSucess(res.data))
        localStorage.setItem("token",res.data.token);

    } catch (error) {
        dispatch(loginFailure())   
    }
}