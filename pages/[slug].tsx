import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import { ISnippet } from '../types'
import { getAllSnippets, getSnippet } from '../utils/contentful'

interface IStaticParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IStaticParams
  const snippet = await getSnippet(slug)

  return {
    props: {
      snippet
    }
  }
}

const DetailPage = ({ snippet }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <div className='flex justify-center items-center h-screen'>
      </div>
    )
  }

  return (
    <div className='animate-fade flex flex-col gap-5 backdrop-blur items-center justify-center h-screen max-w-[50%] mx-auto'>
      <code>{snippet.id}</code>
      <p><i>{snippet.slug}</i></p>
      <h1>{snippet.name}</h1>
      <p>{snippet.description}</p>
      <p>{snippet.language.name}</p>
      <pre>{snippet.code}</pre>
    </div>
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