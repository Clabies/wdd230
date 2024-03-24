let currentYear = new Date().getFullYear();
let lastModified = document.lastModified;
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentMonth = monthNames[new Date().getMonth()];

let copyright = document.querySelector("#copyright");
copyright.innerText = `© ${currentYear} 🐈‍⬛ Claudia Esparza 🐈‍⬛ Peru`;

let modified = document.querySelector("#lastModified");
modified.innerText = `Last Modification: ${lastModified}`;

let events = document.querySelector("#titleEvents");
events.innerText = `Events in ${currentMonth}`;