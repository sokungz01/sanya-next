import React from "react";
import Image from "next/image";
import Review from "./Review";
import Link from "next/link";
import Chat from "../public/asset/icon/Chat.svg";
import Heart from "../public/asset/icon/Heart.svg";
import Share from "../public/asset/icon/Share.svg";
type Props = {};

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
    <div className="bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800">
      <div className="flex justify-between px-2 py-2">
        <div className="">
          <Image
            src={imagePath}
            alt=""
            className="w-10 h-10 rounded-[50px]"
            width={150}
            height={150}
          />
        </div>

        <div className="ml-4  text-center p-8">
          <Review />
          <h2 className="font-semibold"> {title} </h2>
          <p className="mt-2 text-sm text-gray-500">{sub}</p>
          <div className="flex justify-between">
            <Link href={"#"}>
              <a className="bg-main text-white rounded-full px-2 py-1">
                ดูโปรไฟล์
              </a>
            </Link>
            <div className="flex space-x-4">
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
