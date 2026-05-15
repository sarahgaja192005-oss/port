/*
  Hier komt later Firebase login info.
  Tot die tijd tonen we GEEN echte bedrijfsgegevens.
*/

const loggedIn = false;

/*
  Simulatie van gebruiker data.
  Later haal je dit uit Firebase Authentication
  en Firestore database.
*/

const userData = {
  companyName: "ABC Solutions NV",
  avatar: "AB"
};

if(loggedIn){

  document.getElementById("companyName").innerText =
    userData.companyName;

  document.getElementById("welcomeName").innerText =
    userData.companyName;

  document.getElementById("avatar").innerText =
    userData.avatar;

}else{

  document.getElementById("companyName").innerText =
    "Nog niet ingelogd";

  document.getElementById("welcomeName").innerText =
    "Werkgever";

  document.getElementById("avatar").innerText =
    "?";

}
/*
  Later vervangen met Firebase Authentication
*/

const loggedIn = false;

/*
  Kandidaat data
  Later uit Firebase Firestore halen
*/

const candidateData = {

  fullName: "John Doe",

  initials: "JD"

};

if(loggedIn){

  document.getElementById("candidateName").innerText =
    candidateData.fullName;

  document.getElementById("welcomeCandidate").innerText =
    candidateData.fullName;

  document.getElementById("candidateAvatar").innerText =
    candidateData.initials;

}else{

  document.getElementById("candidateName").innerText =
    "Nog niet ingelogd";

  document.getElementById("welcomeCandidate").innerText =
    "Kandidaat";

  document.getElementById("candidateAvatar").innerText =
    "?";

}
/*
  Firebase login komt later
*/

const loggedIn = false;

/*
  Werkgever data
  Later uit Firebase halen
*/

const companyData = {

  companyName: "ABC Solutions NV",

  initials: "AB"

};

if(loggedIn){

  document.getElementById("companyName").innerText =
    companyData.companyName;

  document.getElementById("avatar").innerText =
    companyData.initials;

}else{

  document.getElementById("companyName").innerText =
    "Nog niet ingelogd";

  document.getElementById("avatar").innerText =
    "?";

}
/*
  Firebase login komt later
*/

const loggedIn = false;

/*
  Werkgever data
  Later uit Firebase halen
*/

const companyData = {

  companyName: "ABC Solutions NV",

  initials: "AB"

};

if(loggedIn){

  document.getElementById("companyName").innerText =
    companyData.companyName;

  document.getElementById("avatar").innerText =
    companyData.initials;

}else{

  document.getElementById("companyName").innerText =
    "Nog niet ingelogd";

  document.getElementById("avatar").innerText =
    "?";

}

/*
  FILTER BUTTONS
*/

const filterButtons =
  document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    filterButtons.forEach(btn => {
      btn.classList.remove("active-filter");
    });

    button.classList.add("active-filter");

  });

});
/*
  Firebase login komt later
*/

const loggedIn = false;

/*
  Werkgever data
  Later uit Firebase halen
*/

const companyData = {

  companyName: "ABC Solutions NV",

  initials: "AB"

};

if(loggedIn){

  document.getElementById("companyName").innerText =
    companyData.companyName;

  document.getElementById("avatar").innerText =
    companyData.initials;

}else{

  document.getElementById("companyName").innerText =
    "Nog niet ingelogd";

  document.getElementById("avatar").innerText =
    "?";

}

/*
  CATEGORY BUTTONS
*/

const categoryButtons =
  document.querySelectorAll(".category-btn");

categoryButtons.forEach(button => {

  button.addEventListener("click", () => {

    categoryButtons.forEach(btn => {
      btn.classList.remove("active-category");
    });

    button.classList.add("active-category");

  });

});
/*
  Firebase login komt later
*/

const loggedIn = false;

/*
  Werkgever data
  Later uit Firebase halen
*/

const companyData = {

  companyName: "ABC Solutions NV",

  initials: "AB"

};

if(loggedIn){

  document.getElementById("companyName").innerText =
    companyData.companyName;

  document.getElementById("avatar").innerText =
    companyData.initials;

}else{

  document.getElementById("companyName").innerText =
    "Nog niet ingelogd";

  document.getElementById("avatar").innerText =
    "?";

}

/*
  FILTER BUTTONS
*/

const filterButtons =
  document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    filterButtons.forEach(btn => {
      btn.classList.remove("active-filter");
    });

    button.classList.add("active-filter");

  });

});
/*
  Firebase login komt later
*/

const loggedIn = false;

/*
  Werkgever data
  Later uit Firebase halen
*/

const companyData = {

  companyName: "ABC Solutions NV",

  initials: "AB"

};

if(loggedIn){

  document.getElementById("companyName").innerText =
    companyData.companyName;

  document.getElementById("avatar").innerText =
    companyData.initials;

}else{

  document.getElementById("companyName").innerText =
    "Nog niet ingelogd";

  document.getElementById("avatar").innerText =
    "?";

}

/*
  FILTER BUTTONS
*/

const filterButtons =
  document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    filterButtons.forEach(btn => {
      btn.classList.remove("active-filter");
    });

    button.classList.add("active-filter");

  });

});

/*
  MARK AS READ
*/

const markReadButton =
  document.querySelector(".mark-read-btn");

markReadButton.addEventListener("click", () => {

  const unreadCards =
    document.querySelectorAll(".unread");

  unreadCards.forEach(card => {

    card.classList.remove("unread");

  });

});
/*
  Firebase login komt later
*/

const loggedIn = false;

/*
  Werkgever data
  Later uit Firebase halen
*/

const companyData = {

  companyName: "ABC Solutions NV",

  initials: "AB",

  about:
    "Wij helpen bedrijven groeien met innovatieve digitale oplossingen.",

  website:
    "www.abcsolutions.com",

  location:
    "Paramaribo, Suriname",

  employees:
    "50 - 100"

};

/*
  LOGIN CHECK
*/

if(loggedIn){

  document.getElementById("companyName").innerText =
    companyData.companyName;

  document.getElementById("heroCompanyName").innerText =
    companyData.companyName;

  document.getElementById("avatar").innerText =
    companyData.initials;

  document.getElementById("companyLogo").innerText =
    companyData.initials;

  document.getElementById("heroCompanyText").innerText =
    "Welkom terug op jouw bedrijfsdashboard.";

  document.getElementById("aboutText").innerText =
    companyData.about;

  document.getElementById("websiteText").innerText =
    companyData.website;

  document.getElementById("locationText").innerText =
    companyData.location;

  document.getElementById("employeesText").innerText =
    companyData.employees;

}else{

  document.getElementById("companyName").innerText =
    "Nog niet ingelogd";

  document.getElementById("heroCompanyName").innerText =
    "Nog niet ingelogd";

  document.getElementById("avatar").innerText =
    "?";

  document.getElementById("companyLogo").innerText =
    "?";

}
