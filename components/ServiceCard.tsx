import React from "react";
import Image from "next/image";

const ServiceCard = ({
  title,
  sub,
  imagePath,
}: {
  title: string;
  sub: string;
  imagePath: string;
}) => {
  return (
    <div className="flex items-center rounded-xl bg-gray-100 p-4 shadow-lg">
      <div className="flex items-center justify-center rounded-full">
        <Image
          src={imagePath}
          alt=""
          className="w-10 h-10 rounded-full"
          width={150}
          height={150}
        />
      </div>

      <div className="ml-4">
        <h2 className="font-semibold text-main"> {title} </h2>
        <p className="mt-2 text-sm text-gray-600">{sub} รายการ</p>
      </div>
    </div>
  );
};

export default ServiceCard;
