import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="font-lexend h-screen w-full container mx-auto ">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image src="/images/hero.svg" alt="" layout="fill" objectFit="cover" />
      </div>
      <div className="container mx-auto flex flex-col justify-start absolute text-white mt-36">
        <h1 className="pb-5 text-[36px] font-bold">MultiVersus</h1>
        <p className="pb-5 text-[20px] font-sm">
          This website was built by webeestech. For fiverr projects.
        </p>
        <p className="sm:text-[16px] text-[12px] sm:w-[430px] sm:[220px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
          perferendis harum sit eligendi necessitatibus quae dolorum sunt
          quaerat provident eveniet error dolores nemo laborum placeat, facilis
          rem! Omnis, rem facere.
        </p>
        <button className=" mt-[282px] text-white left-0 absolute bg-primary rounded-md py-3 px-5 hover:text-primary hover:bg-white">
          Get in Now!
        </button>
      </div>
    </div>
  );
};

export default Header;
