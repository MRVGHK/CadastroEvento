// Este código é um requesito avaliativo da UC8.
// Aluno Erick Ferreira
// Curso: Programação FullStack

let idade = 18;

if(idade >= 18) { 
    console.log ("Prossiga com o cadastro") 
} else {
    console.log ("Idade mínima incorreta, você não pode se cadastrar.")
}

var data = new Date();

var dia = String(data.getDate()).padStart(2, '0');

var mes = String(data.getMonth() + 1).padStart(2, '0');

var ano = data.getFullYear();

dataAtual = dia + '/' + mes + '/' + ano;

console.log(dataAtual);

if(dataEvento >= dataAtual) {
    console.log ("Data disponível")
} else {
    console.log("O evento não está disponível na data selecionada")
}

let listaparticipantes 

let numeroparticipantes = listaparticipantes.length ;

if (numeroparticipantes < 100) {
    console.log ("Prossiga com o Cadastro")
} else {
    console.log ("Não há vagas, a capacidade máxima foi atingida")
}
