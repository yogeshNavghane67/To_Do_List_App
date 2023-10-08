import Image from "next/image";
import React from 'react';
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {

const {data: session} = useSession();

  return (
    <div className='flex justify-between items-center py-4 text-white'>
        <div className="text-3x1">ToDo App</div>
        <div className="cursor-pointer" onClick={() => signOut}>
            <Image 
              className="rounded-full" 
              src={session?.user?.image!} 
              alt="dp" 
              width={40} 
              height={40} 
            />
        </div>
    </div>
  )
}

export default Navbar