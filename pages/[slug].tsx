import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
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
  return (
    <div className='flex flex-col gap-5 backdrop-blur items-center justify-center h-screen max-w-[50%] mx-auto'>
      <code>{snippet.id}</code>
      <p><i>{snippet.slug}</i></p>
      <h1>{snippet.name}</h1>
      <p>{snippet.description}</p>
      <p>{snippet.language.name}</p>
      <p>{snippet.code}</p>
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
    fallback: 'blocking'
  }
}

export default DetailPage