 
import './SocialIcon.css'

import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import telegram from '../../assets/telegram.svg'
import twitter from '../../assets/twitter.svg'
import youtube from '../../assets/youtube.svg'

const icons = { facebook, instagram, telegram, twitter, youtube }

export function SocialIcon({ name, href }) {
  const icon = icons[name]

  return (
    <a href={href}>
      <img src={icon} alt={name} />
    </a>
  )
}
