const portfolioCards = [
    {
        id: 1,
        name: 'Meetcha!',
        type: 'DigitalCrafts Group Project',
        typeLogoImg: 'logoDC.png',
        typeLogoAlt: 'Digital Crafts Logo',
        purpose: 'Find meetups based on topic and distance from your location and see them displayed on a Google Map.',
        description: 'Front-end web stack project using vanilla HTML5, CSS3, and Javascript/ES6 to access the Meetup.com and Google Maps REST APIs. The live site is deployed via an AWS EC2 instance.',
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
        purpose: 'Check the upcoming arrival times for trains at any MARTA train station.',
        description: 'Front-end web stack project using HTML5, CSS3, and ReactJS to access realtime train arrival data from the MARTA REST API. The live site is deployed via an AWS EC2 instance.',
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
        purpose: 'Save your GPS location-based reminders via IFTTT and the Twilio SMS messaging API and share them with other users.',
        description: 'Full-stack web project using HTML5, CSS3, Javascript/ES6, Express, NodeJS, and PostgreSQL, along with the Twilio SMS and Google Maps APIs. The live site is deployed via an AWS EC2 instance.',
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
        purpose: 'See a random Fortune Cookie or a random Coding-themed quote and Tweet any that you like.',
        description: 'Simple Front-end web project using vanilla HTML5, CSS3, and Javascript/ES6, along with the Twitter API. This site is not yet deployed live. Check back soon!',
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
        <p>${card.purpose}${card.purpose.length < 40 ? '<br><br><br>' : (card.purpose.length < 80 ? '<br><br>' : '') }</p>
        <div class="project-type">
            <img src="./images/${card.typeLogoImg}" alt="${card.typeLogoAlt}">
            <p>${card.type}</p>
            <img src="./images/${card.typeLogoImg}" alt="${card.typeLogoAlt}">
        </div>
        <p class="desc">${card.description}</p>
        <p>
            <a href="${card.urlLive || '#'}" target="_blank" title="Visit the Live Site" class="social-icon folio"><i class="fas fa-external-link-alt"></i></a>
            <a href="${card.urlGithub || '#'}" target="_blank" title="Github Repo" class="social-icon github"><i class="fab fa-github"></i></a>
        </p>
        `;

    newCard.appendChild(newCardHeader);
    newCard.appendChild(newCardBody);
    portfolioTab.appendChild(newCard);
})

