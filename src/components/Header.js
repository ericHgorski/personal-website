import React, { Component } from "react";
export default class Header extends Component {
    render() {
        let data = this.props.data;
        return (
            <>
                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap"></a>
                        <ul id="nav" className="nav">
                            <li className="current">
                                <a className="smoothscroll" href="#home">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#about">
                                    About
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#portfolio">
                                    Portfolio
                                </a>
                            </li>
                            {/* <li>
                                <a className="smoothscroll" href="#writing">
                                    Writing
                                </a>
                            </li> */}

                            <li>
                                <a className="smoothscroll" href="#resume">
                                    Resume
                                </a>
                            </li>
                            {/* <li>
                                <a className="smoothscroll" href="#testimonials">
                                    Testimonials
                                </a>
                            </li> */}
                        </ul>
                    </nav>

                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline"> {data.name}</h1>
                            <h3 style={{ color: "#fffff", fontFamily: "sans-serif " }}>{data.role}</h3>
                            <hr />
                            <ul className="social">
                                {data.socialLinks &&
                                    data.socialLinks.map((i) => {
                                        return (
                                            <li key={i.name}>
                                                <a href={i.url}>
                                                    <i className={i.className} />
                                                </a>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about">
                            <i className="icon-down-circle" />
                        </a>
                    </p>
                </header>
            </>
        );
    }
}
