"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useConvexAuth } from "convex/react"
import { FaSpinner } from "react-icons/fa"
import { useCheckRole } from "@/hooks/use-check-role"

export function RoleCheck() {
    const router = useRouter()
    const { isAuthenticated, isLoading: isAuthLoading } = useConvexAuth()
    const { data: user, isLoading: isRoleLoading } = useCheckRole()

    useEffect(() => {
        if (!isAuthLoading && !isRoleLoading && isAuthenticated) {
           
            router.push("/admin")
                   
            
        } else {
            router.push("/auth")
        }
    }, [isAuthenticated, isAuthLoading, isRoleLoading, router])

    if (isAuthLoading && isRoleLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="flex flex-col items-center">
                    <FaSpinner className="text-4xl animate-spin text-blue-500 mb-2" />
                    <span className="text-lg font-medium text-gray-700">Loading please wait...</span>
                </div>
            </div>
        );
    }
    return null
}