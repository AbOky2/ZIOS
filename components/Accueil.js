import React from 'react'
import Pulse from 'react-reveal/Pulse';
import Image from 'next/image'

function Accueil() {
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-[300px]'>
              <Image src='/av2.png' width={200} height={200}/>

        <Pulse>
    <div className=" flex justify-center items-center p-4">
       <h1 className='text-[50px] text-gray-300'>
        Bienvenue chez Oky Consulting Tech.
       </h1>

    </div></Pulse>

    </div>
  )
}

export default Accueil