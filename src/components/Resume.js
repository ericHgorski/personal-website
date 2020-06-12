import React, { Component } from "react";

export default class Resume extends Component {
    render() {
        let data = this.props.data;
        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1>
                            <span>Education</span>
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
                                                <span>&bull;</span>{" "}
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
                <div className="row work">
                    <div className="three columns header-col">
                        <h1>
                            <span>Recent Work</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        {data.work &&
                            data.work.map((item) => {
                                return (
                                    <div className="row item">
                                        <div className="twelve columns">
                                            <h3>{item.CompanyName}</h3>
                                            <p className="info">
                                                {item.specialization}
                                                <span>&bull;</span>
                                                <em className="date">
                                                    {item.MonthOfLeaving} {item.YearOfLeaving}
                                                </em>
                                            </p>
                                            <p>{item.Achievements}</p>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
                <a id="resume-download-container" href="/images/eric-gorski-june-2020-resume-v2.pdf" download>
                    <button class="download-btn">
                        <i class="fa fa-download"></i> Download Resume
                    </button>
                </a>
            </section>
        );
    }
}
