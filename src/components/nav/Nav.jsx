import {Outlet ,NavLink ,Link} from  "react-router-dom";
import React from "react";
import style from "./Nav.module.css";

function Nav() {
  return (
    <>
    <nav>
      <div className={style.nav_container}>
        <div className={style.nav_title_wrapper}>
         
          {/*second task */}
        <Link to= "/">
          <img
           className={style.logo}
            src="https://files.codingninjas.in/pl-ninja-16706.svg"
            alt="logo"
           
         />
          </Link>
          <h4> Skill-Tracker </h4>
        </div>
        <div className={style.nav_details}>
           {/*first  task */}

         
          <button>
            <NavLink to="/courses">
            {({isActive })=>(isActive ? "On Courses": "Go To Courses")}
            </NavLink>
            </button>

            <button>
  <NavLink to="/User">
    {({ isActive }) => (isActive ? "User" : "Profile")}
  </NavLink>
</button>

        </div>
      </div>
    </nav>
    <Outlet/>
    </>
  );
}

export default Nav;

//  <img
//    alt='cart-icon'
//    src='https://cdn-icons-png.flaticon.com/512/4903/4903482.png'
//    className={`${style.cart_icon} ${style.icon} `}
//  />;
