import React from "react";
import Input from "../../input";

function Inbox() {
  // personal information card
  return (
    <div className="p-5">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <h3>ข้อมูลส่วนตัว</h3>
              <div>
                <Input type="text" name="name" id="name" placeholder="ชื่อ" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
