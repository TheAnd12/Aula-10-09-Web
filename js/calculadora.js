function calculadora() {
var tipcal= parseInt(prompt("Qual tipo de calculo vc quer fazer? 1-soma 2-subtração 3-divisão 4-multiplicação 5-area do quadrado 6-area do retangulo 7-area do triangulo"));
var soma1= parseFloat(prompt("Fale um numero para o cálculo(caso sua ultima opção tenha sido area do retangulo, diga a altura)"));
var soma2= parseFloat(prompt("Fale outro numero para o cálculo(e agora a base)"));

if (soma1==0 &&  soma2==0){ 
    alert("numeros invalidos.");
}
if (tipcal==0 ||  tipcal>=8){
    alert("Numero de tipo de calcúlo invalido.");
}
if (tipcal==1){
    var resul=(soma1+soma2);
    alert("Seu resultado é: "+resul);
}
if (tipcal==2) {
    var resul2=(soma1-soma2);
    alert("Seu resultado é: "+resul2);
}
if (tipcal==3) {
    var resul2=(soma1/soma2);
    alert("Seu resultado é: "+resul2);
}
if (tipcal==4 ) {
    var resul2=(soma1*soma2);
    alert("Seu resultado é: "+resul2);
}
if (tipcal==5 ) {
    var resul2=(soma1*soma2);
    alert("Seu resultado é: "+resul2,"Cm");
}
if (tipcal==6 ) {
    var resul2=(soma1*soma2);
    alert("Seu resultado é: "+resul2,"Cm²");
}
if (tipcal==7 ) {
    var resul2=(soma1*soma2)/2;
    alert("Seu resultado é: "+resul2,"Cm²");
}
else {
    alert("numeros invalidos.")
}
    var continuar = prompt("Deseja fazer outro cálculo? (sim/nao)").toLowerCase();
    if (continuar === "sim" || continuar === "s") {
        calculadora(); // <--- Isso faz o código voltar para o começo!
    } else {
        alert("Calculadora encerrada. Até logo!");
    }
}


calculadora();