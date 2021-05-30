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

const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.getElementsByTagName('ul')[0];

//Using forEach
// skills.forEach((s) => {
//   const skill = document.createElement('li');
//   skill.innerText = s;
//   skillsList.appendChild(skill);
// });

//Using for
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement('li');
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
