// 1. Footer Dates
document.querySelector('#currentyear').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

// 2. Responsive Navigation Toggle
const menuButton = document.querySelector('#menu-button');
const primaryNav = document.querySelector('#primary-nav');

menuButton.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen);
    menuButton.textContent = isOpen ? '✕' : '☰';
});

// 3. Grid / List View Toggle
const gridBtn = document.querySelector('#grid-btn');
const listBtn = document.querySelector('#list-btn');
const membersContainer = document.querySelector('#members-container');

gridBtn.addEventListener('click', () => {
    membersContainer.classList.add('grid');
    membersContainer.classList.remove('list');
    gridBtn.classList.add('active-view');
    listBtn.classList.remove('active-view');
    gridBtn.setAttribute('aria-pressed', 'true');
    listBtn.setAttribute('aria-pressed', 'false');
});

listBtn.addEventListener('click', () => {
    membersContainer.classList.add('list');
    membersContainer.classList.remove('grid');
    listBtn.classList.add('active-view');
    gridBtn.classList.remove('active-view');
    listBtn.setAttribute('aria-pressed', 'true');
    gridBtn.setAttribute('aria-pressed', 'false');
});

// 4. Fetch and Display Members via Async/Await
const url = 'data/members.json';

async function getMemberData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        displayMembers(data);
    } catch (error) {
        console.error('Error loading member data:', error);
    }
}

function getMembershipLabel(level) {
    switch (level) {
        case 3: return { text: 'Gold Member', className: 'level-3' };
        case 2: return { text: 'Silver Member', className: 'level-2' };
        default: return { text: 'Member', className: 'level-1' };
    }
}

function displayMembers(members) {
    membersContainer.innerHTML = '';

    members.forEach((member) => {
        const card = document.createElement('section');
        const badgeInfo = getMembershipLabel(member.membership);

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} logo" loading="lazy" width="100" height="100">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank" rel="noopener">Visit Website</a></p>
            <span class="badge ${badgeInfo.className}">${badgeInfo.text}</span>
        `;

        membersContainer.appendChild(card);
    });
}

getMemberData();
