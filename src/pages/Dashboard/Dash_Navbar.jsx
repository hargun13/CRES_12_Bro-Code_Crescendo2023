import React,{useState} from 'react';
import {BiBell} from 'react-icons/bi';
import {BsCalendar} from 'react-icons/bs'
import DropDown from './DropDown';
import SideBar from './SideBar';
import DashComp from './DashComp';
import man from './man.jpg'



const Dash_Navbar = () => {

    const [nav,setNav] = useState(false);

    const handleNav =()=>{
        setNav(!nav);
    };

  return (
    <div className='flex '>
        <div className='w-[10%] h-screen rounded-r-3xl flex flex-col justify-center items-center bg-[#E0DDCA]'>
            <SideBar />
        </div>

        <div className='w-full mx-10'>

            <div className='text- flex justify-between px-5 p-3 h-20 items-center'>
                <div>
                    <h1 className='text-4xl'><span className='text-[#9CCD62]'>Hi</span>, James</h1>
                </div>
                <div className='flex'>
                    <a><span className='p-1 px-3  cursor-pointer'><BiBell  className='mx-5'/></span></a>
                    <a><span className='p-1 px-3 cursor-pointer'><BsCalendar className='mx-5'/></span></a>
                    <a><span className='p-1 px-3 cursor-pointer'><img src={man}  className='mx-5 w-6 h-6 rounded-full'/></span></a>
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