import React from 'react'
import icons from "../../utils/icons"

type Props = {
  tag: string
}

const Tag = ({ tag }: Props) => {
  return (
    <li className="inline-tag flex items-center gap-1 transition-100 hover:scale-105 cursor-pointer">
      {icons.find(item => item.name === tag)&&
        icons.find(item => item.name === tag)?.icon
      }
      {tag}
    </li>
  )
}

export default Tag