//initial commits
const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let headerLogo = document.getElementById("cta-img");
headerLogo.setAttribute('src', siteContent["cta"]["img-src"]);

let middleLogo = document.getElementById("middle-img");
middleLogo.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let anchors = document.querySelectorAll("a");
anchors[0].textContent = siteContent.nav["nav-item-1"];
anchors[1].textContent = siteContent.nav["nav-item-2"];
anchors[2].textContent = siteContent.nav["nav-item-3"];
anchors[3].textContent = siteContent.nav["nav-item-4"];
anchors[4].textContent = siteContent.nav["nav-item-5"];
anchors[5].textContent = siteContent.nav["nav-item-6"];

let h1 = document.querySelector("h1");
h1.innerHTML = siteContent.cta.h1.replace(new RegExp(" ", 'g'), '<br> ');

let button = document.querySelector("button");
button.textContent = siteContent.cta.button;
button.addEventListener("click", function(){ button.textContent = "Ronny is Awesome!"; return button.textContent; });

let topics = document.querySelectorAll('.text-content h4');
topics[0].textContent = siteContent["main-content"]["features-h4"];
topics[1].textContent = siteContent["main-content"]["about-h4"];
topics[2].textContent = siteContent["main-content"]["services-h4"];
topics[3].textContent = siteContent["main-content"]["product-h4"];
topics[4].textContent = siteContent["main-content"]["vision-h4"];

let topicsContent = document.querySelectorAll('.text-content p');
topicsContent[0].textContent = siteContent["main-content"]["features-content"]
topicsContent[1].textContent = siteContent["main-content"]["about-content"]
topicsContent[2].textContent = siteContent["main-content"]["services-content"]
topicsContent[3].textContent = siteContent["main-content"]["product-content"]
topicsContent[4].textContent = siteContent["main-content"]["vision-content"]

let contacts = document.querySelector('.contact h4');
contacts.textContent = siteContent.contact["contact-h4"];

let contactsContent = document.querySelectorAll('.contact p');
contactsContent[0].innerHTML = siteContent.contact.address.replace("Street", "Street<br> ");
contactsContent[1].textContent = siteContent.contact.phone;
contactsContent[2].textContent = siteContent.contact.email;

let footer = document.querySelector('footer');
footer.innerHTML = siteContent.footer.copyright.replace("2018", "2018<br> ");

let newCoolAnchor = document.createElement('a');
newCoolAnchor.setAttribute('href', '#');
newCoolAnchor.textContent = 'Cool Stuff';

let newNotCoolAnchor = document.createElement('a');
newNotCoolAnchor.setAttribute('href', '#');
newNotCoolAnchor.textContent = 'Not Cool Stuff';

let navigationBar = document.querySelector("nav");
navigationBar.appendChild(newCoolAnchor);
navigationBar.prepend(newNotCoolAnchor);

let anchorsColors = document.querySelectorAll('a');

for (let i = 0; i < anchorsColors.length; i++){
  anchorsColors[i].style.color = "green";
}

//MVP Complete