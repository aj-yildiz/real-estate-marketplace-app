import React from 'react'

const NAVBAR_HEIGHT = 64 // You can change this as needed

const Navbar = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full z-50 shadow-xl"
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <div className="flex justify-between items-center w-full py-3 px-8 bg-700">
        <div className="flex items-center gap-4">
        </div>
      </div>
    </div>
  )
}

export default Navbar
