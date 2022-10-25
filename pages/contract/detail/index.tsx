import Image from "next/image";
import Link from "next/link";
import icon1 from "../../../public/asset/image/icon-sm-1.png";

const Detail = () => {
  return (
    <div className="lg:px-40 px-10 ">
      <div className="pt-2 bg-gray">
        <h3 className="bg-gray">
          บริการ &gt; สัญญาสำเร็จรูป &gt; สัญญาจะซื้อจะขาย
        </h3>
      </div>
      <div className="py-5 ">
        <h1 className="text-3xl text-main font-bold">สัญญาสำเร็จรูป</h1>
        <div className=" gap-4 flex-col rounded-xl shadow-lg relative top-0 bottom-0 m-auto right-0 bg-white dark:bg-slate-900 dark:shadow-slate-800 p-5 px-12  h-fit w-full">
          <h1 className="text-2xl text-main font-bold pt-6">
            สิ่งที่คุณจะได้รับ
          </h1>
          <div className="lg:flex lg:justify-between pr-5 pb-4">
            <div className="flex py-4">
              <div className="lg:w-36 w-28">
                <Image src={icon1} alt="icon1" />
              </div>
              <div className="my-auto flex flex-col gap-1 pl-4 pr-8">
                <p className="text-xl text-main font-bold">บริการด้านกฎหมาย</p>
                <p className="text-1xl">
                  Lorem Ipsum คือ เนื้อหาจำลองที่ใช้กันในธุรกิจงานพิม
                </p>
              </div>
            </div>
            <div className="flex py-4">
              <div className="lg:w-36 w-28">
                <Image src={icon1} alt="icon1" />
              </div>
              <div className="my-auto flex flex-col gap-1 pl-4 pr-8">
                <p className="text-xl text-main font-bold">บริการด้านกฎหมาย</p>
                <p className="text-1xl">
                  Lorem Ipsum คือ เนื้อหาจำลองที่ใช้กันในธุรกิจงานพิม
                </p>
              </div>
            </div>
            <div className="flex py-4">
              <div className="lg:w-36 w-28">
                <Image src={icon1} alt="icon1" />
              </div>
              <div className="my-auto flex flex-col gap-1 pl-4 pr-8">
                <p className="text-xl text-main font-bold">บริการด้านกฎหมาย</p>
                <p className="text-1xl">
                  Lorem Ipsum คือ เนื้อหาจำลองที่ใช้กันในธุรกิจงานพิม
                </p>
              </div>
            </div>
          </div>
          <hr className="pb-8 relative" />
          <h1 className="text-2xl text-main font-bold ">วิธีใช้</h1>
          <div className="lg:flex lg:justify-between pr-5 pb-4">
            <div className="flex py-4">
              <div className="lg:w-36 w-28">
                <Image src={icon1} alt="icon1" />
              </div>
              <div className="my-auto flex flex-col gap-1 pl-4 pr-8">
                <p className="text-xl text-main font-bold">บริการด้านกฎหมาย</p>
                <p className="text-1xl">
                  Lorem Ipsum คือ เนื้อหาจำลองที่ใช้กันในธุรกิจงานพิม
                </p>
              </div>
            </div>
            <div className="flex py-4">
              <div className="lg:w-36 w-28">
                <Image src={icon1} alt="icon1" />
              </div>
              <div className="my-auto flex flex-col gap-1 pl-4 pr-8">
                <p className="text-xl text-main font-bold">บริการด้านกฎหมาย</p>
                <p className="text-1xl">
                  Lorem Ipsum คือ เนื้อหาจำลองที่ใช้กันในธุรกิจงานพิม
                </p>
              </div>
            </div>
            <div className="flex py-4">
              <div className="lg:w-36 w-28">
                <Image src={icon1} alt="icon1" />
              </div>
              <div className="my-auto flex flex-col gap-1 pl-4 pr-8">
                <p className="text-xl text-main font-bold">บริการด้านกฎหมาย</p>
                <p className="text-1xl">
                  Lorem Ipsum คือ เนื้อหาจำลองที่ใช้กันในธุรกิจงานพิม
                </p>
              </div>
            </div>
          </div>
          <hr className="pb-8 relative" />
          <h1 className="text-2xl text-main font-bold ">รายละเอียด</h1>
          <h1 className="text-1xl pt-4 pb-8">
            Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ
            ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์
            มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่
            16
            เมื่อเครื่องพิมพ์โนเนมเครื่องหนึ่งนำรางตัวพิมพ์มาสลับสับตำแหน่งตัวอักษรเพื่อทำหนังสือตัวอย่าง
            Lorem Ipsum อยู่ยงคงกระพันมาไม่ใช่แค่เพียงห้าศตวรรษ
            แต่อยู่มาจนถึงยุคที่พลิกโฉมเข้าสู่งานเรียงพิมพ์ด้วยวิธีทางอิเล็กทรอนิกส์
            และยังคงสภาพเดิมไว้อย่างไม่มีการเปลี่ยนแปลง
            มันได้รับความนิยมมากขึ้นในยุค ค.ศ. 1960 เมื่อแผ่น Letraset
            วางจำหน่ายโดยมีข้อความบนนั้นเป็น Lorem Ipsum และล่าสุดกว่านั้น
            คือเมื่อซอฟท์แวร์การทำสื่อสิ่งพิมพ์ (Desktop Publishing) อย่าง Aldus
            PageMaker ได้รวมเอา Lorem Ipsum เวอร์ชั่นต่างๆ
            เข้าไว้ในซอฟท์แวร์ด้วย
          </h1>
          <hr className="pb-8 relative" />
          <div className="flex justify-center">
            <Link href={"/contract/create"}>
              <a className="bg-main text-white w-60 p-3 text-center rounded-full ">
                เริ่มทำรายการ
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
