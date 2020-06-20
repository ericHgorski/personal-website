const data = {
    name: "Eric Gorski",
    role: "I am a Berlin-based full stack web developer with a background in technical writing, data analysis, and blockchain technology.",
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
        "In June I graduated from a 3-month full-stack web development boot-camp at Spiced Academy in Berlin. I am highly competent in HTML, CSS and Javascript, responsive web-design and mobile-friendly development. I have built full-stack applications with React and Vue — including a fully-featured social network application and an online multiplayer arcade game. I can speak German at a B2+ level.",
    education: [
        {
            UniversityName: "Spiced Academy",
            specialization: "Full-Stack Web Development",
            MonthOfPassing: "June",
            YearOfPassing: "2020",
            Achievements:
                "Built responsive web pages and full-stack web applications with Javascript, HTML, CSS, React and Vue. Learned programming fundamentals, the principles of responsive web-design and mobile-friendly development.",
        },
        {
            UniversityName: "Vassar College ",
            specialization: "Economics and Political Science",
            MonthOfPassing: "May",
            YearOfPassing: "2018",
            Achievements: "Departmental Honors, General Honors, Top 20% of Graduating class.",
        },
    ],

    work: [
        {
            CompanyName: "Gnosis",
            specialization: "Scientific Writer",
            MonthOfLeaving: "April",
            YearOfLeaving: "2020",
            Achievements: `Produced technical writing and think pieces for Gnosis, including a flagship monthly development newsletter and major product announcements. 
                Edited communications content, and performed data analysis on Twitter engagement to shape the company's social media strategy and significantly improve outreach.`,
        },
        {
            CompanyName: "Berminal",
            specialization: "Head of Content",
            MonthOfLeaving: "August",
            YearOfLeaving: "2019",
            Achievements:
                "Oversaw all content-related matters on the Berminal blockchain and cryptocurrency news platform. Managed a group of 8 content creators, led the production of the Daily Berminal Brief newsletter, and grew the product user base by 100x.",
        },
    ],
    portfolio: [
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
            name: "Pig Pen Social Network",
            description:
                "A single-page social networking application built with React and styled with Material-UI. Features a live chat-room, password reset via email, photo uploading, form validation, and account deletion.",
            liveLink: "https://pig-pen-social-network.herokuapp.com/",
            gitLink: "https://github.com/ericHgorski/Pig-Pen-Social-Network",
            picSrc: "pig-pen-preview.png",
            technologies: "Technologies: React, Redux, Node, Express, PostgresSQL, AWS, Socket.io, Javascript.",
        },
        {
            name: "Dream Image Board",
            description: "A fully-feature image board build with Vue.js and AWS. It features image uploading, comments, usernames, and keyboard controls.",
            liveLink: "https://dream-img-board.herokuapp.com/",
            gitLink: "https://github.com/ericHgorski/Dream-Image-Board",
            picSrc: "dream-image-board-preview.png",
            technologies: "Technologies: Vue, Amazon Web Services, Express, PostresSQL.",
        },

        {
            name: "Simple Spotify API Interface",
            description: "A user interface for searching artists and albums on Spotify that uses the Spotify API.",
            liveLink: "https://simple-spotify.herokuapp.com/",
            gitLink: "https://github.com/ericHgorski/Spotfiy-API-Interface",
            picSrc: "spotify-preview.png",
            technologies: "Technologies: jQuery, Handlebars, Ajax.",
        },
    ],
};

export default data;
