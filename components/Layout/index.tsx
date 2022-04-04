import Head from 'next/head'
import React from 'react'

type Props = {
  children: React.ReactChild
}

const Layout = ({ children }: Props) => {
  return (
    <div className='text-neutral-50'>
      <Head>
        <title>Commonly Used Code Snippets</title>
      </Head>

      <main className='h-screen overflow-auto'>
        {children}
      </main>
    </div>
  )
}

export default Layout