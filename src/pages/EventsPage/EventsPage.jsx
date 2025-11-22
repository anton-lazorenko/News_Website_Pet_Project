import './EventsPage.css'

import { Link } from 'react-router-dom';
import { UniversalButton } from '../../components/UniversalButton';

import PageUnderConstruction from '../../assets/PageUnderConstruction.svg';

export function EventsPage() {
  return (
    <div className="events-page">
      <img src={PageUnderConstruction} alt="Page under construction" />
      <Link to="/">
        <div className='goHomeButton'>
          <UniversalButton>Home</UniversalButton>
        </div>
      </Link>
    </div>
  )
}

