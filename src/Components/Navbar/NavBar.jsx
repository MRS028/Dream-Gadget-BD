import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CartContext, WishlistContext } from "../Root/Root";

const NavBar = () => {
  const { whishCart } = useContext(WishlistContext);
  const { cart } = useContext(CartContext);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const calculateSubtotal = (items) => {
    return items.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  };

  const [whishCartLength, setWhishCartLength] = useState(whishCart.length);
  const [cartLength, setCartLength] = useState(cart.length);

  useEffect(() => {
    setWhishCartLength(whishCart.length);
    setCartLength(cart.length);
  }, [whishCart, cart]);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/review">Review</NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar w-[90%] lg:w-[80%] my-5 items-center lg:mx-28 z-50 absolute">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className={` ${
              isHomePage ? "text-white" : ""
            }  btn btn-ghost lg:hidden `}
              aria-label="Open Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm font-semibold dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <NavLink to="/">
            {" "}
            <h2
              className={` lg:px-5 hidden text-[#9538E2]  ${
                isHomePage ? "text-white" : ""
              }  lg:flex font-bold text-3xl`}
            >
              Gadget Heaven
            </h2>{" "}
          </NavLink>
        </div>
        <div className="navbar-center text-xl hidden lg:flex">
          <ul
            className={`menu ${
              isHomePage ? "text-white" : ""
            } font-semibold text-[#9538E2] menu-horizontal px-1`}
          >
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-5">
          {/* Cart Indicator */}
          <div className="indicator rounded-full bg-[#FFFFFF]">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
                aria-label="Open Cart"
              >
                <div className="indicator">
                  <NavLink to="/dashboard">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </NavLink>
                  <span
                    className={`badge indicator-item badge-lg ${
                      cartLength > 0 ? "" : "hidden"
                    }`}
                  >
                    {cartLength}
                  </span>
                </div>
              </div>
              {cartLength > 0 && (
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
                >
                  <div className="card-body">
                    <span className="text-lg font-bold">
                      {cartLength} Items
                    </span>
                    <span className="text-info">
                      Subtotal: ${calculateSubtotal(cart).toFixed(2)}
                    </span>
                    <div className="card-actions">
                      <NavLink to="dashboard">
                        {" "}
                        <p className="btn bg-[#9538E2] text-white btn-block">
                          View Dashboard
                        </p>
                      </NavLink>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Wishlist Indicator */}
          <div className="indicator rounded-full bg-[#FFFFFF]">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
                aria-label="Open Wishlist"
              >
                <div className="indicator">
                  <NavLink to="/dashboard">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="24"
                      height="24"
                      fill="currentColor"
                    >
                      <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9z" />
                    </svg>
                  </NavLink>
                  <span
                    className={`badge badge-lg indicator-item ${
                      whishCartLength > 0 ? "" : "hidden"
                    }`}
                  >
                    {whishCartLength}
                  </span>
                </div>
              </div>
              {whishCartLength > 0 && (
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
                >
                  <div className="card-body">
                    <span className="text-lg font-bold">
                      {whishCartLength} Items
                    </span>
                    <span className="text-info">
                      Subtotal: ${calculateSubtotal(whishCart).toFixed(2)}
                    </span>
                    <div className="card-actions">
                      <NavLink to="dashboard">
                        {" "}
                        <p className="btn bg-[#9538E2] text-white btn-block">
                          View Dashboard
                        </p>
                      </NavLink>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
