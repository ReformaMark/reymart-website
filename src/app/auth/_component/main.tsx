'use client'
import React from 'react'
interface MainProps {
  children: React.ReactNode
}
function Main({children}:MainProps) {
  return (
    <div>
     
        <main className="flex-1">{children}</main>
    </div>
  )
}

export default Main