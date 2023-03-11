import React, { useState } from 'react'
import Branding from '../Branding'
import {AiOutlineArrowRight } from 'react-icons/ai'
import {FcGoogle } from 'react-icons/fc'
import {Link, useNavigate} from 'react-router-dom'
import { createUserWithEmailAndPassword } from '@firebase/auth'
import { UserAuth } from '../../context/AuthContext'



const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const {createUser} = UserAuth();

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/Dashboard')
    } 
    catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };


  return (
    <div className=' w-full grid grid-cols-2 py-12 font-Libre'>
        <div className='col-span-1'>
        <Branding />
        </div>

        <div className='col-span-1 flex justify-center items-center py-5 '>
            <div className='bg-[#E0DDCA] text-white h-full w-[60%] flex flex-col items-center justify-center'>
                <h1 className='text-3xl pb-5 text-[#3C3D42]'>Sign Up!</h1>

                <form className='' onSubmit={handleSubmit}>
                    <label for="email" className='text-[#3C3D42]'>Your Email Address</label><br />
                    <input type="email" id="email" name="email" placeholder='email address'  className='h-[38px] w-[278px] rounded-full px-5 text-black mb-7' 
                    onChange={(e) => setEmail(e.target.value)}/><br />

                    <label for="password" className='text-[#3C3D42]'>Choose Your Password</label><br />
                    <input type="password" id="password" name="password" placeholder='password'  className='h-[38px] w-[278px] rounded-full px-5 text-black mb-7' 
                    onChange={(e) => setPassword(e.target.value)}/><br />

                    <label for="con_pass" className='text-[#3C3D42]'>Confirm Your Password</label><br />
                    <input type="con_pass" id="con_pass" name="con_pass" placeholder='re-enter password'  className='h-[38px] w-[278px] rounded-full px-5 text-black mb-7' /><br />

                    <button className='flex justify-center items-center bg-[#9CCD62] w-[278px] h-[38px] rounded-full text-[#3C3D42]' onClick={handleSubmit}>Signup < AiOutlineArrowRight className='mx-8'/> </button>
                
                </form>

                
                <p className='py-5 text-[#3C3D42]'>or</p>

                <button className='flex justify-center items-center bg-white w-[278px] h-[38px] rounded-full text-black '>< FcGoogle className='mx-3'/><span className='mx-3'>Signup with Google</span> </button>

                <p className='py-5 underline text-[#3C3D42] '><Link to='/Login'>Already have an account?</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login