import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useEffect, useRef, useState } from "react";
import Head from "../../../components/contract/Head";
import LoanCondition from "../../../components/contract/loan/LoanCondition";
import Progress from "../../../components/contract/Progress";
import StepBar from "../../../components/contract/StepBar";
import dynamic from "next/dynamic";
import { Obj } from "../../../types/contract";
// import ReactToPrint from "react-to-print";
const allProgress = [
  "วันที่และสถานที่ทำสัญญา",
  "ข้อมูลผู้ให้กู้",
  "ข้อมูลผู้กู้",
  "จำนวนเงินที่กู้",
  "อัตราดอกเบี้ย",
  "การชำระต้นเงินกู้และดอกเบี้ย",
  "อื่นๆ",
];
const ReactToPrint = dynamic(() => import("react-to-print"), { ssr: false });
const Preview = dynamic(
  () => import("../../../components/contract/loan/Preview"),
  { ssr: false }
);
// const isServer = () => typeof window === `undefined`;
const Index = () => {
  const [step, setStep] = useState<number>(1);
  const [obj, setObj] = useState<Obj>({
    createAt: "",
    date: "",
    person1: {
      name: "",
      age: "",
      address: {
        number: "",
        line1: "",
        province: "",
        city: "",
        postCode: "",
      },
    },
    person2: {
      name: "",
      age: "",
      address: {
        number: "",
        line1: "",
        province: "",
        city: "",
        postCode: "",
      },
    },
    amount: 0,
    reason: "",
    guarantee: false,
    interest: 0,
    interest2: 0,
    time: 0,
    date_purchase: 0,
    amount_purchase: 0,
    start: "",
    min_date: 0,
  });

  // function printDocument() {
  //   const input = document.getElementById("preview");

  //   const pdf = new jsPDF();

  //   for (let i = 0; i < input.length; i++) {
  //     html2canvas(input[i]).then((canvas) => {
  //       console.log(canvas);
  //       const imgData = canvas.toDataURL("image/png");
  //       pdf.addImage(imgData, "JPEG", 0, 0);
  //       // pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297, 'pdf', 'NONE', 0);
  //       if (input.length - 1 === i) {
  //         pdf.save("download.pdf");
  //       } else {
  //         pdf.addPage();
  //       }
  //     });
  //   }
  // }
  return (
    <div className="px-10">
      {/* Head */}
      <Head name="สัญญากู้ยืมเงิน" price={0} />

      {/* Progressbar */}
      <Progress progress={allProgress} step={step} />
      <div className="pt-4">
        {/* Two Section */}
        <div className="flex flex-row space-x-6 w-full h-full">
          {/* Section1 */}
          <div className="w-2/5 bg-gray-100 rounded-[50px] ">
            <LoanCondition step={step} obj={obj} setObj={setObj} />
            <hr className="mx-auto mt-5  h-px" />
            <StepBar
              step={step}
              setStep={setStep}
              maxStep={allProgress.length}
            />
          </div>
          {/* Section2 */}
          <div id="preview" className="w-3/5 bg-gray-200 rounded-[50px] p-8">
            <Preview obj={obj} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
