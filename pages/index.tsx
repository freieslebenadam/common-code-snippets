import { useState } from 'react'
import { getAllSnippets } from "../utils/contentful"
import { ISnippet } from '../types'
import { SnippetsList } from "../components/Snippets"

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
    <section className="container pt-20 animate-fade pb-10">

      <div className='xs:w-[25rem] text-center mx-auto'>
        <h1 className='tracking-tighter font-semibold mb-4'>Commonly Used Code Snippets</h1>
        <p className='opacity-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatum ipsam ad, repudiandae explicabo quia magni eligendi quidem voluptatem vitae?</p>
      </div>

      <div className='py-10'>
        <input type="text" 
          placeholder='Search...'
          tabIndex={0}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onClick={() => setSearchInput("")}
          className="px-4 py-2 rounded-md mx-auto block shadow bg-lighter-200 text-lighter-900 placeholder:text-lighter-400 focus:outline-none outline-none ring-0 focus:ring-0 transition-200 focus:shadow-xl focus:scale-[1.01] border border-lighter-100 sm:w-[30rem] w-full"
        />
      </div>

      <SnippetsList snippets={snippets} />
    </section>
  )
}

export default Home
