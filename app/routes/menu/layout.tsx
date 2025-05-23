import type React from "react";
import { Link, NavLink, Outlet } from "react-router";

function layout() {
  return (
    <div>
      <nav className="flex flex-row gap-10 bg-gray-300 p-2">
        <h1 className="font-bold">ÁLK Utazási Iroda</h1>
        <NavLink
          to={"/journeys"}
          className={({ isActive }) => (isActive ? "text-gray-700" : "")}
        >
          Kínálatunk
        </NavLink>
        <NavLink
          to={"/registration"}
          className={({ isActive }) => (isActive ? "text-gray-700" : "")}
        >
          Regisztráció
        </NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
export default layout;
