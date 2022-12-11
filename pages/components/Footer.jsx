import React from 'react';
import Image from 'next/image';
const Footer = () => {
  return (
    <div className="md:h-[300px] h-[450px] w-full bg-black">
      <div className="container mx-auto mt-40">
        <div className="grid md:grid-cols-4 grid-cols-2  sm:ml-24 ml-0 pt-16 pb-10">
          <div className="md:order-1 order-4">
            <Image
              src="/images/logo.svg"
              alt="webapp logo"
              width="126"
              height="96"
              className="hover:cursor-pointer"
            />
          </div>
          <div className="md:order-2">
            <p className="font-lexend text-white text-md mb-5">Menu</p>
            <ul>
              <li>
                <p className="text-footer font-lexend text-sm mb-3 hover:cursor-pointer hover:text-white">
                  Order tracking
                </p>
                <p className="text-footer font-lexend text-sm mb-3 hover:cursor-pointer hover:text-white">
                  Store location
                </p>
                <p className="text-footer font-lexend text-sm mb-3 hover:cursor-pointer hover:text-white">
                  Return policy
                </p>
                <p className="text-footer font-lexend text-sm hover:cursor-pointer hover:text-white md:mb-0 mb-7 ">
                  Support
                </p>
              </li>
            </ul>
          </div>
          <div className="md:order-3">
            <p className="font-lexend text-white text-md mb-5">Resources</p>
            <ul>
              <li>
                <p className="text-footer font-lexend text-sm mb-3  hover:cursor-pointer hover:text-white">
                  Blog
                </p>
                <p className="text-footer font-lexend text-sm mb-3 hover:cursor-pointer hover:text-white">
                  Help Center
                </p>
                <p className="text-footer font-lexend text-sm mb-3 hover:cursor-pointer hover:text-white">
                  Documentation
                </p>
                <p className="text-footer font-lexend text-sm hover:cursor-pointer hover:text-white">
                  Guidelines
                </p>
              </li>
            </ul>
          </div>
          <div className="md:order-4">
            <p className="font-lexend text-white text-md mb-5 ">
              Follow us on:
            </p>
            <button>
              <Image
                src="/images/social1.svg"
                width="32"
                height="30"
                className="mr-2"
              />
            </button>
            <button>
              <Image
                src="/images/social2.svg"
                width="32"
                height="30"
                className="mr-2"
              />
            </button>
            <button>
              <Image
                src="/images/social3.svg"
                width="32"
                height="30"
                className="mr-2"
              />
            </button>
            <button>
              <Image src="/images/social4.svg" width="32" height="30" />
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <hr />
        <p className="text-white font-lexend text-xs text-center pt-2">
          © 2022 Exstore. Designed by Webeestech
        </p>
      </div>
    </div>
  );
};

export default Footer;
