import Progress from "../../../components/contract/Progress";
const allProgress = [
  "วันที่และสถานที่ทำสัญญา",
  "ข้อมูลผู้จะขาย",
  "ข้อมูลผู้จะซื้อ",
  "ข้อมูลที่ดิน",
  "ราคาที่ดิน",
  "ค่าธรรมเนียม",
  "อื่นๆ",
];
const Index = () => {
  return (
    <div className="px-10">
      <div className="pt-2 bg-gray">
        <h3 className="bg-gray">บริการของเรา</h3>
      </div>
      <div className="flex justify-between">
        <h1 className="text-3xl text-main">สัญญาจะซื้อจะขาย</h1>
        <h1 className="text-2xl text-sub pr-4">ราคาเอกสาร</h1>
      </div>
      {/* Progressbar */}
      <Progress progress={allProgress} />
      <div className="pt-4">
        {/* Two Section */}
        <div className="flex flex-row space-x-6 w-full h-full">
          {/* Section1 */}
          <div className="w-2/5 bg-gray-100 rounded-[50px] ">
            <div className="flex items-center flex-col p-8">
              <div className="mx-auto w-full max-w-[550px]">
                <hr className="mx-auto my-5  h-px" />
                <form>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label
                          htmlFor="fName"
                          className="mb-3 block text-base font-medium "
                        >
                          เลือกโปรไฟล์ที่ต้องการทำสัญญา
                        </label>
                        <input
                          type="text"
                          name="fName"
                          id="fName"
                          placeholder="First Name"
                          className="w-full rounded-md border  bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-main focus:shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label
                          htmlFor="date"
                          className="mb-3 block text-base font-medium "
                        >
                          Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          id="date"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-main focus:shadow-md"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label
                          htmlFor="time"
                          className="mb-3 block text-base font-medium "
                        >
                          Time
                        </label>
                        <input
                          type="time"
                          name="time"
                          id="time"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-main focus:shadow-md"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium ">
                      คุณต้องการสัญญารูปแบบไหน?
                    </label>
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="radio1"
                          id="radioButton1"
                          className="h-5 w-5"
                        />
                        <label
                          htmlFor="radioButton1"
                          className="pl-3 text-base font-medium "
                        >
                          1
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="radio1"
                          id="radioButton2"
                          className="h-5 w-5"
                        />
                        <label
                          htmlFor="radioButton2"
                          className="pl-3 text-base font-medium "
                        >
                          2
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <hr className="mx-auto mt-5  h-px" />
            <div className="flex space-x-6 justify-center text-main py-2">
              <h1>&lt; ย้อนกลับ </h1>
              <span> 1/7 </span>
              <h1>ถัดไป &gt; </h1>
            </div>
          </div>
          {/* Section2 */}
          <div className="w-3/5 bg-gray-200 rounded-[50px] p-8">sdfsd</div>
        </div>
      </div>
    </div>
  );
};

export default Index;

// <div className="checkbox">
//   <input type="checkbox" name="check" id="" />
//   <label htmlFor="check">dfdsfsdfsdf</label>
// </div>

// div .checkbox {
//   display:flex;
//   align-items: items-center
// }
