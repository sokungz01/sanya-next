import React from "react";
import BlankSpan from "../BlankSpan";
import { Dispatch, SetStateAction } from "react";
import { Obj } from "../../../types/contract";
const Preview = ({ obj }: { obj: Obj }) => {
  const blank = "   ";
  return (
    <div className="p-4 text-main  overflow-y-scroll max-h-[40rem]" id="preview">
      <div className="text-center">
        <h1 className="text-3xl">สัญญากู้ยืมเงิน</h1> <br />
        <h1 className="text-xl">(แบบไม่มีหลักประกัน)</h1> <br />
      </div>
      <div className="indent-4">
        <span className="indent-4">สัญญากู้ยืมเงิน ฉบับนี้ทำ ณ</span>
        <BlankSpan obj={obj.createAt} />
        <span className="">สัญญากู้ยืมเงิน ฉบับนี้ทำขึ้นระหว่าง</span>
        <BlankSpan obj={obj.person1.name} />
        <span>อายุ</span>
        <BlankSpan obj="" />
        <span>อยู่บ้านเลขที่</span>
        <BlankSpan obj="" /> <br />
      </div>
      <span>หมู่บ้าน/อาคาร</span>
      <BlankSpan obj="" />
      <span>ตรอก/ซอย</span>
      <BlankSpan obj="" />
      ถนน
      <BlankSpan obj="" />
      ตำบล/แขวง
      <BlankSpan obj="" />
      อำเภอเขต
      <BlankSpan obj="" />
      จังหวัด
      <BlankSpan obj="" />
      ฝ่ายหนึ่ง ซึ่งต่อไปนี้จะเรียกว่า &quot;ผู้ให้กู้&quot; กับ
      <BlankSpan obj={obj.person2.name} />
      <span>อายุ</span>
      <BlankSpan obj="" />
      <span>อยู่บ้านเลขที่</span>
      <BlankSpan obj="" />
      <span>หมู่บ้าน/อาคาร</span>
      <BlankSpan obj="" />
      <span>ตรอก/ซอย</span>
      <BlankSpan obj="" />
      ถนน
      <BlankSpan obj="" />
      ตำบล/แขวง
      <BlankSpan obj="" />
      อำเภอเขต
      <BlankSpan obj="" />
      จังหวัด
      <BlankSpan obj="" />
      ซึ่งต่อไปนี้จะเรียกว่า &quot;ผู้กู้&quot;อีกฝ่ายหนึ่ง <br />
      <div className="pl-4">
        คู่สัญญาทั้งสองฝ่ายได้ตกลงกัน ดังมีข้อความต่อไปนี้ <br />
        ข้อ 1. ผู้กู้ ตกลงกู้เงินและผู้ให้กู้ตกลงให้กู้เงินจำนวน{" "}
        <BlankSpan obj={obj.amount} />
        บาท (<BlankSpan obj="" />)
        และผู้กู้ได้รับเงินจำนวนดังกล่าวจากผู้ให้กู้ไปครบถ้วนแล้ว
        ในวันที่ทำสัญญากู้ยืมงินฉบับนี้ <br />
        ข้อ 2. ผู้กู้ตกลงยินยอมชำระดอกเบี้ยให้กู้ในอัตราร้อยละ……..ต่อปี
        นับตั้งแต่วันที่ทำสัญญาฉบับนี้เป็นต้นไปจนกว่าจะชำระเสร็จสิ้น
        ของยอดเงินตามข้อที่ 1. <br />
        ข้อ 3. ผู้กู้ตกลงชำระเงินต้นดังกล่าวพร้อมดอกเบี้ย ตามเงื่อนไข ดังนี้
        <br />
        3.1 ผู้กู้ จะชำระคืนพร้อมดอกเบี้ย ภายในวันที่……..เดือน……………………. พ.ศ.
        ………….. <br />
        3.2 ผู้กู้ ผ่อนชำระเงินต้นพร้อมดอกเบี้ยเป็นรายงวด
        จำนวนงวด………..งวด ในทุกวันที่…………ของเดือน/ปี ในอัตราเดือนละ
        ………………………….….บาท (..................................................)
        จนครบถ้วน เริ่มต้นตั้งแต่วันที่……….เดือน…………..…….. พ.ศ.
        …………….ไปจนชำระเสร็จสิ้น <br />
        {obj.guarantee ? (
          <>
            ข้อ 4.
            ในการกู้ยืมตามสัญญานี้ผู้กู้ได้นำหลักทรัพย์เป็นประกันให้ผู้ให้กู้ยึดถือไว้คือ{" "}
            <BlankSpan obj={""} />
            ข้อ 4.1 ผู้กู้ ขอรับรองว่าทรัพย์สินดังกล่าวข้างต้น
            เป็นทรัพย์สินของผู้กู้
            หรือบุคคลอื่นและผู้อื่นยินยอมให้จำนองทรัพย์สินนั้น
            และจะไม่นำไปจำหน่ายจ่ายโอนหรือทำให้เสื่อมราคาหรือลดน้อยถอยลง
            <br />
            ข้อ 4.2 หลักทรัพย์ดังกล่าวผู้กู้เป็นเจ้าของกรรมสิทธิ์
            ไม่มีภาระติดพันใดๆ
            โดยในวันทำสัญญานี้ผู้ให้กู้ได้ยึดถือหลักทรัพย์ที่ผู้กู้ส่งมอบให้แล้ว
            และผู้ให้กู้จะคืนให้ภายใน ๗
            วันวันจากวันที่ผู้กู้ได้ชำระหนี้ครบถ้วนตามสัญญาแล้ว <br /> ข้อที่ 5.
            กรณีที่ ผู้กู้
            ผิดนัดไม่ชำระเงินกู้และดอกเบี้ยตามงวดชำระภายในกำหนดนับแต่วันครบกำหนดงวดชำระ
            ผู้กู้ยินยอมให้คิดดอกเบี้ยผิดนัดเป็นอัตราร้อยละ ๕ ต่อปี
            ของเงินต้นคงค้างทั้งหมดจนกว่าชำระเสร็จสิ้น
          </>
        ) : null}
        ข้อ 6. ผู้กู้
        ให้สัญญาว่าหากผู้กู้ไม่ปฏิบัติตามสัญญานี้แม้เพียงข้อใดข้อหนึ่ง
        ผู้ให้กู้มีสิทธิ์บอกเลิกสัญญาและเรียกร้องให้ผู้กู้ชำระเงินต้นพร้อมดอกเบี้ย
        ตามข้อที่ 5. และเบี้ยปรับตามระเบียบ ข้อบังคับ
        ของผู้ให้กู้คืนแก่ผู้ให้กู้ได้ทันที
        และผู้กู้ยินดีชำระค่าเสียหายทั้งปวงที่
        ผู้ให้กู้ต้องเสียไปในการฟ้องร้องบังคับคดีเพื่อให้ผู้กู้
        ชำระหนี้คืนให้แก่ ผู้ให้กู้
        ในการเรียกทวงถามรวมทั้งค่าทนายความและค่าฤชาธรรมเนียมศาลอันเกี่ยวกับการฟ้องร้องด้วย{" "}
        <br />
        สัญญาฉบับนี้ถูกทำขึ้นเป็นสองฉบับมีข้อความถูกต้องตรงกัน
        คู่สัญญาทั้งสองฝ่ายยึดถือไว้ฝ่ายละฉบับ และเห็น ว่าถูกต้องตามวัตถุประสงค์
        ในสัญญาถูกต้องตรงกันแล้วจึงลงลายมือชื่อไว้ต่อหน้าพยานเป็นสำคัญ
      </div>
    </div>
  );
};

export default Preview;
