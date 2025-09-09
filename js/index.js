const cursos = {
  // Recife
  medicina_recife: { corte: 76.47, campus: "Recife" },
  engenharia_comp_recife: { corte: 61.57, campus: "Recife" },
  direito_recife: { corte: 65.87, campus: "Recife" },
  odontologia_recife: { corte: 55.87, campus: "Recife" },
  ciencias_biologicas_recife: { corte: 47.86, campus: "Recife" },
  enfermagem_recife: { corte: 49.76, campus: "Recife" },
  saude_coletiva_recife: { corte: 36.75, campus: "Recife" },
  terapia_ocupacional_recife: { corte: 52.87, campus: "Recife" },
  educacao_fisica_recife: { corte: 45.63, campus: "Recife" },
  ciencias_sociais_recife: { corte: 37.65, campus: "Recife" },
  administracao_recife: { corte: 46.82, campus: "Recife" },
  engenharia_civil_recife: { corte: 43.24, campus: "Recife" },
  engenharia_automacao_controle_recife: { corte: 42.21, campus: "Recife" },
  engenharia_eletrica_eletrotecnica_recife: { corte: 38.64, campus: "Recife" },
  engenharia_telecom_recife: { corte: 35.68, campus: "Recife" },
  engenharia_eletrica_recife: { corte: 38.57, campus: "Recife" },
  engenharia_mecanica_recife: { corte: 34.65, campus: "Recife" },
  fisica_material_recife: { corte: 32.94, campus: "Recife" },

  // Caruaru
  sistemas_informacao_caruaru: { corte: 52.95, campus: "Caruaru" },
  administracao_caruaru: { corte: 36.45, campus: "Caruaru" },

  // Nazaré da Mata
  ciencia_computacao_nazare: { corte: 43.90, campus: "Nazré da Mata" },
  ciencias_biologicas_nazare: { corte: 32.16, campus: "Nazré da Mata" },
  geografia_nazare: { corte: 26.36, campus: "Nazré da Mata" },
  historia_nazare: { corte: 33.58, campus: "Nazré da Mata" },
  letras_port_esp_nazare: { corte: 32.00, campus: "Nazré da Mata" },
  letras_port_ing_nazare: { corte: 34.25, campus: "Nazré da Mata" },
  matematica_nazare: { corte: 39.56, campus: "Nazré da Mata" },
  pedagogia_nazare: { corte: 32.00, campus: "Nazré da Mata" },
  tecnologia_logistica_nazare: { corte: 32.00, campus: "Nazré da Mata" },

  // Garanhuns
  medicina_garanhuns: { corte: 71.40, campus: "Garanhuns" },
  psicologia_garanhuns: { corte: 52.84, campus: "Garanhuns" },
  engenharia_software_garanhuns: { corte: 52.64, campus: "Garanhuns" },
  computacao_garanhuns: { corte: 24.56, campus: "Garanhuns" },
  ciencias_biologicas_l_garanhuns: { corte: 38.58, campus: "Garanhuns" },

  // Petrolina
  fisioterapia_petrolina: { corte: 46.56, campus: "Petrolina" },
  enfermagem_petrolina: { corte: 42.67, campus: "Petrolina" },
  nutricao_petrolina: { corte: 36.27, campus: "Petrolina" },
  ciencias_biologicas_l_petrolina: { corte: 38.45, campus: "Petrolina" },
  geografia_petrolina: { corte: 32.56, campus: "Petrolina" },
  letras_port_esp_petrolina: { corte: 23.56, campus: "Petrolina" },
  letras_port_ing_petrolina: { corte: 28.65, campus: "Petrolina" },
  matematica_petrolina: { corte: 35.00, campus: "Petrolina" },
  historia_petrolina: { corte: 32.00, campus: "Petrolina" },
  pedagogia_petrolina: { corte: 25.00, campus: "Petrolina" },

  // Arcoverde
  direito_arcoverde: { corte: 54.63, campus: "Arcoverde" },
  odontologia_arcoverde: { corte: 49.97, campus: "Arcoverde" },

  // Serratalhada
  medicina_serratalhada: { corte: 71.57, campus: "Serratalhada" },

  // Surubim
  engenharia_software_surubim: { corte: 42.57, campus: "Surubim" },
  sistemas_informacao_surubim: { corte: 44.65, campus: "Surubim" },

  // Palmares
  administracao_palmares: { corte: 33.85, campus: "Palmares" },
  servico_social_palmares: { corte: 31.96, campus: "Palmares" },

  // Ouricuri
  ciencias_contabeis_ouricuri: { corte: 30.00, campus: "Ouricuri" },
  administracao_ouricuri: { corte: 29.50, campus: "Ouricuri" }
};


