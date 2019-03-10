const portfolioCards = [
    {
        id: 1,
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
        id: 2,
        name: 'MARTA Dashboard',
        type: 'DigitalCrafts Solo Project',
        typeLogoImg: 'logoDC.png',
        typeLogoAlt: 'Digital Crafts Logo',
        description: 'Check the upcoming arrival times for trains at any MARTA train station.',
        builtWith: 'HTML5, CSS3, React, MARTA REST API',
        deployedVia: 'AWS EC2 instance',
        screenshotImg: 'screenshotMartaDB.png',
        screenshotAlt: 'Marta Dashboard Screenshot',
        urlLive: 'http://www.trainarrive.info/',
        urlGithub: 'https://github.com/GFore/dc-React-MartaDashboard',
    },
    {
        id: 3,
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
        id: 4,
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
        <!-- 
        <div class="project-type">
            <img src="./images/${card.typeLogoImg}" alt="${card.typeLogoAlt}">
            <p>${card.type}</p>
            <img src="./images/${card.typeLogoImg}" alt="${card.typeLogoAlt}">
        </div> -->
        <p class="desc"><b>Built with: </b>${card.builtWith}</p>
        <p class="desc"><b>Deployed via: </b>${card.deployedVia}</p>
        <p>
            <a href="${card.urlLive || '#'}" target="_blank" title="Visit the Live Site" class="social-icon folio"><i class="fas fa-external-link-alt"></i></a>
            <a href="${card.urlGithub || '#'}" target="_blank" title="Github Repo" class="social-icon github"><i class="fab fa-github"></i></a>
        </p>
        <div class="project-type-logo">
            <img src="./images/${card.typeLogoImg}" alt="${card.typeLogoAlt}" title="${card.type}">
        </div>
        `;

    newCard.appendChild(newCardHeader);
    newCard.appendChild(newCardBody);
    portfolioTab.appendChild(newCard);
})

