import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <div>
      <nav className="flex justify-center gap-5 mt-8 ">
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "green" : "",
              fontWeight: e.isActive ? "bolder" : "",
            };
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "green" : "",
              fontWeight: e.isActive ? "bolder" : "",
            };
          }}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "tomato" : "",
              fontWeight: e.isActive ? "bolder" : "",
            };
          }}
          to="/cart"
        >
          Cart
        </NavLink>
      </nav>
    </div>
  );
}

export default Nav;
