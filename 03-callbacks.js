let f1=(n1,n2)=>console.log(n1+n2)
let f2=(n1,n2)=>console.log(n1*n2)

let general=(n1,n2,callback)=>callback(n1,n2)


general(1,3,f2)