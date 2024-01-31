import React from "react";
import "./Contact.css";
import { BsGithub, BsLinkedin, BsTelephone } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import Fade from "react-reveal/Fade";
const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="row">
          <div className="col-md-12">
            <h2 className=" mt-3 mb-1 text-center text-uppercase">
              Contact me
            </h2>
            <hr />
            <Fade right>
              <div className="card1">
                <BsLinkedin color="#ff014f" size={30} className="ms-2" />
                <BsGithub color="#ff014f" size={30} className="ms-2" />
                <a href="tel:7289970391">
                  <BsTelephone color="#ff014f" size={30} className="ms-2" />
                </a>
                <a href="email:daraisht@gmail.com">
                  <AiTwotoneMail color="#ff014f" size={30} className="ms-2" />
                </a>

                {/*<div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        className="mb-3"
                       
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                       
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Write your message"
                        className="mb-3"
                       
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button">
                        SEND MESSAGE
                      </button>
                    </div>*/}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
