import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="resume">
        <div id="resume-download-container">
          <button id="download-btn">
            <a href="/images/eric-gorski-july-2021-resume.pdf" download>
              Download Full Resume
            </a>
          </button>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span className="resume-header">Recent Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {data.work &&
              data.work.map((i) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{i.CompanyName}</h3>
                      <p className="info">
                        {i.specialization}
                        <span>&bull;</span>
                        {i.location}
                        <span>&bull;</span>
                        <em className="date">
                          {i.MonthOfLeaving} {i.YearOfLeaving}
                        </em>
                      </p>
                      <p>{i.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span className="resume-header">Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {data.education &&
              data.education.map((i) => {
                return (
                  <div key={i.UniversityName} className="row item">
                    <div className="twelve columns">
                      <h3>{i.UniversityName}</h3>
                      <p className="info">
                        {i.specialization}
                        <span>&bull;</span>
                        {i.location}
                        <span>&bull;</span>
                        <em className="date">
                          {i.MonthOfPassing} {i.YearOfPassing}
                        </em>
                      </p>
                      <p>{i.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        
      </section>
    );
  }
}
