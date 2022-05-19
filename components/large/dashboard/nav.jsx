import { useState, useEffect } from "react";
import callAPI from "../../../config/api";
const Nav = () => {
    const [name, setName] = useState(null);
    const [token, setToken] = useState(null);
    const logout = () => {
        callAPI({
        path: "/logout",
        method: "POST",
        token
        })
    };
    useEffect(()=>{
        setName(localStorage.getItem("name"));
        setToken(localStorage.getItem("token"));
    },[])
    return (
        <nav 
            className="navbar navbar-expand-lg bg-white my-3 rounded shadow">
            <div 
                className="container-fluid">
                    <ul 
                        className="navbar-nav ms-auto">
                        <li 
                            className="nav-item dropdown">
                            <a 
                                className="nav-link dropdown-toggle" 
                                href="#" id="userDropdown" 
                                role="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false">
                                {name}
                            </a>
                            <ul 
                                className="dropdown-menu" 
                                aria-labelledby="userDropdown">
                                <li>
                                    <a 
                                        className="dropdown-item" 
                                        onClick={()=>logout()}
                                        href="#">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
            </div>
        </nav>
    )
}

export default Nav