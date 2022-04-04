import Head from 'next/head'
import React from 'react'

type Props = {
  children: React.ReactChild
}

const Layout = ({ children }: Props) => {
  return (
    <div className='text-neutral-50 selection:bg-dim-200'>
      <Head>
        <title>Code Snippets For Every Project</title>
        <meta name="description" content="Different code snippets I commonly use in almost every project."/>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <main className='h-screen overflow-auto'>
        {children}
      </main>
    </div>
  )
}

export default Layout