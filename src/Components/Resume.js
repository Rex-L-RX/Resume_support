import React from "react";
import Slide from "react-awesome-reveal";

function Resume(props){

  if (!props.data) return null;

  const work = props.data.work.map(function (work) {
    return (
      <div key={work.company}>
        <h3>{work.company}</h3>
        <p className="info">
          {work.title}
          <span>&bull;</span> <em className="date">{work.years}</em>
        </p>
        {
          work.description.map(function (work_description, index){
            return (
            <ul key={index}>
              <li>{work_description}</li>
            </ul>
            )
          })
        }     
      </div>
    );
  });

  const skills = props.data.skills.map((skills) => {
    return (
      <div key={skills.name}>
        <h3>{skills.name}</h3>
        {
          skills.descripiton.map(function (skills_description, index){
            return (
            <ul key={index}>
              <li>{skills_description}</li>
            </ul>
            )
          })
        } 
      </div>
    );
  });

  const education = props.data.education.map(function (education) {
    return (
      <div key={education.school}>
        <h3>{education.school}</h3>
        <p className="info">
          {education.degree} <span>&bull;</span>
          <em className="date">{education.graduated}</em>
        </p>
        <p>{education.description}</p>
      </div>
    );
  });

  return (
    <section id="resume">
      <Slide left duration={1300}>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Experience</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>
      </Slide>

      <Slide left duration={1300}>
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">{skills}</div>
        </div>
      </Slide>

      <Slide left duration={1300}>
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">{education}</div>
        </div>
      </Slide>
    </section>
  );
}
export default Resume;
