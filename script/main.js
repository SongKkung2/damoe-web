"use strict"
function open_mailer(){
    let modal = document.querySelector("#modal")
    modal.style.display = "block"   
}
function close_mailer(){
let close = document.querySelector(".close-modal")
let modal = document.querySelector("#modal")
close.addEventListener("click",function()
    {modal.style.display="none"})
}
close_mailer();
// function close_mailer(){
//     let modal = document.querySelector(".close-modal")    
//     modal.style.display = "none"
// }

function address_find(){
    alert("DB 점검으로 인해 해당 서비스 이용이 불가능합니다!")
}