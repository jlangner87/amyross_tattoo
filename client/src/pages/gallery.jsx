import placeholder from '../assets/placeHolder.png'

function Gallery() {
  return (
    <div className="content_block">
      <h1 className="block_header">Art Gallery</h1>

      <img src={placeholder} className="gallery_photo"/>
    </div>
  )
}

export default Gallery