let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
   palavra001 = {
      nome:  "SAMUEL",
      categoria:  "Alguém"
   },
   palavra002 = {
      nome: "ANNA",
      categoria: "Alguém"
   },
   palavra003 = {
      nome: "CLAUDIA",
      categoria: "Alguém"
   },
   palavra004 = {
      nome: "LEANDRO",
      categoria: "Alguém"
   },
   palavra005 = {
      nome: "OTAVIO",
      categoria: "Alguém"
   },
   palavra006 = {
      nome: "LUCIANO",
      categoria: "Alguém"
   },
   palavra007 = {
      nome: "DANI",
      categoria: "Alguém"
   },
   palavra008 = {
      nome: "SMALL",
      categoria: "Alguém"
   },
   palavra009 = {
      nome: "ROXO",
      categoria: "Cor favorita"
   },
   palavra010 = {
      nome: "AZUL",
      categoria: "Cor favorita"
   },
   palavra011 = {
      nome: "PRETO",
      categoria: "Cor"
   },
   palavra012 = {
      nome: "BRANCO",
      categoria:"Cor"
   },
   palavra013 = {
      nome: "FUTEBOL",
      categoria: "Esporte"
   },
   palavra014 = {
      nome: "KARATE",
      categoria: "Esporte"
   },
   palavra015 = {
      nome: "VOLEI",
      categoria: "Esporte"
   },
   palavra016 = {
      nome: "FEIJOADA",
      categoria: "Comida"
   },
   palavra017 = {
      nome: "PIZZA",
      categoria: "Comida"
   },
   palavra018 = {
      nome: "BOLO",
      categoria: "Comida"
   },
   palavra019 = {
      nome:  "PAO",
      categoria: "Comida"
   },
   palavra020 = {
      nome: "ESFIHA",
      categoria: "Comida"
   },
   palavra021 = {
      nome: "PASTEL",
      categoria: "Comida"
   },
   palavra022 = {
      nome: "ARGENTINA",
      categoria: "Lugar"
   },
   palavra023 = {
      nome: "FRANCA",
      categoria: "Lugar"
   },
   palavra024 = {
      nome: "PARIS",
      categoria: "Lugar"
   },
   palavra025 = {
      nome: "RIO DE JANEIRO",
      categoria: "Lugar"
    },
   palavra026 = {
      nome: "TORRE EIFEEL",
      categoria: "Ponto Turistico"
    },
    palavra027 = {
       nome: "CRISTO REDENTOR",
       categoria: "Ponto Turistico"
    },
    palavra028 = {
       nome : "COALA",
       categoria: "Animal"
    },
    palavra029 = {
       nome: "GATO",
       categoria: "Animal"
    },
    palavra030 = {
       nome: "CACHORRO",
       categoria: "Animal"
    },
    palavra031 = {
       nome: "TIGRE",
       categoria: "Animal"
    },
    palavra032 = {
       nome: "URSO",
       categoria: "Animal"
    },
    palavra033 = {
       nome: "STICH",
       categoria: "Personagem fictício"
    },
    palavra034 = {
       nome: "PIKACHU",
       categoria: "Personagem fictício"
    },
    palavra035 = {
       nome: "VER",
       categoria: "Sentimento"
    },
    palavra036 = {
       nome: "RAIVA",
       categoria: "Sentimento"
    },
    palavra037 = {
       nome: "AUSTRALIA",
       categoria: "LUGAR"
    },
    palavra038 = {
       nome: "AMOR",
       categoria: "Sentimento"
    },
    palavra039 = {
       nome: "TRISTEZA",
       categoria: "Sentimento"
    },
    palavra040 = {
       nome: "CALMA",
       categoria: "Sentimento"
    },
    palavra041 = {
      nome: "IMPOSSIVEL",
      categoria: "IMPOSSIVEL"
    },
    palavra042 = {
      nome: "CELULAR",
      categoria: "Eletronicos"
    },
    palavra043 = {
      nome: "COMPUTADOR",
      categoria: "Eletronicos"
    },
    palavra044 = {
      nome: "FACEBOOK",
      categoria: "REDE SOCIAL"
    },
    palavra045 = {
      nome: "WHATSAPP",
      categoria: "REDE SOCIAL"
    },
    palavra046 = {
      nome: "FIM",
      categoria: "FIM"
    },

];


criarPalavraSecreta();
function criarPalavraSecreta(){
   const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    console.log(palavraSecretaSorteada);
    console.log(palavraSecretaCategoria);
}

montarPalavraNaTela(); 
function montarPalavraNaTela(){
   const categoria = document.getElementById("categoria");
   categoria.innerHTML = palavraSecretaCategoria;

   const palavraTela = document.getElementById("palavra-secreta");
   palavraTela.innerHTML = " ";

   for(i = 0; i < palavraSecretaSorteada.length; i ++){
      if(listaDinamica[i] == undefined)
      {
         listaDinamica[i] = "&nbsp;"
         palavraTela.innerHTML = palavraTela.innerHTML + "<div class = 'letras'>" + listaDinamica[i] + "</div>"
      }
      else{
         palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"         
      }
   }


}

function verificaLetraEscolhida(letra){
   if(tentativas > 0 )
   {   
      mudarStyleLetra("tecla-" + letra);
      comparalistas(letra);
      montarPalavraNaTela();
   }

}

function mudarStyleLetra(tecla){
   document.getElementById(tecla).style.background = "#020bf7";
   document.getElementById(tecla).style.color = "#fff";
}
function comparalistas(letra){
   const pos = palavraSecretaSorteada.indexOf(letra)
   if(pos < 0){
      tentativas--
      //ibagem KKKKKKKKKK
      //hmmmmmm, num compensa, verificação de tentativas, mensagem
   }
   else{
      for(i = 0; i < palavraSecretaSorteada.length; i++)
         {
            if(palavraSecretaSorteada[i] == letra ){
                listaDinamica[i] = letra;
               }
            } 
         }
         

   let vitoria = true;
         for(i = 0; i < palavraSecretaSorteada.length; i ++){
            if(palavraSecretaSorteada[i] != listaDinamica[i]){
               vitoria = false;
            }
         }
      if(vitoria == true)
         {
            //mensagem na tela
            tentativas = 0;
         }        
    
}