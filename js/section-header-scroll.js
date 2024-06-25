const sections = document.querySelectorAll('section')

addEventListener('scroll', () => {
    const scrollPosition = scrollY + innerHeight / 2
    sections.forEach(section => {
        const sectionOffsetBottom = section.offsetTop + section.offsetHeight
        const sectionName = section.dataset.sectionName
        const sectionHeaderLink = document.getElementById(sectionName)
        if(scrollPosition > section.offsetTop && scrollPosition < sectionOffsetBottom)
            return sectionHeaderLink.classList.add('reading-section')
        sectionHeaderLink.classList.remove('reading-section')
    })
})