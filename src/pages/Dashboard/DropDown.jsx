import React from 'react'
import {RiArrowDropDownLine} from 'react-icons/ri'

const DropDown = () => {

    const drop_data =[
        {
            name: "My History",
            link: "" 
        }
    ]


  return (
    <div class="relative group  ">

        <button class="flex w-auto   font-bold md:w-auto md:inline md:mt-0 text-gray-600 text-sm  cursor-pointer items-center justify center  ">
            <span className='flex items-center justify-center  '><RiArrowDropDownLine className='mx-5'/></span>
        </button>

        <div class="absolute  hidden group-hover:block group-hover:-mx-16">   
            <div class="  bg-white shadow-lg hover:bg-[#E0DDCA] hover:rounded-xl w-28 ">

            {drop_data.map(data => (
            <div class="px-4 text-gray-600 font-bold text-sm py-4  cursor-pointer">
                <a href={data.link}><p>{data.name}</p></a>
            </div>
            ))}
            

            </div>
        </div>

    </div>
  )
}

export default DropDown