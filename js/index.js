const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('#footer');
const copyright = document.createElement('p');
copyright.innerHTML = 'Anastasia Klyucharova &copy ' + thisYear;
footer.appendChild(copyright);
let skills = ['Agile', 'HTML', 'CSS', 'Windows 365'];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');

for(let i = 0; i < skills.length; i ++) {
const skill = document.createElement('li');
skill.textContent = skills[i];
skillsList.appendChild(skill);
}
