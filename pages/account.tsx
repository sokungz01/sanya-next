import React from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Image from "next/image";

export default function Account() {
  const { data: session, status } = useSession({ required: true });
  const loading = status === "loading";
  if (status == "authenticated") {
    return (
      <div>
        <h1>Hello, Welcome &quot;{session.user?.name}&quot;</h1>
        <h3>Email : {session.user?.email}</h3>
        <h4>{JSON.stringify(session)}</h4> <br />
        <div className="h-96 w-96 relative">
          <Image
            src={session.user.image}
            alt="user"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <button onClick={() => signOut()}>signOut</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>You are not signIn</p>
        <button onClick={() => signIn()}>signIn</button>
      </div>
    );
  }
}

// export const getServerSideProps = async (context) => {
//   const session = await getSession(context);
//   if (!session) {
//     return {
//       redirect: {
//         destination: "/login",
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// };
