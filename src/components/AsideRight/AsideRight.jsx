import './aside-right.css';

import { CurrencyRates } from '../CurrencyRates'
import { Opinion } from '../Opinion'
import { UniversalButton } from '../UniversalButton'

export function AsideRight() {

  return (
    <div className="aside-right-items">
      <h2 className="aside-title">Currency rates</h2>
      <CurrencyRates />
      <h2 className="aside-title">Main News</h2>
      <span>News1</span>
      <span>News2</span>
      <span>News3</span>
      <span>News4</span>
      <h2 className="aside-title">Opinions</h2>
      <div className="opinions-list">
        <Opinion />
        <Opinion />
        <Opinion />
        <Opinion />
      </div>
      <UniversalButton theme="light">More</UniversalButton>
    </div>
  )
}