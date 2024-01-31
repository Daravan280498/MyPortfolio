import React from "react";
import "./About.css";
// import About from '../../assets/images/About.jpg'
import Jump from "react-reveal/Jump";

const about = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            {/* <div className="col-md-5  about-img">
                        <img src={About} alt="Profile-pic" />
                    </div> */}
            <div className="col-md-12 about-content">
              <h2 className=" mt-3 mb-1 text-center text-uppercase">
                About me
              </h2>
              <hr />
              <p>
                Hello! I'm Daravan Singh a full stack developer with a solid
                foundation in HTML, CSS, Bootstrap, JavaScript, React.js,
                Node.js, Express.js, and MongoDB. Having successfully completed
                two impactful internships. During these internships, I
                collaborated with dynamic teams to create and maintain
                responsive web applications. My work involved using a diverse
                set of technologies, including HTML, CSS, Bootstrap, JavaScript,
                React.js, Node.js, Express.js, and MongoDB.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default about;
