const faker = require('@withshepherd/faker')

function random(x){
    return Math.floor(Math.random() * x)

}

function buildcartela(numeros=[]){
  let cartela = []
  let i = 0
  while(i<5){
    const numero = random(20);
    if(!numeros.includes(numero)){
    cartela.push(numero)
    numeros.push(numero)
    i++;
    } 
    
  }
  return cartela

}
 
function criarCartelas(x,quantidade=[]){
  let cartelas = [];
  let numeros = [];
  for(let i = 0; i <x; i++){
    const cartela = buildcartela(numeros.flat(Infinity))
    numeros.push(cartela)
  cartelas.push({
    cartela,
    jogadores:faker.name.findName(),
    totaljogos: quantidade[i]
  });
  } 
    return cartelas

}



function gerarroleta(cartelas=[]){
  let contador = [];
    let result = [];
    const idinterval = setInterval(function(){
      console.log(cartelas)
      const numero = random(20)
      if(!result.includes(numero)){
        result.push(numero)
      console.log(numero)
      cartelas.forEach((obj,index) =>{
      if(obj.cartela.find(x => x === numero)){ 
        contador[index] = contador[index] ? contador[index] + 1 : 1 ; // ternario(if de uma linha.)
        console.log(`voce acertou o numero ${numero} na cartela ${index+1}`)
        console.log(`voce acertou ${contador[index]} na cartela ${index+1}`)
      }
      if(contador[index] === obj.cartela.length-1){
          console.log(`Bingo!!! a jogador(a) ${obj.jogadores}`)
          vencedor = true;
          clearInterval(idinterval)
       }
      })
      
  }   
  
  
  },1000)

  } 
  
  function criarRoletas(x,jogadores=[]){
    let j = jogadores
    for(let i = 1; i <= x; i++){
    
      console.log(`gerando bindo da roleta ${i}`)
      gerarroleta(j)
      j = j.filter(jogador => jogador.totaljogos > i )
    
    } 
    
  
  }
     
  







module.exports={
    buildcartela,
    gerarroleta,
    criarCartelas,
    criarRoletas,
    

}
