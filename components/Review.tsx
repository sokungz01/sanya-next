import React from "react";
import Star from "../public/asset/icon/Star.svg";
import Image from "next/image";
type Props = {};
// Simple 5 stars
const Review = (props: Props) => {
  return (
    <div className="flex flex-row items-center text-yellow-400">
      <Image src={Star} alt="" className="text-yellow-400" />
      <Image src={Star} alt="" className="text-yellow-400" />
      <Image src={Star} alt="" className="text-yellow-400" />
      <Image src={Star} alt="" className="text-yellow-400" />
      <Image src={Star} alt="" className="text-yellow-400" />
    </div>
  );
};

export default Review;
