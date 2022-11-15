import React from "react";
import { Dispatch, SetStateAction } from "react";

import InputType from "../InputType";
import InputOption from "../InputOption";
import { Obj } from "../../../types/contract";
const DateAndPlace = ({
  obj,
  setObj,
}: {
  obj: any;
  setObj: Dispatch<SetStateAction<Obj>>;
}) => {
  return (
    <div>
      <InputType
        name="name"
        label="เลือกโปรไฟล์ที่ทำสัญญา"
        placeholder="Select"
        obj={obj}
        setObj={setObj}
      />
      <InputType label="กรอกวันที่ ที่จะทำสัญญา" type="date" name="date" setObj={setObj} />
      <InputType
        name="address"
        label="สถานที่"
        placeholder="ระบุสถานที่"
        setObj={setObj}
      />
      <InputOption />
    </div>
  );
};

export default DateAndPlace;
