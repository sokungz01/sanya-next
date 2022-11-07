import React from "react";
import BlankSpan from "../BlankSpan";
import { Dispatch, SetStateAction } from "react";
import { Obj } from "../../../types/contract";
const Preview = ({ obj }: { obj: Obj; }) => {
  const blank = "   ";
  return (
    <div
      className="p-4 text-main text-center overflow-y-scroll"
      id="preview"
    >
      <h1 className="text-3xl">สัญญากู้ยืมเงิน</h1> <br />
      <h1 className="text-xl">(แบบไม่มีหลักประกัน)</h1> <br />
      <span className="">สัญญากู้ยืมเงิน ฉบับนี้ทำ ณ</span>
      <BlankSpan obj={obj.name} />
      <span className="">สัญญากู้ยืมเงิน ฉบับนี้ทำขึ้นระหว่าง</span>
      <BlankSpan obj={obj.address} />
      <span>อายุ</span>
      <BlankSpan obj="" />
      <span>อยู่บ้านเลขที่</span>
      <BlankSpan obj="" /> <br />
    </div>
  );
};

export default Preview;
