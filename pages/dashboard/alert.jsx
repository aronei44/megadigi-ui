import { useEffect } from "react";

const Alert = () => {
    useEffect(()=>{
        if(typeof window !== "undefined" && window.innerWidth > 700){
            window.location.href = localStorage.getItem('pageBefore');
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