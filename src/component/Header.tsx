import React, { useEffect, useState } from "react";

const Header = () => {
  const [show, setShow] = useState(true);

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
        ${!show && "bg-white shadow-sm"}
        fixed
        w-full
        z-30
        transition
        duration-300
        ease-in-out
      `}
    >
      {/* ` ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}> */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 mr-4">
            <div className="block" aria-label="Cruip">
              <svg
                className="w-8 h-8"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient
                    cx="21.152%"
                    cy="86.063%"
                    fx="21.152%"
                    fy="86.063%"
                    r="79.941%"
                    id="header-logo"
                  >
                    <stop stopColor="#4FD1C5" offset="0%" />
                    <stop stopColor="#81E6D9" offset="25.871%" />
                    <stop stopColor="#338CF5" offset="100%" />
                  </radialGradient>
                </defs>
                <rect
                  width={32}
                  height={32}
                  rx={16}
                  fill="url(#header-logo)"
                  fillRule="nonzero"
                />
              </svg>
            </div>
          </div>
          <div className="flex-grow">
            <ul className="hidden md:flex flex-grow justify-end flex-wrap space-x-5 items-center">
              <li className="font-[500] text-gray-700">Courses</li>
              <li className="font-[500] text-gray-700">Admission</li>
              <li className="font-[500] text-gray-700">Testimonial</li>
            </ul>
          </div>
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <div
                  className="
                      border-2
                      border-black
                      font-[600]
                      rounded-md
                    btn-sm
                    ml-3
                    px-4
                    py-2
                    flex
                    items-center
                  "
                >
                  <span>Sign in</span>
                  <svg
                    className="
                      w-3
                      h-3
                      fill-current
                      text-gray-800
                      flex-shrink-0
                      ml-2
                      -mr-1
                    "
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
