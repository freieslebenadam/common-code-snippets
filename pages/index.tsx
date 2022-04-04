import type { NextPage } from 'next'
import { useState } from 'react'

const DUMMY_DATA = [
  {
    id: 0,
    name: "Console Log",
    description: "Logs something to a console.",
    language: "JavaScript",
    content: `console.log("Message")`
  },
  {
    id: 1,
    name: "useEffect Hook",
    description: "Runs this function on component mount",
    language: "JavaScript",
    tags: ["React"],
    content: `useEffect(() => {}, [])`
  },
]

const Home: NextPage = () => {
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

      <div className='flex flex-col gap-3'>
        {DUMMY_DATA.map(snippet => (
          <div key={snippet.id} className="p-4 bg-dim-200 rounded-md shadow-md back-blur">
            <h4 className='font-medium'>{snippet.name}</h4>
            <p className='py-1 px-2 text-sm  rounded shadow my-2 bg-dim-100 inline-block'>{snippet.language}</p>
            <p className='opacity-80 font-light mb-2'>{snippet.description}</p>
            <pre className='bg-dim-100 p-2 rounded'>{snippet.content}</pre>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Home
