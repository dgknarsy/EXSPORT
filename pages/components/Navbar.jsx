import React from 'react';
import Image from 'next/image';
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuModal, setIsMenuModal] = useState(false);
  return (
    <div className="container mx-auto w-full py-7 flex justify-between items-center font-lexend relative z-50 h-full">
      <div className="">
        <Image
          src="/images/logo.png"
          alt="webapp logo"
          width="96"
          height="96"
          className="hover:cursor-pointer"
        />
      </div>
      <div className="">
        <nav
          className={`sm:w-auto sm:h-auto w-full h-screen sm:bg-transparent  bg-white sm:static absolute top-0 text-xl sm:text-base  left-0 sm:flex hidden ${
            isMenuModal === true && '!grid justify-items-center items-center'
          } `}
        >
          <ul className="flex sm:flex-row flex-col  sm:text-white text-black">
            <li className="cursor-pointer  font-normal px-5 hover:text-primary sm:mb-0 mb-11 text-center">
              <a href="#games">Games</a>
            </li>
            <li className="cursor-pointer  font-normal px-5 hover:text-primary sm:mb-0 mb-11 text-center">
              <a>Browse Games</a>
            </li>
            <li className="cursor-pointer  font-normal px-5 hover:text-primary text-center">
              <a href="#soon">Store</a>
            </li>
            {isMenuModal && (
              <button
                onClick={() => setIsMenuModal(false)}
                className="absolute top-4 right-4 z-50 text-primary"
              >
                <GiCancel size={25} />
              </button>
            )}
          </ul>
        </nav>
      </div>

      <div>
        <button className="sm:hidden inline-block pr-10">
          <GiHamburgerMenu
            className="text-xl hover:text-primary text-white transition-all"
            onClick={() => setIsMenuModal(true)}
          />
        </button>
        <button className="w-50 sm:grid hidden bg-transparent border-2 hover:border-primary hover:bg-primary text-white rounded-md py-2 px-4 font-normal">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
