import './homepage.css'

import { Main } from '../../components/Main';

import { AsideLeft } from '../../components/AsideLeft';
import { AsideRight } from '../../components/AsideRight';

export function HomePage({articles}) {

  return (
    <div className="main-wrapper">
      <AsideLeft articles={articles} />
      <Main articles={articles} />
      <AsideRight articles={articles} />
    </div>
  )
}