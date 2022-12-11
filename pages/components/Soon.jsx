import React from 'react';
import Image from 'next/image';

const Soon = () => {
  return (
    <div id="soon" className="w-full md:h-[746px] h-[1380px] bg-black ">
      <div className="container mx-auto ">
        <h1 className="text-3xl text-white font-lexend font-semibold pt-7 ml-[120px] ">
          Coming Soon
        </h1>

        <div className="grid md:grid-cols-2 grid-cols-1  md:ml-10 md:px-9 ml-0 ">
          <div className="text-white mt-5 sm:ml-12 relative">
            <Image
              src="/images/s1.svg"
              width="475"
              height="312"
              alt=""
              className="mb-7 "
            />
            <Image
              alt=""
              src="/images/cod.svg"
              width="280"
              height="72"
              className="absolute md:top-36 top-24 left-3"
            />
            <button className="absolute  left-3 lg:top-[240px] top-[180px] border-2 rounded-md px-2 py-1  hover:scale-105 font-lexend">
              Pre-order now!
            </button>
            <Image src="/images/s2.svg" width="475" height="312" alt="" />
            <p className="absolute lg:top-[510px] md:top[20px] top-[390px] left-3 w-[270px] text-2xl font-lexend font-semibold">
              NBA 2K23
            </p>
            <button className="absolute left-3 md:top-[570px] top-[445px] border-2 rounded-md px-2 py-1  hover:scale-105 font-lexend">
              Pre-order now!
            </button>
          </div>
          <div className="text-white mt-5 relative ml-5 sm:ml-28">
            <Image
              src="/images/s3.svg"
              width="330"
              height="194"
              alt=""
              className="mb-6"
            />
            <Image
              alt=""
              src="/images/fifa23.svg"
              width="120"
              height="72"
              className="absolute top-20 left-3"
            />
            <button className="absolute left-3 top-[150px] border-2 rounded-md px-2 py-1 text-sm hover:scale-105 font-lexend">
              Pre-order now!
            </button>
            <Image
              src="/images/s4.svg"
              width="330"
              height="194"
              alt=""
              className="mb-6"
            />
            <Image
              alt=""
              src="/images/res.svg"
              width="150"
              height="72"
              className="absolute top-[290px] left-3"
            />
            <button className="absolute left-3 top-[365px] border-2 rounded-md px-2 py-1 text-sm hover:scale-105 font-lexend">
              Pre-order now!
            </button>
            <Image src="/images/s5.svg" width="330" height="0" alt="" />
            <Image
              alt=""
              src="/images/ali.svg"
              width="120"
              height="72"
              className="absolute top-[515px] left-3"
            />
            <button className="absolute left-3 top-[580px] border-2 rounded-md px-2 py-1 text-sm hover:scale-105 font-lexend">
              Pre-order now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soon;
