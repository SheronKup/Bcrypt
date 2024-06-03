let res_login = document.getElementById("res_login")
let login = document.getElementById("login")

login.addEventListener("click", ()=>{
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value

    const dados = {
        email: email,
        senha: senha
    }

    fetch('http://localhost:3000/logar',{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(dados)
    })
    .then(res_login => res_login.json())
    .then(dados => {
        console.log(dados)
        res_login.innerHTML = "Login com sucesso"
    })
    .catch((err)=>{
        console.error("Login não encontrado no banco de dados!", err)
    })
})
