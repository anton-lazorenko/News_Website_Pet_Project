import './aside-right.css';
import { AsideAd } from '../AsideAd'
import { Quote } from '../Quote'

import { CurrencyRates } from '../CurrencyRates' 

export function AsideRight() {

  return (
    <div className="aside-right-items">
      <div>
        <h2 className="aside-title">Currency rates</h2>
        <CurrencyRates />
      </div>
      <AsideAd /> 
      <Quote />
    </div>
  )
}