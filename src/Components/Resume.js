import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
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
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
    var skills = data.skills.filter(function (skill) {
      
      return skill.Cat === "Front"
    }).
      map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

  var skillsbackend = data.skills.filter(function (skill) {
      
    return skill.Cat === "Back"
  }).
    map(function (skills) {
    var className = "bar-expand " + skills.name.toLowerCase();
    return (
      <li key={skills.name}>
        <span style={{ width: skills.level }} className={className}></span>
        <em>{skills.name}</em>
      </li>
    );
  });

var skillsmisc = data.skills.filter(function (skill) {
      
  return skill.Cat === "Misc"
}).
  map(function (skills) {
  var className = "bar-expand " + skills.name.toLowerCase();
  return (
    <li key={skills.name}>
      <span style={{ width: skills.level }} className={className}></span>
      <em>{skills.name}</em>
    </li>
  );
});

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <div className="card front-end">Front-end</div>
            <div className="card back-end">Back-end</div>
            <div className="card other">Other</div>
            <ul className="skills">{skills}</ul>
            <ul className="skills">{skillsbackend}</ul>
            <ul className="skills">{skillsmisc}</ul>
          </div>
        </div>
      </div>
    </section>
  );}
  return null;
};

export default Resume;
