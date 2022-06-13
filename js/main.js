const txtAnime = document.querySelector('h2');
console.log(txtAnime)
new Typewriter (txtAnime, {
    lopp : true,
     deleteSpeed : 50,
})
.typeString("<span>Développeur web junior</span>")
.pauseFor(250)
.deleteChars(11)
.typeString("<span style = 'color:darkred'> full-stack</span>")
.pauseFor(300)
.start()

const menuHaumburger = document.querySelector('.menu-hamburger');
const navLinks = document.querySelector('.nav-links');

menuHaumburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})