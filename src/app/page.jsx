"use client";

import Link from 'next/link';
import { redirect } from 'next/navigation'

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Link href={'/dashboard'}>
        <button className=' bg-text text-bg font-bold py-1 px-2 rounded-md'>GO TO DASHBOARD</button>
      </Link>
    </div>
  )
}
