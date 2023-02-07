import 'react-slideshow-image/dist/styles.css';
import down from '../assets/bottom2.png'
import { HashLink } from 'react-router-hash-link'
import Slider from '../components/Slider';

function Gallery() {

  return (
    <div className="content_block">
    <h1 className="block_header" id='gallery'>Art Gallery</h1>
    <Slider/>
    <HashLink className='scroll_link' to='/#contact'><img src={down} className='scroll_link'/></HashLink>

    </div>
  )
}

export default Gallery