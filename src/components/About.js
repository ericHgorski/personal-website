import React, { Component } from "react";
export default class About extends Component {
    render() {
        let data = this.props.data;
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="images/profilepic.png" alt="profile pic" />
                    </div>

                    <div className="nine columns main-col">
                        <h2 className="text-shadow ">A Little About Me</h2>
                        <p>{data.aboutme}</p>
                    </div>
                    <div className="nine columns main-col">
                        <h2 id="get-in-touch">Get In Touch</h2>
                        <a id="mail-to-link" href="mailto:er.h.gorski@gmail.com">
                            Shoot me an email
                        </a>
                        — or er.h.gorski[at]gmail.com
                        <p>Berlin, Germany</p>
                    </div>
                </div>
            </section>
        );
    }
}
