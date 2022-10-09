import type { NextPage } from "next";
import Image from "next/image";
import Input from "../components/input";
import pen from "../public/asset/image/pen.png";
import lawyer from "../public/asset/image/lawyer.png";
import icon1 from "../public/asset/image/icon-sm-1.png";
import icon2 from "../public/asset/image/icon-sm-2.png";
import icon3 from "../public/asset/image/icon-sm-3.png";
import Link from "next/link";
const Home: NextPage = () => {
  return (
    <div className="px-10 mt-20 sm:px-10 lg:px-36">
      <div className="firstText ">
        <h1 className="text-5xl font-bold text-cyan-800 pb-5 ">
          บริการด้านกฎหมาย
        </h1>
        <p className="text-1xl font-bold pb-5">
          ตรวจสอบสัญญา รวดเร็ว เข้าถึงง่าย ให้คำปรึกษาด้านกฎหมายออนไลน์ <br />
          โดยทีมงานมืออาชีพ เชื่อถือได้
        </p>
        <button className="py-1 w-20 shadow-lg shadow-neutral-400	 bg-cyan-800 text-white px-5 rounded-full">
          คลิก
        </button>
      </div>
      <div className="lg:flex justify-center mt-20 pb-4">
        <button className="text-xl font-bold mr-4 py-5 w-96 bg-cyan-800 text-white px-5 rounded-full">
          สร้างสัญญาด้วยตนเอง
        </button>
        <button className="text-xl font-bold ml-4 py-5 w-96 bg-cyan-800 text-white px-5 rounded-full">
          JUNIOR LAWYER
          <br />
          ค้นหาผู้ให้บริการด้านกฎหมายเลย!
        </button>
      </div>

      <hr className="mx-auto my-10  h-px" />
      {/* 3 Service */}
      <div className="pt-6 flex  gap-1 justify-between">
        <div>
          <div className="flex flex-wrap justify-center">
            <div className="flex justify-center">
              <div className="">
                <Image src={icon1} alt="icon1" width={100} height={100} />
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <h3 className="text-xl text-main font-bold ">บริการด้านกฎหมาย</h3>
          </div>
          <div className="mt-1 py-2 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <p className="font-light leading-relaxed text-slate-600 mb-4">
                  An artist of considerable range, Mike is the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                  and records all of his own music, giving it a warm.
                </p>
                <Link href={"#"}>
                  <a className="text-main text-sm font-bold">ดูวิธีใช้</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-center">
            <div className="flex justify-center">
              <div className="">
                <Image src={icon2} alt="icon1" width={100} height={100} />
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <h3 className="text-xl text-main font-bold ">บริการด้านกฎหมาย</h3>
          </div>
          <div className="mt-1 py-2 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <p className="font-light leading-relaxed text-slate-600 mb-4">
                  An artist of considerable range, Mike is the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                  and records all of his own music, giving it a warm.
                </p>
                <Link href={"#"}>
                  <a className="text-main text-sm font-bold">ดูวิธีใช้</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-center">
            <div className="flex justify-center">
              <div className="">
                <Image src={icon3} alt="icon1" width={100} height={100} />
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <h3 className="text-xl text-main font-bold ">บริการด้านกฎหมาย</h3>
          </div>
          <div className="mt-1 py-2 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <p className="font-light leading-relaxed text-slate-600 mb-4">
                  An artist of considerable range, Mike is the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                  and records all of his own music, giving it a warm.
                </p>
                <Link href={"#"}>
                  <a className="text-main text-sm font-bold">ดูวิธีใช้</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="Junior Lawyer mt-10 flex justify-between">
        <h1 className="text-3xl font-bold text-cyan-800 pb-5">
          JUNIOR LAWYER ยอดนิยม
        </h1>
        <button className="font-bold">ดูทั้งหมด &gt;</button>
      </div>
      <div className="card">
        <div className="card-top"></div>
        <div className="card-bottom"></div>
      </div>
    </div>
  );
};

export default Home;
