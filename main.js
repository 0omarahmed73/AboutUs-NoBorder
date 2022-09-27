const menu = document.querySelector("#menu1 > div.menu.d-md-none.pe-2 > svg");

const scroll11 = () => {
    const nav = document.getElementById("navhead");
    const li = document.querySelectorAll("#ulnav > li> a")
    const liactive = document.querySelector("#ulnav > li.active > a")
    console.log(menu)
    
    console.log(this.scrollY)
    if (this.scrollY >=80 ){
        nav.classList.add('navcolored');
    li.forEach(thisElement => {
        thisElement.style.color = "black"
    });
    liactive.style.color = "white";
    menu.style.color = "black";
 
}
    else {
    nav.classList.remove('navcolored');
    
    menu.style.color = "white";
    li.forEach(thisElement => {
        thisElement.style.color = "white"
    })
    liactive.style.color = "white";

    }

}
window.addEventListener('scroll', scroll11)

ulnav11 = document.getElementsByClassName("ulnav11")[0];
console.log(ulnav11)
menu.addEventListener("click" , (eo) => {
    ulnav11.classList.toggle("ulfind")
})