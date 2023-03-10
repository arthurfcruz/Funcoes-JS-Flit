//1.6 - 1

function confirmarDados(nome) {
    var nomeCompleto = nome + " da Silva"
    var idade = 20
    function getAnoNascimento(){
        var ano = 2022 - idade
        return ano
    }
    console.log("seu nome completo é " + nomeCompleto)
    console.log("seu ano de nascimento é " + getAnoNascimento())
    console.log("sua idade é " + idade)
}
confirmarDados("Marcos")

//1.6 - 2

function confirmarDados1(nome) {
    const nomeCompleto = nome + " da Silva"
    let geracao = "milenium"
    function getAnoNascimento(){
        let idade = 40
        const ano = 2022 - idade
        return ano
    }
    let anoNascimento = getAnoNascimento()
    if (anoNascimento <= 1995) {
        geracao = "geracao X"
    }
    console.log("seu nome completo é " + nomeCompleto)
    console.log("seu ano de nascimento é " + anoNascimento)
    console.log("sua geracao é " + geracao)
}
confirmarDados1("Marcos")

//1.6 - 3

function confirmarDados2(nome) {
    var nomeCompleto = nome + " da Silva"
    try {
        function getAnoNascimento(){
            var idade = 20
            var ano = 2022 - idade
            return ano
        }
        console.log("seu nome completo é " + nomeCompleto)
        console.log("seu ano de nascimento é " + getAnoNascimento())
        console.log("sua idade é " + idade)
    } catch (error) {
        console.log("um erro foi encontrado e nao foi possivel concluir a operacao")
    }

}
confirmarDados2("Marcos")

//1.6 - 4

function confirmarDados3(nome, idade) {
    var nomeCompleto = nome + " da Silva"
    var geracao = "milenium"
    function getAnoNascimento(){
        var ano = 2022 - idade
        return ano
    }
    var anoNascimento = getAnoNascimento()
    function geracaoPertencente(idade) {
        if (anoNascimento <= 1995) {
            var geracao = "geracao X"
            return geracao
        }
    }
    geracao = geracaoPertencente(idade)
    console.log("seu nome completo é " + nomeCompleto)
    console.log("seu ano de nascimento é " + anoNascimento)
    console.log("sua geracao é " + geracao)
}
confirmarDados3("Marcos", 40)