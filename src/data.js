const data = {
  name: "Eric Gorski",
  role: "A software engineer with a background in technical writing, data analysis, and blockchain technology.",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/eric-heydorn-gorski-75b22a112/",
      className: "fa fa-linkedin",
    },
    {
      name: "github",
      url: "https://github.com/ericHgorski/",
      className: "fa fa-github",
    },
    {
      name: "twitter",
      url: "https://twitter.com/EricGraybeard",
      className: "fa fa-twitter",
    },
    {
      name: "medium",
      url: "https://medium.com/@eric.gorski",
      className: "fa fa-medium",
    },
  ],
  aboutme:
    "I work on full-stack web applications in the web3 space. I am a native English speaker who lives in New York City.",
  education: [
    {
      UniversityName: "Spiced Academy ",
      specialization: "Full-Stack Web Development",
      location: "Berlin, Germany",
      MonthOfPassing: "June",
      YearOfPassing: "2020",
      Achievements:
        "Built responsive web pages and full-stack web applications with Javascript, HTML, CSS, React and Vue. Learned programming fundamentals, the principles of responsive web-design and mobile-friendly development.",
    },
    {
      UniversityName: "Vassar College  ",
      specialization: "Economics and Political Science",
      location: "New York, USA",
      MonthOfPassing: "May",
      YearOfPassing: "2018",
      Achievements: "Top 10% of Graduating class.",
    },
  ],

  work: [
    {
      CompanyName: "Yup",
      specialization: "Software Engineer",
      location: "New York City, USA",
      MonthOfLeaving: "Present",
      YearOfLeaving: "",
      Achievements: `Working in face-paced, full-stack web development on the Yup chrome extension and web application. Technologies include React, MongoDB, AWS, GraphQl, Web3, EOS blockchain, and Node/Express.`,
    },
    {
      CompanyName: "Gnosis",
      specialization: "Scientific Writer",
      location: "Berlin, Germany",
      MonthOfLeaving: "April",
      YearOfLeaving: "2020",
      Achievements: `Produced technical writing and think pieces for Gnosis, including a flagship monthly development newsletter and major product announcements. 
        Edited communications content, and performed data analysis on Twitter engagement to shape the company's social media strategy and significantly improve outreach.`,
    },
    {
      CompanyName: "Berminal",
      specialization: "Head of Content",
      location: "New York City, USA",
      MonthOfLeaving: "August",
      YearOfLeaving: "2019",
      Achievements:
        "Oversaw all content-related matters on the Berminal blockchain and cryptocurrency news platform. Managed a group of 8 content creators, led the production of the Daily Berminal Brief newsletter, and grew the product user base by 100x.",
    },
  ],
  portfolio: [
      {
      name: "Yup Finance",
      description: "A gamefied, yield-farming interface for the YUP-ETH liquidity provider token.",
      liveLink: "https://yup.finance/",
      gitLink: null,
      picSrc: "yup-finance-preview.png",
      technologies: "Technologies: React, Scatter, Redux, Express, Mongodb.",
    },
    {
      name: "ETH EOS Crypto Bridge",
      description: "A user interface for bridging YUP or YUPETH tokens from Ethereum to EOS.",
      liveLink: "https://www.etheos.xyz/",
      gitLink: null,
      picSrc: "etheos-preview.png",
      technologies: "Technologies: React, Web3, Scatter.",
    },
    {
      name: "Funky Chicken Destroyer",
      description:
        "A multiplayer arcade game built with Socket.io and Phaser 3. Test it by opening the live code in two browser windows and firing eggs at the enemy chicken.",
      liveLink: "https://funky-chicken-destroyer.herokuapp.com/",
      gitLink: "https://github.com/ericHgorski/Funky-Chicken-Destroyer-Multiplayer-Arcade-Game",
      picSrc: "funky-chicken-preview.png",
      technologies: "Technologies: Phaser 3, Socket.io, Express.",
    },
    {
      name: "Yup Web App",
      description:
        "A web app for intereacting with the Yup.io curation protocol and platform.",
      liveLink: "https://app.yup.io/",
      gitLink: "https://github.com/Yup-io/app-frontend",
      picSrc: "webapp-preview.png",
      technologies: "Technologies: React, Elastic Search, AWS, Express.",
    },
    
  ],
};

export default data;
