import React from 'react'
import { currentUser } from '@clerk/nextjs/server';
import { UserButton } from '@clerk/nextjs';

const ProtectedPage =  async () => {
  const user = await currentUser();

  return (
    <div><UserButton/> button</div>
  )
}

export default ProtectedPage; 
