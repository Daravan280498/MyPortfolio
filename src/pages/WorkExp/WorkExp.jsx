import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#f9004d">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#e2e8ec", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2023-2023"
              iconStyle={{ background: "#e2e8ec", color: "#ff014f" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Tweak Media pvt ltd
              </h4>
              <p>
                Collaborated with a dynamic team to create and maintain
                responsive and user-friendly web applications. Worked with
                cross-functional teams to understand project requirements and
                deliver high-quality solutions.Gained hands-on experience in
                HTML, CSS, Bootstrap, JavaScript, React.js, Node.js, Express.js,
                and MongoDB.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#e2e8ec", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2022 - 2023"
              iconStyle={{ background: "#e2e8ec", color: "#ff014f" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Front-End Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Websitemaker.in
              </h4>
              <p>
                Collaborated with a dynamic team to create and maintain
                responsive and user-friendly web applications. Gained hands-on
                experience in HTML, CSS, Bootstrap, JavaScript.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
