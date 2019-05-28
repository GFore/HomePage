const portfolioCards = [
    {
        id:  1,
        name: 'Reac-Tac-Toe',
        type: 'React Self-Project',
        typeLogoImg: 'logoReact.png',
        typeLogoAlt: 'React JS Logo',
        description: 'Play TicTacToe against another player and see history of moves in each game, as well as real-time results displayed in live charts',
        builtWith: 'ReactJS, HTML5, CSS3, Radium, Nivo Charts Data Viz Library',
        deployedVia: 'GitHub Pages',
        screenshotImg: 'screenshotReacTacToe.png',
        screenshotAlt: 'Reac-Tac-Toe Screenshot',
        urlLive: 'https://gfore.github.io/ReacTacToe/',
        urlGithub: 'https://github.com/GFore/ReacTacToe',
    },
    {
        id: 2,
        name: 'Meetcha!',
        type: 'DigitalCrafts Group Project',
        typeLogoImg: 'logoDC.png',
        typeLogoAlt: 'Digital Crafts Logo',
        description: 'Find meetups based on topic and distance from your location and see them displayed on a Google Map.',
        builtWith: 'HTML5, CSS3, Javascript/ES6, Meetup.com and Google Maps REST APIs',
        deployedVia: 'AWS EC2 instance',
        screenshotImg: 'screenshotMeetcha.png',
        screenshotAlt: 'Meetcha Screenshot',
        urlLive: 'https://meetcha.co/',
        urlGithub: 'https://github.com/GFore/Meetcha',
    },
    {
        id: 3,
        name: 'MARTA Dashboard',
        type: 'DigitalCrafts Solo Project',
        typeLogoImg: 'logoDC.png',
        typeLogoAlt: 'Digital Crafts Logo',
        description: 'Check the upcoming arrival times for trains at any MARTA train station.',
        builtWith: 'ReactJS, HTML5, CSS3, MARTA REST API',
        deployedVia: 'AWS EC2 instance',
        screenshotImg: 'screenshotMartaDB.png',
        screenshotAlt: 'Marta Dashboard Screenshot',
        urlLive: 'http://www.trainarrive.info/',
        urlGithub: 'https://github.com/GFore/dc-React-MartaDashboard',
    },
    {
        id: 4,
        name: 'GeoMind\'r',
        type: 'DigitalCrafts Group Project',
        typeLogoImg: 'logoDC.png',
        typeLogoAlt: 'Digital Crafts Logo',
        description: 'Save your GPS location-based reminders via IFTTT and the Twilio SMS messaging API and share them with other users.',
        builtWith: 'HTML5, CSS3, Javascript/ES6, Express, NodeJS, PostgreSQL, IFTTT, Twilio SMS and Google Maps API',
        deployedVia: 'AWS EC2 instance',
        screenshotImg: 'screenshotGeoMindr.png',
        screenshotAlt: 'Geo Minder Screenshot',
        urlLive: 'https://geomindr.com/home',
        urlGithub: 'https://github.com/ianhundere/GeoMindr',
    },
    {
        id: 5,
        name: 'Fortune Cookie',
        type: 'DigitalCrafts Solo Project',
        typeLogoImg: 'logoDC.png',
        typeLogoAlt: 'Digital Crafts Logo',
        description: 'See a random Fortune Cookie or a random Coding-themed quote and Tweet any that you like.',
        builtWith: 'HTML5, CSS3, Javascript/ES6, Twitter API', 
        deployedVia: 'This site is not yet deployed live. Check back soon!',
        screenshotImg: 'screenshotFortune.png',
        screenshotAlt: 'Fortune Cookie Screenshot',
        urlLive: 'https://github.com/GFore/dc-FortuneTeller',
        urlGithub: 'https://github.com/GFore/dc-FortuneTeller',
    },
    {
        id: 6,
        name: 'Local Weather',
        type: 'FreeCodeCamp Front-End Project',
        typeLogoImg: 'logoFCC.png',
        typeLogoAlt: 'Free Code Camp Logo',
        description: 'Get your current local weather report',
        builtWith: 'HTML5, CSS3, Javascript, FCC Weather API', 
        deployedVia: 'Codepen',
        screenshotImg: 'screenshotLocalWeather.png',
        screenshotAlt: 'Local Weather Screenshot',
        urlLive: 'https://codepen.io/Gfore/full/bLjZvr',
        urlGithub: 'https://codepen.io/Gfore/pen/bLjZvr?editors=1010',
    },
]



const portfolioTab = document.querySelector('[data-portfolio]');

portfolioCards.forEach(card => {
    const newCard = document.createElement("div");
    const newCardHeader = document.createElement("div");
    const newCardBody = document.createElement("div");

    newCard.className = "card";
    newCardHeader.className = "card-header portfolio-header";
    newCardBody.className = "card-body";

    newCardHeader.innerHTML = `<a href="${card.urlLive || '#'}" target="_blank"><img src="./images/${card.screenshotImg}" alt="${card.screenshotAlt}" class="portfolio-img"></a>`

    newCardBody.innerHTML = `
        <h2 class="full-name">${card.name}</h2>
        <p>${card.description}${card.description.length < 40 ? '<br><br><br>' : (card.description.length < 80 ? '<br><br>' : '') }</p>
        <p class="desc"><b>Built with: </b>${card.builtWith}</p>
        <p class="desc"><b>Deployed via: </b>${card.deployedVia}</p>
        <p>
            <a href="${card.urlLive || '#'}" target="_blank" title="Visit the Live Site" class="social-icon folio"><i class="fas fa-external-link-alt"></i></a>
            <a href="${card.urlGithub || '#'}" target="_blank" title="Github Repo" class="social-icon github"><i class="fab fa-github"></i></a>
        </p>
        <div class="project-type-logo">
            <img src="./images/${card.typeLogoImg}" alt="${card.typeLogoAlt}" title="${card.type}" style="margin: auto;">
        </div>
        `;

    newCard.appendChild(newCardHeader);
    newCard.appendChild(newCardBody);
    portfolioTab.appendChild(newCard);
})
