import Link from "next/link"
import { useEffect, useState } from "react"
import Route from "../../../config/dashboardRoute"

const Button = ({link,name,disable}) =>{
    const [active, setActive] = useState(false);
    useEffect(()=>{
        if(typeof window !== "undefined" && link === window.location.pathname){
            setActive(true)
        }
    },[link])
    return (
        <Link 
            href={link}>
            <a 
                className={`list-group-item list-group-item-action ${active ? 'active': ''} ${disable ? 'disable':''}`}>
                {name}
            </a>
        </Link>
    )
}



const SideBar = () =>{
    return (
        <div 
            className="list-group hideScrollbar"
            style={{
                height:"85vh",
                overflow:"auto"
            }}>
            {Route.map((item,index) =>{
                console.log(item)
                return (
                    <Button 
                        key={index}
                        link={item.link}
                        name={item.name}
                        disable={item.disable}
                    />
                )
            })}
        </div>
    )
}
export default SideBar;