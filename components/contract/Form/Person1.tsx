import React, { Dispatch, SetStateAction } from "react";
import InputType from "../InputType";
import InputOption from "../InputOption";
import { Obj } from "../../../types/contract";
const Person1 = ({ setObj }: { setObj: Dispatch<SetStateAction<Obj>> }) => {
  return (
    <div>
      <InputType
        label="ทำขึ้นระหว่าง"
        placeholder="ชื่อผู้ให้กู้"
        setObj={setObj}
      />
      <InputType
        label="อายุ"
        type="number"
        placeholder="อายุผู้ให้กู้"
        setObj={setObj}
      />
      <InputType label="ที่อยู่" placeholder="ที่อยู่" setObj={setObj} />
      <InputType label="อำเภอ" placeholder="อำเภอ" setObj={setObj} />
      <InputType label="จังหวัด" placeholder="จังหวัด" setObj={setObj} />
    </div>
  );
};

export default Person1;
