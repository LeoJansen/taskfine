import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

export const MarketingNavbar = () => {
  const {userId} = auth();

  return (
    <div className='fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center'>
      <div className='md:max-w-screen-2xl mx-auto flex justify-between w-full items-center'>
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          {userId ? (
            <Button size="sm" variant="outline" asChild>
            <Link href="/select-org">
              Enter
            </Link>
          </Button>

          ) : (
            <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">
              Login
            </Link>
          </Button>
          ) }
          


          <Button size="sm" asChild>
            <Link href="/sign-up">
              Get Taskifine for free
            </Link>
          </Button>

        </div>
      </div>
    </div>
  )
}

