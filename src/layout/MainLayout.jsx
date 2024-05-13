import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import { useStateContext } from '../context/ContextProvider'
import { GiHamburgerMenu } from "react-icons/gi";

const MainLayout = ({ children }) => {
  const { activeMenu, setActiveMenu } = useStateContext()
  
  return (
    <div className='flex w-full h-full bg-slate-100 relative'>
      <div className='hidden sm:block w-48'>
        <Sidebar />
      </div>

      <GiHamburgerMenu onClick={() => setActiveMenu(true)} className='sm:hidden absolute left-3 top-3 cursor-pointer' />

      <main className='p-4 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto w-full h-full pt-4 pb-6'>
        {children}
      </main>

      {
        activeMenu && <div className='absolute left-0 top-0 bottom-0 w-fit'> <Sidebar /></div>
      }
    </div>
  )
}

export default MainLayout