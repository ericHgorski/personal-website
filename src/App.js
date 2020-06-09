import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Writing from "./components/Writing";
// import Testimonials from "./components/Testimonials";
import data from "./data";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Header data={data} />
                <About data={data} />
                <Portfolio data={data} />
                {/* <Writing data={data} /> */}
                <Resume data={data} />
                {/* <Testimonials data={data} /> */}
                {/* <Contact data={data} /> */}
                <Footer data={data} />
            </div>
        );
    }
}
