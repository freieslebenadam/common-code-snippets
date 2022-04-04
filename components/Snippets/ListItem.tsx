import React from 'react'
import Link from 'next/link'
import hljs from 'highlight.js'
import { ISnippet } from '../../types'

type Props = {
  snippet: ISnippet
}

const ListItem = ({ snippet }: Props) => {
  const code = hljs.highlight(snippet.code, { language: snippet.language.name }).value
  
  return (
    <Link href={`/${snippet.slug}`} passHref>
      <div key={snippet.id} className='bg-lighter-100 backdrop-blur-xl rounded-md shadow-md p-8 border border-lighter-100 w-[50%] cursor-pointer transition-100 hover:scale-[1.02]'>
        <h2 className='font-semibold'>
          {snippet.name}
        </h2>
        
        <p className='py-3 font-light text-sm opacity-80'>
          {snippet.description}
        </p>
        
        <pre className='bg-dim-300 rounded shadow-inner p-5 text-sm leading-6 overflow-x-clip max-h-40 overflow-y-auto'
          dangerouslySetInnerHTML={{ __html: code }}
        />
      </div>
    </Link>
  )
}

export default ListItem