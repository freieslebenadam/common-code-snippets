import { getAllSnippets } from "../utils/contentful"
import { ISnippet } from '../types'
import { SnippetsList } from "../components/Snippets"
import { GetStaticProps } from 'next'

// Fetching snippets from contentful
export const getStaticProps: GetStaticProps = async () => {
  const snippets: ISnippet[] = await getAllSnippets()

  return {
    props: {
      snippets
    },
    revalidate: 60
  }
}

// Specifying types of props
type Props = {
  children?: React.ReactChild,
  snippets: ISnippet[]
}

// Index page
const Home = ({ snippets }: Props) => {
  return (
    <section className="container pt-20 animate-fade pb-10">

      <div className='xs:w-[25rem] text-center mx-auto'>
        <h1 className='tracking-tighter font-semibold mb-4'>Commonly Used Code Snippets</h1>
        <p className='opacity-80'>This is a &quot;repository&quot; type application for various code snippets I commonly use. Easily accessible and all in one place.</p>
      </div>

      <SnippetsList snippets={snippets} />
    </section>
  )
}

export default Home
