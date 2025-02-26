"use client"
import { signIn, signOut, useSession } from "next-auth/react";

export function Appbar(){
    const session = useSession()
    return (
        <div>
            {session.data?.user && <button onClick={()=>signOut()}>Logout</button>}
            {!session.data?.user && <button onClick={()=>signIn()}>login</button>}
        </div>
    )
}