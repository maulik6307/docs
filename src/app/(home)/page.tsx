
import React from 'react'
import Navbar from './navbar'

export default function page() {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='fixed top-0 left-0 right-0 z-10 bg-white h-16 p-4'>
        <Navbar />
      </div>
      <div className='mt-16'>
        page
      </div>
    </div>
  )
}
