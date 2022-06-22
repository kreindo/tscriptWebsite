var navbar = document.querySelector("#navbar");
var navlinks = ['About us', 'Pricing', 'Github', 'Contact'];
// for(let navlink in navlinks) {
//     const navli: HTMLElement = document.createElement('li');
//     const nava: HTMLElement = document.createElement('a');
//     nava.setAttribute('href', '#')
//     nava.innerHTML = navlink
//     navli.appendChild(nava)
//     navbar.appendChild(navli)
// }
navlinks.map(function (navlink) {
    var navli = document.createElement('li');
    var nava = document.createElement('a');
    nava.setAttribute('href', '#');
    nava.innerHTML = navlink;
    navli.appendChild(nava);
    navbar.appendChild(navli);
});
