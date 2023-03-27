import React from 'react';
import Image from 'next/image';

export const Logo: React.FC = () => {
  return (
    <div className="w-32 md:w-36 ml-1 sm:ml-0 grid place-items-center">
      <Image src="/logo.png" alt="logo" width="149" height="32" />
    </div>
  )
}