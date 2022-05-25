import { useState, useEffect, useContext } from "react";
import callAPI from "../../../config/api";
import { UserContext } from "../../../context";
import Image from "next/image";
const Nav = () => {
    const {user} = useContext(UserContext);
    const [token, setToken] = useState(null);
    const logout = () => {
        callAPI({
        path: "/logout",
        method: "POST",
        token
        })
    };
    useEffect(()=>{
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
                                {user.name}
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
                        {user.photo &&
                            <li
                                className="nav-item">
                                <Image
                                    src={user.photo[0].url}
                                    alt="user"
                                    width={30}
                                    height={30}
                                    className="img-fluid rounded-circle"
                                />
                            </li>
                            }
                    </ul>
            </div>
        </nav>
    )
}

export default Nav