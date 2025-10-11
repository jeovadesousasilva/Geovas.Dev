function Carregar() {
    var butEmp = document.getElementById("ButEmp");
    butEmp.style.transition = "transform 0.2s";
    function mouseEntEmp() {
        document.getElementById("ButEmp").style.fontSize = "30px";
    }
    function mouseSaiuEmp() {
        document.getElementById("ButEmp").style.fontSize = "20px";
    }
    function clicouEmp() {
        alert("Clicou em Empresas");
    }

    function mouseEntEmp() {
        butEmp.style.transform = "scale(1.5)";
    }
    function mouseSaiuEmp() {
        butEmp.style.transform = "scale(1)";
    }
    document.getElementById("ButEmp").addEventListener("mouseenter", mouseEntEmp);
    document.getElementById("ButEmp").addEventListener("mouseout", mouseSaiuEmp);
    document.getElementById("ButEmp").addEventListener("click", clicouEmp);
}