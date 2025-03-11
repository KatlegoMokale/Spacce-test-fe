import React from 'react'

const Footer = () => {
  return (
    <div className=' h-[69px] bg-transparent grid grid-cols-2 absolute bottom-0 w-full border-t-2 border-white border-opacity-20  text-white px-14'>
        <div className=' col-span-1 flex justify-start gap-5 items-center'>
            <p>
                @2025 Spacce. All rights reserved.
            </p>
        </div>
        <div className=' col-span-1 flex justify-end  gap-5 items-center '>
            <p>
                Privacy Policy
            </p>
            <p>
                Terms of Service
            </p>
            <p>
                Cookie Settings
            </p>
        </div>
    </div>
  )
}

export default Footer