let acciones = (resolve, reject) => {
    const numeroAleatoreo = Math.floor(Math.random() * 12);
    setTimeout(
        () => {
          if(numeroAleatoreo%2==0){
              resolve('Banco Pago')
          }else{
             reject('Banco no Pago')
          }
        },
        2000
    );
}

const promesaDePago = new Promise(acciones);

promesaDePago
    .then(result => {console.log(result)})
    .catch(error=>{console.log(error)})