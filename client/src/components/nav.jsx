import { NavLink } from 'react-router-dom'
import about from '../assets/about.png'
import gallery from '../assets/gallery.png'
import contact from '../assets/contact.png'
import '../styles/Nav.css'

function Nav() {
  return (
    <div className="nav_menu">
      <NavLink to={'/about'}><img src={about} className="link_icon"/></NavLink>
      <NavLink to={'/gallery'}><img src={gallery} className="link_icon"/></NavLink>
      <NavLink to={'/contact'}><img src={contact} className="link_icon"/></NavLink>
</div>
  )
}

export default Nav