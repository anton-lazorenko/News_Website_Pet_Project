import './footer.css'


import { FooterSection } from '../FooterSection'

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
    title: "Socials",
    items: ["Instagram", "Facebook", "YouTube"]
  },
 

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
    </footer>
  )
}
