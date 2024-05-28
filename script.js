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
logoText.textContent = 'ODIN';
logoBanner.appendChild(logoText);

const photoRefTest = document.querySelector('.photo-ref-text');
logoArea.appendChild(photoRefTest);

const formContainer = document.createElement('div');
formContainer.classList.add('form-container');
container.appendChild(formContainer);


const formHeader = document.querySelector('.form-header');
formContainer.appendChild(formHeader);

const formBanner = document.createElement('div');
formBanner.classList.add('form-banner');
formContainer.appendChild(formBanner);

const formTag = document.querySelector('.form-tag');
formBanner.appendChild(formTag);