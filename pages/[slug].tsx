import React, { useState } from 'react'
import hljs from 'highlight.js'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { MdOutlineContentCopy, MdOutlineCheck } from "react-icons/md"
import { ISnippet } from '../types'
import { getAllSnippets, getSnippet } from '../utils/contentful'
import { HomeButton } from '../components/UI'
import { TagsList } from '../components/UI'
import icons from "../utils/icons"

// Static generation params interface
interface IStaticParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IStaticParams
  const snippet: ISnippet = await getSnippet(slug)

  return {
    props: {
      snippet
    },
    revalidate: 60
  }
}

type Props = {
  snippet: ISnippet
}

// Snippet detail page
const DetailPage = ({ snippet }: Props) => {
  const [copied, setCopied] = useState(false)

  // Formatted code with syntax highlighting
  const code = hljs.highlight(snippet.code, { language: snippet.language.name }).value

  // Coppy code to clipboard handler
  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(snippet.code)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 800)
  }

  return (
    <section className="container py-10 xl:px-[10rem] lg:h-screen overflow-hidden animate-fade flex flex-col lg:flex-row gap-5 relative">
      <div className='flex-none w-full lg:w-[20vw]'>
        <HomeButton />
        <div className='glass-panel my-5'>
          <h2 className='font-semibold break-words'>{snippet.name}</h2>
          <TagsList tags={snippet.tags} />
          <p className='pt-6 font-light text-sm opacity-80 break-words'>
            {snippet.description}
          </p>
        </div>
        <div className='glass-panel'>
          <p className='flex lg:flex-col xl:flex-row gap-2 items-center overflow-clip'>
            <span className='font-extralight opacity-80'>Language:</span>
            {" "}
            <span className='font-semibold text-lg flex items-center gap-1'>
              {icons.find(item => item.name === snippet.language.name)&&
                icons.find(item => item.name === snippet.language.name)?.icon
              }
              {snippet.language.title}
            </span>
          </p>
        </div>
      </div>
      <div className='flex-auto glass-panel p-2 lg:p-8 relative'>
        <pre className='code-segment p-3 z-10 leading-5 min-h-[5rem] lg:absolute top-8 right-8 left-8 bottom-8 overflow-y-auto overflow-x-auto lg:overflow-x-clip lg:whitespace-pre-wrap' dangerouslySetInnerHTML={{ __html: code }} />
        <button className='bg-lighter-100 p-2 w-10 h-10 rounded shadow absolute top-5 right-5 lg:top-11 lg:right-12 transition-100 hover:shadow-lg hover:scale-105 z-20 cursor-pointer flex justify-center items-center active:scale-95 active:text-rose-200' onClick={copyCodeToClipboard}>
          {copied ?
            (<MdOutlineCheck size={35} className="text-green-500 animate-fade" />) :
            (<MdOutlineContentCopy size={30} className="animate-fade" />)
          }
        </button>
      </div>
    </section>
  )
}

export default DetailPage

// Generating paths of fetched snippets
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
    fallback: 'blocking'
  }
}