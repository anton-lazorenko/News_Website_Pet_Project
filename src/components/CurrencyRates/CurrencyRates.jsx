import './CurrencyRates.css'
import { currencyRateApiUrl } from '../../constants/constants'
import { UniversalButton } from '../UniversalButton'
import { useEffect, useState } from 'react'

export function CurrencyRates() {
  const [rates, setRates] = useState(null)

  const fetchCurrencyRate = async () => {
    try {
      const res = await fetch(currencyRateApiUrl);
      const data = await res.json();
      console.log(data)
      setRates(data)
    }
    catch (error) {
      console.error(error)
    }

  }
  useEffect(() => {
    fetchCurrencyRate()
  }, [])

  return (
    <div>
      <h4>{rates ? rates.time_last_update_utc : '-'}</h4>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>Buy</th>  
          </tr>
          <tr>
            <td>USD</td>
            <td>{rates ? rates.conversion_rates['USD'].toFixed(2) : '-'}</td> 
          </tr>
          <tr>
            <td>EUR</td>
            <td>{rates ? rates.conversion_rates['EUR'].toFixed(2) : '-'}</td> 
          </tr>
          <tr>
            <td>UAH</td>
            <td>{rates ? rates.conversion_rates['UAH'].toFixed(2) : '-'}</td> 
          </tr>
        </tbody>
      </table>
      <UniversalButton onClick={fetchCurrencyRate}>Refresh</UniversalButton>
    </div>
  )
}