import Link from 'next/link'
import React from 'react'
import { AiFillHome } from "react-icons/ai"

const HomeButton = () => {
  return (
    <Link href={`/`}>
      <a className='glass-panel py-3 px-5 transition-100 hover:backdrop-brightness-110 hover:backdrop-saturate-150 flex gap-3 items-center'>
        <AiFillHome />
        <span className='block'>Home</span>
      </a>
    </Link>
  )
}

export default HomeButton