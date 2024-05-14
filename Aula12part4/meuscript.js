alert("Seja bem vindo");

function VerificaHorario() {

    var saudacao;
    var tempo = document.getElementById("horario").value;


    if (tempo < 10) {
        saudacao = tempo + "hs Bom dia"
        document.getElementById('img_lampada').src = 'img/apagada.jpg';
        document.getElementById('body').style.background = "yellow";


    } else if (tempo < 17) {
        saudacao = tempo + "hs Boa Tarde"
        document.getElementById('img_lampada').src = 'img/apagada.jpg';
        document.getElementById('body').style.background = "Orange";
    } else {
        saudacao = tempo + "hs Boa Noite"
        document.getElementById('img_lampada').src = 'img/acesa.jpg';
        document.getElementById('body').style.background = "Gray";
    }

    document.getElementById("saudacao").innerHTML = saudacao;

}