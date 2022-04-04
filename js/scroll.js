const container = document.querySelector('section-projet');
console.log(container)
window.addEventListener('scroll' , () => {
   const {scrollHeight , scrollLeft , scrollTop, scrollWidth, clientHeight } = document.documentElement;
    console.log('je scroll ici')
})