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
                        <h2>A Little About Me</h2>
                        <p>{data.aboutme}</p>
                    </div>
                    <div className="nine columns main-col">
                        <h2>Get In Touch</h2>
                        <p>er.h.gorski[at]gmail.com</p>
                    </div>
                </div>
            </section>
        );
    }
}
