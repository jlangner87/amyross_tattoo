import logo1 from '../assets/logo1.png'
import Nav from './nav'

function Header() {
  return (
    <div className="Header">
      <img src={logo1} className="hero_image" />
      <h1 className="name">Amy Ross</h1>
      <h1 className="job"> tattoo artist</h1>
      <div className="line"></div>
      <Nav/>
    </div>
  )
}

export default Header
