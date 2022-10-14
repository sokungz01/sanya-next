import React from "react";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div className="px-10 mt-20 sm:px-10 lg:px-36">
      <div className="firstText ">
        <h1 className="text-5xl font-bold text-cyan-800 pb-5 ">เกี่ยวกับเรา</h1>
        <p className="text-1xl font-bold pb-5">
          ถึง ผู้ใช้บริการกับทางเราและทุกคนที่เข้ามาเยี่ยมชม &quot;สัญญา&quot;{" "}
          <br />
          ด้วยตนเอง หรือในรูปแบบสัญญาที่จัดทำเฉพาะสำหรับคุณ
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
