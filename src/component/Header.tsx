import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Header = () => {
  const router = useRouter();
  const [show, setShow] = useState(true);
  const darkHeaderRoutes = [];

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [setShow]);

  return (
    <header
      className={`"
        ${
          !show &&
          (darkHeaderRoutes.includes(router.pathname)
            ? "bg-black shadow-sm"
            : "bg-white shadow-sm")
        }
        fixed
        w-full
        z-[9999]
        transition
        duration-300
        ease-in-out
      `}
    >
      {/* ` ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}> */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 mr-4">
            <div className="block" aria-label="Cruip">
              <Link href="/">
                <img
                  src="/assets/skilful-academy-logo.png"
                  className="w-[200px] mt-7 -ml-8"
                />
              </Link>
            </div>
          </div>
          <div className="flex-grow justify-center w-auto">
            <ul
              className={`hidden md:flex flex-grow justify-center flex-wrap space-x-5 items-center text-lg md:text-lg font-[400] ${
                darkHeaderRoutes.includes(router.pathname)
                  ? "text-white"
                  : "text-gray-700"
              } `}
            >
              <Link href="/">
                <li className="cursor-pointer small-font">Home</li>
              </Link>
              <Link href="/course-detail">
                <li className="cursor-pointer small-font">Programs</li>
              </Link>
              <Link href="/about-us">
                <li className="cursor-pointer small-font">About Us</li>
              </Link>
              <Link href="/contact">
                <li className="cursor-pointer small-font">Contact Us</li>
              </Link>
            </ul>
          </div>
          <nav className="flex">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              {/* <li
                className={`cursor-pointer  lg:text-lg xl:text-2xl
                      ${
                        darkHeaderRoutes.includes(router.pathname)
                          ? "text-white"
                          : "text-black"
                      } `}
              >
                
              </li> */}

              <li>
                <a
                  href="tel:0910986585"
                  className={`
                    cursor-pointer
                    border-2
                    font-[600]
                    rounded-md
                    btn-sm
                    ml-3
                    xl:ml-5
                    px-4
                    py-2
                    xl:px-6
                    xl:py-2
                    flex
                    text-xs
                    items-center
                    ${
                      darkHeaderRoutes.includes(router.pathname)
                        ? "text-white border-white"
                        : "text-gray-700 border-[#666]"
                    } 
                  `}
                >
                  <span className="hidden sm:block">Call </span>
                  <span>0910986585</span>
                  <svg
                    className={`
                      w-3
                      h-3
                      fill-current
                      flex-shrink-0
                      ml-2
                      -mr-1
                      ${
                        darkHeaderRoutes.includes(router.pathname)
                          ? "text-gray-100"
                          : "text-gray-800"
                      } 
                    `}
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
