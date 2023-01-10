import { HashLink } from "react-router-hash-link"
import top from '../assets/top.png'

function Contact() {
  return (
    <div className="content_block">
      <h1 className="block_header" id="contact">Contact & Booking</h1>
      <HashLink className='scroll_link' to='/#top' scroll={(el) =>el.scrollIntoView({behavior: 'smooth'})}><img src={top} className='scroll_link'/></HashLink>
      
    </div>
  )
}

export default Contact