import React from 'react'
import Image from 'next/image'


function Section() {
  return (
    <div>

        <h1 className='flex items-center justify-center text-center text-blue-900 font-[Open Sans] text-[60px] font-600 mt-16 mb-16'>A propos de nous</h1>

        <div className='flex justify-between mb-8 mt-8 iphone3:grid iphone3:grid-rows-1 bg-red-300 gap-4 p-4'>
            <div>
            Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam 

            </div>
            <div className=' shadow-lg p-4 '>
                <h1 className=' font-bold text-[60px] font-[Open Sans]  text-[#333333] flex justify-center items-center mb-4'>Un endroit unique</h1>
                <p className='leading-7'>
                    Avec zios aeronautics vous avez la possibilité de pouvoir réaliser votre rêve de pilote.
                    Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam 
                </p>

            </div>
        </div>

        <h1 className='flex items-center justify-center text-center text-blue-900 font-[Open Sans] text-[60px] font-600 mt-16 mb-16'>Quels sont nos offres</h1>

<div className='flex justify-between mb-8 mt-8'>
    <div className='w-full '>
    <img src="edu.png" width="100%"  alt="placehold images"/>


    </div>
    <div className='  p-4 '>
        <h1 className=' font-bold text-[30px] font-[Open Sans]  text-[#0F756B] flex justify-center items-center mb-4'>Une formation en anglais</h1>
        <p className='font-[Open Sans] leading-9'>
            Avec zios aeronautics vous avez la possibilité de pouvoir réaliser votre rêve de pilote.
            Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam 
        </p>

    </div>
</div>





    
    
      
      
      
      </div>
  )
}

export default Section