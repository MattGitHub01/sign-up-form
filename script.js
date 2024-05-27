const container = document.querySelector('.container');

const logoArea = document.createElement('div');
logoArea.classList.add('logo-area');
container.appendChild(logoArea);

const logoBanner = document.createElement('div');
logoBanner.classList.add('logo-banner');
logoArea.appendChild(logoBanner);

const logoPicture = document.createElement('div');
logoPicture.classList.add('logo-picture');
logoBanner.appendChild(logoPicture);

const logoText = document.createElement('span');
logoText.classList.add('logo-text');
logoText.textContent = "ODIN";
logoBanner.appendChild(logoText);