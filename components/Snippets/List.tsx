import React from 'react'
import hljs from 'highlight.js'
import { ISnippet } from '../../types'

type Props = {
  snippets: ISnippet[]
}

const List = ({ snippets }: Props) => {
  return (
    <div className='flex flex-col gap-3 items-center'>
      {snippets&&snippets.map(snippet => {
        const code = hljs.highlight(snippet.code, { language: snippet.language.name }).value
        return (
          <div key={snippet.id} className='bg-lighter-100 backdrop-blur-xl rounded-md shadow-md p-8 border border-lighter-100 w-[50%]'>
            <h2 className='font-semibold'>
              {snippet.name}
            </h2>
            
            <p className='py-3 font-light text-sm opacity-80'>
              {snippet.description}
            </p>
            
            <pre className='bg-dim-300 rounded shadow-inner p-5 text-sm leading-6'
              dangerouslySetInnerHTML={{ __html: code }}
            />
          </div>
        )
      })}
    </div>
  )
}

export default List