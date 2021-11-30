import React from "react";
import { Link, withRouter } from "react-router-dom";
import auth from "./../auth/auth-helper";
import Signin from "../auth/Signin";
import SignUp from "../user/Signup";
import Ingredients from "./../core/Ingredients";
import { useSelector } from "react-redux";

function Menu() {
  const order = useSelector((state) => state.order);
  let buffer = [];
  if (!order.length) {
    buffer.push(
      <Link key="1" to={"/"}>
        <h2 className="bi bi-cart" style={{ float: "left" }} />
      </Link>
    );
  } else {
    buffer.push(
      <Link key="2" to={"/"}>
        <h2 className="bi bi-cart-fill" style={{ float: "left" }} />
      </Link>
    );
  }

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Pizza Order App</span>
        {auth.isAuthenticated() && (
          <span>
            <div className="dropdown" style={{ width: "70px" }}>
              <div>{buffer}</div>
              <h2
                className="bi bi-person-circle"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ float: "right" }}
              />
              <div
                style={{ left: "-150px" }}
                className="dropdown-menu"
                aria-labelledby="dropdownMenu2"
              >
                <Link
                  to={"/orderHistory/" + auth.isAuthenticated().user._id}
                >
                  <button className="dropdown-item" type="button">
                    Order History
                  </button>
                </Link>
                <Link to="/">
                  <button
                    onClick={() => {
                      auth.clearJWT();
                    }}
                    className="dropdown-item"
                    type="button"
                  >
                    Logout
                  </button>
                </Link>
              </div>
            </div>
            <Ingredients />
          </span>
        )}
        {!auth.isAuthenticated() && (
          <span>
            <Signin />
            <SignUp />
            <Ingredients />
          </span>
        )}
      </div>
    </nav>
  );
}

export default withRouter(Menu);
