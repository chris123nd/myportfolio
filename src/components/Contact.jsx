import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      // --- MULAI PERUBAHAN DI SINI ---
      const response = await fetch("https://formspree.io/f/xvganlev", {
        // <--- GANTI DENGAN ENDPOINT FORMSPREE ANDA!
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Penting: ini harus application/json untuk Formspree
          Accept: "application/json", // Penting: ini juga harus ada
        },
        body: JSON.stringify(formDetails),
      });
      // --- AKHIR PERUBAHAN ---

      const result = await response.json(); // Formspree juga mengirimkan respons JSON
      setButtonText("Send");
      setFormDetails(formInitialDetails); // Reset form

      if (response.ok) {
        // Formspree mengembalikan response.ok (true untuk 200-299 status) jika sukses
        toast.success("Message sent successfully!");
      } else {
        // Jika ada error dari Formspree (misal: spam detection, dll.)
        toast.error("Something went wrong, please try again later.");
        console.error("Formspree Error:", result); // Log error dari Formspree
      }
    } catch (error) {
      setButtonText("Send");
      toast.error("Failed to send message.");
      console.error("Fetch Error:", error); // Log error dari fetch API
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>{({ isVisible }) => <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />}</TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate("firstName", e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate("lastName", e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate("email", e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate("phone", e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate("message", e.target.value)}></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                  <ToastContainer position="bottom-right" autoClose={3000} />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
