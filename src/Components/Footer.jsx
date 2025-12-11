 import { Link } from "react-router"
 import { FaLocationDot } from "react-icons/fa6";
 import { IoMail } from "react-icons/io5";
 import { FaPhoneAlt } from "react-icons/fa";
 import { AiFillTwitterCircle } from "react-icons/ai";
 import { ImInstagram } from "react-icons/im";
 import { FaFacebook } from "react-icons/fa";
 import { FaGooglePlus } from "react-icons/fa";
 import { FaArrowRight } from "react-icons/fa";
 
 
const Footer = () => {
  return (
    <footer className="bg-background-color md:py-8 py-4 px-5 md:px-10">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-0 lg:grid-cols-4 py-12 md:py-5 pb-16">
           
           <div>
            <Link>
               <img src="Logo.png" alt="Logo" />
            </Link>

            <div className="flex items-center gap-2.5 pt-8">
              <span className="text-2xl text-navbar"><FaLocationDot /></span>
              <span className="text-sm font-normal text-secondary"> 194 Main Rd T, FS Rayed
               <br /> VIC 3057, USA
              </span>
            </div>

            <div className="flex items-center gap-2.5 pt-4 ">
              <span className="text-2xl text-navbar"> <IoMail /> </span>
              <span className="text-base font-normal text-secondary"> info@example.com
              </span>
            </div>

            <div className="flex items-center gap-2.5 pt-4 ">
              <span className="text-2xl text-navbar"> <FaPhoneAlt  /> </span>
              <span className="text-base font-normal text-secondary"> +012 345 678 102
              </span>
            </div>

            <div className="flex gap-5 items-center pt-7  text-[#a4a3a3] text-3xl">
              <Link to="/" >
                <AiFillTwitterCircle />
              </Link>

              <Link to="/" >
                <ImInstagram  />
              </Link>

              <Link to="/" >
                <FaFacebook   />
              </Link>

              <Link to="/" >
                <FaGooglePlus  />
              </Link>
            </div>
            
           </div> 

           <div>
             <h2 className="text-primary text-2xl  font-medium">Categories</h2>

             <ul className="flex gap-3 flex-col text-secondary text-base font-normal mt-4 md:mt-7">
              <li>
                <Link to="/">Men</Link>
              </li>

              <li>
                <Link to="/">Women</Link>
              </li>

              <li>
                <Link to="/">Accessories</Link>
              </li>

              <li>
                <Link to="/">Shoes</Link>
              </li>

              <li>
                <Link to="/">Dress</Link>
              </li>

              <li>
                <Link to="/">Denim</Link>
              </li>
             </ul>
           </div>  

             <div>
             <h2 className="text-primary text-2xl  font-medium">Information</h2>

             <ul className="flex gap-3 flex-col text-secondary text-base font-normal mt-4 md:mt-7">
              <li>
                <Link to="/">About Us</Link>
              </li>

              <li>
                <Link to="/">Contact Us</Link>
              </li>

              <li>
                <Link to="/">Terms & Conditions</Link>
              </li>

              <li>
                <Link to="/">Returns & Exchanges</Link>
              </li>

              <li>
                <Link to="/">Shipping & Delivery</Link>
              </li>

              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
             </ul>
           </div> 

           <div>
             <h2 className="text-primary text-2xl font-medium">Newsletter</h2>
             <p className="text-secondary text-sm font-normal mt-4 md:mt-7"> Subscribe to our newsletter and get 10% off your first
               purchase .</p>

               <div className="mt-7 flex outline-none border-2 border-navbar ">
                <input type="email"  placeholder="Email Address" className="border-secondary border-r-2 px-8 py-3 w-full"/>
                <button className="px-4"><FaArrowRight /></button>
               </div>
           </div>

           
        </div>

        <div className="flex flex-wrap justify-between    border-t-2 border-[#d9d6d6] w-full ">
          <p className="text-sm text-secondary font-normal mt-4">© 2025 your website name All Right Reserved.</p>
          <ul className="flex items-center gap-2.5 text-secondary text-sm mt-4">
            <li >
              <Link to="/">Home</Link>
            </li>
            <li >
              <Link to="/">Product</Link>
            </li>
            <li >
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer
