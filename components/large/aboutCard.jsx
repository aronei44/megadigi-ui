import { useState } from "react";

const AboutCard = ({name}) => {
    const [hover, setHover] = useState(false);
    return (
        <div
            className={`card border border-primary text-center col-5 my-1 mx-1 ${hover ? "bg-primary text-white" : ""}`}
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}>
            <div
                className="card-body">
                    <p
                        className="card-text">
                        {name}
                        </p>
                </div>
            </div>
    );
};

export default AboutCard;