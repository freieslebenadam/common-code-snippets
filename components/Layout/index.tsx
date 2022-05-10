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
        <meta name="description" content='This is a &quot;repository&quot; type application for various code snippets I commonly use. Easily accessible and all in one place.'/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
        <link rel="manifest" href="/site.webmanifest?v=2" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg?v=2" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <meta name="msapplication-TileColor" content="#b91e62" />
        <meta name="theme-color" content="#fef9ff" />
      </Head>

      <main className='h-screen overflow-auto'>
        {children}
      </main>
    </div>
  )
}

export default Layout