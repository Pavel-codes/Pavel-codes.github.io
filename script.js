
const navbar = document.querySelector("nav");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const container = document.getElementById("container");


let gitImage = document.createElement("div");
gitImage.id = "gitImg";
container.append(gitImage);

let cImage = document.createElement("div");
cImage.id = "cImg";
container.append(cImage);

let pythonImage = document.createElement("div");
pythonImage.id = "pythonImg";
container.append(pythonImage);

let jsImage = document.createElement("div");
jsImage.id = "jsImg";
container.append(jsImage);

let htmlImage = document.createElement("div");
htmlImage.id = "htmlImg";
jsImage.appendChild(htmlImage);

let cssImage = document.createElement("div");
cssImage.id = "cssImg";
jsImage.appendChild(cssImage);

let cSharpImage = document.createElement("div");
cSharpImage.id = "cSharpImg";
container.append(cSharpImage);

let skillSet = document.createElement("div");
skillSet.id = "skillSet";
container.prepend(skillSet);

skillSet.innerHTML = `<ul><li id="jsSkill">Java Script</li><li id="cssSkill">CSS</li><li id="htmlSkill">HTML</li>
                      <li id="cSharpSkill">C#</li><li id="aspSkill">ASP.NET</li><li id="pythonSkill">Python</li>
                      <li id="cSkill">C</li></ul>`;

let titleNameTop = document.createElement("h1");
let titleNameBottom = document.createElement("h1");
let myProjects = document.createElement("h4");
let mySkills = document.createElement("h4");
let about = document.createElement("h4");
let contactInfo = document.createElement("h4");
let emailMe = document.createElement("h2");
let downloadCV = document.createElement("h2");
let returnUp = document.createElement("img");
let socialMedia = document.getElementById("socialMedia");

titleNameTop.innerText = "Pavel Butov";
titleNameTop.id = "topName";
titleNameBottom.innerText = "Pavel Butov";
titleNameBottom.id = "bottomName";
titleNameBottom.ariaHidden = "true";

header.append(titleNameTop);
header.append(titleNameBottom);

let titleTop = document.createElement("h1");
let titleBottom = document.createElement("h1");
titleTop.innerText = "Fullstack Developer";
titleTop.id = "titleTop";
header.append(titleTop);



myProjects.innerText = "Projects";
mySkills.innerText = "Skills";
about.innerText = "About";
contactInfo.innerText = "Contact";
emailMe.innerText = "Email me";
downloadCV.innerText = "Download CV";
returnUp.src = "https://img.icons8.com/?size=100&id=87724&format=png&color=000000";
returnUp.style.display = "none";
returnUp.id = "returnUp";

let linkedIn = document.createElement("a");
linkedIn.id = "linkedIn";
linkedIn.href = "https://www.linkedin.com/in/pavel-butov~";
linkedIn.target = "_blank";
socialMedia.appendChild(linkedIn);
linkedIn.innerHTML = `<img id="linkedIn" src="https://img.icons8.com/?size=100&id=85141&format=png&color=000000" />`;

let gitHub = document.createElement("a");
gitHub.href = "https://github.com/Pavel-codes";
gitHub.target = "_blank";
socialMedia.appendChild(gitHub);
gitHub.innerHTML = `<img id="gitHub" src="https://img.icons8.com/?size=100&id=106567&format=png&color=000000" />`;

let faceBook = document.createElement("a");
faceBook.href = "https://www.facebook.com/pavel.butov.9";
faceBook.target = "_blank";
socialMedia.appendChild(faceBook);
faceBook.innerHTML = `<img id="faceBook" src="https://img.icons8.com/?size=100&id=118489&format=png&color=000000" />`;

let instaGram = document.createElement("a");
instaGram.href = "https://www.instagram.com/pavel_butovs/";
instaGram.target = "_blank";
socialMedia.appendChild(instaGram);
instaGram.innerHTML = `<img id="instaGram" src="https://img.icons8.com/?size=100&id=85140&format=png&color=000000" />`;

navbar.append(myProjects);
navbar.append(mySkills);
navbar.append(about);
navbar.append(contactInfo);
navbar.append(emailMe);
navbar.append(downloadCV);
footer.append(returnUp);

window.onscroll = function () { scrollFunction() };

downloadCV.addEventListener("click", function () {
    window.open("https://drive.google.com/file/d/12WauIJ8jl4VJdI-Bupi62ATg6uSGcIm2/view?usp=drive_link", "_blank");
});

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        returnUp.style.display = "block";
    } else {
        returnUp.style.display = "none";
    }
}

returnUp.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior:'smooth'});
});