import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    let data = this.props.data;
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {data.socialLinks &&
                data.socialLinks.map((i) => {
                  return (
                    <li key={i.className}>
                      <a href={i.url}>
                        <i className={i.className} />
                      </a>
                    </li>
                  )
                })}
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
