import { NavLink } from 'react-router-dom'
import about from '../assets/about.png'
import gallery from '../assets/gallery.png'
import contact from '../assets/contact.png'

function Nav() {
  return (
    <div className="Nav">
      <img src={about} className="link_icon"/>
      <img src={gallery} className="link_icon"/>
      <img src={contact} className="link_icon"/>
    </div>
  )
}

export default Nav