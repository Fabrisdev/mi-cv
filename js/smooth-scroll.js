const anchors = document.querySelectorAll('a')
anchors.forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault()
        const target = anchor.getAttribute('href').substring(1)
        const element = document.getElementById(target)
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        })
    })
})