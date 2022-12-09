import { useAmp } from "next/amp";
import Head from "next/head";
import Image from "next/image";
import CountSection from "../component/CountSection";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Timeline from "../component/Timeline";
import { useAppState } from "../store/useAppState";

export default function Home() {
  const { theme } = useAppState();

  return (
    <div>
      <Head>
        <title>Skillfull</title>
        <meta name="skillfull" content="skillfull" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header />

        {/* Hero */}
        <section className="-mt-[100px] relative h-[calc(110vh)] lg:h-[calc(110vh+100px)] lg:mb-[20vh] flex flex-col bg-[#F5F147]">
          {/* <div
            className="
          absolute
          left-1/2
          transform
          -translate-x-1/2
          bottom-0
          pointer-events-none
          z-0
        "
            aria-hidden="true"
          >
            <svg
              width={1360}
              height={578}
              viewBox="0 0 1360 578"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="illustration-01"
                >
                  <stop stopColor="#FFF" offset="0%" />
                  <stop stopColor="#EAEAEA" offset="77.402%" />
                  <stop stopColor="#DFDFDF" offset="100%" />
                </linearGradient>
              </defs>
              <g fill="url(#illustration-01)" fillRule="evenodd">
                <circle cx={1232} cy={128} r={128} />
                <circle cx={155} cy={443} r={64} />
              </g>
            </svg>
          </div> */}

          <MotionView>
            <div className="pt-[15vh] lg:pt-[20vh] max-w-8xl mx-auto px-4 sm:px-6 relative">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                <div className="text-center pb-12 md:pb-16">
                  <h1
                    className="
                text-4xl
                md:text-6xl
                lg:text-7xl
                xl:text-8xl
                font-extrabold
                leading-tighter
                tracking-tighter
                mb-4
                z-[99]
              "
                    data-aos="zoom-y-out"
                  >
                    Become a high-paid
                    <br />
                    <span
                      className="text-3xl
                md:text-6xl font-[800] mt-3 block"
                    >
                      Freelancer in 6 months or less.
                    </span>
                  </h1>
                  <div className="max-w-3xl mx-auto">
                    <p
                      className="text-xl text-gray-600 mb-8"
                      data-aos="zoom-y-out"
                      data-aos-delay={150}
                    >
                      {"Learn in-demand skills. change your life."}
                    </p>
                  </div>

                  <div className="flex justify-center mx-[15%] lg:mt-16">
                    <div className="hidden md:block flex-1">
                      <p className="text-md text-left overflow-hidden">
                        Program design & delivered by experts with over 13 years
                        of experience. Learn in-demand skills & change your
                        lifestyle
                      </p>
                    </div>
                    <div
                      className="flex-grow flex-5 max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                      data-aos="zoom-y-out"
                      data-aos-delay={300}
                    >
                      <div>
                        <a
                          className="
                      btn
                      text-white
                      bg-gray-900
                      hover:bg-gray-700
                      sm:w-auto sm:ml-4
                      px-8
                      py-4
                      font-[600]
                      items-center
                      rounded-full
                      cursor-pointer
                      text-center
                    "
                        >
                          APPLY TODAY
                        </a>
                      </div>
                    </div>
                    <div className="hidden md:flex flex-1">
                      <p className="text-left ml-2">
                        Project Based Learning, you will build a real-world full
                        product throughout the journey One-to-One Mentorship
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MotionView>
          <div className="lg:w-[75%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:gap-6">
            <div className="relative mx-auto h-[420px] w-[420px] lg:-rotate-[7deg] lg:mt-[30px] overflow-hidden rounded-[25px] bg-gray-400">
              <img
                className="absolute w-full h-full top-0 left-0"
                src="https://t4.ftcdn.net/jpg/02/65/14/65/360_F_265146516_7FGauCt8z8oWlo9Mcy1EUGFNnPmcdZJb.jpg"
              />
            </div>
            <div className="hidden lg:block relative mx-auto h-[420px] w-[420px] overflow-hidden rounded-[25px] bg-gray-400">
              <img
                className="absolute w-full h-full top-0 left-0"
                src="https://t4.ftcdn.net/jpg/02/65/14/65/360_F_265146516_7FGauCt8z8oWlo9Mcy1EUGFNnPmcdZJb.jpg"
              />
            </div>
            <div className="hidden lg:block relative mx-auto h-[420px] w-[420px] rotate-[7deg] mt-[30px] overflow-hidden rounded-[25px] bg-gray-400">
              <img
                className="absolute w-full h-full top-0 left-0"
                src="https://t4.ftcdn.net/jpg/02/65/14/65/360_F_265146516_7FGauCt8z8oWlo9Mcy1EUGFNnPmcdZJb.jpg"
              />
            </div>
          </div>
        </section>

        {/* Section */}
        <section className="h-[400px] flex flex-col md:flex-row items-center justify-center mt-20 lg:mt-[25vh] mx-[10%]">
          <h2 className="text-center md:text-left max-w-xl">
            <h2 className="text-3xl md:text-5xl font-[800] my-0 tracking-tight mb-5">
              Best tech Bootcamp in Addis Ababa.
            </h2>
            <p className="text-lg md:text-xl text-gray-900">
              Programs designed & delivered by experts with over 13 years of
              experience.
            </p>

            <p className="text-md md:text-lg text-gray-500 mt-5">
              Skilful makes your dream career possible, no matter your academic
              background or skill level. We’re committed to providing a
              welcoming, diverse and flexible learning environment. Our online
              part-time and full-time programs give you the same outcome.
            </p>
          </h2>
          <img
            className="hidden md:block max-h-[100%] rounded-[30px] shadow-xl ml-[5%]"
            src="https://upload.wikimedia.org/wikipedia/commons/6/63/Night_view_of_Meskel_Square.jpg"
            alt=""
          />
        </section>

        {/* Count Section */}
        <CountSection />

        {/* Feature */}
        {/* <section className="relative">
          <div
            className="
          absolute
          inset-0
          top-1/2
          md:mt-24
          lg:mt-0
          bg-gray-900
          pointer-events-none
        "
          />
          <div
            className="
          absolute
          left-0
          right-0
          bottom-0
          m-auto
          w-px
          p-px
          h-20
          bg-gray-200
          transform
          translate-y-1/2
        "
          />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h2 className="h2 mb-4 text-4xl">How Simple works</h2>
                <p className="text-xl text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
                  cupidatat.
                </p>
              </div>
              <div
                className="
              max-w-sm
              mx-auto
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
              items-start
              md:max-w-2xl
              lg:max-w-none
            "
              >
                <div
                  className="
                relative
                flex flex-col
                items-center
                p-6
                bg-white
                rounded
                shadow-xl
              "
                >
                  <svg
                    className="w-16 h-16 p-1 -mt-1 mb-2"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <rect
                        className="fill-current text-blue-600"
                        width={64}
                        height={64}
                        rx={32}
                      />
                      <g strokeWidth={2}>
                        <path
                          className="stroke-current text-blue-300"
                          d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285"
                        />
                        <path
                          className="stroke-current text-white"
                          d="M20.571 37.714h5.715L36.57 26.286h8"
                        />
                        <path
                          className="stroke-current text-blue-300"
                          strokeLinecap="square"
                          d="M41.143 34.286l3.428 3.428-3.428 3.429"
                        />
                        <path
                          className="stroke-current text-white"
                          strokeLinecap="square"
                          d="M41.143 29.714l3.428-3.428-3.428-3.429"
                        />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    Initial Contact
                  </h4>
                  <p className="text-gray-600 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div
                  className="
                relative
                flex flex-col
                items-center
                p-6
                bg-white
                rounded
                shadow-xl
              "
                >
                  <svg
                    className="w-16 h-16 p-1 -mt-1 mb-2"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <rect
                        className="fill-current text-blue-600"
                        width={64}
                        height={64}
                        rx={32}
                      />
                      <g strokeWidth={2} transform="translate(19.429 20.571)">
                        <circle
                          className="stroke-current text-white"
                          strokeLinecap="square"
                          cx="12.571"
                          cy="12.571"
                          r="1.143"
                        />
                        <path
                          className="stroke-current text-white"
                          d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696"
                        />
                        <path
                          className="stroke-current text-blue-300"
                          d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835"
                        />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    Discovery Session
                  </h4>
                  <p className="text-gray-600 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div
                  className="
                relative
                flex flex-col
                items-center
                p-6
                bg-white
                rounded
                shadow-xl
              "
                >
                  <svg
                    className="w-16 h-16 p-1 -mt-1 mb-2"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <rect
                        className="fill-current text-blue-600"
                        width={64}
                        height={64}
                        rx={32}
                      />
                      <g strokeLinecap="square" strokeWidth={2}>
                        <path
                          className="stroke-current text-blue-300"
                          d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207"
                        />
                        <path
                          className="stroke-current text-white"
                          d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285"
                        />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    Contracting
                  </h4>
                  <p className="text-gray-600 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div
                  className="
                relative
                flex flex-col
                items-center
                p-6
                bg-white
                rounded
                shadow-xl
              "
                >
                  <svg
                    className="w-16 h-16 p-1 -mt-1 mb-2"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <rect
                        className="fill-current text-blue-600"
                        width={64}
                        height={64}
                        rx={32}
                      />
                      <g transform="translate(22.857 19.429)" strokeWidth={2}>
                        <path
                          className="stroke-current text-white"
                          strokeLinecap="square"
                          d="M12.571 4.571V0H0v25.143h12.571V20.57"
                        />
                        <path
                          className="stroke-current text-white"
                          d="M16 12.571h8"
                        />
                        <path
                          className="stroke-current text-white"
                          strokeLinecap="square"
                          d="M19.429 8L24 12.571l-4.571 4.572"
                        />
                        <circle
                          className="stroke-current text-blue-300"
                          strokeLinecap="square"
                          cx="12.571"
                          cy="12.571"
                          r="3.429"
                        />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    Fast Prototyping
                  </h4>
                  <p className="text-gray-600 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div
                  className="
                relative
                flex flex-col
                items-center
                p-6
                bg-white
                rounded
                shadow-xl
              "
                >
                  <svg
                    className="w-16 h-16 p-1 -mt-1 mb-2"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <rect
                        className="fill-current text-blue-600"
                        width={64}
                        height={64}
                        rx={32}
                      />
                      <g strokeLinecap="square" strokeWidth={2}>
                        <path
                          className="stroke-current text-white"
                          d="M20.571 20.571h13.714v17.143H20.571z"
                        />
                        <path
                          className="stroke-current text-blue-300"
                          d="M38.858 26.993l6.397 1.73-4.473 16.549-13.24-3.58"
                        />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    Design Phase
                  </h4>
                  <p className="text-gray-600 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div
                  className="
                relative
                flex flex-col
                items-center
                p-6
                bg-white
                rounded
                shadow-xl
              "
                >
                  <svg
                    className="w-16 h-16 p-1 -mt-1 mb-2"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <rect
                        className="fill-current text-blue-600"
                        width={64}
                        height={64}
                        rx={32}
                      />
                      <g strokeWidth={2}>
                        <path
                          className="stroke-current text-white"
                          d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714"
                        />
                        <path
                          className="stroke-current text-white"
                          d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286"
                        />
                        <path
                          className="stroke-current text-white"
                          d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286"
                        />
                        <path
                          className="stroke-current text-blue-300"
                          d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572"
                          strokeLinecap="square"
                        />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    Develop &amp; Launch
                  </h4>
                  <p className="text-gray-600 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Why Us */}
        <section className="relative mb-[60px] lg:mb-[200px] mx-[10%]">
          <div
            className="
          absolute
          left-1/2
          transform
          -translate-x-1/2
          bottom-0
          pointer-events-none
          -mb-32
        "
            aria-hidden="true"
          >
            <svg
              width={1760}
              height={518}
              viewBox="0 0 1760 518"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="illustration-02"
                >
                  <stop stopColor="#FFF" offset="0%" />
                  <stop stopColor="#EAEAEA" offset="77.402%" />
                  <stop stopColor="#DFDFDF" offset="100%" />
                </linearGradient>
              </defs>
              <g
                transform="translate(0 -3)"
                fill="url(#illustration-02)"
                fillRule="evenodd"
              >
                <circle cx={1630} cy={128} r={128} />
                <circle cx={178} cy={481} r={40} />
              </g>
            </svg>
          </div>
          <div className="max-w-6xl mt-[50px] lg:mt-[150px] mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-5">
              <div className="max-w-3xl mx-auto text-center pb-5 md:pb-16">
                <h2 className="h2 mb-4 text-3xl md:text-5xl">
                  Why Skillfull ?
                </h2>
                <p className="text-xl text-gray-600" data-aos="zoom-y-out">
                  Why should you choose us...
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:border-r-[3px] mx-5">
              <h1 className="text-xl lg:text-2xl mb-3 font-[500]">
                Programs Quality
              </h1>

              <p className="text-gray-800 pr-5" data-aos="zoom-y-out">
                {`No BS in Skilful. No unnecessary lessons, we know the industry
                well enough, we going to help you to be a globally qualified
                professional,& ready for the job market as fast as possible.`}
              </p>
            </div>
            <div className="lg:border-r-[3px] mx-5">
              <h1 className="text-xl lg:text-2xl mb-3 font-[500]">
                Learning Experience
              </h1>

              <p className="text-gray-800 pr-5" data-aos="zoom-y-out">
                {`Engaging courses, Live classes with instructor, one-to-one mentorship & group projects Project Based Learning `}
              </p>
            </div>
            <div className="lg:border-r-[3px] mx-5">
              <h1 className="text-xl lg:text-2xl mb-3 font-[500]">
                One-to-one Mentorship
              </h1>

              <p className="text-gray-800 pr-5" data-aos="zoom-y-out">
                {`Ask what challenges you , and get detailed feedback and reviews.
                your mentor ensures you’re on track with your learning goals.`}
              </p>
            </div>
            <div className="mx-5">
              <h1 className="text-2xl mb-3">Global Opportunities</h1>

              <p className="text-gray-800 pr-5" data-aos="zoom-y-out">
                After completion, you will connect with fast-growing global
                startups
              </p>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="mb-[30px] max-w-5xl text-left mx-[10%] lg:mx-auto">
          <h1 className="text-2xl md:text-5xl">
            Our programs prepare you for the job market as fast as possible.
          </h1>
          <p className="mt-5 text-lg lg:text-xl text-gray-800 font-[300]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            nostrum unde ipsam quae numquam autem ipsum, beatae mollitia non id
            repellat dolores cumque nobis dignissimos rerum expedita consequatur
            sequi perferendis.
          </p>
        </section>

        {/* Call to Action */}
        <section className="relative mb-[100px] mx-[15%] mt-[70px]">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="mx-5">
              <img
                className="rounded-3xl mb-6"
                src="https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg"
                alt=""
              />
              <h1 className="text-2xl mb-3">{`Full-stack software dev't`}</h1>
              <p className="text-lg text-gray-600">Online full-time</p>
              <p className="text-lg text-gray-600">Online part-time</p>
              <button className="mt-3 pt-[10px] pb-3 px-8 bg-gray-200 hover:bg-gray-900 hover:text-white duration-300 transition-all rounded-[30px]">
                Learn more
              </button>
            </div>
            <div className="mx-5">
              <img
                className="rounded-3xl mb-6"
                src="https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg"
                alt=""
              />
              <h1 className="text-2xl mb-3">{`Product design UI/UX`}</h1>
              <p className="text-lg text-gray-600">Online full-time</p>
              <p className="text-lg text-gray-600">Online part-time</p>
              <button className="mt-3 pt-[10px] pb-3 px-8 bg-gray-200 hover:bg-gray-900 hover:text-white duration-300 transition-all rounded-[30px]">
                Learn more
              </button>
            </div>
            <div className="mx-5">
              <img
                className="rounded-3xl mb-6"
                src="https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg"
                alt=""
              />
              <h1 className="text-2xl mb-3">{`Search engine optimization`}</h1>
              <p className="text-lg text-gray-600">Online full-time</p>
              <p className="text-lg text-gray-600">Online part-time</p>
              <button className="mt-3 pt-[10px] pb-3 px-8 bg-gray-200 hover:bg-gray-900 hover:text-white duration-300 transition-all rounded-[30px]">
                Learn more
              </button>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="relative h-[300px] border flex flex-col md:flex-row items-center justify-center mx-[10%] bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-500 text-white rounded-3xl">
          <h2 className="text-center md:text-left max-w-xl">
            <h2 className="text-xl md:text-5xl font-[800] my-0 tracking-tight mb-2">
              Don't waste your time,
            </h2>
            <p className="text-lg md:text-xl text-gray-200">
              Start learning to become a globally qualified professional
            </p>
          </h2>

          <div className="hidden lg:block text-white absolute bottom-5 scale-75 right-[24%] ">
            <svg
              width="453"
              height="146"
              viewBox="0 0 453 146"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M206.375 93.0465C208.465 94.6242 212.025 97.0379 216.717 99.6674C221.41 102.297 227.276 105.075 233.776 107.569C240.262 110.064 247.395 112.262 254.394 114.11C261.379 115.997 268.269 117.359 274.324 118.371C302.358 122.955 331.445 121.931 358.441 113.597C385.316 105.277 410.114 89.554 428.157 67.9111C431.029 64.5669 434.454 59.7259 437.34 55.8558C438.095 54.9119 438.756 53.9814 439.39 53.1724C440.023 52.3633 440.63 51.6621 441.197 51.0957C442.316 49.99 443.273 49.4776 443.907 49.8956C445.229 50.7721 445.04 53.6982 443.422 58.2156C441.615 62.6116 438.351 68.6257 433.011 74.8017C420.255 89.9045 404.262 102.041 386.799 110.941C369.323 119.894 350.296 125.477 331.054 128.161C302.83 132.112 273.96 129.172 246.748 121.378C233.142 117.508 219.671 112.37 207.346 104.724C201.21 100.895 195.425 96.3772 190.261 91.1586C185.15 85.9401 180.673 79.8315 177.437 73.1296C174.51 67.129 172.582 60.6563 171.679 54.0084C170.789 47.3605 170.977 40.4967 172.569 33.8353C174.119 27.1739 177.329 20.8362 181.752 15.5097C186.175 10.1563 192.081 6.0435 198.473 3.48142C201.682 2.22734 204.999 1.32383 208.357 0.743993C211.715 0.177637 215.099 -0.0246163 218.457 0.00235305C225.186 0.123715 231.82 1.3508 238.118 3.44092C250.699 7.66162 262.255 15.3074 270.454 26.0951C272.355 28.6707 274.027 31.2867 275.551 34.0241C277.048 36.7615 278.383 39.5933 279.542 42.5194C280.662 45.4456 281.606 48.4527 282.347 51.5272C283.048 54.6152 283.52 57.7572 283.763 60.9395C284.181 67.2908 283.52 73.8713 281.498 80.0069C279.556 86.1694 276.401 91.9003 272.53 96.9166C264.723 107.003 254.434 114.339 243.768 120.164C238.401 123.063 232.886 125.625 227.276 127.796L218.848 130.938L214.627 132.489L210.326 133.797C170.802 146.257 128.474 148.212 87.9389 141.402C78.3783 139.892 66.8489 137.843 56.6141 134.903C54.47 134.377 52.0563 133.527 49.4402 132.664C46.8377 131.788 44.0464 130.857 41.2685 129.927C35.7803 127.864 30.3864 125.585 26.3815 123.872C23.0103 122.187 19.5313 120.42 16.1331 118.991C15.1622 118.573 14.2318 118.168 13.3553 117.791C12.4923 117.373 11.6832 116.941 10.9146 116.55C9.3773 115.741 8.02885 114.999 6.85568 114.325C4.50935 112.977 2.86422 111.871 1.90681 110.995C0.00547642 109.242 0.855 108.392 4.17223 108.19C5.62857 108.095 4.87344 106.558 8.64914 107.974C8.81096 108.028 9.1211 108.149 9.25595 108.203C20.7718 112.222 31.7079 117.777 43.3856 122.173C100.965 142.427 165.826 142.036 222.637 119.8C227.047 118.222 231.24 116.308 235.407 114.271C239.56 112.249 243.592 110.01 247.409 107.516C251.252 105.034 254.919 102.337 258.237 99.3034C261.54 96.2694 264.642 93.0195 267.137 89.3921C269.645 85.7783 271.654 81.8947 273.083 77.7954L273.987 74.6804C274.297 73.6421 274.445 72.5768 274.674 71.525C274.985 69.3944 275.241 67.2369 275.227 65.0658C275.308 60.7238 274.715 56.3413 273.582 52.0936C272.477 47.8324 270.845 43.6792 268.768 39.7686C267.662 37.6111 266.341 35.5479 264.993 33.5522C263.59 31.6374 262.134 29.7495 260.475 28.0369C257.212 24.5309 253.477 21.4564 249.445 18.6921L249.58 18.7865C245.291 16.0221 240.626 13.8376 235.785 12.2464C230.957 10.6148 225.927 9.67087 220.925 9.2933C216.192 8.96967 211.418 9.33371 206.887 10.426C202.383 11.5856 198.068 13.4331 194.427 16.1974C192.553 17.5189 190.921 19.1371 189.371 20.8092C187.874 22.5487 186.552 24.4365 185.393 26.4188C183.1 30.4102 181.603 34.8872 180.902 39.5394C179.459 48.8573 181.212 58.701 184.961 67.3717C186.849 71.7272 189.263 75.7726 192.135 79.4539C195.048 83.1757 198.324 86.5873 201.898 89.6349C202.437 90.1338 203.165 90.6328 203.934 91.1991C204.635 91.8059 205.471 92.4262 206.375 93.0465Z"
                fill="white"
              />
              <path
                d="M451.957 59.536C452.132 60.453 452.523 63.7163 452.685 65.8064C453.144 70.6339 452.807 75.6368 450.851 80.1406C450.541 80.8419 450.231 82.0824 447.278 81.2868C444.203 80.4642 442.585 79.3181 442.936 78.2933C443.745 75.7851 444.797 73.1286 444.284 70.4317C443.556 66.5616 443.529 62.7185 442.41 59.0102C442.235 58.3899 442.032 57.7696 441.83 57.1628L441.709 56.7717L441.668 56.6773L441.601 56.502C441.52 56.2728 441.399 55.9896 441.129 55.9492C440.954 55.9357 440.792 56.0435 440.67 56.1649C440.617 56.2188 440.563 56.2998 440.522 56.3672L440.468 56.4751C440.455 56.5021 440.468 56.502 440.441 56.529L438.135 58.4708C436.773 59.6305 435.398 60.7632 433.915 61.7476C431.366 63.4466 428.386 64.5119 425.689 65.9952C425.055 66.3458 424.651 67.3032 423.976 67.7077C423.41 68.0449 422.493 68.6383 421.805 68.7866C421.509 68.854 421.185 68.8944 421.023 69.1371C420.268 70.2698 419.378 69.5417 417.773 66.4268C417.423 65.7391 416.762 64.9704 416.722 64.3636C416.722 64.3366 416.708 64.2826 416.708 64.2557C416.29 61.9903 417.625 62.2735 418.38 61.6936C422.116 58.8619 425.972 56.2188 429.788 53.4949L433.335 51.0407C433.928 50.6227 434.508 50.2047 435.074 49.7597L436.207 48.8832C436.733 48.4787 437.259 48.0606 437.812 47.6831C438.985 46.847 440.293 45.9031 441.628 46.0919H441.601C442.316 45.984 443.057 45.9705 443.799 46.0784C444.5 46.1997 445.201 46.4155 445.808 46.7931C446.981 47.4943 447.952 48.5056 448.721 49.7732C449.125 50.38 449.395 51.1351 449.678 51.8633C449.948 52.578 450.271 53.3736 450.501 54.0209C451.054 55.7334 451.499 57.4055 451.701 59.0776C451.741 59.199 451.917 59.3473 451.957 59.536Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="lg:ml-[10%] mt-10 lg:mt-0">
            <div>
              <a
                className="
                shadow-3xl
                relative
                      btn
                      text-black
                      bg-gray-50
                      hover:bg-gradient-to-r
                      hover:from-indigo-800
                      hover:via-purple-700
                      hover:to-pink-500
                      hover:text-white
                      duration-300
                      transition-all
                      hover:scale-125
                      hover:border-[3px]
                      z-[9999]
                      hover:border-white/40
                      w-full
                      sm:w-auto sm:ml-4
                      px-8
                      py-4
                      flex
                      font-[600]
                      items-center
                      rounded-full
                      cursor-pointer
                    "
              >
                APPLY TODAY
              </a>
            </div>
          </div>
        </section>

        {/* Road Map */}
        <section className="flex w-full justify-center my-[100px]">
          {/* <img
            src="/assets/roadmap-horizontal.jpg"
            alt=""
            className="w-[90%]"
          /> */}
          <Timeline />
        </section>

        {/* Testimonial */}
        {/* <section className="relative">
          <div
            className="
          absolute
          left-1/2
          transform
          -translate-x-1/2
          bottom-0
          pointer-events-none
          -mb-32
        "
            aria-hidden="true"
          >
            <svg
              width={1760}
              height={518}
              viewBox="0 0 1760 518"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="illustration-02"
                >
                  <stop stopColor="#FFF" offset="0%" />
                  <stop stopColor="#EAEAEA" offset="77.402%" />
                  <stop stopColor="#DFDFDF" offset="100%" />
                </linearGradient>
              </defs>
              <g
                transform="translate(0 -3)"
                fill="url(#illustration-02)"
                fillRule="evenodd"
              >
                <circle cx={1630} cy={128} r={128} />
                <circle cx={178} cy={481} r={40} />
              </g>
            </svg>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h2 className="h2 mb-4">
                  Trusted by over 20,000 companies all over the world
                </h2>
                <p className="text-xl text-gray-600" data-aos="zoom-y-out">
                  Arcu cursus vitae congue mauris rhoncus viverra nibh cras
                  pulvinar mattis blandit libero cursus mattis.
                </p>
              </div>
              <div
                className="
              max-w-sm
              md:max-w-4xl
              mx-auto
              grid
              gap-2
              grid-cols-4
              md:grid-cols-5
            "
              >
                <div
                  className="
                flex
                items-center
                justify-center
                py-2
                col-span-2
                md:col-auto
              "
                >
                  <svg
                    className="max-w-full fill-current text-gray-400"
                    width={124}
                    height={24}
                    viewBox="0 0 124 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M63.734 11.56c-1.022 0-1.76.325-2.506.657v7.506c.715.066 1.125.066 1.804.066 2.454 0 2.79-1.091 2.79-2.615v-3.585c0-1.125-.384-2.03-2.088-2.03zm-16.295-.41c-1.702 0-2.09.908-2.09 2.032v.632h4.179v-.632c0-1.124-.389-2.032-2.089-2.032zm-31.566 7.813c0 .89.432 1.351 1.386 1.351 1.023 0 1.628-.324 2.375-.656v-1.781h-2.236c-1.06 0-1.525.191-1.525 1.086zm63.711-7.403c-1.705 0-2.296.904-2.296 2.03v4.106c0 1.128.591 2.035 2.296 2.035 1.7 0 2.296-.907 2.296-2.035V13.59c0-1.125-.596-2.03-2.296-2.03zM7.517 23.568H2.505V11.783H0v-4.06h2.505v-2.44C2.505 1.97 3.92 0 7.936 0h3.346v4.062H9.19c-1.565 0-1.668.568-1.668 1.627l-.006 2.033h3.787l-.442 4.06H7.517v11.786zm17.13.03H20.47l-.18-1.026a9.802 9.802 0 01-4.733 1.193c-3.064 0-4.695-1.988-4.695-4.738 0-3.243 1.903-4.401 5.307-4.401h3.465v-.701c0-1.656-.195-2.142-2.817-2.142h-4.286l.419-4.06h4.685c5.751 0 7.013 1.764 7.013 6.235v9.64zm14.207-11.517c-2.6-.433-3.347-.528-4.597-.528-2.247 0-2.926.481-2.926 2.334v3.506c0 1.854.679 2.337 2.926 2.337 1.25 0 1.997-.096 4.597-.531v3.961c-2.277.496-3.76.626-5.015.626-5.381 0-7.52-2.749-7.52-6.72v-2.845c0-3.974 2.139-6.728 7.52-6.728 1.254 0 2.738.13 5.015.629v3.959zm15.686 4.985h-9.192v.327c0 1.854.68 2.337 2.925 2.337 2.02 0 3.252-.096 5.847-.531v3.961c-2.503.496-3.807.626-6.262.626-5.382 0-7.522-2.749-7.522-6.72v-3.253c0-3.474 1.588-6.32 7.103-6.32s7.1 2.813 7.1 6.32v3.253zm16.294.075c0 3.838-1.13 6.638-7.971 6.638-2.47 0-3.92-.21-6.647-.618V1.22l5.01-.812v7.675c1.084-.391 2.485-.59 3.76-.59 5.012 0 5.847 2.183 5.847 5.69v3.958zm16.062.084c0 3.31-1.407 6.522-7.295 6.522-5.891 0-7.325-3.211-7.325-6.522v-3.197c0-3.313 1.434-6.525 7.325-6.525 5.888 0 7.295 3.212 7.295 6.525v3.197zm16.052 0c0 3.31-1.41 6.522-7.296 6.522-5.89 0-7.325-3.211-7.325-6.522v-3.197c0-3.313 1.434-6.525 7.325-6.525 5.887 0 7.296 3.212 7.296 6.525v3.197zm16.473 6.343h-5.432l-4.593-7.449v7.45h-5.013V1.218l5.013-.812v14.388l4.593-7.073h5.432l-5.015 7.718 5.015 8.128zM95.635 11.56c-1.703 0-2.293.904-2.293 2.03v4.106c0 1.128.59 2.035 2.293 2.035 1.7 0 2.301-.907 2.301-2.035V13.59c0-1.125-.601-2.03-2.301-2.03zm26.646 9.228c.844 0 1.517.669 1.517 1.504 0 .848-.673 1.509-1.523 1.509a1.511 1.511 0 01-1.531-1.51c0-.834.685-1.503 1.531-1.503h.006zm-.006.234c-.68 0-1.236.569-1.236 1.27 0 .714.557 1.275 1.242 1.275.687.007 1.235-.561 1.235-1.268 0-.708-.548-1.277-1.235-1.277h-.006zm-.288 2.145h-.275v-1.678c.144-.02.282-.039.488-.039.261 0 .432.054.537.127.101.074.156.187.156.346 0 .222-.15.355-.335.409v.013c.15.027.253.16.288.406.04.261.082.36.109.415h-.289c-.04-.054-.082-.207-.116-.428-.04-.214-.152-.294-.372-.294h-.19v.723h-.001zm0-.929h.2c.225 0 .417-.08.417-.288 0-.147-.109-.293-.418-.293-.09 0-.152.006-.2.013v.568z" />
                  </svg>
                </div>
                <div
                  className="
                flex
                items-center
                justify-center
                py-2
                col-span-2
                md:col-auto
              "
                >
                  <svg
                    className="max-w-full fill-current text-gray-400"
                    width={83}
                    height={30}
                    viewBox="0 0 83 30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.186 0c.2.093.326.285.486.437.26.225.452.523.705.755.312.298.512.675.771 1.013.452.682.851 1.41 1.057 2.205.213.542.246 1.132.233 1.714.013.53-.133 1.053-.372 1.53-.413.721-1.157 1.205-1.935 1.463-.971.232-2.042.272-2.98-.139-.338-.185-.724-.311-.997-.603-.631-.516-.997-1.357-.877-2.171.186-1.45 1.057-2.695 1.988-3.767.086.158.013.344.073.51.08.35.206.721.472.973.326-.298.672-.596.95-.94.254-.371.46-.782.546-1.219.02-.556.073-1.139-.14-1.668l.02-.093zM.005 6.614c1.556.014 3.118-.013 4.674.014 0 1.542.014 3.085-.006 4.628 1.104.02 2.207.006 3.318.006.013.12.02.239.02.358-.014 1.271.006 2.536-.014 3.807-1.11.013-2.214 0-3.324.006.02 2.285-.007 4.562.013 6.846.04.2.067.398.06.603-.02.185.093.338.133.51.086.397.306.755.558 1.066.373.37.851.629 1.363.741.466.073.931.113 1.404.08.026.08.04.159.04.245a319.227 319.227 0 000 3.568c0 .166-.034.331-.06.49-.672 0-1.344.047-2.015 0-.4-.086-.825-.046-1.21-.218-1.07-.252-2.095-.781-2.86-1.583C.977 26.702.372 25.18.126 23.67c-.067-.166-.027-.358-.054-.536-.093-.365-.053-.749-.066-1.12a5974.61 5974.61 0 010-15.4zm22.714 4.29c.279-.072.578-.02.857-.079.586-.073 1.164.02 1.743.04.405-.007.797.113 1.196.192 1.483.358 2.886 1.145 3.904 2.297.18.298.452.517.624.821.433.682.719 1.444.965 2.212.153.563.232 1.145.306 1.721.033 1.278.013 2.563.02 3.84-.007 2.55.006 5.099-.007 7.648-1.556-.02-3.105-.007-4.655-.014a.365.365 0 01-.06-.046c-.006-3.569 0-7.137 0-10.7.007-.436-.073-.86-.166-1.277a4.106 4.106 0 00-.671-1.172c-.173-.205-.412-.338-.605-.517-.3-.198-.652-.29-.991-.384-.18-.013-.36 0-.525-.06-.712-.046-1.437.014-2.102.286-.485.231-.937.549-1.256.993-.526.622-.698 1.47-.685 2.264 0 3.536.007 7.078 0 10.613-1.57.014-3.139-.006-4.708.014-.026-3.41 0-6.827-.013-10.236.007-.437-.007-.874.027-1.311.086-.219.026-.457.093-.67.12-.807.425-1.575.764-2.31.333-.642.732-1.258 1.25-1.768.406-.41.825-.84 1.337-1.125.99-.689 2.16-1.106 3.358-1.271zm55.72-.039c.579-.013 1.15-.126 1.73-.033.312.04.63.033.943.046.06.576.014 1.159.027 1.735v2.317c0 .146.02.298-.04.437-.153-.112-.359-.073-.532-.119-.705-.06-1.43-.026-2.094.238a3.333 3.333 0 00-1.869 1.596c-.113.14-.113.338-.24.47-.205.742-.219 1.516-.205 2.278-.007 3.257.02 6.508-.014 9.766-1.55-.02-3.105 0-4.66-.014-.014-.013-.034-.04-.047-.053V18.903c-.02-.444.08-.874.073-1.311.106-.212.08-.457.146-.675.332-1.676 1.217-3.258 2.56-4.337.26-.291.632-.43.938-.662.99-.603 2.14-.894 3.284-1.053zm-68.919.39c1.57.027 3.138-.006 4.708.014 0 6.058-.007 12.11 0 18.161 0 .06 0 .179-.093.159H9.533c-.04-1-.006-2.006-.02-3.006.007-5.105 0-10.216.007-15.327zm49.238 12.29c.399-.153.784-.352 1.19-.49.585-.226 1.157-.497 1.742-.722 1.21-.557 2.46-1.02 3.684-1.543.292-.16.625-.232.91-.404.326-.126.652-.238.971-.384.28-.166.599-.232.885-.377.379-.153.744-.325 1.13-.464.392-.218.831-.324 1.223-.536.107-.073.28-.053.346-.179-.113-.159-.053-.358-.113-.53-.086-.31-.173-.615-.246-.92-.299-.92-.731-1.8-1.316-2.569-.712-1.026-1.69-1.854-2.773-2.463-.712-.43-1.51-.675-2.307-.887-.492-.06-.965-.232-1.463-.225-.452-.06-.918-.086-1.363-.007-.792.013-1.55.205-2.3.424-1.31.457-2.554 1.152-3.558 2.112-.3.278-.546.603-.831.887-.446.57-.852 1.172-1.157 1.821-.433.973-.845 1.993-.891 3.072-.147.517-.1 1.06-.107 1.59-.013.337.04.668.107.992-.02.344.113.662.16.993.112.702.425 1.351.71 2 .785 1.602 2.022 2.993 3.571 3.9 1.018.622 2.148 1.066 3.332 1.231.964.152 1.954.179 2.925.053.333.027.652-.12.984-.139 1.417-.331 2.806-.927 3.877-1.927.319-.251.618-.55.87-.867.426-.43.732-.953 1.038-1.47.293-.55.532-1.132.705-1.735-.093-.04-.2-.026-.292-.026-1.556.007-3.106-.007-4.662 0-.146 0-.146.199-.239.278-.266.384-.605.708-.964 1.013-.519.37-1.13.57-1.736.748-.16.02-.312.013-.458.073-.373.027-.752.013-1.13.007-.42-.08-.839-.172-1.244-.305-.625-.318-1.237-.682-1.709-1.198-.12-.146-.312-.258-.352-.45.106-.047.206-.12.325-.14.193-.033.34-.185.526-.238zm-1.915-3.351c-.093-.232-.007-.503-.02-.748.106-.338.14-.695.266-1.033.319-.748.711-1.483 1.283-2.073.266-.218.492-.483.798-.648.226-.12.445-.252.678-.358.432-.126.851-.324 1.303-.324.413-.1.838-.047 1.257-.04 1.097.152 2.201.622 2.912 1.49.074.172-.172.185-.272.251-.432.239-.918.358-1.35.603-.193.033-.36.152-.545.212-1.377.596-2.78 1.119-4.143 1.741-.731.285-1.456.59-2.167.927zm-4.954-17.03c-1.456-.012-2.912 0-4.369-.006-.106.013-.232-.033-.319.047.014 3.111 0 6.23.007 9.342-.007.112.02.225-.027.33-.133-.02-.2-.145-.299-.218-.671-.576-1.423-1.066-2.26-1.35-.566-.219-1.158-.331-1.756-.437-.678-.014-1.363-.034-2.048.006-.073.02-.14.04-.213.047-1.522.211-2.945.92-4.116 1.893-.651.61-1.303 1.245-1.762 2.013-.538.761-.884 1.635-1.216 2.496-.153.543-.306 1.08-.373 1.635-.126.854-.073 1.728-.06 2.59.034.224.107.436.113.661a9.18 9.18 0 00.625 2.126c.246.655.645 1.251 1.011 1.847.26.33.512.675.824.966.466.457.925.954 1.51 1.272.691.523 1.51.834 2.307 1.139.293.052.565.218.864.225.253.02.486.139.739.125.133-.013.252.08.392.067.645.02 1.296.02 1.941 0 .107 0 .213-.047.326-.053.446.006.858-.166 1.29-.226.565-.205 1.17-.337 1.696-.642.778-.357 1.482-.86 2.114-1.43a8.187 8.187 0 001.922-2.49c.206-.416.439-.82.572-1.27.252-.623.365-1.285.452-1.94.146-.577.1-1.179.113-1.775V3.164zm-4.728 17.93c-.04.702-.305 1.37-.618 2-.525.986-1.41 1.741-2.414 2.218-.153.08-.352.073-.458.218-.187 0-.373.007-.552.073-.572.014-1.164.066-1.723-.092-.239-.113-.505-.16-.744-.285-.3-.166-.639-.278-.885-.53-.465-.324-.824-.768-1.15-1.225-.26-.443-.519-.9-.638-1.403-.133-.265-.12-.563-.193-.841-.02-.709-.06-1.437.106-2.126.074-.218.12-.45.2-.668.193-.351.312-.742.565-1.06.133-.278.366-.483.552-.721.499-.57 1.184-.934 1.875-1.219.26-.059.512-.191.785-.191.552-.14 1.123-.027 1.669.072.718.259 1.43.616 1.988 1.146.206.192.359.43.565.622a5.625 5.625 0 011.07 4.012zM78.4 27.265h1.743c.006.132.006.265 0 .397-.2.027-.4-.006-.592.02-.027.596 0 1.185-.013 1.781a4.773 4.773 0 00-.532-.006c-.02-.47-.014-.947-.007-1.417 0-.126.027-.272-.087-.358-.172-.026-.345.007-.518-.02a2.625 2.625 0 01.006-.397zm2.062.007c.246-.007.492-.02.738.013-.013.192.146.324.193.503.066.225.166.437.232.662.054.1.147.186.113.311.133-.516.34-1.006.546-1.49a8.47 8.47 0 01.711 0c.013.709 0 1.43 0 2.14a2.97 2.97 0 01-.485 0c.006-.497 0-.994.013-1.484-.06.053-.12.1-.166.166-.087.45-.32.86-.432 1.31-.133.02-.26.02-.393.007-.04-.251-.22-.457-.22-.715-.179-.218-.185-.53-.325-.774-.093.178-.02.39-.04.582-.026.311.033.63-.026.94-.16 0-.34.053-.466-.06.02-.701 0-1.403.007-2.111z" />
                  </svg>
                </div>
                <div
                  className="
                flex
                items-center
                justify-center
                py-2
                col-span-2
                md:col-auto
              "
                >
                  <svg
                    className="max-w-full fill-current text-gray-400"
                    width={125}
                    height={39}
                    viewBox="0 0 125 39"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M65.879 9.8a2.533 2.533 0 01-2.539 2.537 2.532 2.532 0 01-2.538-2.538 2.508 2.508 0 012.538-2.537c1.446.039 2.539 1.171 2.539 2.537zm-10.466 5.114v.624s-1.21-1.562-3.787-1.562c-4.256 0-7.576 3.24-7.576 7.73 0 4.45 3.28 7.73 7.576 7.73 2.616 0 3.787-1.601 3.787-1.601v.663c0 .313.235.546.547.546h3.163V14.365H55.96a.561.561 0 00-.547.549zm0 9.407c-.585.86-1.757 1.601-3.162 1.601-2.5 0-4.413-1.561-4.413-4.216 0-2.655 1.914-4.216 4.413-4.216 1.367 0 2.616.78 3.162 1.6v5.231zm6.053-9.954h3.749v14.678h-3.749V14.367zm55.998-.391c-2.578 0-3.788 1.562-3.788 1.562V7.301h-3.749v21.744h3.163a.558.558 0 00.547-.546v-.664s1.21 1.6 3.787 1.6c4.257 0 7.576-3.277 7.576-7.728 0-4.45-3.319-7.731-7.536-7.731zm-.625 11.907c-1.445 0-2.577-.741-3.163-1.6V19.05c.586-.78 1.835-1.6 3.163-1.6 2.499 0 4.412 1.561 4.412 4.216 0 2.654-1.913 4.216-4.412 4.216zm-8.864-5.543v8.744h-3.75V20.77c0-2.42-.78-3.396-2.888-3.396-1.132 0-2.304.585-3.047 1.445v10.228h-3.748v-14.68h2.967c.313 0 .547.274.547.548v.624c1.094-1.132 2.538-1.562 3.983-1.562 1.64 0 3.007.47 4.1 1.406 1.328 1.093 1.836 2.498 1.836 4.958zm-22.533-6.364c-2.576 0-3.787 1.562-3.787 1.562V7.301h-3.749v21.744h3.163a.559.559 0 00.547-.546v-.664s1.21 1.6 3.787 1.6c4.257 0 7.576-3.277 7.576-7.728.04-4.451-3.28-7.731-7.537-7.731zm-.625 11.907c-1.444 0-2.576-.741-3.162-1.6V19.05c.586-.78 1.835-1.6 3.162-1.6 2.5 0 4.413 1.561 4.413 4.216 0 2.654-1.913 4.216-4.413 4.216zM74.665 13.976c1.132 0 1.718.196 1.718.196v3.474s-3.124-1.055-5.076 1.171v10.267h-3.75V14.367h3.164c.312 0 .546.273.546.546v.625c.704-.82 2.227-1.562 3.398-1.562zM35.733 27.718c-.195-.468-.39-.976-.586-1.406-.313-.702-.625-1.366-.898-1.99l-.039-.04a406.921 406.921 0 00-8.63-17.644l-.117-.235c-.32-.608-.633-1.22-.937-1.835-.39-.703-.78-1.444-1.406-2.147C21.87.859 20.074 0 18.161 0c-1.953 0-3.71.86-4.998 2.342-.586.703-1.016 1.444-1.406 2.148a84.724 84.724 0 01-.936 1.835l-.118.234c-3.007 5.856-5.935 11.79-8.63 17.645l-.04.078c-.272.625-.585 1.289-.898 1.99-.195.43-.39.899-.585 1.406-.508 1.444-.664 2.81-.468 4.217a8.297 8.297 0 005.076 6.48c1.016.43 2.07.625 3.163.625.313 0 .703-.039 1.016-.078 1.288-.156 2.616-.585 3.905-1.327 1.6-.898 3.124-2.186 4.842-4.06 1.718 1.874 3.28 3.162 4.842 4.06 1.29.742 2.616 1.17 3.905 1.327.312.04.703.078 1.016.078 1.093 0 2.186-.195 3.162-.625 2.734-1.094 4.647-3.591 5.077-6.48.31-1.366.154-2.732-.353-4.177zm-17.611 2.03c-2.11-2.655-3.476-5.153-3.944-7.26-.195-.899-.235-1.68-.117-2.382a3.78 3.78 0 01.625-1.64c.742-1.054 1.991-1.718 3.436-1.718 1.445 0 2.734.625 3.437 1.718.312.468.547 1.015.625 1.64.117.703.078 1.522-.117 2.381-.47 2.069-1.837 4.568-3.945 7.26zm15.58 1.835a5.802 5.802 0 01-3.553 4.568c-.937.39-1.953.507-2.968.39-.976-.118-1.953-.43-2.967-1.015-1.406-.782-2.812-1.991-4.452-3.787 2.577-3.162 4.139-6.051 4.725-8.627a9.765 9.765 0 00.195-3.32 6.329 6.329 0 00-1.054-2.654c-1.212-1.757-3.242-2.771-5.507-2.771-2.264 0-4.295 1.054-5.505 2.771a6.335 6.335 0 00-1.055 2.655 8.107 8.107 0 00.195 3.319c.586 2.576 2.187 5.504 4.725 8.666-1.601 1.796-3.046 3.006-4.452 3.787-1.015.586-1.991.898-2.967 1.015a6.25 6.25 0 01-2.968-.39 5.802 5.802 0 01-3.553-4.568 6.457 6.457 0 01.351-3.045c.117-.39.313-.78.508-1.25.273-.624.585-1.288.898-1.951l.04-.078a425.627 425.627 0 018.59-17.528l.117-.235c.313-.585.625-1.21.937-1.795.313-.625.664-1.211 1.094-1.719.82-.936 1.913-1.444 3.124-1.444 1.21 0 2.304.508 3.124 1.444.43.51.78 1.095 1.093 1.719.313.585.626 1.21.937 1.795l.118.235a516.841 516.841 0 018.552 17.567v.039c.312.626.586 1.328.898 1.953.195.468.39.858.508 1.248.311 1.014.428 1.991.272 3.006z" />
                  </svg>
                </div>
                <div
                  className="
                flex
                items-center
                justify-center
                py-2
                col-span-2
                md:col-auto
              "
                >
                  <svg
                    className="max-w-full fill-current text-gray-400"
                    width={113}
                    height={30}
                    viewBox="0 0 113 30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 5h3.94v8.21h8.31V5h3.946v20.153H12.25V16.77H3.94v8.383H0V5zm28.678 13.589V9.912h3.736v8.677c0 3.62-3.14 6.564-7 6.564s-7-2.945-7-6.564V9.912h3.736v8.677c0 1.687 1.465 3.06 3.264 3.06 1.799 0 3.264-1.373 3.264-3.06zm14.167-8.575c4.185 0 7.784 3.28 7.784 7.57 0 4.344-3.903 7.569-8.357 7.569-4.006 0-7.573-3.168-7.573-7.794V5h3.75v6.669c1.249-1.15 2.542-1.655 4.396-1.655zm.093 11.886c2.152 0 4.096-1.99 4.096-4.317s-1.944-4.317-4.096-4.317c-2.54 0-4.483 1.99-4.483 4.317s1.943 4.317 4.483 4.317zm13.987-11c0 3.28 8.938.924 8.938 8.493 0 3.505-3.108 5.748-6.964 5.748-2.571 0-4.723-1.01-6.458-3l2.72-2.635c1.017 1.065 1.735 2.074 3.948 2.074 1.404 0 2.629-1.038 2.629-2.214 0-3.814-8.938-1.654-8.938-8.466 0-3.673 2.93-5.888 6.995-5.888 2.033 0 4.513 1.065 5.738 2.607l-2.45 2.691c-.956-.953-2.42-1.738-3.527-1.738-1.375 0-2.63.56-2.63 2.328zm18.808-1.084c4.453 0 8.357 3.224 8.357 7.57 0 4.289-3.6 7.569-7.785 7.569-1.854 0-3.147-.506-4.397-1.655V30H68.16V17.61c0-4.627 3.566-7.794 7.573-7.794zm.666 11.887c2.152 0 4.095-1.992 4.095-4.318 0-2.327-1.943-4.317-4.095-4.317-2.54 0-4.483 1.99-4.483 4.317 0 2.326 1.943 4.318 4.483 4.318zm35.285.197c.42 0 .898-.028 1.316-.055l-.927 3.196c-.359.083-1.017.112-1.496.112-3.197 0-5.527-1.599-5.527-4.767V7.995l3.795-1.598v4.066h3.437v3.083h-3.437v6.083c0 1.374.628 2.271 2.839 2.271zm-10.72-8.125c.702 1.097 1.036 2.295 1.036 3.593v.066c0 1.319-.415 2.518-1.17 3.604-.75 1.082-1.742 1.93-3.01 2.55a8.651 8.651 0 01-3.843.874h-.225c-1.228 0-2.35-.241-3.367-.637a8.644 8.644 0 01-1.439-.708l-3.238 2.913c.077.219.117.45.117.685a2.162 2.162 0 01-.743 1.615 2.674 2.674 0 01-1.797.67 2.672 2.672 0 01-1.796-.67c-.48-.431-.744-1.004-.744-1.615a2.16 2.16 0 01.743-1.615c.698-.631 1.741-.837 2.668-.527l3.133-2.824a6.582 6.582 0 01-1.223-1.91 6.758 6.758 0 01-.516-2.558v-.269c0-1.286.46-2.466 1.214-3.538a7.382 7.382 0 011.335-1.407L78.66 5.95l-.687-.469a3.53 3.53 0 01-1.686.431C74.47 5.912 73 4.588 73 2.956 73 1.323 74.47 0 76.285 0c1.816 0 3.286 1.323 3.286 2.956 0 .272-.06.53-.137.78 3.255 2.222 8.82 6.025 10.517 7.184a9.297 9.297 0 012.618-.738V6.669c-1.097-.42-1.738-1.346-1.738-2.428 0-1.474 1.337-2.668 2.976-2.668 1.637 0 2.952 1.194 2.952 2.668 0 1.082-.68 2.009-1.778 2.428v3.511a8.595 8.595 0 013.009.937c1.256.667 2.26 1.553 2.974 2.658zm-3.956 6.11c.765-.756 1.148-1.59 1.148-2.49 0-.136-.006-.277-.018-.415a3.896 3.896 0 00-.717-1.837 4.181 4.181 0 00-1.598-1.307c-.64-.295-1.318-.422-2.034-.422h-.074c-.79 0-1.5.193-2.163.587a4.23 4.23 0 00-1.562 1.537c-.352.586-.492 1.208-.492 1.863v.202c0 .666.246 1.295.698 1.87.438.587.974 1.05 1.678 1.375.624.295 1.262.457 1.915.457h.188c1.142 0 2.152-.541 3.031-1.42z" />
                  </svg>
                </div>
                <div
                  className="
                flex
                items-center
                justify-center
                py-2
                col-span-2
                md:col-auto
                col-start-2 col-end-4
              "
                >
                  <svg
                    className="max-w-full fill-current text-gray-400"
                    width={109}
                    height={33}
                    viewBox="0 0 109 33"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M67.43 25.591c-6.293 4.653-15.447 7.132-23.342 7.132-11.06 0-20.976-4.08-28.527-10.87-.572-.533-.077-1.258.648-.839 8.124 4.73 18.154 7.552 28.528 7.552 6.98 0 14.683-1.45 21.777-4.462 1.068-.42 1.945.724.915 1.487zm2.631-3.013c-.8-1.03-5.34-.496-7.36-.229-.611.077-.725-.457-.153-.839 3.623-2.555 9.534-1.792 10.22-.953.687.839-.19 6.789-3.584 9.61-.534.42-1.03.192-.801-.38.763-1.908 2.479-6.14 1.678-7.209zM62.815 3.585V1.106c0-.381.267-.61.61-.61h11.06c.343 0 .648.267.648.61v2.098c0 .343-.305.8-.839 1.563l-5.72 8.162c2.135-.038 4.386.267 6.293 1.335.419.229.533.61.572.953v2.632c0 .381-.382.8-.801.572-3.395-1.792-7.933-1.983-11.67.038-.382.19-.802-.19-.802-.572V15.37c0-.381 0-1.068.42-1.678l6.636-9.497h-5.759c-.343 0-.648-.267-.648-.61zm-40.313 15.37h-3.356c-.305-.038-.572-.267-.61-.572V1.144c0-.343.305-.61.648-.61h3.127c.343 0 .572.267.61.572v2.25h.077c.8-2.174 2.364-3.203 4.424-3.203 2.097 0 3.432 1.03 4.348 3.203.8-2.174 2.67-3.203 4.653-3.203 1.41 0 2.936.572 3.89 1.906 1.068 1.45.839 3.547.839 5.416v10.908c0 .343-.305.61-.649.61h-3.318c-.343-.038-.61-.305-.61-.61V9.23c0-.725.076-2.556-.076-3.242-.267-1.144-.992-1.488-1.983-1.488-.801 0-1.678.534-2.022 1.412-.343.877-.305 2.326-.305 3.318v9.153c0 .343-.305.61-.648.61h-3.356c-.344-.038-.61-.305-.61-.61V9.23c0-1.907.304-4.768-2.06-4.768-2.403 0-2.327 2.746-2.327 4.768v9.153c-.038.305-.305.572-.686.572zM84.668.153c4.996 0 7.704 4.271 7.704 9.725 0 5.263-2.975 9.458-7.704 9.458-4.882 0-7.551-4.271-7.551-9.61-.038-5.378 2.67-9.573 7.551-9.573zm0 3.546c-2.479 0-2.631 3.395-2.631 5.492 0 2.098-.039 6.598 2.593 6.598 2.593 0 2.746-3.623 2.746-5.835 0-1.449-.076-3.203-.496-4.576-.381-1.22-1.144-1.679-2.212-1.679zm14.15 15.256H95.46c-.343-.038-.61-.305-.61-.61V1.068A.66.66 0 0195.5.496h3.127c.305 0 .534.229.61.496v2.631h.077c.953-2.364 2.25-3.47 4.576-3.47 1.488 0 2.975.533 3.928 2.02.878 1.374.878 3.7.878 5.378v10.87c-.038.305-.305.534-.649.534h-3.356c-.305-.038-.572-.267-.61-.534V9.04c0-1.907.229-4.653-2.098-4.653-.8 0-1.563.534-1.945 1.373-.458 1.068-.534 2.098-.534 3.28v9.306a.698.698 0 01-.686.61zm-41.42-.038a.69.69 0 01-.8.076c-1.106-.915-1.335-1.373-1.945-2.25-1.83 1.869-3.166 2.44-5.53 2.44-2.822 0-5.035-1.754-5.035-5.224 0-2.746 1.488-4.577 3.586-5.492 1.83-.801 4.385-.954 6.33-1.182v-.42c0-.8.077-1.754-.419-2.44-.42-.611-1.182-.878-1.869-.878-1.296 0-2.44.648-2.708 2.021-.076.305-.267.61-.572.61l-3.241-.343c-.267-.076-.573-.267-.496-.686C45.46 1.182 49.009 0 52.212 0c1.64 0 3.776.42 5.073 1.678 1.64 1.526 1.487 3.585 1.487 5.797V12.7c0 1.564.648 2.25 1.259 3.128.228.305.266.686 0 .877-.725.572-1.946 1.64-2.632 2.212zm-44.088 0a.69.69 0 01-.8.076c-1.106-.915-1.335-1.373-1.946-2.25-1.83 1.869-3.165 2.44-5.53 2.44C2.212 19.184 0 17.43 0 13.96c0-2.746 1.487-4.577 3.585-5.492 1.83-.801 4.386-.954 6.331-1.182v-.42c0-.8.076-1.754-.42-2.44-.419-.611-1.182-.878-1.868-.878-1.297 0-2.441.648-2.708 2.021-.076.305-.267.61-.572.61l-3.242-.343C.839 5.76.534 5.568.61 5.15 1.373 1.182 4.92 0 8.124 0c1.64 0 3.775.42 5.072 1.678 1.64 1.526 1.487 3.585 1.487 5.797V12.7c0 1.564.649 2.25 1.259 3.128.229.305.267.686 0 .877-.725.572-1.945 1.64-2.632 2.212zm40.695-8.2v-.725c-2.441 0-4.997.534-4.997 3.395 0 1.449.763 2.44 2.06 2.44.953 0 1.792-.571 2.326-1.525.649-1.182.61-2.288.61-3.585zm-44.05 0v-.725c-2.442 0-4.997.534-4.997 3.395 0 1.449.763 2.44 2.06 2.44.953 0 1.792-.571 2.326-1.525.648-1.182.61-2.288.61-3.585z" />
                  </svg>
                </div>
              </div>
              <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
                <div
                  className="
                relative
                flex
                items-start
                border-2 border-gray-200
                rounded
                bg-white
              "
                >
                  <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                    <div
                      className="
                    absolute
                    top-0
                    -mt-8
                    left-1/2
                    transform
                    -translate-x-1/2
                  "
                    >
                      <svg
                        className="
                      absolute
                      top-0
                      right-0
                      -mt-3
                      -mr-8
                      w-16
                      h-16
                      fill-current
                      text-blue-500
                    "
                        viewBox="0 0 64 64"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                      </svg>
                      <img
                        className="relative rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&usqp=CAU"
                        width={96}
                        height={96}
                        alt="Testimonial 01"
                      />
                    </div>
                    <blockquote className="text-xl font-medium mb-4">
                      “ I love this product and would recommend it to anyone.
                      Could be not easier to use, and our multiple websites are
                      wonderful. We get nice comments all the time. “
                    </blockquote>
                    <cite className="block font-bold text-lg not-italic mb-1">
                      Darya Finger
                    </cite>
                    <div className="text-gray-600">
                      <span>CEO &amp; Co-Founder</span>
                      <a
                        className="text-blue-600 hover:underline ml-2"
                        href="#0"
                      >
                        @Freelancer
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <Timeline /> */}

        {/* News */}
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pb-12 md:pb-20">
              <div
                className="
              relative
              bg-gray-900
              rounded
              py-10
              px-8
              shadow-2xl
              flex
            "
              >
                <div
                  className="
                  lg:pl-[5%]
                  flex-1
                  basis-[60%]
                relative
                flex flex-col
                lg:flex-row
                justify-between
                items-center
              "
                >
                  <div className="text-center lg:text-left lg:max-w-xl">
                    <h3 className="text-lg md:text-xl font-[600] text-white mb-2 text-center md:text-left">
                      Engage now subscribe to newsletter.
                    </h3>
                    <p className="text-gray-300 text-md mb-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      nemo expedita voluptas culpa sapiente.
                    </p>
                    <form className="w-full lg:w-auto">
                      <div
                        className="
                      flex flex-col
                      items-center
                      sm:flex-row
                      justify-center
                      max-w-xs
                      mx-auto
                      sm:max-w-md
                      lg:mx-0
                    "
                      >
                        <input
                          type="email"
                          className="
                        form-input
                        w-full
                        appearance-none
                        bg-gray-800
                        border border-gray-700
                        focus:border-gray-600
                        rounded-sm
                        px-4
                        py-3
                        mb-2
                        h-[50px]
                        sm:mb-0 sm:mr-2
                        text-white
                        placeholder-gray-500
                        outline-indigo-500
                        focus:border-none
                      "
                          placeholder="Your email…"
                          aria-label="Your email…"
                        />
                        <a
                          className="
                        btn
                        text-white
                        bg-blue-600
                        hover:bg-blue-700
                        shadow
                        py-3
                        px-5
                        my-3
                        mr-auto
                        w-full
                        lg:w-auto
                      "
                          href="#0"
                        >
                          Subscribe
                        </a>
                      </div>
                      <p className="text-sm text-gray-400 mt-3">
                        Thanks for subscribing!
                      </p>
                      <p className="text-sm text-gray-400 mt-3">
                        7 days free trial. No credit card required.
                      </p>
                    </form>
                  </div>
                </div>
                <div
                  className="hidden lg:block rounded-2xl overflow-hidden w-full
                  basis-[40%]
                  "
                >
                  <img
                    src="https://ph-files.imgix.net/1b43a57b-3ec1-4b85-9da3-9cd9cdb8f652.png?auto=format&fit=crop"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
