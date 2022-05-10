import React from "react"
import {posts} from "../data/blog";

function Article({id , title, date="January 1, 1970", preview, minutes}) {

  return (
    <article>      
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article;