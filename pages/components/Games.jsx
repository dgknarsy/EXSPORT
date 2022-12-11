import React from 'react';
import Image from 'next/image';

const Games = () => {
  return (
    <div id="games" className="container mx-auto mt-16 mb-10">
      <div className="flex flex-row justify-between">
        <h2 className="text-secondary text-3xl font-bold font-lexend">
          Game Genres
        </h2>
        <a className="text-primary text-md font-lexend cursor-pointer hover:font-semibold">
          See all genres
        </a>
      </div>
      <div className="grid md:grid-cols-6 grid-cols-3 lg:gap-0 gap-3 py-10">
        <div>
          <Image
            src="/images/g1.svg"
            alt=""
            width="169"
            height="169"
            className="hover:brightness-50 hover:cursor-pointer rounded-xl ml-3 mb-3"
          />
          <p className="text-center font-lexend text-primary font-semibold cursor-pointer ">
            Strategy
          </p>
        </div>
        <div>
          <Image
            src="/images/g2.svg"
            alt=""
            width="169"
            height="169"
            className="hover:brightness-50 hover:cursor-pointer rounded-xl ml-3 mb-3"
          />
          <p className="text-center font-lexend text-primary font-semibold cursor-pointer">
            FPS
          </p>
        </div>
        <div>
          <Image
            src="/images/g3.svg"
            alt=""
            width="169"
            height="169"
            className="hover:brightness-50 hover:cursor-pointer rounded-xl ml-3 mb-3"
          />
          <p className="text-center font-lexend text-primary font-semibold cursor-pointer">
            RPG
          </p>
        </div>
        <div>
          <Image
            src="/images/g4.svg"
            alt=""
            width="169"
            height="169"
            className="hover:brightness-50 hover:cursor-pointer rounded-xl ml-3 mb-3"
          />
          <p className="text-center font-lexend text-primary font-semibold cursor-pointer">
            Puzzle
          </p>
        </div>
        <div>
          <Image
            src="/images/g5.svg"
            alt=""
            width="169"
            height="169"
            className="hover:brightness-50 hover:cursor-pointer rounded-xl ml-3 mb-3"
          />
          <p className="text-center font-lexend text-primary font-semibold cursor-pointer">
            Role Playing
          </p>
        </div>
        <div>
          <Image
            src="/images/g6.svg"
            alt=""
            width="169"
            height="169"
            className="hover:brightness-50 hover:cursor-pointer rounded-xl  ml-3 mb-3"
          />
          <p className="text-center font-lexend text-primary font-semibold cursor-pointer">
            Sports
          </p>
        </div>
      </div>
    </div>
  );
};

export default Games;
