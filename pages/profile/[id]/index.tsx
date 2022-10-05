import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import TabBar from "../../../components/tabbar";
import PersonalInformation from "../../../components/profile/personal-information/index";
import { NextPage } from "next";
import Contracts from "../../../components/profile/contracts/index";
import Inbox from "../../../components/profile/inbox";
import Favorites from "../../../components/profile/favorites";

const Profile: NextPage = () => {
  const router = useRouter();
  //   const { user } = useContext;
  //   const { data: session, status } = useSession({ required: true });
  const { id } = router.query;
  console.log(id);
  const [active, setActive] = useState("ข้อมูลส่วนตัว");

  return (
    <>
      <TabBar
        active={active}
        setActive={setActive}
        tabs={[
          "ข้อมูลส่วนตัว",
          "สัญญาสำเร็จรูป",
          "ข้อความและออเดอร์",
          "รายการที่ชื่นชอบ",
        ]}
      />
      {active == "ข้อมูลส่วนตัว" ? (
        <PersonalInformation />
      ) : active == "สัญญาสำเร็จรูป" ? (
        <Contracts />
      ) : active == "ข้อความและออเดอร์" ? (
        <Inbox />
      ) : active == "รายการที่ชื่นชอบ" ? (
        <Favorites />
      ) : null}
    </>
  );
};

export default Profile;
