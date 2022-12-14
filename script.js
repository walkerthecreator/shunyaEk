const elem = document.getElementById('nav-apps-dropdown')
const inputbtn = document.getElementById('input')
const elem2 = document.getElementById('nav-apps')
const elem3 = document.getElementById('input-dropdown')
elem2.addEventListener("mouseover",()=>{
    elem.style.display="flex"
})

elem2.addEventListener("mouseleave",()=>{
    elem.style.display="none"
})

elem.addEventListener("mouseover",()=>{
    elem.style.display="flex"
})

elem.addEventListener("mouseleave",()=>{
    elem.style.display="none"
})

inputbtn.addEventListener("click",()=>{
    elem3.style.display = "block"
})

elem3.addEventListener("mouseleave",()=>{
    elem3.style.display = "none"
})

