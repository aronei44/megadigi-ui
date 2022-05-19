import { useEffect } from "react";
const Auth = () => {
    useEffect(()=>{
        if(typeof window !== "undefined"){
            if(!localStorage.getItem('token')){
                window.location.href = "/";
            }
        }
    },[])
};
export default Auth;