import './aboutpage.css'

import reporter from '../../assets/about-page-images/reporter.jpg'
import { Link } from 'react-router-dom';
import { UniversalButton } from '../../components/UniversalButton';

export function AboutPage() {
  return (
    <section className='about-us'>
      <h2>About us</h2>
      <figure className='figure-container'>
        <img className='reporter-image' src={reporter} alt="reporter" />
        <div className='about-us-description'>
          <figcaption>
            Welcome to our news service, your trusted source for timely and accurate reporting. Our team of journalists and editors is committed to keeping you informed with news that matters, delivered with integrity.

            We prioritize accuracy, fairness, and transparency, ensuring every story is thoroughly researched and fact-checked. From breaking news to in-depth features, we cover a wide range of topics, providing context and understanding.

            Our goal is to foster a community of informed readers. Using modern digital tools, we strive to make news accessible, engaging, and reliable — your trusted partner in understanding the world.
          </figcaption>
          <Link to="/"> 
            <UniversalButton>Home</UniversalButton>
          </Link>
        </div>
      </figure>

    </section>
  )
}