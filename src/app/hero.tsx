"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";
import React from "react";

function Hero() {
  return (
    <div className="!flex h-[55vh] w-full items-center justify-between px-10">
      <Image
        width={1200}
        height={1200}
        src="/image/banner.png"
        alt="bg-img"
        className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
      />
      <div className="container mx-auto mt-28">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
            <Typography
              variant="h1"
              color="blue-gray"
              className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl"
            >Simplify Global Transactions with Our Currency Exchange Platform

            </Typography>
            <Typography variant="lead" className="mb-10 mt-6 !text-gray-900">Are you ready to manage your finances across borders effortlessly? Look no further! Our platform allows you to deposit, transfer, and withdraw funds in multiple currencies with ease. We are your trusted partner for fast, secure, and seamless currency exchange.</Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <Button color="gray">Creat Account</Button>
              <Button color="gray" variant="outlined">
                See Exchange Rates
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Hero;
