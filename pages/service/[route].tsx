import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import TabBar from "../../components/tabbar";
import { NextPage } from "next";

const Profile: NextPage = () => {
  const router = useRouter();
  const {
    query: { id, route },
  } = router;

  console.log(router, "router");

  const routes = [
    {
      slug: "contract",
      label: "สัญญาสำเร็จรูป",
      component: "",
    },
    {
      slug: "contract",
      label: "สัญญาสำเร็จรูป",
      component: "",
    },
  ];

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
    </div>
  );
};

export default Profile;
