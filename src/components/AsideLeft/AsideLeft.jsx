import './aside-left.css'; 

import { AsideLeftItem } from '../AsideLeftItem'

export function AsideLeft({ articles }) {


  return (
    <div className='aside-left'>
      <h2 className="aside-title">News</h2>
      <div className="aside-left-items">
        <AsideLeftItem articles={articles} />
      </div>
    </div>
  )
}