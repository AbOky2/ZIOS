import React from 'react'
import Slide from 'react-reveal/Slide';
import Image from 'next/image'



function Deroule() {
  return (
    <Slide bottom>
      <div className='p-4'>
        <h1 className=' text-[2.6rem] font-bold'>Création et maintenance des site web</h1>
        <p className='text-[14pt] mb-4'>
        Oky Consulting Tech vous propose la création, avec des outils de pointe, des sites web modernes, fluides et complement adaptés à vos besoins
        </p>
        <div className='bg-green-200 items-center object-fill p-2 rounded-xl flex w-full'>
                {/* <Image src='/article1.png' width={900} height={500} className='border rounded-sm'/> */}

        </div>
      </div>

      <div className='p-4 bg-gray-400 mb-4 rounded-[185px] '>
        <h1 className=' text-[2.6rem] font-bold'>Création des applications mobiles</h1>
        <p className='text-[14pt] mb-4'>
        Oky Consulting Tech vous propose la création, avec des outils de pointe, des sites web modernes, fluides et complement adaptés à vos besoins
        </p>
        {/* <Image src='/article2.png' width={900} height={500}/> */}
        </div>
        <div className='p-4 bg-gray-400'>
            <h1 className=' text-[2.6rem] font-bold'>Consulting</h1>

        <p className='text-[14pt]'>
        Oky Consulting Tech vous propose la création, avec des outils de pointe, des sites web modernes, fluides et complement adaptés à vos besoins
        </p>
        {/* <Image src='/consulting.jpeg' width={900} height={500}/> */}
      </div>
      <div className='p-4'>
        <h1 className=' text-[2.6rem] font-bold'>Analyse de donnée et création des dashboard</h1>
        <p className='text-[14pt]'>
        Oky Consulting Tech vous propose la création, avec des outils de pointe, des sites web modernes, fluides et complement adaptés à vos besoins
        </p>
        {/* <Image src='/bp.jpeg' width={900} height={500}/> */}
      </div>
      
      
    
</Slide>
  )
}

export default Deroule