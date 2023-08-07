import '/style.css'


// console.log(tabLink);
export const Header =
`<div class="header">
    <div>
        <h2>OLYGOOD</h2>
    </div>
    <div class="header-link"></div>
    
</div>
`
// const tabLink = ["Accueil", "Porfolio", "Contact"];
// for (const el of tabLink) {
//     document.querySelector(".header-link").innerHTML += `<a href="#">${el}</a>`

// }
document.addEventListener("DOMContentLoaded", function() {
    const tabLink = ["Accueil", "Porfolio", "Contact"];
    for (const el of tabLink) {
        document.querySelector(".header-link").innerHTML += `<a href="#">${el}</a>`
    }
});