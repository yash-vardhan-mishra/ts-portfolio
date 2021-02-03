import { IMain } from "../Models";
import { isObjectValid } from "../utils";

interface AboutProps {
  data: IMain;
}

const About = ({ data }: AboutProps) => {
  const { name, image, bio, address, phone, email, resumedownload } = data;
  const { street, city, state, zip } = address;

  const profilepic = "images/" + image;
  if (!isObjectValid(data)) {
    <div></div>;
  }
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Yash's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={resumedownload}
                  className="button"
                >
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
