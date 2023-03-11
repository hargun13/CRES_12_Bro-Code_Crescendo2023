import React from 'react'
import {RiArrowDropDownLine} from 'react-icons/ri'
import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const DropDown = () => {

    

    const {user , logout} = UserAuth();

    const navigate = useNavigate()

    const handleLogout = async() => {
        try{
            await logout();
            navigate('/');
        }
        catch (e) {
            console.log(e.message)
        }
    }

    const drop_data =[
        {
            name: "My History",
            link: "" ,
            function:''
        },
        {
            name: "Logout",
            link:"",
            function:"handleLogout"
        }
    ]


  return (
    <div class="relative group  ">

        <button class="flex w-auto   font-bold md:w-auto md:inline md:mt-0 text-gray-600 text-sm  cursor-pointer items-center justify center  ">
            <span className='flex items-center justify-center  '><RiArrowDropDownLine className='mx-5'/></span>
        </button>

        <div class="absolute rounded-2xl  hidden group-hover:block group-hover:-mx-16">   
            <div class="  bg-white shadow-lg rounded-2xl   w-28 ">

      
            <div class="px-4 text-gray-600 hover:rounded-xl hover:bg-[#E0DDCA] font-bold text-sm py-4  cursor-pointer" onClick={handleLogout}>
                <button onClick={handleLogout}>Logout</button>
            </div>
         
            

            </div>
        </div>

    </div>
  )
}

export default DropDown