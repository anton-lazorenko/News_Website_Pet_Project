import './CurrencyRates.css'
import { currencyRateApiUrl } from '../../constants/constants'
import { UniversalButton } from '../UniversalButton'
import { useEffect, useState } from 'react'

export function CurrencyRates() {
  const [rates, setRates] = useState(null)
  const [selectedCurrency, setSelectedCurrency] = useState('USD')

  const fetchCurrencyRate = async () => {
    try {
      const res = await fetch(currencyRateApiUrl)
      const data = await res.json()
      setRates(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchCurrencyRate()
  }, [])

  const rateValue = rates ? rates.conversion_rates[selectedCurrency] : null

  return (
    <div className='currency-items'>
      <h4 className='currency-date'>
        {rates ? rates.time_last_update_utc.slice(0, 16) : '-'}
      </h4>

      <label htmlFor="currency-select">Select currency:</label>
      <select
        className='select-field'
        id="currency-select"
        value={selectedCurrency}
        onChange={(e) => setSelectedCurrency(e.target.value)}
      >
        {rates && Object.keys(rates.conversion_rates).map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select> 
      <table>
        <tbody>
          <tr>
            <th>Currency</th>
            <th>Rate</th>
          </tr>
          <tr>
            <td>{selectedCurrency}</td>
            <td>{rateValue ? rateValue.toFixed(2) : '-'}</td>
          </tr>
        </tbody>
      </table> 
    </div>
  )
}
