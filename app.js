const formularioAdicionaTodo = document.querySelector('.form-add-todo')
const formularioDePesquisa = document.querySelector('.form-search')
const containerComItensCadastrados = document.querySelector('.todos-container')

const adicionaExcluiClasses = (array, adicionaClasse, excluiClasse) => {
    array.forEach(item => {
        item.classList.add(adicionaClasse)
        item.classList.remove(excluiClasse)
    })
}

const adicionaItemTodo = event => {
    event.preventDefault()

    const InformacoesInseridas = event.target.add.value
    
    if(InformacoesInseridas) {
    containerComItensCadastrados.innerHTML += `
     <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center text-primary">
     <span>${InformacoesInseridas}</span>
     <i class="far fa-trash-alt delete"></i>
     </li>`
    }

    event.target.reset() 
}

const excluiItemClicado = event => {
    const itemClicado = event.target
    const VerificaSeExisteAClasseDelete = Array.from(itemClicado.classList).includes('delete')

    if( VerificaSeExisteAClasseDelete){
       itemClicado.parentElement.remove()
    }    
 }

const filtraItensTodo = event => {
    const informacaoPesquisada = event.target.value.toLowerCase().trim()
    
    const listaDeItensCadastrados = Array.from(containerComItensCadastrados.children)
    const buscaCaracterNosItens = item => (item.textContent).toLowerCase().includes(informacaoPesquisada)       
     
    const filtraItensBuscado = listaDeItensCadastrados
     .filter(item => !buscaCaracterNosItens(item))
     adicionaExcluiClasses(filtraItensBuscado, 'oculta', 'd-flex')

    const atualizaFiltroDeItensBuscado = listaDeItensCadastrados
     .filter(item => buscaCaracterNosItens(item))
     adicionaExcluiClasses(atualizaFiltroDeItensBuscado, 'd-flex', 'oculta')
}

formularioAdicionaTodo.addEventListener('submit', adicionaItemTodo)
containerComItensCadastrados.addEventListener('click', excluiItemClicado)
formularioDePesquisa.addEventListener('input', filtraItensTodo)



