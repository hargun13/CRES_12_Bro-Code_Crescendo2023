import React from 'react'
import Branding from '../Branding'
import {AiOutlineArrowRight } from 'react-icons/ai'
import {FcGoogle } from 'react-icons/fc'


const Login = () => {
  return (
    <div className='h-screen w-full grid grid-cols-2 py-12'>
        <div className='col-span-1'>
        <Branding />
        </div>

        <div className='col-span-1 flex justify-center items-center py-5 '>
            <div className='bg-[#3C3D42] text-white h-full w-[60%] flex flex-col items-center justify-center'>
                <h1 className='text-3xl pb-5'>Sign In!</h1>

                <form className=''>
                    <label for="email">Your Email Address</label><br />
                    <input type="email" id="email" name="email" placeholder='email address'  className='h-[38px] w-[278px] rounded-full px-5 text-black mb-7' /><br />

                    <label for="password">Choose Your Password</label><br />
                    <input type="password" id="password" name="password" placeholder='password'  className='h-[38px] w-[278px] rounded-full px-5 text-black mb-7' /><br />

                    <button className='flex justify-center items-center bg-[#9CCD62] w-[278px] h-[38px] rounded-full'>Signup < AiOutlineArrowRight className='mx-8'/> </button>
                
                </form>

                <p className='py-5'>or</p>

                <button className='flex justify-center items-center bg-white w-[278px] h-[38px] rounded-full text-black '>< FcGoogle className='mx-3'/><span className='mx-3'>SignIn with Google</span> </button>

                
                    <p className='pt-5'>Don't have an account?</p>
                    <p className='pt-2'>Forgot Password</p>
               

            </div>
        </div>

    </div>
  )
}

export default Login