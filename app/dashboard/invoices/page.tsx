import { CreateInvoice } from '@/app/ui/invoices/buttons'
import Search from '@/app/ui/search'
import React from 'react'

async function page() {
    const res = await fetch("https://catfact.ninja/fact")
    const {fact} = await res.json()
  return (
    <div className='p-4'>
      <h2 className='text-xl font-bold mb-5'>Invoices</h2>
      <div className='flex flex-row justify-center items-center gap-4'>
      <Search placeholder='Search a invoice...'/>
      <CreateInvoice />
      </div>
    </div>
  )
}

export default page