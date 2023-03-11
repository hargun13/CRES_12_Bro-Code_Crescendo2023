import React from 'react';
import logo from './img/NicePng_leaf-logo-png_1176328.png';
import Rightarrow from './img/arrow-right.png';
import page1 from './img/home-removebg-preview.png';
import page2 from './img/login-removebg-preview.png';
import page3 from './img/intro_page-removebg-preview.png';
import khaled from './img/accuray-khajEKGDSgg-unsplash.jpg';
import national from './img/national-cancer-institute-cw2Zn2ZQ9YQ-unsplash.jpg';
import SS from './img/ss.png';
import Footer from './Footer';

import {Link} from 'react-router-dom';

const Landing = () => {
    return(
        <main className='w-full'>
            <header>
        <nav class=" bg-[#FFFFFF] h-32 flex justify-between p-5 shadow-lg">
            <section class="flex items-center gap-5">
                <img src={logo} alt="" className='w-16'/>
                <h1 class="text-5xl text-[#3C3D42]">Brand Name</h1>
            </section>
            <section class="flex items-center gap-5">
                <button class="w-40 h-16 rounded-full bg-[#9CCD62] "><Link to='/Login' >Login</Link></button>
                <button class="w-40 h-16 rounded-full bg-[#9CCD62] "><Link to=' /Register'>Sign Up</Link></button>
            </section>
        </nav>
    </header>
            <div class="my-24 px-20">
                <section class="flex flex-col gap-20">
                    <h1 class="font-bold text-3xl">Keeping you Healthy!</h1>
                    <p class="text-lg w-1/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aliquid rerum, soluta esse voluptatem totam incidunt magnam, nisi iure maiores cum ex delectus assumenda porro?</p>
                    <button class="flex items-center bg-[#9CCD62] w-64 h-16 rounded-full justify-center">Get Started Now &nbsp;<img src={Rightarrow} alt=""></img></button>
                </section>
                <section>
                    <img src={page1} alt="" class="absolute top-[200px] left-[1119px] w-36"/>
                    <img src={page2} alt="" class="absolute top-[250px] left-[1069px] w-36"/>
                    <img src={page3} alt="" class="absolute top-[300px] left-[1019px] w-36"/>
                </section>
            </div>

            <section class="mt-28 mb-5 flex justify-between bg-[#3C3D42]">
                <div>
                    <img src={SS} alt="" className="h-[400px]"/>
                </div>
                <div class="w-1/2 pr-20  flex flex-col my-20 gap-5">
                    <h1 class="text-slate-50 text-xl">Our Services</h1>
                    <p class="text-slate-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae lacus arcu. Vestibulum vel dui ac erat ornare dapibus. Donec sem est, efficitur eu pulvinar quis, ultrices ac sem. Vestibulum quis congue odio, tincidunt sollicitudin tellus. Sed vitae accumsan nisi. Phasellus ultricies neque ac diam ornare vehicula. Donec in faucibus velit. Sed at metus euismod,</p>
                </div>
            </section>
            <section class=" bg-[#9CCD62] flex justify-around items-center h-[400px] ">
                <section class="w-1/2">
                    <h1 class="text-xl font-semibold mb-5">Our Doctors</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat perferendis quasi veritatis dolorum quisquam repudiandae porro suscipit magni, dicta labore accusamus architecto saepe nulla cumque eum culpa eos sapiente ut. Magnam maiores similique sint!</p>
                </section>
                <section>
                    <img src={khaled} alt="" className="h-[400px]"/>
                </section>
            </section>
            <section class=" h-96 flex flex-row-reverse justify-around items-center mt-5 mb-5">
                <section class="w-1/2">
                    <h1 class="text-xl font-semibold mb-5">Heading</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem eius saepe animi sapiente. Nisi commodi saepe sit obcaecati debitis! Quo asperiores vitae quam est laboriosam!</p>
                </section>
                <section>
                <img src={national} alt="" className="h-[385px]"/>
                </section>
            </section>
            
            <Footer />
        </main>
        
        
    )
}

export default Landing