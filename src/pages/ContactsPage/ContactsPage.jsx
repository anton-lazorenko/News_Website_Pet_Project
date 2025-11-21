import './ContactsPage.css'

export function ContactsPage() {
  return (
    <section className="contact-map">
      <h2>Our Location</h2>
      <p>Find us at our office:</p>
      <address itemScope itemType="https://schema.org/PostalAddress">
        <span itemProp="streetAddress">8033 Sunset Blvd, Suite #875</span><br />
        <span itemProp="addressLocality">Los Angeles</span>,{" "}
        <span itemProp="addressRegion">CA</span>{" "}
        <span itemProp="postalCode">90046</span><br />
        <span itemProp="addressCountry">USA</span>
      </address>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d812.784380715325!2d-118.36525542729244!3d34.09836221323449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c40c003ad467%3A0x71b519af6887520e!2zODAzMyBTdW5zZXQgQmx2ZCAjODc1LCBMb3MgQW5nZWxlcywgQ0EgOTAwNDYsINCh0KjQkA!5e1!3m2!1sru!2sua!4v1763749062001!5m2!1sru!2sua"
        className='map-frame'
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
  )
}
