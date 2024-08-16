"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  DocumentTextIcon,
  PlayCircleIcon,
  PencilSquareIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/solid";

import StatsCard from "@/components/stats-card";
import {ExchangeTable} from "@/components/exchange-table";


const STATS = [
  {
    icon: DocumentTextIcon,
    count: "10,200+",
    title: "Students",
  },
  {
    icon: PlayCircleIcon,
    count: "50+",
    title: "Instructors",
  },
  {
    icon: PencilSquareIcon,
    count: "10+",
    title: "Courses",
  },
  {
    icon: PhoneArrowDownLeftIcon,
    count: "24/7",
    title: "Support",
  },
];

export function OutImpressiveStats() {
  return (
    <section className="px-8 pt-60">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center">
          <Typography variant="h2" color="blue-gray" className="mb-2 text-4xl">
            Exchange Rates
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 w-full !text-gray-500 lg:w-5/12"
          >
            Providing real-time exchange rates to help you make informed financial decisions
          </Typography>
        </div>
        <div className="container mx-auto text-center">
        <ExchangeTable></ExchangeTable>
        </div>
      </div>
    </section>
  );
}
export default OutImpressiveStats;
