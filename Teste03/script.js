function Carregar() {
    //Funcões para o botão Empresas
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

    //Funções para o botão Subsidiárias
    var butSub = document.getElementById("ButSub");
    butSub.style.transition = "transform 0.2s";

    function mouseEntSub() {
        document.getElementById("ButSub").style.fontSize = "30px";
    }
    function mouseSaiuSub() {
        document.getElementById("ButSub").style.fontSize = "20px";
    }

    function mouseEntSub() {
        butSub.style.transform = "scale(1.27";
    }
    function mouseSaiuSub() {
        butSub.style.transform = "scale(1";
    }




    document.getElementById("ButEmp").addEventListener("mouseenter", mouseEntEmp);
    document.getElementById("ButEmp").addEventListener("mouseout", mouseSaiuEmp);
    document.getElementById("ButEmp").addEventListener("click", clicouEmp);

    document.getElementById("ButSub").addEventListener("mouseenter", mouseEntSub);
    document.getElementById("ButSub").addEventListener("mouseout", mouseSaiuSub);
}