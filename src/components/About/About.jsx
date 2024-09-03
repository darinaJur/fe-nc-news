import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h3>Project Description</h3>
        <div className="what-is-container">
          <h5>What is NC News Project?</h5>
          <div className = "project-description">
          This project was created by Darina J as a part of Northcoders Software
          Development Bootcamp (April 2024 Cohort). NC News is a news platform, using an API built
          as a back-end project with intention of mimicing a backend service
          such as Reddit.
          </div>
        </div>
        <div className="tech-stack-container">
          <h5>Tech Stack</h5>
          <div className="tech-list-container">
            <div className="back-end">
              <p className="list-title">Back-end (<a href="https://github.com/darinaJur/nc-news" target="_blank">GitHub Repo</a>):</p>
              <ul>
                <li>JavaScript</li>
                <li>PSQL</li>
                <li>Node JS</li>
                <li>Express</li>
              </ul>
            </div>

            <div className="front-end">
              <p className="list-title">Front-end (<a href="https://github.com/darinaJur/fe-nc-news" target="_blank">GitHub Repo</a>):</p>
              <ul>
                <li>JavaScript</li>
                <li>React JS</li>
                <li>Axios</li>
                <li>HTML/CSS/Bootstrap</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="user-container">
          <h5>User Experience</h5>
          <ul>
            <li>
              User can be manually selected from the Header section by clicking on the avatar (popup menu
              indicates all currently registered users).
            </li>
            <li>
              User can view latest articles and navigate between pages using
              pagination.
            </li>
            <li>
              User can sort articles by votes, comment count and date in
              ascending or descending order.
            </li>
            <li>
              When viewing a single article, user can vote on the article and
              view other users' comments.
            </li>
            <li>
              When viewing a single article, user can comment on the article and delete their own comments.
            </li>
            <li>
              User can post a new article.
            </li>
          </ul>
        </div>
          <div className = "future-container">
            <h5>Under development</h5>
            <ul>
            <li>
              Mobile version of the web app.
            </li>
            <li>
              Functionality to vote on an individual comment.
            </li>
            <li>
              Functionality to open a user profile page and ability to edit it.
            </li>
          </ul>
          </div>
    </div>
  );
};

export default About;
