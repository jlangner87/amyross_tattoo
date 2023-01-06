import { NavLink } from 'react-router-dom'
import about from '../assets/about.png'
import gallery from '../assets/gallery.png'
import contact from '../assets/contact.png'

function Nav() {
  return (
    <div className="Nav">

    <NavLink to={'/contact'}><img src={contact} className="link_icon"/></NavLink>
    <NavLink to={'/gallery'}><img src={gallery} className="link_icon"/></NavLink>
    <NavLink to={'/about'}><img src={about} className="link_icon"/></NavLink>


</div>
  )
}

export default Nav