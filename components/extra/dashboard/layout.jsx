import Link from "next/link";
import Nav from "../../large/dashboard/nav";
import SideBar from "../../large/dashboard/sidebar";
import desktop from "../../../config/desktop";
import Auth from "../../../config/auth";
const Layout = ({children}) => {
    Auth();
    desktop();
    return (
        <div 
            className="container-fluid row bg-light">
            <div 
                className="col-md-3 bg-white shadow py-3 px-3"
                style={{
                    height:"100vh",
                }}>
                <Link
                    href={'/'}>
                    <h3>
                        MegaDigi
                    </h3>
                </Link>
                <hr />
                <SideBar />
            </div>
            <div 
                className="col-md-9"
                style={{
                    height:"100vh",
                }}>
                <div 
                    className="container">
                    <Nav />
                    <div 
                        className="container bg-white hideScrollbar px-3 py-3 shadow rounded"
                        style={{
                            height:"85vh",
                            overflow:"auto",
                        }}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;