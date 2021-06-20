// Insert Copyright Text in Footer
const today = new Date();
const thisYear = today.getFullYear();
// console.log(today);
// console.log(thisYear);

const footer = document.querySelector('footer div');

const copyright = document.createElement('p');
footer.innerHTML = `&#169; Raynaldo ${thisYear}`;

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
    'SQL',
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
    skill.className = 'skill';
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

// Lesson 4-3

const editButton = document.createElement('button');
editButton.textContent = 'edit';
editButton.type = 'button';
editButton.className = 'btn-edit';
editButton.addEventListener('click', (e) => {
    const li = e.target.parentNode;
    const email = li.children[0].href.slice(7);
    const name = li.children[0].textContent;
    const comment = li.children[1].textContent.slice(8);

    const emailInput = document.createElement('input');
    emailInput.value = email;
    emailInput.className = 'name';
    const nameInput = document.createElement('input');
    nameInput.value = name;
    const commentInput = document.createElement('input');
    commentInput.value = comment;

    li.innerHTML = ''; //remove children
    li.appendChild(nameInput);
    li.appendChild(emailInput);
    li.appendChild(commentInput);
    li.appendChild(saveButton);
    e.target.remove();
});

const saveButton = document.createElement('button');
saveButton.textContent = 'save';
saveButton.type = 'button';
saveButton.addEventListener('click', (e) => {
    const li = e.target.parentNode;
    const name = li.children[0].value;
    const email = li.children[1].value;
    const comment = li.children[2].value;

    const updatedMessage = createLi(name, email, comment);
    li.replaceWith(updatedMessage);
});

const messageForm = document.getElementsByName('leave_message')[0];
messageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.getElementsByTagName('ul')[0];

    const newMessage = createLi(name, email, message);

    messageList.appendChild(newMessage);

    hideOrUnhide();
    messageForm.reset();
});

function createLi(name, email, message) {
    const newMessage = document.createElement('li');
    // newMessage.innerHTML = `<a href="mailto:${email}">${name}</a><span> wrote: ${message}</span>`;
    newMessage.innerHTML = `<div class="comment">
                                <div>${message}</div>
                                <div>${new Date().toLocaleString()} from <a href="${email}">${name}</a></div>
                            </div>`;

    const buttonDiv = document.createElement('div');
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.className = 'btn-remove'
    removeButton.addEventListener('click', (event) => {
        newMessage.remove();
        hideOrUnhide();
    });

    buttonDiv.appendChild(editButton);
    buttonDiv.appendChild(removeButton);
    newMessage.append(buttonDiv);

    return newMessage;
}

function hideOrUnhide() {
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.getElementsByTagName('ul')[0];
    if (messageList.children.length === 0) {
        messageSection.style.display = 'none';
    } else {
        messageSection.style.display = 'block';
    }
}

hideOrUnhide();
