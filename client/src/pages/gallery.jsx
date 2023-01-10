import placeholder from '../assets/placeHolder.png'
import down from '../assets/bottom.png'
import top from '../assets/top.png'
import { HashLink } from 'react-router-hash-link'

function Gallery() {
  return (
    <div className="content_block">
      <h1 className="block_header" id='gallery'>Art Gallery</h1>
      <img src={placeholder} className="gallery_photo"/><br/>
      <HashLink className='scroll_link' to='/#contact' scroll={(el) =>el.scrollIntoView({behavior: 'smooth'})}><img src={down} className='scroll_link'/></HashLink>
      <HashLink className='scroll_link' to='/#top' scroll={(el) =>el.scrollIntoView({behavior: 'smooth'})}><img src={top} className='scroll_link'/></HashLink>
    </div>
  )
}

export default Gallery