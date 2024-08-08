import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/">
        <div>
            <Image src="/logo.svg" alt="Taskify" width={30} height={30} />
            <p>Logo</p>
        </div>
    </Link>
  )
}

export default Logo