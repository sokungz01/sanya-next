import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import TabBar from "../../components/tabbar";
import { NextPage } from "next";
import Link from "next/link";

const Profile: NextPage = () => {
  const router = useRouter();
  const {
    query: { id, route },
  } = router;

  console.log(router, "router");

  return (
    <div className="px-10 mt-20 sm:px-10 lg:px-36">
      <div className="firstText ">
        <h1 className="text-5xl font-bold text-cyan-800 pb-5 ">
          ทำสัญญากับเรา
        </h1>
        <p className="text-1xl font-bold pb-5">
          บริการร่างสัญญาผ่านระบบออนไลน์ในรูปแบบสัญญาสำเร็จรูป <br />
          ด้วยตนเอง หรือในรูปแบบสัญญาที่จัดทำเฉพาะสำหรับคุณ
        </p>
        <button className="py-1 w-20 shadow-lg shadow-neutral-400	 bg-cyan-800 text-white px-5 rounded-full">
          คลิก
        </button>
      </div>
      <hr className="mx-auto my-10  h-px" />
      <div className="flex justify-between align-middle items-center">
      <div>
      <h2 className="text-3xl font-bold text-main">บริการของเรา</h2>
      <p>
        ถ้าคุณกำลังต้องการความช่วยเหลือ ไม่เข้าใจขั้นตอนวิธีการทำสัญญา{" "}
        <Link href={"#"}>
          <a className="text-red-500">คลิกที่นี่!</a>
        </Link>
      </p>
      </div>
      <h1 className="align-middle">Search</h1>
      </div>
      <hr className="mx-auto my-10  h-px" />

    </div>
  );
};

export default Profile;
