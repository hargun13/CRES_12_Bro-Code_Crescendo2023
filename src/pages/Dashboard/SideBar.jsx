import React from 'react'
import {GrHomeRounded} from 'react-icons/gr'
import {TbWorld} from 'react-icons/tb'
import {HiUsers} from 'react-icons/hi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { FcSettings } from 'react-icons/fc'
import {Link} from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <GrHomeRounded className='h-6 w-6'/>
        <p className='text-center pb-10'>Home</p>
        <TbWorld className='h-6 w-6 '/>
        <Link to='/Doctors'><p className='text-center pb-10'>Doctors</p></Link>
        <HiUsers className='h-6 w-6 '/>
        <p className='text-center pb-10'>Reports</p>
        <AiOutlineShoppingCart className='h-6 w-6 '/>
        <p className='text-center pb-32'>Medicines</p>

        <FcSettings className='h-6 w-6 '/>

    </div>
  )
}

export default SideBar