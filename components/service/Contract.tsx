import React from "react";
import ServiceCard from "../ServiceCard";
import ListService from "../../utils/service/ListService";
type Props = {};

const Contract = (props: Props) => {
  const listItem = [
    {
      title: "เกี่ยวกับการลงทุน",
      sub: "108",
      path: "",
    },
    {
      title: "ด้านอสังหาริมทรัพย์",
      sub: "108",
      path: "",
    },
    {
      title: "ด้านทรัพย์สินทางปัญญา",
      sub: "108",
      path: "",
    },
    {
      title: "ด้านทรัพย์สินทางปัญญา",
      sub: "108",
      path: "",
    },
    {
      title: "ด้านทรัพย์สินทางปัญญา",
      sub: "108",
      path: "",
    },
  ];

  return (
    <>
      {ListService.map((item, i) => {
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

export default Contract;
