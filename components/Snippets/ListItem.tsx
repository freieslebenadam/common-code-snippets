import React from 'react'
import Link from 'next/link'
import hljs from 'highlight.js'
import { ISnippet } from '../../types'
import TagsList from '../UI/TagsList'

type Props = {
  snippet: ISnippet
}

const ListItem = ({ snippet }: Props) => {
  const code = hljs.highlight(snippet.code, { language: snippet.language.name }).value
  
  return (
    <Link href={`/${snippet.slug}`} passHref>
      <div key={snippet.id} className='col-span-1 cursor-pointer glass-panel transition-100 hover:shadow-2xl hover:shadow-dim-300 h-[400px] flex flex-col hover:-translate-y-1'>
        <div className='flex-1'>
          <h2 className='font-semibold'>
            {snippet.name}
          </h2>
          
          <TagsList tags={snippet.tags} />

          <p className='py-3 font-light text-sm opacity-80'>
            {snippet.description}
          </p>
        </div>
        
        <pre className='code-segment flex-1'
          dangerouslySetInnerHTML={{ __html: code }}
        />
      </div>
    </Link>
  )
}

export default ListItem