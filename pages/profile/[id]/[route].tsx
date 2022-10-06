import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import TabBar from "../../../components/tabbar";
import PersonalInformation from "../../../components/profile/personal-information/index";
import { NextPage } from "next";
import Contracts from "../../../components/profile/contracts/index";
import Inbox from "../../../components/profile/inbox";
import Favorites from "../../../components/profile/favorites";

const Profile: NextPage = () => {
  const router = useRouter();
  const {
    query: { id, route },
  } = router;

  console.log(router, "router");

  const routes = [
    {
      slug: "personal",
      label: "ข้อมูลส่วนตัว",
      component: <PersonalInformation />,
    },
    {
      slug: "contract",
      label: "สัญญาสำเร็จรูป",
      component: <Contracts />,
    },
    {
      slug: "inbox",
      label: "ข้อความและออเดอร์",
      component: <Inbox />,
    },
    {
      slug: "favorite",
      label: "รายการที่ชื่นชอบ",
      component: <Favorites />,
    },
  ];

  // if route is not in routes, redirect to personal

  // useEffect(() => {
  //   if (!routes.map((route) => route.slug).includes(route as string)) {
  //     console.log(
  //       routes.map((route) => route.slug),
  //       route,
  //       "sdfgsdfdsfg d"
  //     );
  //     router.push(`/profile/${id}/personal`);
  //   }
  // }, [route, id, routes, router]);

  return (
    <>
      <TabBar route={router.asPath} tabs={routes} />
      {routes.map((route, i) => {
        if (router.asPath.includes(route.slug)) {
          return route.component;
        }
      })}
    </>
  );
};

export default Profile;
