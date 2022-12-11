import React from 'react';
import Image from 'next/image';

const Comment = () => {
  return (
    <div className="container mx-auto">
      <div className="py-14">
        <p className="text-center text-secondary font-bold font-lexend text-3xl">
          12.000+ gamers satisfied
        </p>
        <p className="text-center text-secondary font-normal font-lexend text-sm mt-6">
          Let`s hear what our customers have to say about their satisfaction
          with our services and products.
        </p>
      </div>
      <div className="md:flex sm:justify-center lg:flex-row flex-col justify-center items-center gap-8">
        <div className="w-[297px] h-[297px] md:0 ml-11 bg-white rounded-2xl flex flex-col  items-center">
          <Image
            src="/images/c1.svg"
            width="90"
            height="90"
            alt=""
            className="mt-6"
          />
          <Image
            src="/images/star1.svg"
            width="108"
            height="23"
            alt=""
            className="mt-4"
          />
          <p className="font-lexend text-md mt-2 w-[212px] text-center font-semibold">
            Jacob Jones
          </p>
          <p className="font-lexend text-sm mt-2 w-[212px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel leo
            vitae ipsum vestibulum porta.
          </p>
        </div>
        <div className="w-[338px] h-[333px] md:0 ml-6 md:mt-0 mt-5 rounded-2xl bg-white flex flex-col items-center">
          <Image
            src="/images/c2.svg"
            width="90"
            height="90"
            alt=""
            className="mt-6"
          />
          <Image
            src="/images/star2.svg"
            width="108"
            height="23"
            alt=""
            className="mt-4"
          />
          <p className="font-lexend text-md mt-2 w-[212px] text-center font-semibold">
            Cameron Willimson
          </p>
          <p className="font-lexend text-sm mt-2 w-[262px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel leo
            vitae ipsum vestibulum porta.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed vel leo vitae ipsum vestibulum porta.
          </p>
        </div>
        <div className="w-[297px] h-[297px]  md:mt-0 mt-5  md:0 ml-11 bg-white rounded-2xl flex flex-col  items-center">
          <Image
            src="/images/c3.svg"
            width="90"
            height="90"
            alt=""
            className="mt-6"
          />
          <Image
            src="/images/star1.svg"
            width="108"
            height="23"
            alt=""
            className="mt-4"
          />
          <p className="font-lexend text-md mt-2 w-[212px] text-center font-semibold">
            Kristin Watson
          </p>
          <p className="font-lexend text-sm mt-2 w-[212px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel leo
            vitae ipsum vestibulum porta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
