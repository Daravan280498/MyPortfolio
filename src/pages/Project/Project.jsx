import React from "react";
import "./Project.css";
import Fade from "react-reveal/Fade";
import GermanConnect from "../../assets/images/GermanConnect.png";
import TeamGlobal from "../../assets/images/TeamGlobal.png";
import TechTraining from "../../assets/images/TechTraining.png";

const project = () => {
  return (
    <>
      <div className="project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top recent projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          My own projects using HTML, Css, Bootstrap, Javascript, React, Node,
          Express, MongoDB..
        </p>
        <div className="row" id="card">
          <Fade right>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Front-End</span>
                  <img src={GermanConnect} alt="Project-1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">Css</span>
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">Javascript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">German Connect</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://germanconnect.000webhostapp.com/"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Front-End</span>
                  <img src={TeamGlobal} alt="Project-2" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Bootsrap</span>
                  <span className="card-detail-badge">Php</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Team Global</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://teamglobalss.com/"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full-stack</span>
                  <img src={TechTraining} alt="Project-3" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">JS</span>
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">mySQL</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Tech Training</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://121techtraining.in/"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default project;
