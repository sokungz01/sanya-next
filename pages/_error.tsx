import React from "react";

type Props = {};

const Error404 = (props: Props) => {
  return (
    <div className="w-full h-full flex-col items-center align-center">
      <h1 className="text-4xl text-center flex items-center">Error404</h1>
      <h2 className="text-4xl text-center flex items-center">
        ไม่พบหน้าที่คุณต้องการ
      </h2>
    </div>
  );
};

export default Error404;
