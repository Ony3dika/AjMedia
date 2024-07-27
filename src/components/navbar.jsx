import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";
const Navbar = () => {
  const navLinks = [
    { title: "Clients", to: "" },
    { title: "Portfolio", to: "" },
    { title: "Reviews", to: "" },
    { title: "Process", to: "" },
    { title: "Case Studies", to: "" },
    { title: "Why Us", to: "" },
    { title: "FAQ", to: "" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='lg:pt-10 pt-5 container mx-auto lg:px-44 px-5'>
      <section className='lg:bg-black_bg lg:border border-[#4e4956] lg:py-2 lg:px-6 flex items-center justify-between rounded-2xl'>
        <img src={logo} className='h-5' alt='logo' />

        <div className='basis-[70%] hidden text-sm lg:flex justify-between items-center'>
          {navLinks.map((link, index) => (
            <a href='#' key={index} className='text-white font-semibold'>
              {link.title}
            </a>
          ))}

          <button className='px-3 py-3 rounded-xl font-semibold bg-alt text-black'>
            Book a Call
          </button>
        </div>

        {/* Mobile */}
        <div className='lg:hidden visible'>
          <GiHamburgerMenu size={"1.5rem"} onClick={() => setIsOpen(true)} />

          <nav
            className={` h-screen lg:hidden block z-20 w-full fixed px-5 pt-5 left-0 top-0 bg-main/80 backdrop-blur-lg transition-all duration-200 ease-linear ${
              isOpen ? "left-0" : "left-[-100%]"
            }`}
          >
            <div className='flex justify-between'>
              <img src={logo} className='h-5' alt='logo' />
              <IoCloseCircleOutline
                size={"1.5rem"}
                onClick={() => setIsOpen(false)}
              />
            </div>

            <div className='mt-10'>
              {navLinks.map((link, index) => (
                <div
                  key={index}
                  href='#'
                  className='text-white font-semibold my-4 bg-sub/70 p-3 rounded-lg'
                >
                  {link.title}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
