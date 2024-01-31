import React from "react";
import "./TechStack.css";
import { TechStackList } from "../../utils/TechStackList";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";

const TechStack = () => {
  return (
    <>
      <div className="techstack" id=" techstack">
        <RubberBand>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technologies Stack
          </h2>
          <hr />
          <p className="pb-3 text-center">
            👉 Including programing languages, framework, database, front-end
            and back-end tools, and APIs
          </p>
        </RubberBand>
        <div className="row">
          {TechStackList.map((tech) => (
            <Fade left>
              <div key={tech._id} className="col-md-3">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="align-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        {/* <div className="media-body">
                                    <h5>{tech.name}</h5>
                                </div> */}
                      </div>
                      <div className="media-body text-center">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
