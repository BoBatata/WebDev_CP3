const form = document.getElementById('form')
const nomeDoProdutoInput = document.getElementById('nomeProduto')
const precoInput  = document.getElementById('preco')
const inputCategoria = document.getElementById('categoria')
const mensagemErro = document.getElementById('mensagemErro')
const cadastroProdut = document.getElementById('cadastroProduto')
const btnEnviar = document.getElementById('btnEnviar')


btnEnviar.addEventListener("click", function(event){
    event.preventDefault()
    print("Acerto!")

    let nome = nomeDoProdutoInput.value;
    let preco = precoInput.value;
    let categoria = inputCategoria.value;
    
    if (nome === "" || preco === ""  || preco < 0 || isNaN(preco)){
        mensagemErro.textContent = "Erro!"
        return
    }
    
    const cardDeProduto = document.createElement('li')
    cardDeProduto.innerHTML = `
    <p>Produto: ${nome} - R$ ${preco} - Categoria: ${categoria} </p>
    `

    if (categoria === "Tecnologia") {
        cardDeProduto.style.fontWeight = "bold"
    } else if (categoria === "Alimentos") {
        cardDeProduto.style.backgroundColor = "yellow"
    }
    cadastroProduto.append(cardDeProduto)
    form.reset()

})


