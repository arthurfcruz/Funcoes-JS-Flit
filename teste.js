function aumentoSalario(salario) {
    switch (true) {
        case salario <= 1500:
            salario = salario * 1.20
        break;
        case salario > 1500 && salario <= 2000:
            salario = salario * 1.15
        break;
        case salario > 2000 && salario <= 3000:
            salario = salario * 1.10
        break;
        case salario > 3000:
            salario = salario * 1.05
        break;
    }   
    return salario
} 
    
try {
    console.log(aumentoSalario(5000))
} catch (error) {
    console.log("o salario deve ser um valor numérico")
}