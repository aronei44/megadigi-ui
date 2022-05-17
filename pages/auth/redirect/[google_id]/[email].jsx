import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import callAPI from "../../../../config/api";

const Email = () => {
    const router = useRouter();
    const { google_id, email } = router.query;
    useEffect(() => {
        const login = callAPI({
            path: "/login",
            method: "POST",
            data: {
                google_id,
                email
            }
        });
        login.then((res) => {
            const {data} = res;
            localStorage.setItem("token", data.token);
        });
    }, [google_id, email]);

    return (
        <div>
        ... Loading ...
        </div>
    );
    }

export default Email;