import { Container, Row, Col } from "react-bootstrap";
import emailIcon from "../assets/img/mail.svg";
import linkedinIcon from "../assets/img/link.svg";
import githubIcon from "../assets/img/nav-icon2.svg";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Deteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" style={styles.footer}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} style={styles.leftColumn}>
            <h2 style={styles.title}>Contact</h2>
            <p style={styles.subtitle}>Let’s connect and create something great.</p>
          </Col>
          <Col md={6}>
            <div style={styles.contactList}>
              <div style={styles.contactItem}>
                <img src={emailIcon} alt="Email Icon" style={styles.icon} />
                <a href="mailto:christiansimangunsong2018@gmail.com" style={styles.link}>
                  christiansimangunsong2018@gmail.com
                </a>
              </div>
              <div style={styles.contactItem}>
                <img src={linkedinIcon} alt="LinkedIn Icon" style={styles.icon} />
                <a href="https://www.linkedin.com/in/christiansimangunsong" target="_blank" rel="noopener noreferrer" style={styles.link}>
                  linkedin.com/christiansimangunsong
                </a>
              </div>
              <div style={styles.contactItem}>
                <img src={githubIcon} alt="GitHub Icon" style={styles.icon} />
                <a href="https://github.com/chris123nd" target="_blank" rel="noopener noreferrer" style={styles.link}>
                  github.com/chris123nd
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Tombol Scroll ke Atas */}
      {showScroll && (
        <button onClick={scrollToTop} style={styles.scrollButton} aria-label="Scroll to Top">
          ⬆
        </button>
      )}
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#143d70",
    color: "white",
    padding: "60px 0",
    position: "relative",
  },
  leftColumn: {
    marginBottom: "30px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem",
  },
  contactList: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  icon: {
    width: "30px",
    height: "30px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
  },
  scrollButton: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    fontSize: "24px",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
    zIndex: 1000,
  },
};
