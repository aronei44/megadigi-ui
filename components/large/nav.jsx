import Link from "next/link";
import { useState, useEffect } from "react";
import callAPI from "../../config/api";

const Nav = () => {
  const [token, setToken] = useState(null);
  const [name, setName] = useState(null);
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
          setName(localStorage.getItem("name"));
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
            {token ? (
              <>
                <li
                  className="nav-item me-3">
                  <a
                    className="nav-link"
                    href="/dashboard">
                    Dashboard
                  </a>
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
                    {name}
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