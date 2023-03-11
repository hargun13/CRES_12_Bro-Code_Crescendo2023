import React from 'react'
import Branding from '../Branding'
import {AiOutlineArrowRight } from 'react-icons/ai'
import {FcGoogle } from 'react-icons/fc'


const Login = () => {
  return (
    <div className='h-screen w-full grid grid-cols-2 py-12 font-Libre'>
        <div className='col-span-1'>
        <Branding />
        </div>

        <div className='col-span-1 flex justify-center items-center py-5 '>
            <div className='bg-[#E0DDCA] text-white h-full w-[60%] flex flex-col items-center justify-center'>
                <h1 className='text-3xl pb-5 text-[#3C3D42]'>Sign In!</h1>

                <form className=''>
                    <label for="email" className='text-[#3C3D42]'>Your Email Address</label><br />
                    <input type="email" id="email" name="email" placeholder='email address'  className='h-[38px] w-[278px] rounded-full px-5 text-black mb-7' /><br />

                    <label for="password" className='text-[#3C3D42]'>Choose Your Password</label><br />
                    <input type="password" id="password" name="password" placeholder='password'  className='h-[38px] w-[278px] rounded-full px-5 text-black mb-7' /><br />

                    <button className='flex justify-center items-center bg-[#9CCD62] w-[278px] h-[38px] rounded-full text-[#3C3D42]'>Signup < AiOutlineArrowRight className='mx-8'/> </button>
                
                </form>

                <p className='py-5 text-[#3C3D42]'>or</p>

                <button className='flex justify-center items-center bg-white w-[278px] h-[38px] rounded-full text-black '>< FcGoogle className='mx-3'/><span className='mx-3'>SignIn with Google</span> </button>

                
                    <a href='#' className='pt-5 underline text-[#3C3D42]'>Don't have an account?</a>
                    <a href='#' className='pt-2 underline text-[#3C3D42]'>Forgot Password</a>
               

            </div>
        </div>

    </div>
  )
}

export default Login