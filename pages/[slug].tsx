import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import hljs from 'highlight.js'
import { ISnippet } from '../types'
import { getAllSnippets, getSnippet } from '../utils/contentful'
import { HomeButton } from '../components/UI'

interface IStaticParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IStaticParams
  const snippet: ISnippet = await getSnippet(slug)

  return {
    props: {
      snippet
    }
  }
}

type Props = {
  snippet: ISnippet
}

const DetailPage = ({ snippet }: Props) => {
  const router = useRouter()
  const code = hljs.highlight(snippet.code, { language: snippet.language.name }).value

  console.log(code)

  if (router.isFallback) {
    return (
      <div className='flex justify-center items-center h-screen'>
      </div>
    )
  }

  return (
    <section className="container py-10 px-[10rem] h-screen overflow-hidden animate-fade flex gap-5 relative">
      <div className='flex-none w-[20vw]'>
        <HomeButton />
        <div className='glass-panel my-5'>
          <h2 className='font-semibold'>{snippet.name}</h2>
          {snippet&&(
            <ul className='flex gap-2 mt-3'>
              {snippet.tags&&
                snippet.tags.map((tag, index) => (
                  <li key={index} className="inline-tag">
                    {tag}
                  </li>
                ))
              }
            </ul>
          )}
          <p className='pt-6 font-light text-sm opacity-80'>
            {snippet.description}
          </p>
        </div>
        <div className='glass-panel'>
          <p className='flex gap-2 items-center'>
            <span className='font-extralight opacity-80'>Language:</span>
            {" "}
            <span className='font-semibold text-lg'>{snippet.language.title}</span>
          </p>
        </div>
      </div>
      <div className='flex-auto glass-panel'>
        <pre className='code-segment p-3 leading-5 absolute top-8 right-8 left-8 bottom-8 overflow-y-auto' dangerouslySetInnerHTML={{ __html: code }} />
      </div>
    </section>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const snippets: ISnippet[] = await getAllSnippets()

  const paths = snippets.map(snippet => {
    return {
      params: {
        slug: `${snippet.slug}`
      }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export default DetailPage