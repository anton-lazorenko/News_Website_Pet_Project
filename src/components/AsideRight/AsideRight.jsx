import './aside-right.css';
import { AsideAd } from '../AsideAd'

import { CurrencyRates } from '../CurrencyRates'
import { Opinion } from '../Opinion'
import { UniversalButton } from '../UniversalButton'

export function AsideRight() {

  return (
    <div className="aside-right-items">
      <div>
        <h2 className="aside-title">Currency rates</h2>
        <CurrencyRates />
      </div> 
      <AsideAd />
      <div>
        <h2 className="aside-title">Opinions</h2>
        <div className="opinions-list">
          <Opinion />
          <Opinion />
          <Opinion />
          <Opinion />
        </div>
      </div>
      <UniversalButton theme="light">More</UniversalButton>
    </div>
  )
}