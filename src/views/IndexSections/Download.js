/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative  Ash (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative  Ash

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

const images = importAll(require.context('../../assets/tech_logos', false, /\.(png|jpe?g|svg)$/));



class Download extends React.Component {
  
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">
                  Do you love this coding and building awesome apps{" "}
      
                  <span className="text-success">
                  Join our full-stack training program/project and embark on a transformative journey where innovation meets learning. Unleash your potential, gain invaluable skills, and be part of a community that fosters creativity and growth. Together, let's build a future where your aspirations meet limitless opportunities!
           
                  </span>
                </h2>

                <div className="text-center">
                  <h4 className="display-4 mb-5 mt-5">
                    Training Available on these technologies
                  </h4>
                  <Row className="justify-content-center">
                    <Col lg="2" xs="4">
                      <a
                        
                        id="tooltip255035741"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={images['aws.png']}
                         
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip255035741">
                        AWS 
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        
                        id="tooltip255035741"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={images['springboot.png']}
                         
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip255035741">
                        Springboot 
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        
                        id="tooltip255035741"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={images['Spring_framework.png']}
                         
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip255035741">
                      Spring framework 
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        
                        id="tooltip255035741"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={images['jenkins.png']}
                         
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip255035741">
                      jenkins 
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        
                        id="tooltip255035741"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={images['docker.png']}
                         
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip255035741">
                        docker 
                      </UncontrolledTooltip>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col lg="2" xs="4">
                      <a
                        
                        id="tooltip255035741"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip255035741">
                        Bootstrap 4 - Most popular front-end component library
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        
                        id="tooltip265846671"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip265846671">
                        Vue.js - The progressive javascript framework
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                      
                        id="tooltip233150499"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip233150499">
                        Angular - One framework. Mobile & Desktop
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        
                        id="tooltip308866163"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip308866163">
                        React - A JavaScript library for building user
                        interfaces
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                      
                        id="tooltip76119384"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip76119384">
                        Sketch - Digital design toolkit
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                       
                        id="tooltip646643508"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip646643508">
                        Adobe Photoshop - Software for digital images
                        manipulation
                      </UncontrolledTooltip>
                    </Col>
                  </Row>

                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

export default Download;
