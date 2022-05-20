

function navSlide(){
    const hamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".nav-links")
    const navLinksItems = document.querySelectorAll(".nav-links a")

    hamburger.addEventListener("click", () =>{
        //toggle nav
        navLinks.classList.toggle("navLinks-active")

        //animate links
        navLinksItems.forEach((links,index) => {
            if(links.style.animation){
                links.style.animation = ``
            } else {
                links.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        })

        //burger animation
        hamburger.classList.toggle('toggle')
    })
}

navSlide()