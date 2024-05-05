import React from 'react'
import SideNav from '../ui/dashboard/sidenav'

function layout({children}: {
    children: React.ReactNode
}) {
  return (
    <section className='flex flex-row justify-center items-center'>
        <div className='max-w-[400px] h-[100%] mr-auto'>
            <SideNav />
        </div>
        <div className='w-[100%]'>
            {children}
        </div>
    </section>
  )
}

export default layout