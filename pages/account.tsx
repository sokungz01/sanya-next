import React from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

export default function account() {
  const { data: session, status } = useSession({ required: true });
  const loading = status === "loading";
  if (status == "authenticated") {
    return (
      <div>
        <h1>Hello, Welcome &quot;{session.user?.name}&quot;</h1>
        <h3>Email : {session.user?.email}</h3>
        <img src={session.user?.image} alt="" /> <br />
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
