const data = {
    name: "Eric Gorski",
    role: "I am Berlin-based full stack web developer with a background in technical writing, data analysis, communications blockchain technology, and content production.",
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
        "In June a graduated from a 3-month full-stack web development bootcamp at Spiced Academy in Berlin. At Spiced, I built on my previous experience as a technical writer and data analyst into the field of web development. I learned HTML, CSS and Javascript, the principles of responsive web-design and mobile-friendly development. I built full-stack applications with React and Vue — including a fully-featured social network application and an online multiplayer arcade game.",
    education: [
        {
            UniversityName: "Spiced Academy",
            specialization: "Full-Stack Web Development",
            MonthOfPassing: "June",
            YearOfPassing: "2020",
            Achievements:
                "Built responsive web pages and full-stack web applications with HTML, CSS, React abd Vue and Javascript. Learned programming fundamentals, the principles of responsive web-design and mobile friendly development.",
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
            Achievements:
                "Produced a wide range of technical writing, think pieces for Gnosis, including a flagship monthly development update and major product announcements. Edited all communications content, and performed data analysis on Twitter engagement to shape the companies social media strategy and significantly improved outreach.",
        },
        {
            CompanyName: "Berminal",
            specialization: "Head of Content",
            MonthOfLeaving: "Aug",
            YearOfLeaving: "2019",
            Achievements:
                "Oversaw all content-related matters on the Berminal blockchain and cryptocurrency news platform.Managed a group of 8 content creators, led the production of the Daily Berminal Brief newsletter, and grew the product user base by over 1000.",
        },
    ],
    portfolio: [
        {
            name: "Funky Chicken Destroyer",
            description:
                "A multiplayer arcade game built with Socket.io and Phaser 3. You can test it by opening the live code in two browser windows and firing eggs at the enemy chicken.",
            liveLink: "https://funky-chicken-destroyer.herokuapp.com/",
            gitLink: "https://github.com/ericHgorski/Funky-Chicken-Destroyer-Multiplayer-Arcade-Game",
            picSrc: "funky-chicken-preview.png",
        },
        {
            name: "Pig Pen Social Network",
            description:
                "A single-page social networking application built with React and styled with Material-UI. Features a live chat-room, password reset via email, photo uploads, form validation, error handling, 404 handling, account deletion, SQL injection protection, and CSURF defense.",
            liveLink: "https://pig-pen-social-network.herokuapp.com/",
            gitLink: "https://github.com/ericHgorski/Pig-Pen-Social-Network",
            picSrc: "pig-pen-preview.png",
        },
        {
            name: "Dream Image Board",
            description: "A fully-feature image board build with Vue.js and AWS. It features image uploading, comments, usernames, and keyboard controls.",
            liveLink: "https://dream-img-board.herokuapp.com/",
            gitLink: "https://github.com/ericHgorski/Dream-Image-Board",
            picSrc: "dream-image-board-preview.png",
        },
        {
            name: "Twitter News Ticker",
            description: "A simple news ticker that pulls the latest headlines from the Onion and the New York Times Twitter feed and displays them on a moving horizontal ticker.",
            liveLink: "https://twitter-headline-ticker.herokuapp.com/",
            gitLink: "https://github.com/ericHgorski/Twitter-Headline-Ticker",
            picSrc: "twitter-ticker-preview.png",
        },
        {
            name: "Simple Spotify API Interface",
            description: "A UI for searching artists and albums on Spotify that uses the Spotify API.",
            liveLink: "https://simple-spotify.herokuapp.com/",
            gitLink: "https://github.com/ericHgorski/Spotfiy-API-Interface",
            picSrc: "spotify-preview.png",
        },
    ],
};

export default data;
