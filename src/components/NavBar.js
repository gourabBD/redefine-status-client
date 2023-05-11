import React, { useContext } from "react";
import iconImage from "../android-chrome1-512x512.png";
import { AuthContext } from "../contexts/ThemeContextApi";
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';
const NavBar = () => {
  const {handleThemeSwitch,icons}=useContext(AuthContext)
  return (
    <div  className="   w-full bg-white dark:bg-slate-950 bg-opacity-100   shadow-md rounded">
      <div className="  navbar lg:flex grid  justify-between  ">
        <div className="flex  ">
          <div className="flex items-center">
            <img className="w-10 h-10" src={iconImage} alt="" />
            <h1 className="text-xl font-semibold text-slate-600 ml-2">Redefine Status</h1>
          </div>
        </div>
        <div>

        <div className="flex-none gap-2">
          <div className="form-control flex items-center">

       
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered border-dotted border-primary rounded-3xl md:mt-2 sm:mt-2 lg:mt-auto mt-2 w-4/5"
            />
          </div>
        </div>
        <div>
             {/* Dark mode button start */}
          
            { icons?<button onClick={handleThemeSwitch} className="btn btn-outline rounded-full  btn-sm"><FaMoon></FaMoon> </button>:<button onClick={handleThemeSwitch} className="btn btn-outline rounded-full btn-sm"><BsSunFill></BsSunFill> </button>}
              {/* Dark mode button end  */}
        </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
