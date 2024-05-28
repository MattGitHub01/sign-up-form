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

const existingAcctBanner = document.createElement('div');
existingAcctBanner.classList.add('exist-acct-banner');
formContainer.appendChild(existingAcctBanner);

const submitBtn = document.createElement('button');
submitBtn.textContent = 'Create Account';
submitBtn.setAttribute('type', 'submit');
submitBtn.setAttribute('form', 'form-tag');
existingAcctBanner.appendChild(submitBtn);

const existingAcctTxt = document.createElement('span');
existingAcctTxt.classList.add('existing-acct-text');
existingAcctTxt.textContent = 'Already have an account? ';
existingAcctBanner.appendChild(existingAcctTxt);

const existingAcctLink = document.createElement('a');
existingAcctLink.setAttribute('href', './no-acct.html');
existingAcctLink.classList.add('existing-acct-link');
existingAcctLink.textContent = 'Log in';
existingAcctBanner.appendChild(existingAcctLink);s