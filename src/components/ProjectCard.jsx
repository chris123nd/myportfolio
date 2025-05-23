import { Col } from "react-bootstrap";
import VanillaTilt from "react-vanilla-tilt";

export const ProjectCard = ({ title, stack, imgUrl, url, category }) => {
  const ProjImgBxStyle = {
    gridArea: "image",
    background: `url(${imgUrl})`,
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <Col sm={12} md={6} lg={4}>
      <VanillaTilt style={{ width: "100%" }} options={{ scale: 1.1, speed: 400, max: 25, glare: true, reverse: true, "max-glare": 0.5 }}>
        <div className={`proj-card rgb ${category === "Mobile" ? "proj-card-mobile" : "proj-card-website"}`}>
          <div style={ProjImgBxStyle}></div>
          <div className="proj-body">
            <h4>{title}</h4>
            <span>
              <a href={url}>{url}</a>
            </span>
            <div className="stack-container">
              {stack.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </VanillaTilt>
    </Col>
  );
};
