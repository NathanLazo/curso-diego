import React from 'react';
import Link from 'next/link';
import Formularios from '../components/Formularios';

export default function Home() {
  return (
    <>
      <div>
        <p className='p-8 m-4'>Hola mundo</p>
      </div>
      <Formularios />
      <Link href="/diego">
        <div className='text-[#0000ff] font-black uppercase'>Diego</div>
      </Link>
    </>
  );
}
