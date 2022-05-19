import { useEffect } from "react";

const Alert = () => {
    useEffect(()=>{
        if(typeof window !== "undefined" && window.innerWidth > 700){
            if(localStorage.getItem('token')){
                window.location.href = localStorage.getItem('pageBefore');
            } else {
                window.location.href = "/";
            }
        }
    },[])
    return (
        <div className="alert alert-danger">
        <strong>Warning!</strong>
        <p>
            Halaman hanya dapat diakses melalui desktop
        </p>
        </div>
    );
}

export default Alert;