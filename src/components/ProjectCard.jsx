import { Col } from "react-bootstrap";
// Hapus import VanillaTilt: import VanillaTilt from "react-vanilla-tilt";

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
      <div className={`proj-card rgb ${category === "Mobile" ? "proj-card-mobile" : "proj-card-website"}`}>
        <div style={ProjImgBxStyle}></div>
        <div className="proj-body">
          <h4>{title}</h4>
          <span>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>{" "}
            {/* Tambahkan target & rel untuk link eksternal */}
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
    </Col>
  );
};
