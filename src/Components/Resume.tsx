import { IResume } from "../Models";
import { isObjectValid } from "../utils";

interface ResumeProps {
  data: IResume;
}
const Resume = ({ data }: ResumeProps) => {
  const { education, work, skills, skillmessage } = data;
  const educationalBg = education.map(function (edu) {
    return (
      <div key={edu.school}>
        <h3>{edu.school}</h3>
        <p className="info">
          {edu.degree} <span>&bull;</span>
          <em className="date">{edu.graduated}</em>
        </p>
        <p>{edu.description}</p>
      </div>
    );
  });
  const workExp = work.map(function (wrk) {
    return (
      <div key={wrk.company}>
        <h3>{wrk.company}</h3>
        <p className="info">
          {wrk.title}
          <span>&bull;</span> <em className="date">{wrk.years}</em>
        </p>
        <p>{wrk.description}</p>
      </div>
    );
  });
  const skillSet = skills.map(function (skill) {
    const className = "bar-expand " + skill.name.toLowerCase();
    return (
      <li key={skill.name}>
        <span style={{ width: skill.level }} className={className}></span>
        <em>{skill.name}</em>
      </li>
    );
  });
  if (!isObjectValid(data)) {
    return <div></div>;
  }
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
            <div className="twelve columns">{educationalBg}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{workExp}</div>
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
            <ul className="skills">{skillSet}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
