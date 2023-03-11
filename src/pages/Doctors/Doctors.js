import React from 'react'
import DoctorCard from './DoctorCard'
import DoctorData from './DoctorData'
import { FaHamburger } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Doctors = () => {
  return (
    <div>
      <div className='flex items-center justify-center'>
        <Link to='/Dashboard'><FaHamburger className='mr-48 h-10 w-10'/></Link>
        <h1 className='text-center text-gray-500 text-6xl'>Meet Our <span className='text-[#9CCD62]'>Doctors</span></h1>
      </div>
        <div className='grid grid-cols-3 items-center justify-center'>
          {DoctorData.map(data => (
          <DoctorCard image={data.image} name={data.name} specialization={data.specialization} link={data.link} />
          ))}
        </div>

    </div>
  )
}

export default Doctors