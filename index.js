// 1 - pegar as tortas no JS para verificar quando o usuário passa o mouse em cima 
//querySelectorAll retorna uma lista
const tortas = document.querySelectorAll('.tortas')

// 2 - add a classe selecionado na torta no hover
tortas.forEach(torta => {
  torta.addEventListener('mouseenter', () => {
    
    // caso o site seja acessado pelo celular
    if(window.innerWidth < 450){
      window.scrollTo({top: 0, behavior: 'smooth'});
    }

    // 3 - verificar se já tem uma torta selecionada e remover a seleção dela
    const tortaSelecionada = document.querySelector('.selecionado')
    tortaSelecionada.classList.remove('selecionado')   

    torta.classList.add('selecionado');

    // 4 - pegar o elemento da torta garnde para add as informações nele
    const imgTortaGrande = document.querySelector('#torta_grande');
    
    // 5 - alterar a imagem da torta grande
    const idTorta = torta.attributes.id.value;
    imgTortaGrande.src = `src/${idTorta}.png`;

    // 6 - alterar o nome da torta
    const nomeTorta = document.getElementById('nome');
    nomeTorta.innerText = torta.getAttribute('data-name')

    // 7 - alterar a descrição
    const descTorta = document.getElementById('descricao');
    descTorta.innerText = torta.getAttribute('data-description');
  })
})

//Pode refatorar em funções globais
//selecionando o código, botão direito, refatorar em função global