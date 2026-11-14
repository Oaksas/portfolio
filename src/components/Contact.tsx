import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:se.woldeamanual.getnet@gmail.com"
                data-cursor="disable"
              >
                se.woldeamanual.getnet@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+251985412182" data-cursor="disable">
                +251-98-541-2182
              </a>
            </p>
            <p>Dubai, UAE</p>
            <h4>Education</h4>
            <p>
              BSc Software Engineering, Addis Ababa University — Addis Ababa
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/woldeamanual-getnet"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://www.woldeamanual-getnet.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Website <MdArrowOutward />
            </a>
            <a
              href="mailto:se.woldeamanual.getnet@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Akash Malhotra</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
