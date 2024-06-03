let res_cadastrar = document.getElementById("res_cadastrar")
let cadastrar = document.getElementById("cadastrar")

cadastrar.addEventListener("click", ()=>{
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value

    const dados = {
        nome: nome,
        email: email,
        senha: senha
    }

    fetch("http://localhost:3000/cadastrar",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(dados)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados)
        res_cadastrar.innerHTML = "cadastrado com sucesso"
    })
    .catch((err)=>{
        console.error("Erro ao cadastrar usuário no banco de dados!", err)
    })
})
