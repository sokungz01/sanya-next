import Link from "next/link";
import Image from "next/image";
import React from "react";
import Heart from "../public/asset/icon/Heart.svg";
import Share from "../public/asset/icon/Share.svg";
const LongCard = ({
  title,
  description,
  price,
}: {
  title: string;
  description: string;
  price: number;
}) => {
  return (
    <div className="relative block p-6 overflow-hidden border bg-white border-slate-100 rounded-[30px] ml-6 mr-6">
      {/* <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span> */}

      <div className="justify-between sm:flex">
        <div>
          <h5 className="text-l font-bold text-slate-900">
            Building a beautiful product as a software developer
          </h5>
          <p className="mt-1 text-xs font-medium text-slate-600">
            Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ
            ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์
            มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่
            16
            เมื่อเครื่องพิมพ์โนเนมเครื่องหนึ่งนำรางตัวพิมพ์มาสลับสับตำแหน่งตัวอักษรเพื่อทำหนังสือตัวอย่าง
            Lorem Ipsum อยู่ยงคงกระพันมาไม่ใช่แค่เพียงห้าศตวรรษ
            แต่อยู่มาจนถึงยุคที่พลิกโฉมเข้าสู่งานเรียงพิมพ์ด้วย
          </p>
          <hr className="mx-auto my-2  h-px" />
          <div className="flex justify-between">
            {/* Left */}
            <div className="flex flex-row">
              {price == 0 ? (
                <h2 className="mx-5 bg-alert text-white px-2.5 py-0.5 rounded">
                  ฟรี!
                </h2>
              ) : (
                <h2 className="mx-5 bg-main text-white px-2.5 py-0.5 rounded">
                  ฿ {price}
                </h2>
              )}
              <div className="mx-3">
                <Image src={Heart} alt="heart-icon" />
              </div>
              <div className="">
                <Image src={Share} alt="heart-icon" />
              </div>
            </div>
            {/* Right */}
            <Link href={"#"}>
              <a className="text-main text-sm font-bold">เริ่มทำรายการ</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LongCard;
