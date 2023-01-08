import React from "react";
import Image from "next/image";
import Review from "./Review";
import Link from "next/link";
import { 
  ChatBubbleBottomCenterTextIcon,
  HeartIcon,
  ShareIcon
} from "@heroicons/react/24/outline";

const LawyerCard = ({
  title,
  sub,
  imagePath,
  point,
  review
}: {
  title: string;
  sub: string;
  imagePath: string;
  point : number;
  review : number;
}) => {
  return (
    <div className="bg-neutral-100 rounded-[52px] border shadow-md flex-row w-full lg:w-1/2 xl:w-1/2 h-96 lg:mr-8 xl:mr-8 lg:ml-8 xl:ml-8 mt-3 mb-3 overflow-hidden">
      <div className="flex p-6">
        <div className="relative h-80 w-1/2 xl:w-2/5 mt-2 ml-3">
          <Image
            src={imagePath}
            alt=""
            className="rounded-[52px]"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
          />
        </div>

        <div className="w-1/2 xl:w-3/5 ml-8 mt-6 relative">
          <Review 
            point={point}
            review={review}
          />
          <h2 className="font-semibold mt-3"> {title} </h2>
          <div className="w-full break-words overflow-hidden">
            <p className="mt-2 text-sm lg:text-xs text-gray-500 ">{sub}</p>
          </div>
          <div className="absolute bottom-0 w-full mb-2">
            <div className="sm:hidden md:hidden lg:hidden flex justify-between">
              <div>
              <Link href={"#"}>
                <a className="bg-main text-white rounded-full px-5 py-1 text-sm mb-2">
                  ดูโปรไฟล์
                </a>
              </Link>
              </div>
              <div className="flex">
                  <a className="rounded-full w-8 h-8 bg-white ml-1 mr-1 text-cyan-800 hover:text-cyan-600 hover:bg-zinc-50"><ChatBubbleBottomCenterTextIcon className="w-4 h-4 mt-2 ml-2" /></a>
                  <a className="rounded-full w-8 h-8 bg-white ml-1 mr-1 text-cyan-800 hover:text-cyan-600 hover:bg-zinc-50"><HeartIcon className="w-4 h-4 mt-2 ml-2"/></a>
                  <a className="rounded-full w-8 h-8 bg-white ml-1 mr-1 text-cyan-800 hover:text-cyan-600 hover:bg-zinc-50"><ShareIcon className="w-4 h-4 mt-2 ml-2"/></a>
              </div>
            </div>
            <div className=" xl:hidden flex justify-center">
              <Link href={"#"}>
                <a className="bg-main text-white rounded-full px-5 py-1 text-sm lg:text-xs">
                  รายละเอียด
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerCard;
