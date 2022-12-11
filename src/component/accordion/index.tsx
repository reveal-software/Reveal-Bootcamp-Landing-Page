import { Disclosure } from "@headlessui/react";

export default function Accordion() {
  return (
    <div className="mt-[160px] w-full px-4 py-16  grid grid-col-1 lg:grid-cols-2">
      <div className="w-full max-w-xl p-2 mx-auto bg-white rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full p-5 xl:p-8 text-sm md:text-lg lg:text-xl xl:text-2xl font-[800] text-left text-black bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
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
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm lg:text-lg xl:text-xl text-gray-500">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full p-5 xl:p-8 text-sm md:text-lg lg:text-xl xl:text-2xl font-[800] text-left text-black bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Do you offer technical support?</span>
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
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm lg:text-lg xl:text-xl text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full p-5 xl:p-8 text-sm md:text-lg lg:text-xl xl:text-2xl font-[800] text-left text-black bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Do you have ticket support?</span>
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
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm lg:text-lg xl:text-xl text-gray-500">
                Yes
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      <div className="">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-[800]">
          Lorem, ipsum dolor.
        </h1>
        <p className="mt-4 text-lg lg:text-xl xl:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
          perferendis odio doloremque molestiae voluptatibus dolorem deserunt
          exercitationem sit sint consectetur id, libero optio ab dignissimos
          rerum distinctio laborum. Eum, ex.
        </p>
        <p className="mt-4 text-lg lg:text-xl xl:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
          perferendis odio doloremque molestiae voluptatibus dolorem deserunt
          exercitationem sit sint Eum, ex.
        </p>
      </div>
    </div>
  );
}
