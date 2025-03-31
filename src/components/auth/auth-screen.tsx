"use client"

import { useConvexAuth } from "convex/react";
import { useState } from "react"
import { SignInCard } from "./sign-in-card";
import { SignUpCard } from "./sign-up-card";
import { RoleCheck } from "./logged-in";

export type AuthFlow = "signIn" | "signUp";

export const AuthScreen = () => {
    const [state, setState] = useState<AuthFlow>("signIn")
    const { isAuthenticated } = useConvexAuth()

    if (isAuthenticated) {
        return <RoleCheck />
    }

    return (
       
        <div className="h-full flex items-center justify-center ">
            <div className="md:h-auto md:w-[420px]">
                {state === "signIn" ? <SignInCard  /> : <SignUpCard setState={setState} />}
            </div>
        </div>
       
    )
}