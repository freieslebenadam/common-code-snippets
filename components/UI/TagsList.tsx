import React from 'react'
import Tag from './Tag'

type Props = {
  tags?: string[]
}

const TagsList = ({ tags }: Props) => {
  if (!tags) return null

  return (
    <ul className='flex gap-2 mt-3 flex-wrap'>
      {tags.map((tag, index) => <Tag key={index} tag={tag} /> )}
    </ul>
  )
}

export default TagsList