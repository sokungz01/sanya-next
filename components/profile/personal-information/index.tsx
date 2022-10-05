import React from "react";
import Input from "../../input";

function PersonalInformation() {
  // personal information card
  return (
    <div className="p-5 drop-shadow-2xl">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="p-5 flex flex-row shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-slate-200">
              <div className="p-2">
                <h3>ข้อมูลส่วนตัว</h3>
              </div>
              <div className="flex-1 flex-col p-5 bg-slate-500`">
                <div className="flex flex-row">
                  <Input type="text" name="name" id="name" placeholder="ชื่อ" />
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="นามสกุล"
                  />
                </div>
                <Input type="text" name="name" id="name" placeholder="ชื่อ" />
                <Input type="text" name="name" id="name" placeholder="ชื่อ" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
