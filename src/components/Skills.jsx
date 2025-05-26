import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src="https://img.icons8.com/color/96/000000/html-5.png" alt="" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src="https://img.icons8.com/color/96/000000/css3.png" alt="" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src="https://img.icons8.com/color/96/000000/javascript.png" alt="" />
                  <h5>JavaScript</h5>
                </div>
                <div class="item">
                  <img src="https://img.icons8.com/color/96/000000/vue-js.png" alt="Vue.js Logo" />
                  <h5>Vue Js</h5>
                </div>
                {/* <div className="item">
                  <img src="https://img.icons8.com/color/96/000000/nodejs.png" alt="" />
                  <h5>Node JS</h5>
                </div> */}
                {/* <div className="item">
                  <img src="https://img.icons8.com/color/96/000000/tailwindcss.png" alt="" />
                  <h5>Tailwind</h5>
                </div> */}
                <div className="item">
                  <img src="https://img.icons8.com/color/96/000000/bootstrap.png" alt="" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src="https://img.icons8.com/color/96/000000/react-native.png" alt="" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src="https://img.icons8.com/color/96/000000/php.png" alt="" />
                  <h5>PHP</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.worldvectorlogo.com/logos/laravel-2.svg" alt="" />
                  <h5>Laravel</h5>
                </div>
                <div className="item">
                  <img src="https://img.icons8.com/color/96/000000/python.png" alt="" />
                  <h5>Python</h5>
                </div>
                {/* <div className="item">
                  <img src="https://img.icons8.com/color/96/000000/golang" alt="" />
                  <h5>Go</h5>
                </div> */}
                <div className="item">
                  <img src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png" alt="" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src="https://img.icons8.com/color/96/000000/dart.png" alt="" />
                  <h5>Dart</h5>
                </div>
                <div className="item">
                  <img src="https://img.icons8.com/color/96/000000/flutter.png" alt="" />
                  <h5>Flutter</h5>
                </div>
                {/* <div className="item">
                  <img src="https://img.icons8.com/color/96/000000/git.png" alt="" />
                  <h5>Git</h5>
                </div> */}
                {/* <div className="item">
                  <img src="https://img.icons8.com/color/96/000000/firebase.png" alt="" />
                  <h5>Firebase</h5>
                </div> */}
                <div className="item">
                  <img src="https://img.icons8.com/color/96/000000/sql.png" alt="" />
                  <h5>SQL</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
