import React from "react";

const Head = ({ name, price }: { name: string; price: number }) => {
  return (
    <div>
      <div className="pt-2 bg-gray">
        <h3 className="bg-gray">
          บริการของเรา &gt; <span className="text-sub">{name}</span>
        </h3>
      </div>
      <div className="flex justify-between">
        <h1 className="text-3xl text-main">{name}</h1>
        <div className="text-2xl text-main pr-4">
          ราคาเอกสาร {"  "}
          {price === 0 ? (
            <span className="px-5  py-0.25 text-white rounded-[50px] bg-red-600">
              ฟรี!
            </span>
          ) : (
            <span className="px-5  py-0.25 text-white rounded-[50px] bg-sub">
              ฿ {price}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Head;
