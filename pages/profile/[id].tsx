import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import TabBar from "../../components/tabbar/index";
import PersonalInformation from "../../components/profile/personal-information/index";

const Profile = () => {
  const router = useRouter();
  //   const { user } = useContext;
  //   const { data: session, status } = useSession({ required: true });
  const { id } = router.query;
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
        <div>สัญญาสำเร็จรูป</div>
      ) : active == "ข้อความและออเดอร์" ? (
        <div>ข้อความและออเดอร์</div>
      ) : active == "รายการที่ชื่นชอบ" ? (
        <div>รายการที่ชื่นชอบ</div>
      ) : null}
    </>
  );
};

export default Profile;
