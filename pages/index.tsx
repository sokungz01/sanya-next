import type { NextPage } from "next";
import Image from "next/image";
import Input from "../components/input";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="px-36 mt-20">
      <div className="firstText">
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
      <div className="flex justify-center mt-20 pb-4">
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
      <div className="pt-6 grid grid-cols-3 gap-1 justify-evenly">
        <div className="w-96 h-80">
          <div className="pl-36">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Eo_circle_cyan_blank.svg/2048px-Eo_circle_cyan_blank.svg.png"
              className=" h-20 w-22 pl-2"
            />
          </div>
          <h1 className="text-center text-xl font-bold text-cyan-800">
            บริการด้านกฎหมาย
          </h1>
          <p className="text-center text-sm pt-4">
            LOREM IPSUM คือ เนื้อหาจำลองแบบเรียบๆ
          </p>
          <p className="text-center text-sm pt-2">
            ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์มันได้กลาย
          </p>
          <p className="text-center text-sm pt-2">
            มาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตัง
          </p>
          <div className="pl-2">
            <button className="pl-40 text-sm pt-6 font-bold text-cyan-800">
              ดูวิธีใช้
            </button>
          </div>
        </div>
        <div className="w-96 h-80">
          <div className="pl-36">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Eo_circle_cyan_blank.svg/2048px-Eo_circle_cyan_blank.svg.png"
              className=" h-20 w-22 pl-2"
            />
          </div>
          <h1 className="text-center text-xl font-bold text-cyan-800">
            บริการด้านกฎหมาย
          </h1>
          <p className="text-center text-sm pt-4">
            LOREM IPSUM คือ เนื้อหาจำลองแบบเรียบๆ
          </p>
          <p className="text-center text-sm pt-2">
            ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์มันได้กลาย
          </p>
          <p className="text-center text-sm pt-2">
            มาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตัง
          </p>
          <div className="pl-2">
            <button className="pl-40 text-sm pt-6 font-bold text-cyan-800">
              ดูวิธีใช้
            </button>
          </div>
        </div>
        <div className="w-96 h-80">
          <div className="pl-36">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Eo_circle_cyan_blank.svg/2048px-Eo_circle_cyan_blank.svg.png"
              className=" h-20 w-22 pl-2"
            />
          </div>
          <h1 className="text-center text-xl font-bold text-cyan-800">
            บริการด้านกฎหมาย
          </h1>
          <p className="text-center text-sm pt-4">
            LOREM IPSUM คือ เนื้อหาจำลองแบบเรียบๆ
          </p>
          <p className="text-center text-sm pt-2">
            ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์มันได้กลาย
          </p>
          <p className="text-center text-sm pt-2">
            มาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตัง
          </p>
          <div className="pl-2">
            <button className="pl-40 text-sm pt-6 font-bold text-cyan-800">
              ดูวิธีใช้
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="Junior Lawyer mt-10 flex">
        <h1 className="text-3xl font-bold text-cyan-800 pb-5">
          JUNIOR LAWYER ยอดนิยม
        </h1>
        <div className="pl-96">
        <button className="font-bold pl-96">ดูทั้งหมด ></button>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
