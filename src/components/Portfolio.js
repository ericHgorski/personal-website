import React, { Component } from "react";
export default class Portfolio extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Projects I've worked on</h1>
            <div id="portfolio-wrapper" className="bgrid-halves cf">
              {data.portfolio &&
                data.portfolio.map((i) => {
                  return (
                    <div key={i.name} className="columns portfolio-item">
                      <div className="item-wrap">
                        <a target="_blank" and rel="noopener noreferrer" href={i.liveLink}>
                          <h4>{i.name}</h4>
                        </a>

                        <a target="_blank" and rel="noopener noreferrer" href={i.gitLink}>
                          <img src={`${process.env.PUBLIC_URL}/images/${i.picSrc}`} alt={i.name} className="item-img grow" />
                        </a>
                        <div className="portfolio-item-meta">
                          <p style={{color: '#fff'}}>{i.description}</p>
                          <p id="project-technologies">{i.technologies}</p>
                          <div className="portfolio-links-container">
                            <a target="_blank" and rel="noopener noreferrer" href={i.liveLink}>
                              Live
                            </a>
                            {i.gitLink && (
                              <a target="_blank" and rel="noopener noreferrer" href={i.gitLink}>
                              Code
                              </a>
                            )}
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
