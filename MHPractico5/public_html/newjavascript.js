/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$().ready(iniciar);

function iniciar() {
    $("#btnE1").click(procesarEj1);
    $("#btnE2").click(procesarEj2);
    $("#btnE3").click(procesarEj3);
    $("#btnE4").click(procesarEj4);
    $("#btnE5").click(procesarEj5);
}

function procesarEj1() {
    var txt1 = $("#txt1").val();
    var resultado = "";
    for (i=txt1.length; i >= 0; i--) {
        resultado += txt1.charAt(i);
    }
    $("#pRes1").html(resultado);
}

function procesarEj2() {
    var txt1 = $("#txt2").val();
    var txt2 = $("#txt3").val();
    var count = 0;
    for (i = 0; i <= txt1.length; i++) {
        if (txt1.charAt(i) === txt2) {
            count++;
        }
    }
    $("#pRes2").html("Hay " + count + " vece/s la letra " + txt2);
}

function procesarEj3() {
    var txt1 = $("#txt4").val();
    var count = 0;
    for (i = 0; i <= txt1.length; i++) {
        switch (txt1.charAt(i)) {
        case "a":
        case "A":
        case "e":
        case "E":
        case "i":
        case "I":
        case "o":
        case "O":
        case "u":
        case "U":
            count ++;
            break;
    }
    }
    $("#pRes3").html("Hay " + count + " vocales");
}

function procesarEj4() {
    var txt1 = $("#txt5").val();
    $("#pRes4").html(txt1.toLowerCase());
}

function procesarEj5() {
    var txt1 = $("#txt6").val();
    $("#pRes5").html(txt1.toUpperCase());
}
