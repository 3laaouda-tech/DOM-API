const body = document.body;

// Create a header
const header = document.createElement('header');
const nav = document.createElement('nav');
const logo = document.createElement('a');
const navList = document.createElement('ul');
const hero = document.createElement('section');

logo.className = 'logo';
logo.textContent = 'Coffee Shop';
logo.href = '#';

navList.className = 'nav-list';

const navItems = ['Home', 'Menu', 'About', 'Contact'];
navItems.forEach((itemText) => {
  const navItem = document.createElement('li');
  const navLink = document.createElement('a');

  navItem.className = 'nav-item';
  navLink.textContent = itemText;
  navLink.href = '#';

  navItem.appendChild(navLink);
  navList.appendChild(navItem);
});

nav.appendChild(logo);
nav.appendChild(navList);
header.appendChild(nav);
body.appendChild(header);


// Create the Hero Section
const heroContent = document.createElement('div');
const heroHeading = document.createElement('h1');
const heroText = document.createElement('p');
const heroButton = document.createElement('a');

hero.className = 'hero';
heroContent.className = 'hero-content';
heroHeading.textContent = 'Welcome to Our Coffee Shop';
heroText.textContent = 'Enjoy the best coffee in town.';
heroButton.className = 'btn';
heroButton.textContent = 'Explore Our Menu';
heroButton.href = '#';

heroContent.appendChild(heroHeading);
heroContent.appendChild(heroText);
heroContent.appendChild(heroButton);
hero.appendChild(heroContent);
body.appendChild(hero);

// Create the Footer
const footer = document.createElement('footer');
const footerText = document.createElement('p');

footer.className = 'footer';
footerText.textContent = '© 2024 Coffee Shop. All rights reserved.';
footer.appendChild(footerText);
body.appendChild(footer);

// Apply CSS Styles Using JavaScript

header.style.backgroundColor = '#fff';
header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
header.style.padding = '1rem 0';

nav.style.display = 'flex';
nav.style.justifyContent = 'space-between';
nav.style.alignItems = 'center';
nav.style.maxWidth = '1200px';
nav.style.margin = '0 auto';
nav.style.padding = '0 1rem';

logo.style.fontSize = '1.5rem';
logo.style.fontWeight = 'bold';
logo.style.color = '#333';
logo.style.textDecoration = 'none';

navList.style.display = 'flex';
navList.style.listStyle = 'none';
navList.style.margin = '0';
navList.style.padding = '0';

const navLinks = navList.querySelectorAll('.nav-item');
navLinks.forEach((navItem, index) => {
  navItem.style.marginLeft = '1.5rem';
  const link = navItem.querySelector('a');
  link.style.textDecoration = 'none';
  link.style.color = '#333';
  link.style.fontWeight = 'bold';
});

hero.style.height = '560px';
hero.style.backgroundImage = 'url("https://images.pexels.com/photos/2907301/pexels-photo-2907301.jpeg?auto=compress&cs=tinysrgb&w=640&h=853&dpr=1")';
hero.style.backgroundRepeat = 'no-repeat';
hero.style.backgroundPosition = 'center center';
hero.style.backgroundSize = 'cover';
hero.style.color = '#fff';
hero.style.display = 'flex';
hero.style.justifyContent = 'center';
hero.style.alignItems = 'center';
hero.style.padding = '0 1rem';

heroContent.style.maxWidth = '600px';
heroContent.style.height = '100%';
heroContent.style.display = 'flex';
heroContent.style.flexDirection = 'column';
heroContent.style.justifyContent = 'space-around';
heroContent.style.alignItems = 'center';
heroContent.style.textAlign = 'center';

heroHeading.style.fontSize = '2.5rem';
heroHeading.style.marginBottom = '1rem';

heroText.style.fontSize = '1.2rem';
heroText.style.marginBottom = '2rem';

heroButton.style.backgroundColor = '#333';
heroButton.style.color = '#fff';
heroButton.style.padding = '0.75rem 1.5rem';
heroButton.style.textDecoration = 'none';
heroButton.style.borderRadius = '5px';
heroButton.style.transition = 'background-color 0.3s ease';

heroButton.addEventListener('mouseover', () => {
  heroButton.style.backgroundColor = '#555';
});
heroButton.addEventListener('mouseout', () => {
  heroButton.style.backgroundColor = '#333';
});

footer.style.backgroundColor = '#333';
footer.style.color = '#fff';
footer.style.textAlign = 'center';
footer.style.padding = '1rem 0';
footer.style.marginTop = 'auto';
footerText.style.margin = '0';


body.style.margin = '0';
body.style.backgroundColor = '#f8f8f8';
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.minHeight = '100vh';
