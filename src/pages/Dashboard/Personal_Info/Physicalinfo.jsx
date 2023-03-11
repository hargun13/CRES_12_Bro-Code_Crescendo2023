import {BsPersonCircle, BsChevronRight} from 'react-icons/bs';


const Physicalinfo = () => {
    return (
        <section className="">
        
       
        <section className="bg-black opacity-90 w-full h-full absolute flex items-center justify-center "> </section>
            <section className="flex justify-center items-center">
                <div className="bg-[#E0DDCA] w-3/6 h-2/3 absolute top-24 rounded-xl p-3">
                    <div className='flex justify-between'>
                    <section className='flex items-center gap-2'>
                        <BsPersonCircle />
                        <h1>Personal Information</h1>
                    </section>
                    <section>
                        <p className='font-semibold'>2/3</p>
                    </section>
                    </div>
                    <div className='h-[1px] bg-black mt-3'></div>
                    <section>
                        <div class="grid grid-cols-1 gap-x-12 gap-y-4 w-full mt-5 ml-5">        
                            <div className='w-64 h-20 rounded-lg p-2 bg-[#9CCD62]'>Gender<br />
                            <input type="tel" className='bg-inherit border-b-2 border-black w-full'/></div>
                            <div className='w-64 h-20 rounded-lg p-2 bg-[#9CCD62]'>Height (in inch) <br />
                            <input type="email" className='bg-inherit border-b-2 border-black w-full '/></div>
                            <div className='w-64 h-20 rounded-lg p-2 bg-[#9CCD62]'>Weight (in kg) <br />
                            <select name="" id="" className='bg-[#E0DDCA] text-[#3C3D42] my-3'>
                                <option value="male" className='bg-[#3C3D42]'>Male</option>
                                <option value="female" className='bg-[#3C3D42]'>Female</option>
                                <option value="others" className='bg-[#3C3D42]'>Others</option>
                                </select></div>
                        </div>
                    </section>
                    <button className='flex items-center bg-[#3C3D42] text-[#9CCD62] px-4 py-1 rounded-sm absolute 
                    right-12 bottom-10'>Next <BsChevronRight className='text-[#9CCD62]'/></button>
                </div>
            </section>
        </section>
    )
}

export default Physicalinfo