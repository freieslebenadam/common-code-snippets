import type { NextPage } from 'next'
import { useState } from 'react'
import hljs from 'highlight.js'
import { getAllSnippets } from "../utils/contentful"
import { ISnippet } from '../types'

export async function getStaticProps() {
  const snippets: ISnippet[] = await getAllSnippets()

  return {
    props: {
      snippets
    }
  }
}

type Props = {
  children?: React.ReactChild,
  snippets: ISnippet[]
}

const Home = ({ snippets }: Props) => {
  const [searchInput, setSearchInput] = useState("")

  return (
    <section className="container pt-10">
      <div className='w-[25rem] text-center mx-auto'>
        <h1 className='tracking-tighter font-medium mb-2'>Common Snippets</h1>
        <p className='opacity-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatum ipsam ad, repudiandae explicabo quia magni eligendi quidem voluptatem vitae?</p>
      </div>

      <div className='py-8'>
        <input type="text" 
          placeholder='Search...'
          tabIndex={0}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="px-4 py-2 rounded-full mx-auto block shadow bg-lighter-200 text-lighter-900 placeholder:text-lighter-400 focus:outline-none outline-none ring-0 focus:ring-0 transition-200 focus:shadow-xl focus:scale-[1.01]"
        />
      </div>

      <div className='flex flex-col gap-3 items-center'>
        {snippets&&snippets.map(snippet => {
          const code = hljs.highlight(snippet.code, { language: snippet.language.name }).value
          return (
            <div key={snippet.id} className='bg-lighter-100 backdrop-blur-xl rounded-md shadow-md p-8 border border-lighter-100 w-5/12'>
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
    </section>
  )
}

export default Home
