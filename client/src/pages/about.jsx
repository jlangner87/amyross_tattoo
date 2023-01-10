import headshot from '../assets/amy2.png'
import down from '../assets/bottom2.png'
import { HashLink } from 'react-router-hash-link'

function About() {
  return (
    <div className="content_block">
      <h1 className="block_header" id="top">About Amy</h1>
      <p className="block_text">Amy Ross is an incredible tattoo artist and all around badass! Whether she's crafting beautiful flower tattoos, intricate black-and-gray pieces, or personalized designs, her work is clean, professional and truly beautiful to behold. Her artistry shines in every piece she creates and brings life to even the most complex designs. Get your hands on some of Amy's beautiful artwork and let the world know that you are one badass individual!</p>
      <p className='block_text'>She has experienced an incredible journey with art over the course of her life, and she recently took the plunge into tattooing in 2021. With a lifetime of knowledge and experience of artistic expression, Amy is taking her talents to the next level in this budding industry. Those lucky enough to get a tattoo from her can expect an experienced artist with a commitment to creativity and originality.</p>
      <p className='block_text'>Currently,&#160; Amy showcases her incredible talent as a tattoo artist at Lucky Gal Tattoo and Piercing in Ankeny, Iowa. This vibrant shop has been around since the early 2000s and offers everything from traditional to modern tattoos and piercings. Her creativity shines through with each design, and she takes great pride in providing superior customer service and delivering quality artwork that exceeds expectations. <em>If you're looking for a stunning tattoo designed by an expert artist, stop by Lucky Gal Tattoo and Piercing and consult with Amy about your next ink!</em></p>
      <img src={headshot} className='headshot'/><br/>
      <HashLink to='/#gallery' scroll={(el) =>el.scrollIntoView({behavior: 'smooth'})}><img src={down} className='scroll_link'/></HashLink>

    </div>
  )
}

export default About