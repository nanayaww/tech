import { Link, useNavigate } from "react-router-dom";
// import logo from "/src/logo.png";
import logo_mobile from "/src/assets/logo-mobile.png";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-around items-center gap-10 px-4 py-2 shadow  ">
      <div className=" flex gap-10">
        <img
          src={logo_mobile}
          className=" cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div className=" flex items-center gap-5">
          <Link to="/">
            <span className="nav-link">Home</span>
          </Link>
          <Link to="/sell">
            <span className="nav-link">Sell</span>
          </Link>
          <Link to="/buy">
            <span className="nav-link">Buy</span>
          </Link>
          <Link to="/support">
            <span className="nav-link">Support</span>
          </Link>
        </div>
      </div>

      <div className=" flex gap-5 ">
        <div>
          <input
            className=" bg-[#e7edf4] rounded-lg px-2 py-1 outline-none"
            type="text"
            placeholder="search"
          />
        </div>
        <button className=" bg-[#0c7ff2] text-white" type="button">
          Sign Up
        </button>
        <button className=" bg-[#e7edf4]" type="button">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
