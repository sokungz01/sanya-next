import type { NextPage } from "next";
import Image from "next/image";
import Input from "../components/input";
import pen from "../public/asset/image/pen.png";
import lawyer from "../public/asset/image/lawyer.png";
import icon1 from "../public/asset/image/icon-sm-1.png";
import icon2 from "../public/asset/image/icon-sm-2.png";
import icon3 from "../public/asset/image/icon-sm-3.png";
import sampleAvatar from "../public/asset/image/sample_avatar1.jpg";
import Link from "next/link";
import ServiceCard from "../components/ServiceCard";
import LongCard from "../components/LongCard";
import LawyerCard from "../components/LawyerCard";
const Home: NextPage = () => {
  return (
    <div className="px-10 mt-20 sm:px-10 lg:px-36 bg-hero-pattern">
      <div className="firstText ">
        <h1 className="text-5xl font-bold text-sub pb-5 ">
          บริการด้านกฎหมาย
        </h1>
        <p className="text-1xl font-bold pb-5">
          ตรวจสอบสัญญา รวดเร็ว เข้าถึงง่าย ให้คำปรึกษาด้านกฎหมายออนไลน์ <br />
          โดยทีมงานมืออาชีพ เชื่อถือได้
        </p>
        <Link href={"/service"}>
          <a className="py-1 w-20 shadow-lg shadow-neutral-400	 bg-sub text-white px-5 rounded-full">
            คลิก
          </a>
        </Link>
      </div>
      <div className="hidden xl:flex xl:justify-center   mt-20 pb-4">
        <button className="text-xl font-bold mr-4 py-5 w-96 bg-cyan-800 text-white px-5 rounded-full">
          สร้างสัญญาด้วยตนเอง
        </button>
        <button className="text-xl font-bold ml-4 py-5 w-96 bg-cyan-800 text-white px-5 rounded-full">
          JUNIOR LAWYER
          <br />
          ค้นหาผู้ให้บริการด้านกฎหมายเลย!
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-col  space-y-5 mt-20 pb-4">
        <button className="text-xl font-bold  py-5 w-45 bg-cyan-800 text-white px-5 rounded-full">
          สร้างสัญญาด้วยตนเอง
        </button>
        <button className="text-xl font-bold  py-5 w-45 bg-cyan-800 text-white px-5 rounded-full">
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
      <div className="Junior Lawyer mt-10 flex justify-between items-center">
        <h1 className="xl:text-3xl font-bold text-cyan-800 pb-5">
          JUNIOR LAWYER ยอดนิยม
        </h1>
        <button className="font-bold">ดูทั้งหมด &gt;</button>
      </div>

      <div className="card">
        <LawyerCard
          imagePath={"/asset/image/sample_avatar1.jpg"}
          title="Junior Lawyer1"
          sub="Lorem Ipsum   เนื้อหาจำลองแบบเรียบๆที่ใช้กันในธุรกิจงานพิมพ์หรอืงานเรียงพิมพ์มันได้"
        />
      </div>
      <hr className="mx-auto my-10  h-px" />

      {/* Review 3 Card */}
      <div className="flex flex-col">
        <h2 className="mb-2 text-2xl font-bold text-main">
          รีวิวจากผู้ใช้งานจริง
        </h2>

        <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="flex items-start rounded-xl bg-gray-100 p-4 shadow-lg">
            <div className="flex items-center justify-center ">
              <Image
                src={sampleAvatar}
                alt=""
                className="rounded-full"
                width={250}
                height={250}
              />
            </div>

            <div className="ml-4">
              <h2 className="font-semibold"> Andy hadysht </h2>
              <p className="mt-2 text-sm text-gray-500">
                เนื้อหาจำลองแบบเรียบๆที่ใช้กันในธุรกิจงานพิมพ์หรอืงานเรียงพิมพ์มันได้
              </p>
            </div>
          </div>
          <ServiceCard
            title="test1 service card"
            imagePath="/asset/image/sample_avatar1.jpg"
            sub="description"
          />
        </div>
      </div>
      <hr className="mx-auto my-10  h-px" />
      <LongCard
        title="mytitle"
        description="sdfsdf"
        href="/contract"
        price={0}
      />
      <LongCard title="title2" description="sdfsdf" href="#" price={100} />
    </div>
  );
};

export default Home;
