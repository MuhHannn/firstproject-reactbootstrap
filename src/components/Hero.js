import Carousel from 'react-bootstrap/Carousel';
import Hero1 from "./../assets/Hero1.jpg"
import Hero2 from "./../assets/Hero2.png"
import Hero3 from "./../assets/Hero3.jpg"
import Hero4 from "./../assets/Hero4.png"

const Hero = () => {
    return (
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Hero1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Kelas</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Hero2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Alat Karya</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Hero3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Kegiatan Dalam Kelas</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Hero4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
} 

export default Hero