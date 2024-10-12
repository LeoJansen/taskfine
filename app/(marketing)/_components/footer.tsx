import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className='fixed bottom-0 w-full  p-4 border-t  bg-slate-100'>
      <div className='md:max-w-screen-2xl mx-auto flex justify-between  w-full items-center'>
        <Logo />
        <div className='flex  items-center '>
          <p className='text-neutral-400 text-[10px] md:text-sm'>Developed by Léo Jansen</p>
          <Button size="sm" variant="ghost" asChild>
            <Link href="https://www.leonardojansen.com">
              <Image src="/purpleleologo.svg" alt="logo" width={32} height={32} />
            </Link>
          </Button>

        </div>
     



        <div className="md:space-x-4 md:block md:w-auto flex items-center justify-end md:justify-between w-fit text-[10px] md:text-sm">
          <Button size="sm" variant="ghost" asChild>
            <Link href="/sign-in" className='p-0'>
              Privacy Policy
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
  );
};

