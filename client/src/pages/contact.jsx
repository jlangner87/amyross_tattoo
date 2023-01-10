import { HashLink } from "react-router-hash-link"
import ContactForm from "../components/contact"
import top from '../assets/top.png'
import facebook from '../assets/facebook.png'
import insta from '../assets/insta.png'
import lucky from '../assets/lucky.webp'

function Contact() {
  return (
    <div className="content_block_final">
      <h1 className="block_header" id="contact">Contact & Booking</h1>
      <h3 className="block_subheader">Follow Amy on Social Media</h3>
      <div className="socials">
        <a href="https://www.facebook.com/amyleighross"><img src={facebook} className='social_link'/></a>
        <a href="https://www.instagram.com/inkedby.amy/"><img src={insta} className='social_link'/></a>
      </div>
      <h3 className="block_subheader">Book Amy at Lucky Gal</h3>
      <div className="contact">
        <a href="https://www.luckygaltattoo.com/contact"><img className="lucky_link" src={lucky}/></a>
        <p className="block_subtext"><a href="https://www.luckygaltattoo.com/contact">www.luckygaltattoo.com</a></p>
        <p className="block_subtext">(515)257.7840</p>
        <p className="block_subtext"><a href = "mailto: lgtattooandpiercing@gmail.com?subject=Information about booking Amy Ross">LGtattooandpiercing@gmail.com</a></p>
        <p className="block_subtext">1550 N. Amkeny Blvd. Ste 104<br/>Ankeny, IA 50023</p>
      </div>
      <h3 className="block_subheader">Send Amy some Love</h3>
      <ContactForm/>
      <HashLink className='scroll_link' to='/#top' scroll={(el) =>el.scrollIntoView({behavior: 'smooth'})}><img src={top} className='scroll_link'/></HashLink>
      
    </div>
  )
}

export default Contact