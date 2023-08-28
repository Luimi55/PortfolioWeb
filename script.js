const downloadCV =() =>{
    document.getElementById('downloadCV').click();
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));

const main = () => {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link=>{
        link.addEventListener('click', () => {
            document.querySelector('.nav-link.active')?.classList.remove('active')
            link.classList.add('active')
        })
    })
}

main();

