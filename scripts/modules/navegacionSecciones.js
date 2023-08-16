export function navegar(){
    const $btnTuItServes = document.getElementById("btnTuItServes");
const $btnHorarios = document.getElementById("btnHorarios");

const $seccionHorarios = document.getElementById("seccionHorarios");
const $seccionItServes = document.getElementById("seccionItServes");

$btnTuItServes.addEventListener("click",()=> {
    if($seccionHorarios.style.display != "none")
        $seccionHorarios.style.display = "none";

    $seccionItServes.style.display = "block";

    $btnHorarios.removeAttribute("aria-current");
    $btnHorarios.classList.remove("active");

    $btnTuItServes.setAttribute("aria-current","page");
    $btnTuItServes.classList.add("active");
});

$btnHorarios.addEventListener("click", ()=> {
    if($seccionItServes.style.display != "none")
        $seccionItServes.style.display = "none";

    $seccionHorarios.style.display = "block";

    $btnTuItServes.removeAttribute("aria-current");
    $btnTuItServes.classList.remove("active");

    $btnHorarios.setAttribute("aria-current","page");
    $btnHorarios.classList.add("active");
})
}