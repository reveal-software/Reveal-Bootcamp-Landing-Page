import { useAmp } from "next/amp";
import Head from "next/head";
import Image from "next/image";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Timeline from "../component/Timeline";
import { useAppState } from "../store/useAppState";
import CountSection from "../component/CountSection";
import MotionView from "../component/animation/MotionView";
import MotionViewHorizontal from "../component/animation/MotionViewHorizontal";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";

export default function FullStackDevelopment() {
  const { theme } = useAppState();

  const courseOutline = [
    {
      title: "Phase 0: Introduction (1 week)",
      content: (
        <div className="mt-5 my-10">
          <div className="max-w-4xl mx-auto ml-[5%] my-5">
            <h1 className="medium-font font-[700] mb-3">Introduction</h1>
            <ul className="list-disc text-[0.9rem] ml-[10%]">
              <li>Introduction to Canvas Course Structure</li>
              <li>Setting Up Your Figma Account & Walkthrough</li>
              <li>Design and Prototyping with Figma</li>
              <li>Setting Up Your Invision Account & Walkthrough</li>
              <li>Set Up Your Webflow Account and Webflow 101</li>
            </ul>
          </div>
          <div className="max-w-4xl mx-auto ml-[5%]">
            <h1 className="medium-font font-[700] mb-3">Introduction</h1>
            <ul className="list-disc text-[0.9rem] ml-[10%]">
              <li>Introduction to Canvas Course Structure</li>
              <li>Setting Up Your Figma Account & Walkthrough</li>
              <li>Design and Prototyping with Figma</li>
              <li>Setting Up Your Invision Account & Walkthrough</li>
              <li>Set Up Your Webflow Account and Webflow 101</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Phase 1: UX Process (1 week)",
      content: (
        <div className="mt-5 my-10">
          <div className="max-w-4xl mx-auto ml-[5%] my-5">
            <h1 className="medium-font font-[700] mb-3">Introduction</h1>
            <ul className="list-disc text-[0.9rem] ml-[10%]">
              <li>Introduction to Canvas Course Structure</li>
              <li>Setting Up Your Figma Account & Walkthrough</li>
              <li>Design and Prototyping with Figma</li>
              <li>Setting Up Your Invision Account & Walkthrough</li>
              <li>Set Up Your Webflow Account and Webflow 101</li>
            </ul>
          </div>
          <div className="max-w-4xl mx-auto ml-[5%]">
            <h1 className="medium-font font-[700] mb-3">Introduction</h1>
            <ul className="list-disc text-[0.9rem] ml-[10%]">
              <li>Introduction to Canvas Course Structure</li>
              <li>Setting Up Your Figma Account & Walkthrough</li>
              <li>Design and Prototyping with Figma</li>
              <li>Setting Up Your Invision Account & Walkthrough</li>
              <li>Set Up Your Webflow Account and Webflow 101</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Phase 2: UI Design (1 week)",
      content: (
        <div className="mt-5 my-10">
          <div className="max-w-4xl mx-auto ml-[5%] my-5">
            <h1 className="medium-font font-[700] mb-3">Introduction</h1>
            <ul className="list-disc text-[0.9rem] ml-[10%]">
              <li>Introduction to Canvas Course Structure</li>
              <li>Setting Up Your Figma Account & Walkthrough</li>
              <li>Design and Prototyping with Figma</li>
              <li>Setting Up Your Invision Account & Walkthrough</li>
              <li>Set Up Your Webflow Account and Webflow 101</li>
            </ul>
          </div>
          <div className="max-w-4xl mx-auto ml-[5%]">
            <h1 className="medium-font font-[700] mb-3">Introduction</h1>
            <ul className="list-disc text-[0.9rem] ml-[10%]">
              <li>Introduction to Canvas Course Structure</li>
              <li>Setting Up Your Figma Account & Walkthrough</li>
              <li>Design and Prototyping with Figma</li>
              <li>Setting Up Your Invision Account & Walkthrough</li>
              <li>Set Up Your Webflow Account and Webflow 101</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Phase 3: Studio (1 week)",
      content: (
        <div className="mt-5 my-10">
          <div className="max-w-4xl mx-auto ml-[5%] my-5">
            <h1 className="medium-font font-[700] mb-3">Introduction</h1>
            <ul className="list-disc text-[0.9rem] ml-[10%]">
              <li>Introduction to Canvas Course Structure</li>
              <li>Setting Up Your Figma Account & Walkthrough</li>
              <li>Design and Prototyping with Figma</li>
              <li>Setting Up Your Invision Account & Walkthrough</li>
              <li>Set Up Your Webflow Account and Webflow 101</li>
            </ul>
          </div>
          <div className="max-w-4xl mx-auto ml-[5%]">
            <h1 className="medium-font font-[700] mb-3">Introduction</h1>
            <ul className="list-disc text-[0.9rem] ml-[10%]">
              <li>Introduction to Canvas Course Structure</li>
              <li>Setting Up Your Figma Account & Walkthrough</li>
              <li>Design and Prototyping with Figma</li>
              <li>Setting Up Your Invision Account & Walkthrough</li>
              <li>Set Up Your Webflow Account and Webflow 101</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Phase 4: Studio 2 (1 week)",
      content: (
        <div className="mt-5 my-10">
          <div className="max-w-4xl mx-auto ml-[5%] my-5">
            <h1 className="medium-font font-[700] mb-3">Introduction</h1>
            <ul className="list-disc text-[0.9rem] ml-[10%]">
              <li>Introduction to Canvas Course Structure</li>
              <li>Setting Up Your Figma Account & Walkthrough</li>
              <li>Design and Prototyping with Figma</li>
              <li>Setting Up Your Invision Account & Walkthrough</li>
              <li>Set Up Your Webflow Account and Webflow 101</li>
            </ul>
          </div>
          <div className="max-w-4xl mx-auto ml-[5%]">
            <h1 className="medium-font font-[700] mb-3">Introduction</h1>
            <ul className="list-disc text-[0.9rem] ml-[10%]">
              <li>Introduction to Canvas Course Structure</li>
              <li>Setting Up Your Figma Account & Walkthrough</li>
              <li>Design and Prototyping with Figma</li>
              <li>Setting Up Your Invision Account & Walkthrough</li>
              <li>Set Up Your Webflow Account and Webflow 101</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Phase 5: Portfolio (1 week)",
      content: (
        <div className="mt-5 my-10">
          <div className="max-w-4xl mx-auto ml-[5%] my-5">
            <h1 className="medium-font font-[700] mb-3">Introduction</h1>
            <ul className="list-disc text-[0.9rem] ml-[10%]">
              <li>Introduction to Canvas Course Structure</li>
              <li>Setting Up Your Figma Account & Walkthrough</li>
              <li>Design and Prototyping with Figma</li>
              <li>Setting Up Your Invision Account & Walkthrough</li>
              <li>Set Up Your Webflow Account and Webflow 101</li>
            </ul>
          </div>
          <div className="max-w-4xl mx-auto ml-[5%]">
            <h1 className="medium-font font-[700] mb-3">Introduction</h1>
            <ul className="list-disc text-[0.9rem] ml-[10%]">
              <li>Introduction to Canvas Course Structure</li>
              <li>Setting Up Your Figma Account & Walkthrough</li>
              <li>Design and Prototyping with Figma</li>
              <li>Setting Up Your Invision Account & Walkthrough</li>
              <li>Set Up Your Webflow Account and Webflow 101</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="light bg-white text-black">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header />

        {/* Hero */}
        <section className="px-[5%] md:px-[10%] lg:px-[10%] -mt-[100px] relative min-h-[calc(60vh)] lg:h-[calc(70vh+100px)] flex flex-col bg-[#F5F147]">
          <MotionView down>
            <div className="pt-[15vh] lg:pt-[20vh] max-w-8xl mx-auto relative">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                <div className="text-left pb-12 md:pb-16">
                  <h1
                    className="
                    large-font
                font-extrabold
                leading-tighter
                tracking-tighter
                mb-4
                z-[99]
                text-black
              "
                    style={{
                      fontFamily: "League Spartan !important"
                    }}
                  >
                    Become Fullstack Software Developer.
                    <br />
                    in 8 months or less.
                  </h1>
                  <div className="max-w-3xl">
                    <p
                      className="medium-font leading-6 xl:mt-10 text-black mb-8"
                      data-aos="zoom-y-out"
                      data-aos-delay={150}
                    >
                      {"Learn in-demand skills. change your life."}
                    </p>
                  </div>
                  <div className="cursor-pointer border-2 border-black w-[140px] md:w-[170px] text-center py-3 md:py-4 rounded-full hover:bg-black hover:text-white transition-all duration-300">
                    Apply Today
                  </div>
                </div>
              </div>
            </div>
          </MotionView>
        </section>

        {/* Container */}
        <div className="container mt-5 lg:mt-[100px]  max-w-8xl">
          {/* Section */}
          <section className=" rounded-3xl min-h-[400px] flex flex-col lg:flex-row items-start justify-evenly">
            <MotionViewHorizontal>
              <div className="text-left lg:max-w-[70%] xl:max-w-[90%] mb-16">
                <h2
                  className="medium-large-font font-[800] my-0 tracking-tight mb-5 mt-[50px] md:mt-0"
                  style={{
                    fontFamily: "League Spartan !important"
                  }}
                >
                  Course Details
                </h2>
                <p
                  className="medium-font font-[500] text-gray-900"
                  style={{
                    fontFamily: "League Spartan !important"
                  }}
                >
                  Find out the pacing options available, the price, and more
                  information about this course.
                </p>

                <div className="mt-12 md:mt-16 lg:-ml-5">
                  <a
                    className="
                    border-2
                    hover:bg-black
                    hover:text-white
                    transition-all
                    duration-300
                    border-black
                    hover:border-black
                      sm:w-auto sm:ml-4
                      px-8
                      py-4
                      xl:px-12
                      xl:py-5
                      xl:text-xl
                      font-[600]
                      items-center
                      rounded-full
                      cursor-pointer
                      text-center
                    "
                    style={{
                      fontFamily: "League Spartan !important"
                    }}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </MotionViewHorizontal>
            <div className="w-[100%] lg:w-[50%] xl:w-[120%]">
              <MotionView none>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="my-2 md:my-4 lg:my-6">
                    <h1 className="font-[700] text-lg">
                      Curriculum Developed by:
                    </h1>
                    <p>Flatiron School</p>
                  </div>
                  <div className="my-2 md:my-4 lg:my-6">
                    <h1 className="font-[700] text-lg">Course Duration:</h1>
                    <p>16 Weeks</p>
                  </div>
                  <div className="my-2 md:my-4 lg:my-6">
                    <h1 className="font-[700] text-lg">Mode of Learning:</h1>
                    <p>Online</p>
                  </div>
                  <div className="my-2 md:my-4 lg:my-6">
                    <h1 className="font-[700] text-lg">Course Pricing:</h1>
                    <p>Ksh 150, 000 (USD 1500)</p>
                  </div>
                </div>
              </MotionView>
            </div>
          </section>

          <section className="mt-[50px] md:mt-[20px]">
            <h2
              className="medium-large-font font-[800] my-0 tracking-tight mb-5 text-center mb-10"
              style={{
                fontFamily: "League Spartan !important"
              }}
            >
              Course Modules
            </h2>

            <section className="mx-[2%] md:mx-[10%] lg:mx-[20%]">
              {courseOutline.map((course) => (
                <Disclosure key={course.title}>
                  {({ open }) => (
                    <div className="my-7 shadow-md rounded-xl overflow-hidden">
                      <Disclosure.Button className="flex justify-between w-full p-5 xl:p-8 text-sm md:text-lg lg:text-xl xl:text-2xl font-[800] text-left text-black bg-gray-50 rounded-t-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>{course.title}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-black`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm lg:text-lg xl:text-xl text-gray-900">
                        {course.content}
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              ))}
            </section>
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
          <div className="mx-auto mb-0 cursor-pointer border-2 border-black w-[170px] text-center py-4 rounded-full hover:bg-black hover:text-white transition-all duration-300">
            Apply Today
          </div>

          {/* Testimonial */}
          <section className="relative mb-20">
            <div
              className="
          absolute
          left-1/2
          transform
          -translate-x-1/2
          bottom-0
          pointer-events-none
          md:-mb-32
          mb-10
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
          </section>

          {/* <Timeline /> */}

          {/* News */}
          {/* <section>
            <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6">
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
                      <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-[600] text-white mb-2 text-center md:text-left">
                        Engage now subscribe to newsletter.
                      </h3>
                      <p className="text-gray-300 text-md lg:text-lg xl:text-xl mb-6">
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
                        xl:px-7
                        xl:py-4
                        mb-2
                        text-xl
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
          </section> */}

          {/* Footer */}
        </div>
        <Footer />
      </div>
    </div>
  );
}
