"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";
import React from "react";
import { useTranslation } from 'react-i18next';
import Link from "next/link";


function Hero({ onScrollToStats }) {
  const { t } = useTranslation('common');
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
            > 輕鬆簡化全球交易，使用我們的外幣交易平台
            </Typography>
            <Typography variant="lead" className="mb-10 mt-6 !text-gray-900">
              準備好輕鬆管理您的跨國財務了嗎？不用再找了！我們的平台讓您可以輕鬆存款、轉帳和提取多種貨幣。我們是您快速、安全、無縫貨幣交易的值得信賴的夥伴。
              </Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <Link href="/signup" passHref>
              <Button color="gray"> 建立帳戶</Button>
              </Link>
              <Button color="gray" variant="outlined" onClick={onScrollToStats}>
                查看匯率
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Hero;
