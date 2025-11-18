import './footer.css';

import dote from '../../assets/dote.svg';

import { FooterSection } from '../FooterSection';
import { SocialIcon } from '../SocialIcon';

import { useState } from 'react'

const sections = [
  { title: "Company", items: ["About", "Career", "Contacts"] },
  { title: "Help", items: [{ name: "FAQ", path: "/faq" }] },
  { title: "Resources", items: ["Blog", "Guides", "Docs", "Tutorials"] },
  { title: "Community", items: ["Forums", "Events", "Ambassadors"] }
];

export function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="footer-container">
      <div className={`footer-items ${isOpen ? "open" : ""}`}>
        {sections.map((section, index) => (
          <FooterSection
            key={index}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>
      <button className="menu" onClick={() => setIsOpen(!isOpen)}>
        <img src={dote} alt="dote" />
        <img src={dote} alt="dote" />
        <img src={dote} alt="dote" />
      </button>
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
