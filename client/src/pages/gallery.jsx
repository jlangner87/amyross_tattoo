import down from '../assets/bottom2.png'
import top from '../assets/top.png'
import { HashLink } from 'react-router-hash-link'
import thumbnail1 from '../assets/thumbnails/thumbnail1.png'
import thumbnail2 from '../assets/thumbnails/thumbnail2.png'
import thumbnail3 from '../assets/thumbnails/thumbnail3.png'
import thumbnail4 from '../assets/thumbnails/thumbnail4.png'
import thumbnail5 from '../assets/thumbnails/thumbnail5.png'
import thumbnail6 from '../assets/thumbnails/thumbnail6.png'
import thumbnail7 from '../assets/thumbnails/thumbnail7.png'
import thumbnail8 from '../assets/thumbnails/thumbnail8.png'
import thumbnail10 from '../assets/thumbnails/thumbnail10.png'
import thumbnail11 from '../assets/thumbnails/thumbnail11.png'
import thumbnail12 from '../assets/thumbnails/thumbnail12.png'
import thumbnail13 from '../assets/thumbnails/thumbnail13.png'
import thumbnail14 from '../assets/thumbnails/thumbnail14.png'
import thumbnail15 from '../assets/thumbnails/thumbnail15.png'
import thumbnail16 from '../assets/thumbnails/thumbnail16.png'
import thumbnail17 from '../assets/thumbnails/thumbnail17.png'
import thumbnail18 from '../assets/thumbnails/thumbnail18.png'
import thumbnail19 from '../assets/thumbnails/thumbnail19.png'
import thumbnail20 from '../assets/thumbnails/thumbnail20.png'

function Gallery() {
  return (
    <div className="content_block">
      <h1 className="block_header" id='gallery'>Art Gallery</h1>
      <div className='photo_gallery'>
      <img src={thumbnail1} className="gallery_photo"/>
      <img src={thumbnail2} className="gallery_photo"/>
      <img src={thumbnail3} className="gallery_photo"/>
      <img src={thumbnail4} className="gallery_photo"/>
      <img src={thumbnail5} className="gallery_photo"/>
      <img src={thumbnail6} className="gallery_photo"/>
      <img src={thumbnail7} className="gallery_photo"/>
      <img src={thumbnail8} className="gallery_photo"/>
      <img src={thumbnail10} className="gallery_photo"/>
      <img src={thumbnail11} className="gallery_photo"/>
      <img src={thumbnail12} className="gallery_photo"/>
      <img src={thumbnail13} className="gallery_photo"/>
      <img src={thumbnail14} className="gallery_photo"/>
      <img src={thumbnail15} className="gallery_photo"/>
      <img src={thumbnail16} className="gallery_photo"/>
      <img src={thumbnail17} className="gallery_photo"/>
      <img src={thumbnail18} className="gallery_photo"/>
      <img src={thumbnail19} className="gallery_photo"/>
      <img src={thumbnail20} className="gallery_photo"/>

      </div>
      <HashLink className='scroll_link' to='/#top' scroll={(el) =>el.scrollIntoView({behavior: 'smooth'})}><img src={top} className='scroll_link'/></HashLink>
      <HashLink className='scroll_link' to='/#contact' scroll={(el) =>el.scrollIntoView({behavior: 'smooth'})}><img src={down} className='scroll_link'/></HashLink>

    </div>
  )
}

export default Gallery