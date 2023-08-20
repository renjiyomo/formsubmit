// Smooth scrolling
const links = document.querySelectorAll('nav a');

for (const link of links) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: 'smooth'
  });
}

// Form validation
const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();
  
  if (name === '' || email === '' || message === '') {
    alert('Please fill out all fields.');
  } else {
    alert('Message sent successfully!');
    form.reset();
  }
});// Smooth scrolling
const links = document.querySelectorAll('nav a');

for (const link of links) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: 'smooth'
  });
}

// Form validation
const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();
  
  if (name === '' || email === '' || message === '') {
    alert('Please fill out all fields.');
  } else {
    alert('Message sent successfully!');
    form.reset();
  }
});

