"use client";

import Image from "next/image";
import RegisterButton from "./_components/RegisterButton";
import type { NextPage } from "next";
import HeroImage from "~~/assets/private_voting.jpg";
import { useAuthUserOnly } from "~~/hooks/useAuthUserOnly";

const Home: NextPage = () => {
  useAuthUserOnly({ inverted: true });

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-4xl font-bold text-center">Federal Election in Germany</h1>

          <div className="flex flex-col-reverse md:flex-row justify-center items-center mt-10 sm:w-2/3 mx-auto gap-x-10 gap-y-5 mb-10">
            <div className="flex-1">
              <p className="text-lg mt-5 text-justify">
                Welcome to the Federal Election in Germany. This is a private voting system that allows you to vote in a secure and private way. You can register and vote in the election by clicking the button below.
              </p>
              <div className="text-center">
                <RegisterButton />
              </div>
            </div>
            <div className="flex-1">
              <Image src={HeroImage} alt="MACI" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
