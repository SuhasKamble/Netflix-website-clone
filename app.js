let pluses = document.querySelectorAll(".box")

pluses.forEach(element => {
    element.addEventListener('click', (e) => {

        element.classList.toggle("text-show")
        element.classList.toggle("reflect")
    })
});