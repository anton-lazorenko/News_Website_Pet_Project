import './asideAd.css'

import adidas from '../../assets/advertise-banners/adidas.jpg'; 
import googleADS from '../../assets/advertise-banners/googleADS.jpg';
import ikea from '../../assets/advertise-banners/ikea.jpg';
import mms from '../../assets/advertise-banners/m&m`s.jpg';
import mcDonnalds from '../../assets/advertise-banners/mcDonnalds.jpg';
import redbull from '../../assets/advertise-banners/redbull.jpg';
import tabasco from '../../assets/advertise-banners/tabasko.jpg';

const ads = [
  { src: adidas, url: 'https://www.adidas.de' },  
  { src: googleADS, url: 'https://business.google.com/ua/google-ads/' }, 
  { src: ikea, url: 'https://www.ikea.com/gb/en/' }, 
  { src: mms, url: 'https://www.mms.com/en-us' }, 
  { src: mcDonnalds, url: 'https://www.mcdonalds.com/us/en-us.html' }, 
  { src: redbull, url: 'https://www.redbull.com/ua-uk' }, 
  { src: tabasco, url: 'https://tabasco.com.ua/en/' }, 
];

export function AsideAd() {
  const ad = ads[Math.floor(Math.random() * ads.length)];
  return (
    <a href={ad.url} target="_blank">
      <img src={ad.src} alt="Ad" className='adImage' />
    </a>
  );
}