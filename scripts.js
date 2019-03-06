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
]


const portfolioTab = document.querySelector('[data-portfolio]');

portfolioCards.forEach(card => {
    const newCard = document.createElement("div");
    const newCardHeader = document.createElement("div");
    const newCardBody = document.createElement("div");

    newCard.className = "card";
    newCardHeader.className = "card-header portfolio-header";
    newCardBody.className = "card-body";

    const fullName = document.createElement("h2");
    fullName.className = "full-name";
    fullName.textContent = card.name;

    newCardBody.appendChild(fullName);
    newCard.appendChild(newCardHeader);
    newCard.appendChild(newCardBody);
    portfolioTab.appendChild(newCard);
})