function calcularNota3() {
  const nota1Input = document.getElementById("nota1");
  const nota2Input = document.getElementById("nota2");
  const notaRedacaoInput = document.getElementById("notaRedacao");
  const nota3Input = document.getElementById("nota3");
  const cursoSelecionado = document.getElementById("curso").value;
  const resultadoDiv = document.getElementById("resultado");

  const nota1 = parseFloat(nota1Input.value) || 0;
  const nota2 = parseFloat(nota2Input.value) || 0;
  const notaRedacao = parseFloat(notaRedacaoInput.value) || 0;

  if (cursos.hasOwnProperty(cursoSelecionado)) {
      const { corte, campus } = cursos[cursoSelecionado];
      const notaMinima = corte;

      const N1 = notaMinima * 10;
      const N2 = nota1 + nota2;
      const N3 = 3 * N2;
      const N4 = N1 - N3;
      const N5 = N4 - notaRedacao;
      const nota3Necessaria = N5 / 3;

      const mediaFinal = (nota3Necessaria * 0.75) + (notaRedacao * 0.25);
      nota3Input.value = nota3Necessaria.toFixed(2);

      if (nota3Necessaria > 100) {
          resultadoDiv.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Nota necessária no SSA-3: ' + nota3Necessaria.toFixed(2);
          resultadoDiv.style.backgroundColor = "rgb(255, 255, 163)"; 
      } else if (nota3Necessaria < 0) {
          resultadoDiv.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Você já passou!';
          resultadoDiv.style.backgroundColor = "rgb(255, 255, 163)"; 
      } else {
          resultadoDiv.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Nota necessária no SSA-3: ' + nota3Necessaria.toFixed(2);
          resultadoDiv.style.backgroundColor = "rgb(255, 255, 163)";
      }

      resultadoDiv.style.display = "block";

      mostrarDetalhes(nota1, nota2, notaRedacao, parseFloat(nota3Input.value), notaMinima, mediaFinal, campus);
  } else {
      resultadoDiv.innerHTML = "Curso não encontrado.";
      nota3Input.value = "";
      resultadoDiv.style.display = "block";
  }
}

function mostrarDetalhes(nota1, nota2, notaRedacao, nota3, notaCorte, mediaFinal, campus) {
  const detalhesDiv = document.getElementById("detalhes");
  const nota1Detalhe = document.getElementById("nota1Detalhe");
  const nota2Detalhe = document.getElementById("nota2Detalhe");
  const notaRedacaoDetalhe = document.getElementById("notaRedacaoDetalhe");
  const nota3Detalhe = document.getElementById("nota3Detalhe");
  const notaFinalDetalhe = document.getElementById("notaFinal");
  const notaCorteDetalhe = document.getElementById("notaCorteCurso");
  const classificacaoDetalhe = document.getElementById("classificacao");

  const notaFinal = ((nota1 + nota2 + notaRedacao + nota3) / 4).toFixed(2);

  nota1Detalhe.innerText = nota1.toFixed(2);
  nota2Detalhe.innerText = nota2.toFixed(2);
  notaRedacaoDetalhe.innerText = notaRedacao.toFixed(2);
  nota3Detalhe.innerText = nota3.toFixed(2);
  notaCorteDetalhe.innerText = notaCorte.toFixed(2);
  notaFinalDetalhe.innerText = mediaFinal.toFixed(2);

  if (nota3 > 100) {
      classificacaoDetalhe.innerText = "Reprovado (Impossível passar, nota necessária > 100)";
  } else {
      classificacaoDetalhe.innerText = "Aprovado!";
  }

  detalhesDiv.style.display = "block";
}

function limparTudo() {
  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
  document.getElementById("notaRedacao").value = "";
  document.getElementById("nota3").value = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("resultado").style.display = "none";
  document.getElementById("detalhes").style.display = "none";
}
