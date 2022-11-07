import React from "react";
import { Dispatch, SetStateAction } from "react";
import { Obj } from "../../../types/contract";
import DateAndPlace from "../Form/DateAndPlace";
import Person1 from "../Form/Person1";
import Person2 from "../Form/Person2";

const LoanCondition = ({
  step,
  obj,
  setObj,
}: {
  step: number;
  obj: any;
  setObj: Dispatch<SetStateAction<Obj>>;
}) => {
  const conditionalComponent = () => {
    switch (step) {
      case 1:
        return <DateAndPlace obj={obj}  setObj={setObj} />;
      case 2:
        return <Person1 setObj={setObj} />;
      case 3:
        return <Person2 setObj={setObj} />;
      default:
        return <DateAndPlace obj={obj} setObj={setObj} />;
    }
  };
  return (
    <div className="flex items-center flex-col p-8">
      <div className="mx-auto w-full max-w-[550px]">
        <hr className="mx-auto my-5  h-px" />
        {conditionalComponent()}
      </div>
    </div>
  );
};

export default LoanCondition;
