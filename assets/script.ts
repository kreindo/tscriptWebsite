const navbar: HTMLElement = document.querySelector("#navbar");
const navlinks = ["About us", "Pricing", "Github", "Contact"];

navlinks.map((navlink) => {
  const navli: HTMLElement = document.createElement("li");
  const nava: HTMLElement = document.createElement("a");
  nava.setAttribute("href", "#");
  nava.innerHTML = navlink;
  navli.appendChild(nava);
  navbar.appendChild(navli);
});

const navstyle: HTMLElement = document.querySelector("#navstyle");
