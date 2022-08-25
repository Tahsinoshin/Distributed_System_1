import "./story.css"

import { Avatar } from '@mui/material'

export default function Story({imageId, title}) {

  const imageURL = "http://localhost:7000/story/post/image/" + imageId;
  const defaultImg = "./assets/index.png"
  return (
    <div style={{backgroundImage: `url(${imageURL})`}} className='story'>
    <Avatar className='story__avatar' src = { defaultImg }/>
    <h4>{ title }</h4>
    </div>
  )
}

