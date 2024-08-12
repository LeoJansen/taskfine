import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className='fixed bottom-0 w-full  p-4 border-t  bg-slate-100'>
      <div className='md:max-w-screen-2xl mx-auto flex justify-between w-full items-center'>
       <Logo />
       <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
        <Button size="sm" variant="ghost" asChild>
          <Link href="/sign-in">
          Privacy Policy
g
          </Link>
          
        </Button>
        
        
          <Button size="sm" variant="ghost" asChild>
            <Link href="/sign-up">
            Terms of Service
            </Link>
            </Button>

       </div>
        </div>
        </div>
  )
}

