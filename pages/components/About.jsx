import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="">
        <h2 className="text-secondary font-bold text-3xl mb-12 font-lexend text-center ">
          Why eXStore
        </h2>
      </div>
      <div className="mb-20">
        <p className="text-secondary font-medium font-lexend text-center">
          We are the official Xbox partner in Turkey that provides official
          video games.
        </p>
      </div>

      <div className="flex md:flex-row flex-col justify-center gap-24 md:item-center items-center text-center font-lexend font-medium">
        <div className="">
          <Image
            src="/images/mi-1.svg"
            alt="banner image"
            width="72"
            height="72"
            crossOrigin="true"
            className="ml-10 mb-3"
          />
          <p className="w-[158px] text-center">5000+ video games available</p>
        </div>
        <div className="content-center">
          <Image
            src="/images/mi-2.svg"
            alt="banner image"
            width="72"
            height="72"
            crossOrigin="true"
            className="ml-[50px] mb-3"
          />
          <p className="w-[178px] text-center">Trusted by 100.000+ customers</p>
        </div>
        <div className="flex-col">
          <Image
            src="/images/mi-3.svg"
            alt="banner image"
            width="72"
            height="72"
            crossOrigin="true"
            className="ml-[50px] mb-3"
          />
          <p className="w-[178px] text-center">
            Available for all Xbox consoles
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
