import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

const Root = () => {
  const { cart } = useSelector((state) => state.store);
  const cartItems = cart.reduce((agg, curr) => {
    return agg + curr.quantity;
  }, 0);
  return (
    <div className="">
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-200 w-full">
        <div className="text-2xl font-semibold">Shopper</div>
        <div>
          <ul className="list-none flex gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive ? "border-b-[1px] border-black" : ""
                  } hover:bg-slate-300 px-3 py-2 cursor-pointer `
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `${
                    isActive ? "border-b-[1px] border-black" : ""
                  } hover:bg-slate-300 px-3 py-2 cursor-pointer relative`
                }
              >
                {cartItems > 0 ? (
                  <span className="absolute block text-xs text-center bg-red-600 text-white rounded-full h-5 w-5 -right-1 -top-1">
                    {cartItems}
                  </span>
                ) : null}
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="px-8 py-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
