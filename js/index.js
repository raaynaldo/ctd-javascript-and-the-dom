// Insert Copyright Text in Footer
const today = new Date();
const thisYear = today.getFullYear();
// console.log(today);
// console.log(thisYear);

const footer = document.querySelector("footer");

const copyright = document.createElement("p");
copyright.innerHTML = `&#169; <span>Raynaldo</span> ${thisYear}`;

footer.appendChild(copyright);

// Create List of Skills
const skills = [
  "Javascript",
  "React",
  "Ruby",
  "Rails",
  "C#",
  "ASP.NET",
  "HTML",
  "CSS",
];

const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.getElementsByTagName("ul")[0];

//Using forEach
// skills.forEach((s) => {
//   const skill = document.createElement('li');
//   skill.innerText = s;
//   skillsList.appendChild(skill);
// });

//Using for
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

// Lesson 4-3

const messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;

  const messageSection = document.getElementById("messages");
  const messageList = messageSection.getElementsByTagName("ul")[0];

  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${email}">${name}</a><span> wrote: ${message} </span>`;

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";
  removeButton.addEventListener("click", (event) => {
    const entry = event.target.parentNode;
    entry.remove();
    hideOrUnhide();
  });

  messageList.appendChild(newMessage);
  newMessage.appendChild(removeButton);
  hideOrUnhide();
  messageForm.reset();
});

function hideOrUnhide() {
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.getElementsByTagName("ul")[0];
  if (messageList.children.length === 0) {
    messageSection.style.display = "none";
  } else {
    messageSection.style.display = "block";
  }
}

hideOrUnhide();
