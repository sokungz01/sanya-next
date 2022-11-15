import React from "react";
import Image from "next/image";
import Review from "./Review";
import Link from "next/link";
import Chat from "../public/asset/icon/Chat.svg";
import Heart from "../public/asset/icon/Heart.svg";
import Share from "../public/asset/icon/Share.svg";

const LawyerCard = ({
  title,
  sub,
  imagePath,
}: {
  title: string;
  sub: string;
  imagePath: string;
}) => {
  return (
    <div className="bg-white rounded-lg border shadow-md md:flex-row lg:w-[600px] dark:border-gray-700 dark:bg-gray-800">
      <div className="flex justify-center  p-6">
        <div className="relative h-64 w-52">
          <Image
            src={imagePath}
            alt=""
            className="object-contain rounded-[50px]"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
          />
        </div>

        <div className="ml-8 mt-6">
          <Review />
          <h2 className="font-semibold"> {title} </h2>
          <div className="lg:w-80 ">
          <p className="mt-2 text-sm text-gray-500">{sub}</p>
          </div>
          <div className="flex justify-between bottom-0">
            <Link href={"#"}>
              <a className="bg-main text-white rounded-full px-2 py-1 ">
                ดูโปรไฟล์
              </a>
            </Link>
            <div className="flex space-x-4 ">
              <div>
                <Image src={Chat} alt="" />
              </div>
              <div>
                <Image src={Heart} alt="" />
              </div>
              <div>
                <Image src={Share} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerCard;
