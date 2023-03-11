import {BsPersonCircle, BsChevronRight} from 'react-icons/bs';

const Personalinfo = () => {
    return (
        <section className="">
        <section className="bg-black opacity-90 w-full h-full absolute flex items-center justify-center "> </section>
            <section className="flex justify-center items-center">
                <div className="bg-[#E0DDCA] w-3/6 h-2/3 absolute top-24 rounded-xl p-3">
                    <div className='flex justify-between'>
                    <section className='flex items-center gap-2'>
                        <BsPersonCircle/>
                        <h1>Personal Information</h1>
                    </section>
                    <section>
                        <p className='font-semibold'>1/3</p>
                    </section>
                    </div>
                    <div className='h-[1px] bg-black mt-3'></div>
                    <section>
                        <div class="grid grid-cols-2 gap-x-12 gap-y-4 w-full mt-5 ml-5">        
                            <div className='w-64 h-20 rounded-lg p-2 bg-[#9CCD62]'>Name<br />
                            <input type="tel" className='bg-inherit border-b-2 border-black w-full'/></div>
                            <div className='w-64 h-20 rounded-lg p-2 bg-[#9CCD62]'>Contact no<br /><input type="text" className='bg-inherit border-b-2 border-black w-full'/></div>
                            <div className='w-64 h-20 rounded-lg p-2 bg-[#9CCD62]'>Emergency Contact no <br />
                            <input type="tel" className='bg-inherit border-b-2 border-black w-full'/></div>
                            <div className='w-64 h-20 rounded-lg p-2 bg-[#9CCD62]'>Birth Date <br />
                            <input type="date" className='bg-inherit border-b-2 border-black w-full'/></div>
                            <div className='w-64 h-20 rounded-lg p-2 bg-[#9CCD62]'>Emergency email <br />
                            <input type="email" className='bg-inherit border-b-2 border-black w-full '/></div>
                            <div className='w-64 h-20 rounded-lg p-2 bg-[#9CCD62]'>Address <br />
                            <input type="email" className='bg-inherit border-b-2 border-black w-full '/></div>
                        </div>
                    </section>
                    <button className='flex items-center bg-[#3C3D42] text-[#9CCD62] px-4 py-1 rounded-sm absolute 
                    right-12 bottom-10'>Next <BsChevronRight className='text-[#9CCD62]'/></button>
                </div>
            </section>
        </section>
            

    )
}

export default Personalinfo
