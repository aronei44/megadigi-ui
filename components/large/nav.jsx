import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import callAPI from "../../config/api";
import { UserContext } from "../../context/index";
import Image from "Next/Image";

const Nav = () => {
  const { user } = useContext(UserContext);
  const [token, setToken] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const logout = () => {
    callAPI({
      path: "/logout",
      method: "POST",
      token
    })
  };
  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
              setScrolled(true);
          } else {
              setScrolled(false);
          }
      });
      if(localStorage.getItem("token")){
          setToken(localStorage.getItem("token"));
      }
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light ${scrolled ? "fixed-top" : "bg-opacity-25"}`}>
      <div
        className="container">
        <Link
          className="navbar-brand"
          href="/">
          Megamendung
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span
            className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNav">
          <ul
            className="navbar-nav ms-auto">
            {user ? (
              <>
                <li
                  className="nav-item me-3">
                  <Link
                    href="/dashboard">
                    <a
                      className="nav-link">
                      Dashboard
                    </a>
                  </Link>
                </li>
                <li
                  className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    {user.name}
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink">
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => logout()}
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
                        src={user.photo[0]}
                        alt="user"
                        width={30}
                        height={30}
                        className="img-fluid rounded-circle"
                      />
                  </li>
                }
              </>
            ) : (
              <li
                className="nav-item">
                <a
                  className="nav-link text-white btn btn-primary btn-sm"
                  href={`${process.env.SERVER_APP}/auth`}>
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Nav;