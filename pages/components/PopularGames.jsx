import React from 'react';
import Image from 'next/image';

const PopularGames = () => {
  return (
    <div className="container mx-auto md:flex flex-col hidden">
      <h2 className="text-secondary text-3xl font-bold font-lexend mb-7  ">
        Popular Games
      </h2>
      <div>
        <div className="grid md:grid-cols-4 !grid-cols-2 ">
          <div className="w-[262px] h-[340px] bg-white flex flex-col items-center mb-16 rounded-xl">
            <Image
              src="/images/p1.svg"
              alt=""
              width="230"
              height="220"
              className="mt-5 hover:scale-110 cursor-pointer"
            />
            <p className="text-secondary mt-4 font-lexend font-semibold text-lg text-left hover:cursor-pointer">
              Minecraft
            </p>
            <p className="text-sm text-primary mt-2 font-lexend">Rp 260.000</p>
          </div>
          <div className="w-[262px] h-[340px] bg-white flex flex-col items-center mb-16 rounded-xl">
            <Image
              src="/images/p2.svg"
              alt=""
              width="230"
              height="220"
              className="mt-5 hover:scale-110 cursor-pointer"
            />
            <p className="text-secondary mt-4 font-lexend  font-semibold text-lg text-left hover:cursor-pointer">
              Asphalt 9: Legends
            </p>
            <button className="bg-btn rounded-md mt-2">
              <p className="text-sm font-medium text-primary font-lexend py-1 px-2">
                Free Download
              </p>
            </button>
          </div>
          <div className="w-[262px] h-[340px] bg-white flex flex-col items-center mb-16 rounded-xl">
            <Image
              src="/images/p3.svg"
              alt=""
              width="230"
              height="220"
              className="mt-5 hover:scale-110 cursor-pointer"
            />
            <p className="text-secondary mt-4 font-lexend  font-semibold text-lg text-left hover:cursor-pointer">
              The Witcher 3
            </p>
            <p className="text-sm text-primary mt-2 font-lexend">Rp 460.000</p>
          </div>
          <div className="w-[262px] h-[340px] bg-white flex flex-col items-center mb-16 rounded-xl">
            <Image
              src="/images/p4.svg"
              alt=""
              width="230"
              height="220"
              className="mt-5 hover:scale-110 cursor-pointer"
            />
            <p className="text-secondary mt-4 font-lexend  font-semibold text-lg text-left hover:cursor-pointer">
              Surviving Mars
            </p>
            <p className="text-sm text-primary mt-2 font-lexend">Rp 420.000</p>
          </div>
          <div className="w-[262px] h-[340px] bg-white flex flex-col items-center mb-16 rounded-xl">
            <Image
              src="/images/p5.svg"
              alt=""
              width="230"
              height="220"
              className="mt-5 hover:scale-110 cursor-pointer"
            />
            <p className="text-secondary mt-4 font-lexend  font-semibold text-lg text-left hover:cursor-pointer">
              Minecraft
            </p>
            <p className="text-sm text-primary mt-2 font-lexend">Rp 260.000</p>
          </div>
          <div className="w-[262px] h-[340px] bg-white flex flex-col items-center mb-16 rounded-xl">
            <Image
              src="/images/p6.svg"
              alt=""
              width="230"
              height="220"
              className="mt-5 hover:scale-110 cursor-pointer"
            />
            <p className="text-secondary mt-4 font-lexend  font-semibold text-lg text-left hover:cursor-pointer">
              Asphalt 9: Legends
            </p>
            <button className="bg-btn rounded-md mt-2">
              <p className="text-sm font-medium text-primary font-lexend py-1 px-2">
                Free Download
              </p>
            </button>
          </div>
          <div className="w-[262px] h-[340px] bg-white flex flex-col items-center mb-16 rounded-xl">
            <Image
              src="/images/p7.svg"
              alt=""
              width="230"
              height="220"
              className="mt-5 hover:scale-110 cursor-pointer"
            />
            <p className="text-secondary mt-4 font-lexend font-semibold text-lg text-left hover:cursor-pointer">
              The Witcher 3
            </p>
            <p className="text-sm text-primary mt-2 font-lexend">Rp 460.000</p>
          </div>
          <div className="w-[262px] h-[340px] bg-white flex flex-col items-center mb-16 rounded-xl">
            <Image
              src="/images/p8.svg"
              alt=""
              width="230"
              height="220"
              className="mt-5 hover:scale-110 cursor-pointer"
            />
            <p className="text-secondary mt-4 font-lexend  font-semibold text-lg text-left hover:cursor-pointer">
              Surviving Mars
            </p>
            <p className="text-sm text-primary mt-2 font-lexend">Rp 420.000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularGames;
