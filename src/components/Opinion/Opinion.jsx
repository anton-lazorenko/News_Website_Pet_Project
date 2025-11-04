import './opinion.css'

import { Avatar } from '../Avatar'

export function Opinion() {


  return (
    <div className="opinion-items">
      <Avatar />
      <div className="opinion-info">
        <h3>Title</h3>
        <p>description</p>
      </div>
    </div>
  )
}