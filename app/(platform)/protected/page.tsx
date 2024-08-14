import React from 'react'
import { currentUser } from '@clerk/nextjs/server';

const ProtectedPage =  async () => {
  const user = await currentUser();

  return (
    <div>User: {user?.firstName} </div>
  )
}

export default ProtectedPage; 
