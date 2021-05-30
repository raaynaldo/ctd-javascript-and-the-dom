// Insert Copyright Text in Footer
const today = new Date();
const thisYear = today.getFullYear();
console.log(today);
console.log(thisYear);

const footer = document.querySelector('footer');

const copyright = document.createElement('p');
copyright.innerHTML = `&#169; <span>Raynaldo</span> ${thisYear}`;

footer.appendChild(copyright);

// Create List of Skills
const skills = [
  'Javascript',
  'React',
  'Ruby',
  'Rails',
  'C#',
  'ASP.NET',
  'HTML',
  'CSS',
];
