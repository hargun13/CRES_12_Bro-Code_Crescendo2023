import React from 'react'

const DashComp = () => {
  return (
    <div className='flex flex-row justify-evenly'>
        <div className='flex flex-col gap-5'>
            <div class="grid grid-cols-2 gap-x-12 gap-y-4 w-full">        
                <div className='w-80 h-20 rounded-lg p-2 bg-[#E0DDCA]'>item1</div>
                <div className='w-80 h-20 rounded-lg p-2 bg-[#E0DDCA]'>item2</div>
                <div className='w-80 h-20 rounded-lg p-2 bg-[#E0DDCA]'>item3</div>
                <div className='w-80 h-20 rounded-lg p-2 bg-[#E0DDCA]'>item4</div>
                <div className='w-80 h-20 rounded-lg p-2 bg-[#E0DDCA]'>item5</div>
                <div className='w-80 h-20 rounded-lg p-2 bg-[#E0DDCA]'>item6</div>
            </div>
            <div className='bg-[#E0DDCA] w-full h-80 rounded-xl p-2'>
                item7
            </div>
        </div>
        <div className='bg-[#E0DDCA] w-1/3 rounded-xl p-2'>
            item8
        </div>
    </div>
    
  )
}

export default DashComp