const desktop = () =>{
    if(typeof window !== "undefined" && window.innerWidth < 700){
        localStorage.setItem('pageBefore', window.location.pathname);
        window.location.href = "/dashboard/alert";
    }
}

export default desktop;