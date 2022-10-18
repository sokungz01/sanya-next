import React from "react";
import ServiceCard from "../ServiceCard";
type Props = {};

const Consult = (props: Props) => {
  const listItem = [
    {
      title: "ร่างสัญญา",
      sub: "108",
      path: "",
    },
    {
      title: "ตรวจสอบสัญญา",
      sub: "108",
      path: "",
    },
    {
      title: "จดทะเบียน",
      sub: "108",
      path: "",
    },
    {
      title: "ให้คำปรึกษาด้านกฎหมาย",
      sub: "108",
      path: "",
    },
    {
      title: "แปลเอกสารทางกฎหมาย",
      sub: "108",
      path: "",
    },
    {
      title: "อื่นๆ",
      sub: "108",
      path: "",
    },
  ];
  return (
    <>
      {listItem.map((item, i) => {
        return (
          <ServiceCard
            title={item.title}
            sub={item.sub}
            key={i}
            imagePath={`/asset/image/sample_avatar1.jpg`}
          />
        );
      })}
    </>
  );
};

export default Consult;
