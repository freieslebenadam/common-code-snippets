import React from 'react'
import { ISnippet } from '../../types'
import ListItem from './ListItem'

type Props = {
  snippets: ISnippet[]
}

const List = ({ snippets }: Props) => {
  if (snippets.length === 0 || !snippets) return (
    <div className='flex flex-col gap-3 items-center'>
      No snippets available...
    </div>
  )

  return (
    <div className='flex flex-col gap-4 items-center'>
      {snippets.map(snippet => <ListItem key={snippet.id} snippet={snippet} />)}
    </div>
  )
}

export default List