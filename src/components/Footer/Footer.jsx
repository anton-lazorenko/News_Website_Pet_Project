import './footer.css';

import { FooterSection } from '../FooterSection';
import { SocialIcon } from '../SocialIcon' ; 

const sections = [
  {
    title: "Company",
    items: ["About", "Career", "Contacts"]
  },
  {
    title: "Help",
    items: ["FAQ"]
  },
  {
    title: "Resources",
    items: ["Blog", "Guides", "Docs", "Tutorials"]
  },
  {
    title: "Community",
    items: ["Forums", "Events", "Ambassadors"]
  }
]

export function Footer() {
  return (
    <footer className="footer-container">
      <div className='footer-items'>
        {sections.map((section, index) => (
          <FooterSection
            key={index}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>
      <div className='social-links'>
        <SocialIcon name="facebook" href="https://facebook.com" />
        <SocialIcon name="instagram" href="https://instagram.com" />
        <SocialIcon name="telegram" href="https://t.me/anton" />
        <SocialIcon name="twitter" href="https://twitter.com" />
        <SocialIcon name="youtube" href="https://youtube.com" />
      </div>
      
    </footer>
  )
}
