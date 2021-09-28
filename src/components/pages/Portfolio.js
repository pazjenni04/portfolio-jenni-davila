import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";

import Community from "../../images/community-sidekicks.png";
import Fitness from "../../images/fitness-tracker.png";
import Company from "../../images/company-directory.png";

const projects = [
  {
    name: "Community Sidekicks",
    description:
      "“Community Sidekicks” is a humanitarian website in which you can sign up to donate your time to a number of organizations in search of people willing to do volunteer work. Non-profit organizations can create an account and see a list of volunteers, and volunteers can sign up to be viewed and vetted by organizations.",
    src: Community,
    Github: "https://github.com/pazjenni04/community-sidekicks.git",
    repoLink: "https://community-sidekicks.herokuapp.com/",
    tech: "Javascript, CSS, Handlebars",
    id: 1,
  },
  {
    name: "Fitness Tracker",
    description:
      "Interested in tracking your fitness goals?  Track your daily exercises by recording them in this fitness tracker.",
    src: Fitness,
    Github: "https://github.com/pazjenni04/workout-tracker.git",
    repoLink: "https://workout-fitness-tracker01.herokuapp.com/",
    tech: "Javascript, CSS, HTML",
    id: 2,
  },
  {
    name: "Company Directory",
    description:
      "Keeping track of your employee roster never seemed so easy! This application helps employers maintain their employee roster with ease.",
    src: Company,
    Github: "https://github.com/pazjenni04/company_directory.git",
    tech: "Javascript",
    id: 3,
  },
];

console.log(projects.stillPNG);

function Portfolio() {
  return (
    <div>
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
