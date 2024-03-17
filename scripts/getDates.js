let currentYear = new Date().getFullYear();
let lastModified = document.lastModified;

let copyright = document.querySelector("#copyright");
copyright.innerText = `© ${currentYear} 🐈‍⬛ Claudia Esparza 🐈‍⬛ Peru`;

let modified = document.querySelector("#lastModified");
modified.innerText = `Last Modification: ${lastModified}`;