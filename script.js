const nameHeadings = document.querySelectorAll('.name-heading')
const images = document.querySelectorAll('.image')


nameHeadings.forEach((nameHeading)=>{
nameHeading.addEventListener('mouseenter',()=>{
    images.forEach((image)=> image.classList.add('animation'))
})
})

nameHeadings.forEach((nameHeading)=>{
nameHeading.addEventListener('mouseout',()=>{
    images.forEach((image)=> image.classList.remove('animation'))
})
})
