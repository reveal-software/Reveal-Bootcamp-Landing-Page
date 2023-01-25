import { useAmp } from "next/amp";
import Head from "next/head";
import Image from "next/image";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { Listbox } from "@headlessui/react";
import Timeline from "../component/Timeline";
import { useAppState } from "../store/useAppState";
import CountSection from "../component/CountSection";
import { useState } from "react";

export default function Home() {
  const people = [
    { id: 1, name: "Durward Reynolds", unavailable: false },
    { id: 2, name: "Kenton Towne", unavailable: false },
    { id: 3, name: "Therese Wunsch", unavailable: false },
    { id: 4, name: "Benedict Kessler", unavailable: true },
    { id: 5, name: "Katelyn Rohan", unavailable: false }
  ];

  const { theme } = useAppState();
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <div>
      <Head>
        <title>Reveal</title>
        <meta name="description" content="Generated by Reveal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header />

        {/* Hero */}
        <section className="-mt-[100px] relative min-h-[calc(110vh)] lg:min-h-[calc(110vh+100px)] flex flex-col bg-[#F5F147]">
          <div className="pt-[15vh] lg:pt-[20vh]">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="text-center pb-12 md:pb-16">
                <h2
                  className="text-3xl
                md:text-5xl font-[900] mt-5 block"
                >
                  Register for the Program!
                </h2>
                <div className="max-w-3xl mx-auto">
                  <p
                    className="medium-font text-gray-600 mb-8"
                    data-aos="zoom-y-out"
                    data-aos-delay={150}
                  >
                    {"Learn in-demand skills. change your life."}
                  </p>
                </div>

                <div className="flex justify-center w-full">
                  <div className="mx-[5%] max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2">
                    <div className="w-full lg:border-r-2 lg:border-dashed lg:pr-10 border-black">
                      <div className=" max-w-xl mx-auto flex">
                        <form className="w-full space-y-3">
                          <input
                            type="text"
                            id="first_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Full Name"
                            required
                          />
                          <input
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Email"
                            required
                          />
                          <input
                            type="text"
                            id="phone_number"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            pattern="[0{1}[9]{1}[0-9]{8}"
                            placeholder="Mobile ( 09 _ _ _ ) "
                            required
                          />

                          <select
                            required
                            id="countries"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option selected>
                              FullStack Development (Full Time)
                            </option>
                            <option selected>
                              FullStack Development (Part Time)
                            </option>
                            <option value="US">
                              UI/ UX Development (Full Time)
                            </option>
                            <option value="US">
                              UI/ UX Development (Part Time)
                            </option>
                            <option value="CA">
                              SEO Optimization (Full Time)
                            </option>
                            <option value="CA">
                              SEO Optimization (Part Time)
                            </option>
                          </select>

                          <div className="text-left border-2 rounded-lg border-black p-4 my-12 mt-16">
                            <h4 className="small-font mb-3 font-[700]">
                              Select Bank
                            </h4>
                            <select
                              required
                              id="countries"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                              <option selected>Abyssinia / አቢሲኒያ ባንክ </option>
                              <option value="Awash">
                                Awash Bank / አዋሽ ባንክ
                              </option>
                              <option value="Dashen">
                                Dashen Bank / ዳሽን ባንክ
                              </option>
                              <option value="Hibret">
                                Hibret Bank / ሕብረት ባንክ
                              </option>
                              <option value="Zemen">
                                Zemen Bank / ዘመን ባንክ
                              </option>
                              <option value="Telebirr">Telebirr / ቴሌብር</option>
                            </select>
                          </div>

                          <button
                            type="submit"
                            className="bg-black text-white w-full p-3.5 rounded-lg mt-10 block"
                          >
                            Register
                          </button>
                        </form>
                      </div>
                    </div>

                    <div className="lg:pl-10 text-left mt-20 lg:mt-0">
                      <h4 className="medium-font md:text-3xl font-[700]">
                        Your Order Summary
                      </h4>
                      <p className="small-font">
                        The details of the order are below:
                      </p>

                      <div className="mt-12">
                        <p className="small-font text-left">
                          <span className="font-[600] mr-2">Domain :</span>
                          fdsafdsa.org
                        </p>
                        <p className="small-font text-left">
                          <span className="font-[600] mr-2">
                            Total Credit Hours :
                          </span>
                          30hrs
                        </p>
                        <p className="small-font text-left">
                          <span className="font-[600] mr-2">Package :</span>{" "}
                          PREMIUM Hosting
                        </p>
                      </div>

                      <div className="mt-1 mb-5 border-b border-black border-dashed pb-5">
                        <p className="small-font text-left">
                          <span className="font-[600] mr-2">Amount :</span>{" "}
                          6,500 Birr
                        </p>
                      </div>

                      <p className="small-font text-left">
                        Our Bank account Will be emailed to you once you place
                        the order. You will be able to make the payment using
                        Mobile/Internet banking or Bank account Transfer .
                      </p>
                    </div>
                  </div>
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
