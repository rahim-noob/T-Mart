import { Link, useLocation } from "react-router"
import { GrCart } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
const Navbar = () => {
   
  const [visible, invisible] = useState(open);
  const location = useLocation();
  const pathName =location.pathname
  console.log(pathName);
  

  return (
    <nav className="py-12 relative ">
        <div className="mx-10  flex justify-between items-center ">
            <div>
               <Link to="/">
                <img  className="h-5 md:h-full" src="/Logo.png" alt="Logo" />
            </Link>
            </div>
            {/* Desktop Nav */}
            <div  className="hidden md:block">
                <ul className="flex gap-10 text-lg  text-primary font-medium">
                    <li><Link className={`${pathName == "/" && "text-[#1a44b7]"}`} to="/">Home</Link></li>
                     <li><Link className={`${pathName == "/shop" && "text-[#1a44b7]"}`} to="/shop">Shop</Link></li>
                     <li><Link className={`${pathName == "/contact" && "text-[#1a44b7]"}`} to="/contact">Contact</Link></li>
                </ul>
            </div>

            {/* Mobile Nav */}
            <div  className={`md:hidden fixed ${visible ? "translate-x-0" : "translate-x-full"}  top-30  bg-gray-100 z-10  transition duration-500 ease-linear right-0 h-50  w-1/2`} >
                <ul className="flex flex-col items-center gap-10 text-lg text-primary font-medium">
                    <li><Link to="/">Home</Link></li>
                     <li><Link to="/shop">Shop</Link></li>
                     <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>

            <div className="flex items-center gap-5 text-[22px]">
              <Link><GrCart /></Link>
              <Link><FaRegUserCircle /></Link>
            </div>

            <button onClick={ () => invisible(!visible)} className="md:hidden text-2xl"><FaBars /></button>

          

        </div>

    </nav>
  )
}

export default Navbar
