import React,{useState} from 'react';
import {BiBell} from 'react-icons/bi';
import {BsCalendar} from 'react-icons/bs'
import man from './man.png'
import DropDown from './DropDown';
import SideBar from './SideBar';
import DashComp from './DashComp';
import { UserAuth } from '../../context/AuthContext';



const Dash_Navbar = () => {

    const {user , logout} = UserAuth();

  return (
    <div className='flex '>
        <div className='w-[10%] h-screen rounded-r-3xl flex flex-col justify-center items-center bg-[#E0DDCA]'>
            <SideBar />
        </div>

        <div className='w-full mx-10'>

            <div className='text- flex justify-between px-5 p-3 h-20 items-center'>
                <div className='flex items-center justify-center'>
                    <h1 className='text-4xl pr-5 text-[#9CCD62]'>Hi</h1>
                    <p className='text-2xl text-gray-500'>{user && user.email}</p>
                </div>
                <div className='flex'>
                    <a><span className='p-1 px-3  cursor-pointer'><BiBell  className='mx-5'/></span></a>
                    <a><span className='p-1 px-3 cursor-pointer'><BsCalendar className='mx-5'/></span></a>
                    <a><span className='p-1 px-3 cursor-pointer'><img src={man}  className='mx-5 h-6 w-6 rounded-full'/></span></a>
                    <a><span className='p-1 px-3 cursor-pointer'><DropDown /></span></a>
                </div>
            </div>

            <div className=' '>
                <DashComp />
            </div>

        </div>
    </div>
  )
}

export default Dash_Navbar



        {/* <a href='/About'><li className='p-1 px-3 cursor-pointer'><BiBell /></li></a>
            <a href='/About'><li className='p-1 px-3 cursor-pointer'><BsCalendar /></li></a>
            <a href='/About'><li className='p-1 px-3 cursor-pointer'><RiArrowDropDownLine /></li></a> */}
      
        {/* <div className='fixed left-0 top-0 w-[8%] h-full border-r  bg-[#E0DDCA] p-4 ' >
            
            <ul className='pt-10 uppercase'>
    
            </ul>
        
        </div> */}