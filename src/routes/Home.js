import React, {useEffect} from 'react'
import { HashLink } from 'react-router-hash-link'

// Custom Components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'

// Images
import base2 from '../image/base 2.svg'
import base8 from '../image/base 8.svg'
import base16 from '../image/base 16.svg'
import baseN from '../image/base N.svg'

// React Bootstrap
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import LinkContainer from 'react-router-bootstrap/LinkContainer'
import CardGroup from 'react-bootstrap/CardGroup'
import 'bootstrap/dist/css/bootstrap.min.css'

//Custom CSS
import './style.css'
import '../import/css/default.css'

//React Jquery
import $ from 'jquery'



const Home = () => {
  useEffect(() => {
    $('html, body').stop().animate({
      scrollTop: 0
      
    }, 100);
  }, []);
  return (
    <>
      <div>
        {/* Navbar */}
        <Navbar />

        {/* Number system definition */}
        <section className="py-5 py-lg-7 px-1 first-section">
          <Container>
            <Row className="d-flex align-items-center " >
              <Col lg={6} >
                <div>
                  <h1>What is a number system?</h1>
                  <p>A number system is a method of representing and expressing numerical values that is organized. It provides a logical foundation for counting, measuring, executing mathematical operations, and communicating numerical data. Throughout history, several number systems have been employed for various reasons and in various cultures, but the two most popular and frequently used number systems are the decimal system and the binary system.</p>
                </div>
              </Col>
              <Col lg={6} >
                <div className="baseParent" id="baseParent">
                  <HashLink smooth to="#binary"><Image src={base2} className="base b2" id="b2" ></Image></HashLink>
                  <HashLink smooth to="#hexa"><Image src={base16} className="base b16" ></Image></HashLink>
                  <HashLink smooth to="#octal"><Image src={base8} className="base b8" ></Image></HashLink>
                  <HashLink smooth to="#anyBase"><Image src={baseN} className="base bN" ></Image></HashLink>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Binary number system */}
        <section className="py-5 py-lg-7 px-1 second-section" style={{ backgroundColor: "#e9ecef" }} id="binary">
          <Container>
            <Row className="d-flex align-items-center">
              <Col lg={6}>
                <Row>
                  <div>
                    <h1>What is a Binary number?</h1>
                    <p>A binary number is a number expressed in the base-2 numeral system. In the binary system, there are only two possible digits: 0 and 1. Each digit in a binary number represents a power of 2, starting from the right and increasing by one for each position to the left.</p>
                  </div>
                </Row>
                <Row>
                  <Col>
                    <CardGroup>
                      <Card className="mx-1">
                        <Card.Body>
                          <h5 className="card-title">Decimal to Binary converter for Whole numbers</h5>
                          <p className="card-text">Tool for converting whole numbers to binary numbers. Select <span className="text-info">"Binary"</span> as your base.</p>
                        </Card.Body>
                        <Card.Footer>
                          <LinkContainer to="/whole-number">
                            <Card.Link>Try it now! <i class="fa-solid fa-play fa-xs"></i></Card.Link>
                          </LinkContainer>
                        </Card.Footer>
                      </Card>

                      <Card className='mx-1'>
                        <Card.Body>
                          <h5 className="card-title">Decimal to Binary converter for Fractions</h5>
                          <p className="card-text">Tool for converting fractions to binary numbers. Select <span className="text-info">"Binary"</span> as your base.</p>
                        </Card.Body>
                        <Card.Footer>
                          <LinkContainer to="/fraction">
                            <Card.Link>Try it now! <i class="fa-solid fa-play fa-xs"></i></Card.Link>
                          </LinkContainer>
                        </Card.Footer>
                      </Card>
                    </CardGroup>
                  </Col>
                </Row>
              </Col>
              <Col lg={6} className="d-flex justify-content-center">
                <div className="tv-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/w7ZLvYAi6pY?si=qks_MLzLYgCa7I88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Octal number system */}
        <section className="py-5 py-lg-7 third-section" id="octal">
          <Container>
            <Row className="d-flex align-items-center">
              <Col xs={{ order: 'last' }} lg={{ span: 6, order: 'first' }} className="d-flex justify-content-center">
                <div className="tv-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/MGu-P4OOnh0?si=GbBa0zagUPbJv5NI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </Col>
              <Col xs={{ order: 'first' }} lg={{ span: 6, order: 'last' }} >
                <Row>
                  <div>
                    <h1>What is an Octal number?</h1>
                    <p>An octal number is a number expressed in the base-8 numeral system. In the octal system, there are eight possible digits: 0, 1, 2, 3, 4, 5, 6, and 7. Each digit in an octal number represents a power of 8, starting from the right and increasing by one for each position to the left.</p>
                  </div>
                </Row>
                <Row>
                  <Col>
                    <CardGroup>
                      <Card className="mx-1">
                        <Card.Body>
                          <h5 className="card-title">Decimal to Octal converter for Whole numbers</h5>
                          <p className="card-text">Tool for converting whole numbers to octal numbers. Select <span className="text-info">"Octal"</span> as your base.</p>
                        </Card.Body>
                        <Card.Footer>
                          <LinkContainer to="/whole-number">
                            <Card.Link>Try it now! <i class="fa-solid fa-play fa-xs"></i></Card.Link>
                          </LinkContainer>
                        </Card.Footer>
                      </Card>

                      <Card className='mx-1'>
                        <Card.Body>
                          <h5 className="card-title">Decimal to Octal converter for Fractions</h5>
                          <p className="card-text">Tool for converting fractions to octal numbers. Select <span className="text-info">"Octal"</span> as your base.</p>
                        </Card.Body>
                        <Card.Footer>
                          <LinkContainer to="/fraction">
                            <Card.Link>Try it now! <i class="fa-solid fa-play fa-xs"></i></Card.Link>
                          </LinkContainer>
                        </Card.Footer>
                      </Card>
                    </CardGroup>
                  </Col>
                </Row>
              </Col>

            </Row>
          </Container>
        </section>

        {/* Hexadecimal number system */}
        <section className="py-5 py-lg-7 fourth-section" style={{ backgroundColor: "#e9ecef" }} id="hexa">
          <Container>
            <Row className="d-flex align-items-center">
              <Col lg={6} >
                <Row>
                  <div>
                    <h1>What is a Hexadecimal number?</h1>
                    <p>A hexadecimal number is a number expressed in the base-16 numeral system. In the hexadecimal system, there are sixteen possible digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, and F. The first ten digits (0-9) are the same as in the decimal system, while the letters A to F represent the decimal values 10 to 15, respectively.</p>
                  </div>
                </Row>
                <Row>
                  <Col>
                    <CardGroup>
                      <Card className="mx-1">
                        <Card.Body>
                          <h5 className="card-title">Decimal to Hexadecimal converter for Whole numbers</h5>
                          <p className="card-text">Tool for converting whole numbers to hexadecimal numbers. Select <span className="text-info">"Hexadecimal"</span> as your base.</p>
                        </Card.Body>
                        <Card.Footer>
                          <LinkContainer to="/whole-number">
                            <Card.Link>Try it now! <i class="fa-solid fa-play fa-xs"></i></Card.Link>
                          </LinkContainer>
                        </Card.Footer>
                      </Card>

                      <Card className='mx-1'>
                        <Card.Body>
                          <h5 className="card-title">Decimal to Hexadecimal converter for Fractions</h5>
                          <p className="card-text">Tool for converting fractions to hexadecimal numbers. Select <span className="text-info">"Hexadecimal"</span> as your base.</p>
                        </Card.Body>
                        <Card.Footer>
                          <LinkContainer to="/fraction">
                            <Card.Link>Try it now! <i class="fa-solid fa-play fa-xs"></i></Card.Link>
                          </LinkContainer>
                        </Card.Footer>
                      </Card>
                    </CardGroup>
                  </Col>
                </Row>
              </Col>
              <Col lg={6} className='d-flex justify-content-center'>
                <div className="tv-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/WGN4NWICTpQ?si=eCtcOoPz4PM5vJ_b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Converting one base to another base */}
        <section className="py-5 py-lg-7 fifth-section" id="anyBase">
          <Container>
            <Row className="d-flex align-items-center">
              <Col xs={{ order: 'last' }} lg={{ span: 6, order: 'first' }} className="d-flex justify-content-center">
                <div className="tv-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/hIs3A6gGz2w?si=4RI7cCaWJ_QTAITq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </Col>
              <Col xs={{ order: 'first' }} lg={{ span: 6, order: 'last' }} >
                <Row>
                  <div>
                    <h1>How to convert one base to another?</h1>
                    <p>Converting a number from one base to another in number systems involves changing the representation of the number while preserving its value. The most common bases for number systems are decimal (base 10), binary (base 2), octal (base 8), and hexadecimal (base 16), but you can convert between any bases by following the video or by using our <span className="text-info">Any Base calculator</span></p>
                  </div>
                </Row>
                <Row>
                  <Col>
                    <CardGroup>
                      <Card className="mx-1">
                        <Card.Body>
                          <h5 className="card-title">Decimal to Any base converter for Whole numbers</h5>
                          <p className="card-text">Tool for converting whole numbers to any base numbers. Select <span className="text-info">"Any base"</span> as your base and enter your desired base.</p>
                        </Card.Body>
                        <Card.Footer>
                          <LinkContainer to="/whole-number">
                            <Card.Link>Try it now! <i class="fa-solid fa-play fa-xs"></i></Card.Link>
                          </LinkContainer>
                        </Card.Footer>
                      </Card>

                      <Card className='mx-1'>
                        <Card.Body>
                          <h5 className="card-title">Decimal to Any base converter for Fractions</h5>
                          <p className="card-text">Tool for converting fractions to any base numbers. Select <span className="text-info">"Any base"</span> as your base and enter your desired base.</p>
                        </Card.Body>
                        <Card.Footer>
                          <LinkContainer to="/fraction">
                            <Card.Link>Try it now! <i class="fa-solid fa-play fa-xs"></i></Card.Link>
                          </LinkContainer>
                        </Card.Footer>
                      </Card>
                    </CardGroup>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Footer */}
        <Footer />

        {/* Scroll to top button */}
        <ScrollTop />
      </div>

    </>
  )
}

export default Home