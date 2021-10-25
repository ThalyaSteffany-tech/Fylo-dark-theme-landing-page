(() => {
    const btnMenuResponsivo  = document.querySelector('[data-btnResponsivo]')
    .addEventListener('click',menuResponsivo)
    function menuResponsivo() {
        let navUl = document.querySelector('[data-navUl]')
        navUl.classList.toggle('mostrar')
    }
})()
