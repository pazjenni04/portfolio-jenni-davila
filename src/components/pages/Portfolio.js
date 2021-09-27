import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";

const Fitness = require("../../images/fitness-tracker.png");
const Community = require("../../images/community-sidekicks.png");
const Company = require("../../images/company-directory.png");

const projects = [
  {
    name: "Community Sidekicks",
    description:
      "“Community Sidekicks” is a humanitarian website in which you can sign up to donate your time to a number of organizations in search of people willing to do volunteer work. Non-profit organizations can create an account and see a list of volunteers, and volunteers can sign up to be viewed and vetted by organizations.",
    src: "../../images/community-sidekicks.png",
    Github: "https://github.com/pazjenni04/community-sidekicks.git",
    repoLink: "https://community-sidekicks.herokuapp.com/",
    tech: "Javascript, CSS, Handlebars",
    id: 1,
  },
  {
    name: "Fitness Tracker",
    description:
      "Interested in tracking your fitness goals?  Track your daily exercises by recording them in this fitness tracker.",
    src: "../../images/fitness-tracker.png",
    Github: "https://github.com/pazjenni04/workout-tracker.git",
    repoLink: "https://workout-fitness-tracker01.herokuapp.com/",
    tech: "Javascript, CSS, HTML",
    id: 2,
  },
  {
    name: "Company Directory",
    description:
      "Keeping track of your employee roster never seemed so easy! This application helps employers maintain their employee roster with ease.",
    src: "../../images/company-directory.png",
    Github: "https://github.com/pazjenni04/company_directory.git",
    tech: "Javascript",
    id: 3,
  },
];

console.log(projects.stillPNG);

function Portfolio() {
  return (
    <div>
      <Navbar />
      <div className="album py-5" id="examples">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {projects.map((prop) => (
              <Card
                name={prop.name}
                description={prop.description}
                src={prop.src}
                appLink={prop.repoLink}
                Github={prop.Github}
                tech={prop.tech}
                key={prop.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
