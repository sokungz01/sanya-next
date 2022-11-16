import React from "react";

const Card = () => {
  return (
    <div className="p-6 overflow-hidden border bg-white border-slate-100 rounded-[30px] ml-6 mr-6">
      <div className="flex justify-between ">
        <div className="">
          <h5 className="text-l font-bold text-slate-900">title</h5>
          <p className="mt-1 text-xs font-medium text-slate-600">
            Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ
            ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์
            มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าว
          </p>
        </div>
        <div className="">asdasd</div>
      </div>
    </div>
  );
};

export default Card;
