let res_gravar = document.getElementById("res_gravar")
let gravar = document.getElementById("gravar")

gravar.addEventListener("click", ()=>{
    const nome = document.getElementById("nome").value
    const idade = Number(document.getElementById("idade").value)

    const valores = {
        nome: nome,
        idade: idade
    }

    fetch("http://localhost:3000/usuario",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(valores)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados)
        res_gravar.innerHTML = "Código: " + dados.id + "&emsp;" +
                                "Nome: " + dados.nome + "&emsp;" +
                                "Idade: " + dados.idade + "<br>"
    })
    .catch((err)=>{
        console.error("Erro ao gravar no banco de dados!", err)
    })
})
