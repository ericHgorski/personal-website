import React, { Component } from "react";
export default class About extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.png" alt="eric gorski" />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{data.aboutme}</p>
          </div>
          <div className="nine columns main-col">
            <h2 id="get-in-touch">Get In Touch</h2>
            <a id="mail-to-link" href="mailto:er.h.gorski@gmail.com">
              Email me — er.h.gorski [at] gmail dot com
            </a>
            <p>USA // Germany</p>
          </div>
        </div>
      </section>
    );
  }
}
