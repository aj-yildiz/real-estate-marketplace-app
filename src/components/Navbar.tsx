'use client';

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-xl bg-gray-700">
      <div className="flex items-center justify-between w-full py-3 px-8">
        {/* Left: Logo/Brand */}
        <div className="flex items-center gap-2">
          {/* Your Logo here */}
          <span className="text-xl font-bold text-white">Rentiful</span>
        </div>
        {/* Right: Auth Buttons */}
        <div className="flex items-center gap-5">
          <Link href="/signin">
            <Button
              variant="outline"
              className="text-white border-white bg-transparent hover:bg-white hover:text-gray-900"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              variant="outline"
              className="text-white bg-secondary-600 hover:bg-white hover:text-gray-900 border-white"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
