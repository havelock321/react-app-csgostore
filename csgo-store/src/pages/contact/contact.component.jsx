import React from "react";
import "./contact.styless.scss";
import me from "./EU.jpg";
import CustomButton from "../../components/custom-button/custom-button.component";

const ContactPage = () => {
  return (
    <div className="contact-page ">
      <div className="about ">
        <div className="me-item">
          <img className="image" src={me} />
          <span>Solution Architect / Developer</span>
          <div className="buttons">
            <CustomButton>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/leonardo-silva-15433a89/"
              >
                TO CONTACT CLICK HERE
              </a>
            </CustomButton>
            <CustomButton>
              <a
                target="_blank"
                href="https://github.com/lersilva/react-app-csgostore
                "
              >
                DOWNLOAD THIS PROJECT
              </a>
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
