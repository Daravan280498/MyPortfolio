import React from 'react'
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './Education.css';

const Education = () => {
  return (
    <>
       <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline lineColor="#f9004d">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#e2e8ec", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2022 - Pursuing"
            iconStyle={{ background: "#e2e8ec", color: "#ff014f" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">BCA</h3>
            <h4 className="vertical-timeline-element-subtitle">
              IGNOU 
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#e2e8ec", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2022"
            iconStyle={{ background: "#e2e8ec", color: "#ff014f" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Development
</h3>
            <h5 className="vertical-timeline-element-subtitle">
            Madrid Software Training Institute
            </h5>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#e2e8ec", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2018 - 2021"
            iconStyle={{  background: "#e2e8ec", color: "#ff014f" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">BA</h3>
            <h4 className="vertical-timeline-element-subtitle">
            Delhi University SOL
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Education
