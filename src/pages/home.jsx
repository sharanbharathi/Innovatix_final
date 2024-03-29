import React from 'react';
import Hero from '../media/hero.png';
import Services from '../media/service.png';
import Fb from '../media/fb.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
//import Contact from './contact';
//import { useNavigate } from 'react-router-dom';
function Home() {
  // const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="heroimage">
              <img
                src={Hero}
                alt="Banner"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </Col>
          <Col>
            <div className="herocontent">
              <h1
                style={{
                  fontFamily: 'Caveat',
                  fontSize: '80px',
                  marginRight: '0px',
                  paddingTop: '40%',
                }}
              >
                We're really good at growing companies
              </h1>
              <br />
              <br />

              <br />
              <Link to="/contact">
                <Button
                  variant="outline-primary"
                  style={{ marginLeft: '30%', width: '250px', height: '50px' }}
                >
                  Let's Work Together 🚀
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <h1
        style={{
          fontFamily: 'San Francisco',
          fontSize: '80px',
          marginLeft: '40%',
          paddingTop: '10px',
        }}
      >
        Services
      </h1>

      <Container>
        <Row>
          <Col sm={5}>
            <div className="services">
              <h4
                style={{
                  paddingTop: '20%',
                  paddingLeft: '0%',
                  paddingRight: '0%',
                  fontSize: '40px',
                  fontFamily: 'San Francisco ',
                }}
              >
                Welcome to the digital frontier where your brand's story is not
                just told, but crafted into a captivating digital saga! At
                Innovatix, our services transcend the ordinary – we're not just
                offering digital marketing; we're your strategic architects,
                sculpting experiences that...
                <Link to="/services">
                  <Button style={{ backgroundColor: '#de4322' }}>
                    Our Services 🎨
                  </Button>
                </Link>
                {/* resonate across the digital landscape. From tailored social media
        campaigns that spark conversations to website landing pages that leave
        an indelible impression, we're here to redefine your online presence.
        Let us be the brushstrokes that paint your brand into the digital
        masterpiece it deserves to be. Explore our Digital Marketing and Website
        Landing Pages services, where innovation meets impact, and your brand
        takes center stage in the digital spotlight! */}
              </h4>
            </div>
          </Col>
          <Col sm={7}>
            <img
              src={Services}
              alt="Services at Innovatix"
              style={{ width: '100%', height: 'auto' }}
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={4}>
            <img
              src={Fb}
              alt="Fb"
              style={{ width: '100%', height: 'auto', paddingTop: '20%' }}
            />
          </Col>
          <Col sm={8}>
            <h3
              style={{
                paddingTop: '10%',
                paddingLeft: '0%',
                paddingRight: '0%',
                fontSize: '30px',
                fontFamily: 'San Francisco ',
              }}
            >
              Welcome to our digital playground where creativity meets
              precision! 🚀 Dive into the art and science of Facebook Ads with
              us. 🎯 We're not just advertisers; we're craftsmen sculpting
              campaigns to perfection. From eye-catching visuals to
              laser-focused targeting, our expertise ensures your brand shines
              in the ever-scrolling world of social media. Let's turn clicks
              into conversions and dreams into reality. Welcome to a new era of
              Facebook advertising mastery! 💡✨ #AdvertiseWithPrecision
              #FacebookAdsPros
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
