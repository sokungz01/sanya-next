import React, { useState } from "react";
import Input from "../../input";
import SelectSection from "../SelectSection";
import NotSuccess from "./NotSuccess";
import Success from "./Success";
import Purchased from "./Purchased";
import Deleted from "./Deleted";
function Contracts() {
  const [index, setIndex] = useState<number>(0);
  return (
    <div className="p-5">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <SelectSection index={index} setIndex={setIndex} />
              {index === 0 ? <NotSuccess /> : null}
              {index === 1 ? <Success /> : null}
              {index === 2 ? <Purchased /> : null}
              {index === 3 ? <Deleted /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contracts;
