import React from 'react';

import {

  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=' mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-center justify-center bg-[#3C3D42] text-gray-300'>
        <div className='mx-5'>
            
            <p className='py-4'>At <span className='text-[#9CCD62]' style={{fontFamily:"Josefin Sans"}}>Brand Name</span>, we are always happy to help our customers! <br/> You can check out socials below, we would love to communicate!</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare size={30} className='hover:bg-[#9CCD62] hover:rounded-md cursor-pointer '/>
                <FaInstagram size={30} className='hover:bg-[#9CCD62] hover:rounded-md cursor-pointer '/>
                <FaTwitterSquare size={30} className='hover:bg-[#9CCD62] hover:rounded-md cursor-pointer '/>
                <FaGithubSquare size={30} className='hover:bg-[#9CCD62] hover:rounded-md cursor-pointer '/>
            
            </div>
          </div>
        <div className='lg:col-span-2 mx-5 flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-[#9CCD62]'>Solutions</h6>
            <ul>
                <li className='py-2 text-sm hover:text-[#9CCD62] cursor-pointer'>Analytics</li>
                <li className='py-2 text-sm hover:text-[#9CCD62] cursor-pointer'>Marketing</li>
                <li className='py-2 text-sm hover:text-[#9CCD62] cursor-pointer'>Commerce</li>
                <li className='py-2 text-sm hover:text-[#9CCD62] cursor-pointer'>Insights</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-[#9CCD62]'>Support</h6>
            <ul>
                <li className='py-2 text-sm hover:text-[#9CCD62] cursor-pointer'>Pricing</li>
                <li className='py-2 text-sm hover:text-[#9CCD62] cursor-pointer'>Documentation</li>
                <li className='py-2 text-sm hover:text-[#9CCD62] cursor-pointer'>Guides</li>
                <li className='py-2 text-sm hover:text-[#9CCD62] cursor-pointer'>API Status</li>
            </ul>
        </div>
        
        <div>
            <h6 className='font-medium text-[#9CCD62]'>Legal</h6>
            <ul>
                <li className='py-2 text-sm hover:text-[#9CCD62] cursor-pointer'>Claim</li>
                <li className='py-2 text-sm hover:text-[#9CCD62] cursor-pointer'>Policy</li>
                <li className='py-2 text-sm hover:text-[#9CCD62] cursor-pointer'>Terms</li>
            </ul>
        </div>
      </div>
      <p className='text-center w-full font-medium text-xl'>All Copyrights &copy;  Reserved 2023 <span className='text-[#9CCD62]'>Brand Name </span>Inc.</p>
    </div>
  );
};

export default Footer;