"use client"

import React from "react";

interface MissionSearchProps {
  title: string,
  missionInstruction: string,
  missionName: string,
  children?: React.ReactNode
}


const MissionInstruction = ( { title, missionInstruction, missionName, children }: MissionSearchProps ) => {

  return (
    <section className=" min-h-screen -my-6 grid grid-rows-2  p-5 mx-auto container ">
    <div className="flex flex-col gap-10 items-start align-top justify-start ">
      <p className=" text-black opacity-30" >Mission Name: {missionName}</p>
      <h2 className=" text-black opacity-30 text-[36px] font-semibold py-5">
        {title}
      </h2>
    </div>
    {children}

    <div className="grid grid-cols-5 gap-10 text-2xl font-light">
      <div className="col-span-4">
      <div className='grid grid-cols-6'>
        <p className='col-span-6'>
            {missionInstruction}
        </p>
        </div>

      </div>
    </div>
  </section>
  )
}

export default MissionInstruction