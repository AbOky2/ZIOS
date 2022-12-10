import React from 'react'
import { useScrollPosition } from '../hooks/useScrollPosition';
import { slide as Menu } from 'react-burger-menu'

function Header() {
    const scrollPosion = useScrollPosition();
    console.log(scrollPosion);
  return (
    
    <nav className=' bg-white sticky top-0 z-50 shadow-md w-full'>
  <div className='flex justify-between w-full'>
      <div>
        <img src="logo.jpg" width={150} height={150} alt="placehold images"/>
      </div>
      <div className='md:flex  items-center space-x-8 mr-4 cursor-pointer'>
        <a className='coolLink'>
          <span>
            A propos
            </span>
            </a>
            <a className='coolLink'>
          <span>
            Qui sommes-nous
            </span>
            </a><a className='coolLink'>
          <span>
            Nous contacter
            </span>
            </a>
       
      </div>
      
  </div>
</nav>
  )
}

export default Header