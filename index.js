const faker = require('@withshepherd/faker')
const {criarRoletas,criarCartelas} = require('./functions');
faker.locale = "pt_BR"


const jogadores = criarCartelas(3,[2,3,1])


console.log(jogadores)


criarRoletas(3,jogadores)


//Nao pode gerar cartelas com os mesmos numeros.
//caso repita mostrar que o numero repitido ja foi utilizado em alguma outra cartela e mostrar o numero que foi usado
//executar varios bingos com as mesmas cartelas. gerar roleta usando a gerarrlota()
//cada jogador escolhe a quantidade de roletas da vez. 

