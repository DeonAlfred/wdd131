document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("pi").textContent = `Last Modified: ${document.lastModified}`;




const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
hambutton.addEventListener ('click', ()=>{
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});
