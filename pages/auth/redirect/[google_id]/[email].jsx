import { useRouter } from "next/router";
import callAPI from "../../../../config/api";
import { useEffect } from "react";

const Email = () => {
    const router = useRouter();
    const { google_id, email } = router.query;
    const log = async({google_id,email}) => {
        const data = await callAPI({
            path: "/login",
            method: "POST",
            data: {
                google_id,
                email
            }
        });
        if(data.status === 201){
            localStorage.setItem("token", data.data.token);
            localStorage.setItem("name", data.data.user.name);
            window.location.href = "/";
        }
    }
    useEffect(() => {
        log({google_id,email});
    }, [google_id,email]);

    return (
        <div>
        ... Loading ...
        </div>
    );
    }

export default Email;