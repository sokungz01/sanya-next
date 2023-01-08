import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
type Props = {
  point:number;
  review:number;
};
// Simple 5 stars
const Review = (props: Props) => {
  return (
    <div className="flex-row items-center">
      <div className="flex lg:grid">
        <div className="flex text-yellow-400 lg:justify-center">
          <StarIcon className="w-5 h-5" />
          <StarIcon className="w-5 h-5" />
          <StarIcon className="w-5 h-5" />
          <StarIcon className="w-5 h-5" />
          <StarIcon className="w-5 h-5" />
        </div>
        <div className="flex lg:justify-center">
          <p className="text-bold text-sm mt-0.5 ml-1">{props.point}</p>
          <p className="text-xs text-gray-500 mt-1.5 ml-1 lg:mt-1"> (รีวิว {props.review}) </p>
        </div>
      </div>
    </div>

  );
};

export default Review;
