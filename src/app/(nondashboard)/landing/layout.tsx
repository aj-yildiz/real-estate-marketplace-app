import React from 'react'
import Navbar from '@/components/Navbar' // Adjust the path as needed
import { NAVBAR_HEIGHT } from '@/lib/constants' // Adjust the path as needed

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar /> 
      <main className="h-full flex w-full flex-col pt-[64px]">
        {children}
      </main>
    </div>
  )
}

export default Layout

