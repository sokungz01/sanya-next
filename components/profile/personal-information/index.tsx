import React from "react";
import Input from "../../input";
import Image from "next/image";
import { useSession, getSession } from "next-auth/react";
function PersonalInformation() {
  const { data: session, status } = useSession({ required: true });
  const loading = status === "loading";
  // personal information card
  if (status == "authenticated") {
    return (
      <>
        <div className="p-5 drop-shadow-2xl">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="p-5 flex flex-row shadow overflow-hidden  border-b border-gray-200 sm:rounded-lg bg-slate-200">
                  {/* Image Section */}
                  <div className="p-4">
                    <div className="h-20 w-20  relative">
                      <Image
                        src={session.user.image}
                        alt="user"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                    <h3 className="pt-2 text-xl text-sub">ข้อมูลส่วนตัว</h3>
                  </div>
                  {/* Form Section */}
                  <div className="flex-1 flex-col p-5 bg-slate-500`">
                    {/* ชื่อ นามสกุล */}
                    <div className="flex flex-row">
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="ชื่อ"
                      />
                      <Input
                        type="text"
                        name="surname"
                        id="surname"
                        placeholder="นามสกุล"
                      />
                    </div>
                    {/* Date Gender ID */}
                    <div className="flex flex-row">
                      <Input
                        type="date"
                        name="date"
                        id="date"
                        label="วันเดือนปีเกิด"
                      />
                      <Input
                        type="text"
                        name="id"
                        id="id"
                        placeholder="เลขบัตรประชาชน"
                      />
                    </div>
                    {/* Contact => phone-Email*/}
                    <div className="flex flex-row">
                      <Input
                        type="text"
                        name="phone"
                        id="phone"
                        label="โทรศัพท์"
                      />
                      <Input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    {/* Role Status*/}
                    <div className="flex flex-row">
                      <Input type="text" name="role" id="role" label="อาชีพ" />
                      <Input
                        type="text"
                        name="status"
                        id="status"
                        placeholder="สถานะ"
                      />
                    </div>
                    {/* Address Section*/}
                    <Input type="text" name="role" id="role" label="ที่อยู่" />
                    <div className="flex flex-row">
                      <Input
                        type="text"
                        name="postcode"
                        id="postcode"
                        label="รหัสไปรษณีย์"
                      />
                      <Input
                        type="text"
                        name="province"
                        id="province"
                        placeholder="อำเภอเขต"
                      />
                    </div>
                    <div className="flex flex-row">
                      <Input
                        type="text"
                        name="postcode"
                        id="postcode"
                        label="ตำบล"
                      />
                      <Input
                        type="text"
                        name="province"
                        id="province"
                        placeholder="จังหวัด"
                      />
                    </div>
                  </div>
                </div>
              </div>
                <button className="flex items-center  text-white bg-sub rounded-full">
                  บันทีก  
                </button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    <div></div>;
  }
}

export default PersonalInformation;

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  return {
    props: { session },
  };
};
