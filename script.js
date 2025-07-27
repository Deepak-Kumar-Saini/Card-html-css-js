const nameHeading = document.getElementById('name')
const image = document.getElementById('image')

nameHeading.addEventListener('mouseenter',()=>{
    image.classList.add('animation')
})

nameHeading.addEventListener('mouseout',()=>{
    image.classList.remove('animation')
})