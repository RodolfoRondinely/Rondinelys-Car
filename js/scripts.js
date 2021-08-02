//     function ver(id) {

//         var a = document.getElementById(id)
    
//             if (id.style.display=="none") {
//                 id.style.display="block"
//                     console.log(`sumiu`);
//             } else {
//                  id.style.display="none"        
//                     console.log(`apareceu`);
//         }
// }

function fechar(id){

    let fechar =document.getElementById(id)
    
    fechar.style.display="none"
}
function mostrar(id){

    let mostrar = document.getElementById(id)
        
    mostrar.style.display="block"
}
    
document.getElementById('btnFiat').addEventListener('click',function(){

    document.querySelector('.escolhaChevrolet').style.display='none'
    document.querySelector('.escolhaFiat').style.display='flex'

})
document.getElementById('btnChevrolet').addEventListener('click',function(){

    document.querySelector('.escolhaFiat').style.display='none'
    document.querySelector('.escolhaChevrolet').style.display='flex'
  
 })
 document.getElementById('mLateral').addEventListener('click',function(){


if (document.querySelector('.menu').style.display=='flex'
    ) {
        document.querySelector('.menu').style.display='none'
    
} else {
    document.querySelector('.menu').style.display='flex'
}

 })




















