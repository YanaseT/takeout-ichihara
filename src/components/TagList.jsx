import React from 'react'
import { Link } from 'gatsby'

const TagList = ({ tags }) => {
  return (
    <div>
      {tags.map(tag =>
        <Link key={tag} to={`/tags/${tag}`} 
        style={{
            fontSize : `15px`,
            padding :`3px 3px 5px 3px`,
        }}> 
          {tag}
        </Link>
      )}
    </div>
  )
}

export default TagList
