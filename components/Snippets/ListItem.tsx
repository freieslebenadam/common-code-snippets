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
      <div key={snippet.id} className='col-span-1 bg-lighter-100 backdrop-blur-xl rounded-md shadow-md p-8 border border-lighter-100 cursor-pointer transition-100 hover:shadow-2xl hover:shadow-dim-300 h-[400px] flex flex-col hover:-translate-y-1'>
        <div className='flex-1'>
          <h2 className='font-semibold'>
            {snippet.name}
          </h2>
          
          <ul className='flex gap-2 mt-3'>
            {snippet.tags&&
              snippet.tags.map((tag,index) => (
                <li key={index} className="bg-dim-200 px-2 py-1 text-xs uppercase font-medium inline-block rounded shadow">
                  {tag}
                </li>
              ))
            }
          </ul>

          <p className='py-3 font-light text-sm opacity-80'>
            {snippet.description}
          </p>
        </div>
        
        <pre className='bg-dim-300 rounded shadow-inner p-5 text-sm leading-6 overflow-x-clip overflow-y-auto flex-1'
          dangerouslySetInnerHTML={{ __html: code }}
        />
      </div>
    </Link>
  )
}

export default ListItem