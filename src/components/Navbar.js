import React from "react";
import PropTypes from "prop-types";
import { FaHome, FaAddressCard } from "react-icons/fa";
export const Navbar = (props) => {
  const myStyle = {
    backgroundColor: "#e3f2fd",
  };
  const toggleActiveClass = (elem) => {
    if (elem === "home") {
      props.setingContent("home");
      document.getElementById("home").classList.add("myActive");
      document.getElementById("about").classList.remove("myActive");
    }
     else {
      props.setingContent("about");
      document.getElementById("home").classList.remove("myActive");
      document.getElementById("about").classList.add("myActive");
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`navbar navbar-expand-md navbar-light ${
          props.mode === `dark` ? `navbar-dark bg-dark` : ``
        }`}
        style={myStyle}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={props.image} alt="" srcset="" style={{ width: "34px" }} />
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item myRightM-2 myActive" id="home">
                <a
                  className="nav-a text-none"
                  aria-current="page"
                  href="#"
                  
                  onClick={() => {
                    toggleActiveClass("home");
                  }}
                  style={
                    props.mode === "dark"
                      ? { color: "white" }
                      : { color: "black" }
                  }
                >
                  <div
                    className="d-flex"
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <FaHome className="myRightM" />
                    Home
                  </div>
                </a>
              </li>
              <li className="nav-item myRightM-2" id="about">
                <a
                  className="nav-a text-none"
                  href="#"
                  
                  onClick={() => {
                    toggleActiveClass("about");
                  }}
                  style={
                    props.mode === "dark"
                      ? { color: "white" }
                      : { color: "black" }
                  }
                >
                  <div
                    className="d-flex"
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <FaAddressCard className="myRightM" />
                    About
                  </div>
                </a>
              </li>
            </ul>
            <div className="smallMargin" style={{ minHeight: "29px" }}>
              <div
                className="mx-3 my-2 small"
                style={{
                  display: `${props.mode === `dark` ? `none` : `flex`}`,
                }}
              >
                <button
                  onClick={() => {
                    props.manipulate("light");
                  }}
                  className="btn-light rounded mx-2"
                  style={{ width: "25px", height: "25px" ,backgroundColor:"white"}}
                ></button>
                <button
                  onClick={() => {
                    props.manipulate("info");
                  }}
                  className="btn-info rounded mx-2"
                  style={{ width: "25px", height: "25px" }}
                ></button>
                <button
                  onClick={() => {
                    props.manipulate("warning");
                  }}
                  className="btn-warning rounded mx-2"
                  style={{ width: "25px", height: "25px" }}
                ></button>
                <button
                  onClick={() => {
                    props.manipulate("success");
                  }}
                  className="btn-success rounded mx-2"
                  style={{ width: "25px", height: "25px" }}
                ></button>
                <button
                  onClick={() => {
                    props.manipulate("danger");
                  }}
                  className="btn-danger rounded mx-2"
                  style={{ width: "25px", height: "25px" }}
                ></button>
              </div>
            </div>

            <div className="form-check form-switch small">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label atSmallPadding"
                htmlFor="flexSwitchCheckDefault"
                style={
                  props.mode === "dark"
                    ? { color: "white" }
                    : { color: "black" }
                }
              >
                Enable Dark mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  // title: PropTypes.string.isRequired //set this only if default props are not declared
};

Navbar.defaultProps = {
  title: "Title Here",
};
