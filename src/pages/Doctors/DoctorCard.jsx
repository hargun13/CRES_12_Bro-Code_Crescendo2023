import React from 'react'
import doctor from '../Dashboard/man.png'
import data from '../Doctors/DoctorData'

const DoctorCard = (doc_data) => {
    const { image , name, specialization , link } = doc_data
  return (
    <div className='flex items-center justify-center'>
        

        <div className=' grid-cols-3 gap-x-10 m-20 '>


            <div class="group h-[256px] w-[256px] [perspective:1000px] my-10 ">
                

                <div class="relative border-4 border-[#9CCD62] rounded-2xl h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                    <div class="absolute inset-0 flex justify-center items-center">
                    
                    {/* sponsor image mapping to be done here */}
                    <img src={image} height={123} width={168.39} /> 
                    
                    </div>

                    <div class="absolute inset-0 rounded-xl bg-black/80 text-white px-12 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">

                        <div class="flex min-h-full flex-col items-center justify-center">

                            {/* name mapping to be done here */}
                            <h1 class="text-3xl font-bold py-1">{name}</h1>

                            {/* partner name mapping to be don here or a short description */}
                            <p class="text-lg py-1">{specialization}</p>

                            {/* link mapping to be done here */}
                            <a href={link}>
                                <button class="my-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                                    Schedule a Meeting
                                </button>
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default DoctorCard