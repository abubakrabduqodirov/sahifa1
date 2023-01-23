const logoEl = document.querySelector('')

const hamburger = document.getElementById("hamburger")
function toggleHeaderList() {

    headerList.classList.toggle('active_header')

}
console.log(hamburger);


hamburger.addEventListener("click", toggleHeaderList)