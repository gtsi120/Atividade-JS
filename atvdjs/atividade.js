//função de boas-vindas
function boasVindas() {
  console.log("Bem-vindo ao Sistema Escolar!");
}
boasVindas();
boasVindas();

//função de mostrar curso
function mostrarCurso() {
  console.log("Curso: Desenvolvimento de Sistemas");
  console.log("Instituição: Escola de Tecnologia");
}
mostrarCurso();

// Desafio: chamar as duas funções
boasVindas();
mostrarCurso();


//funçao saudar Aluno

// Exercício 3
function saudarAluno(nome) {
  console.log("Olá, " + nome + "! Seja bem-vindo!");
}
saudarAluno("Carlos");
saudarAluno("Mariana");
saudarAluno("Pedro");

//função mostrar Aluno e curso
function mostrarAluno(nome, curso) {
  console.log("Aluno: " + nome);
  console.log("Curso: " + curso);
}
mostrarAluno("Ana", "Programação");
mostrarAluno("Bruno", "Redes");
mostrarAluno("Carla", "Banco de Dados");

//função calcular média
function calcularMedia(nota1, nota2) {
  let media = (nota1 + nota2) / 2;
  console.log("Média do aluno: " + media);
}
calcularMedia(80, 60); // Média do aluno: 70

//função adicionar pontos
function adicionarPontos(nota, pontosExtras) {
  let notaAtualizada = nota + pontosExtras;
  console.log("Nota atualizada: " + notaAtualizada);
}
adicionarPontos(65, 10); // Nota atualizada: 75

//funçao verificar aprovação
function verificarAprovacao(media) {
  if (media >= 60) {
    console.log("Aluno aprovado!");
  } else {
    console.log("Aluno reprovado!");
  }
}
verificarAprovacao(85);
verificarAprovacao(45);
verificarAprovacao(60);

//função classificar aluno
function classificarAluno(nota) {
  if (nota >= 90) {
    console.log("Excelente");
  } else if (nota >= 70) {
    console.log("Bom");
  } else if (nota >= 60) {
    console.log("Regular");
  } else {
    console.log("Insuficiente");
  }
}
classificarAluno(95);
classificarAluno(75);
classificarAluno(60);
classificarAluno(40);

//função calcular mensalidade
function calcularMensalidade(valor) {
  let desconto = valor * 0.10;
  return valor - desconto;
}
let valorFinal = calcularMensalidade(500);
console.log(valorFinal); // 450

//função calcular média e avaliar aluno com retorno
function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

function avaliarAluno(nome, nota1, nota2) {
  let media = calcularMedia(nota1, nota2);
  let situacao;

  if (media >= 60) {
    situacao = "Aprovado";
  } else {
    situacao = "Reprovado";
  }

  console.log("Aluno: " + nome);
  console.log("Média: " + media);
  console.log("Situação: " + situacao);
}
avaliarAluno("Lucas", 80, 70);