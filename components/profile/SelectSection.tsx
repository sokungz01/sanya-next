import React, { useState } from "react";
// { index,listSection,}: {index: number;listSection: number[];}
const listSection = [
  "รายการที่ยังไม่สำเร็จ",
  "รายการที่เสร็จแล้ว",
  "ข้อความและออเดอร์",
  "รายการที่ชื่นชอบ",
];
const SelectSection = ({
  index,
  setIndex,
}: {
  index: number;
  setIndex: any;
}) => {
  return (
    <div className="flex flex-start space-x-2">
      {listSection.map((section, idx) => {
        return (
          <h1
            key={idx}
            className={
              index === idx
                ? "py-1 bg-main text-white px-5 rounded-full"
                : "py-1 text-main px-5 cursor-pointer "
            }
            onClick={() => setIndex(idx)}
          >
            {section}
          </h1>
        );
      })}
      {/* <h1
        className={
          index === 1
            ? "py-1 bg-main text-white px-5 rounded-full"
            : "py-1 text-main px-5 cursor-pointer "
        }
        onClick={() => setIndex(1)}
      >
        สัญญาสำเร็จรูป
      </h1>
      <h1
        className={
          index === 2
            ? "py-1 bg-main text-white px-5 rounded-full"
            : "py-1 text-main px-5 cursor-pointer "
        }
        onClick={() => setIndex(2)}
      >
        บริการปรึกษา
      </h1> */}
    </div>
  );
};

export default SelectSection;
