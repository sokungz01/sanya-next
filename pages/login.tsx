import type { Session } from "next-auth";
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";
export default function Login() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  if (session) {
    return (
      <div>
        Welcome,{session.user?.email} <br />
        <button onClick={() => signOut()}>signOut</button>;
      </div>
    );
  } else {
    return (
      <div>
        <h4>You're not signIn</h4>
        <button className="text-lg" onClick={() => signIn()}>
          Signin
        </button>
      </div>
    );
  }
}
