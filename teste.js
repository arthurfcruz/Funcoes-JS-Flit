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