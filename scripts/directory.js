const membersUrl = 'data/members.json';
const cardsContainer = document.querySelector('#members-container');
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');

// Fetch JSON data asynchronously
async function getMemberData() {
    try {
        const response = await fetch(membersUrl);
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error('Failed to load member data:', error);
    }
}

// Display members as cards or list items
const displayMembers = (members) => {
    cardsContainer.innerHTML = '';
    
    members.forEach((member) => {
        let card = document.createElement('section');
        card.classList.add('member-card');

        let portrait = document.createElement('img');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let industry = document.createElement('p');
        let level = document.createElement('span');

        portrait.setAttribute('src', `images/${member.image}`);
        portrait.setAttribute('alt', `Logo of ${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '250');
        portrait.setAttribute('height', '160');

        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        industry.textContent = `Industry: ${member.industry}`;

        website.setAttribute('href', member.website);
        website.setAttribute('target', '_blank');
        website.textContent = member.website;

        // Membership badge labeling
        let levelText = '';
        if (member.membership === 3) levelText = 'Gold Member';
        else if (member.membership === 2) levelText = 'Silver Member';
        else levelText = 'Member';
        
        level.textContent = levelText;
        level.classList.add('membership-badge', `level-${member.membership}`);

        card.appendChild(portrait);
        card.appendChild(name);
        card.appendChild(level);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(industry);

        cardsContainer.appendChild(card);
    });
};

// Event listeners for view switching
gridButton.addEventListener('click', () => {
    cardsContainer.classList.add('grid');
    cardsContainer.classList.remove('list');
});

listButton.addEventListener('click', () => {
    cardsContainer.classList.add('list');
    cardsContainer.classList.remove('grid');
});

// Initialize fetch call
getMemberData();

// Footer Date Logic
const currentYearElement = document.querySelector('#currentyear');
const lastModifiedElement = document.querySelector('#lastModified');

if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
}
