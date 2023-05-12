//Recuperando o input após ele receber o focus
const inputUser = document.querySelector("input[type='text']");
//Adicionando o evento de focus no inputUser
// inputUser.addEventListener("focus", ()=>{
//     // inputUser.setAttribute("NOME DO ATRIBUTO", "VALOR DO ATRIBUTO");
//     //Quando o input ganha o focus alteramos a cor de seu outline.
//     inputUser.setAttribute("style","outline-color:#ff0000;");
// } );

inputUser.addEventListener("keyup", ()=>{
    //Enquanto o usuário digitar, vamos contar a quantidade de caractéres que existe no campo, enquanto a quantidade for menor que 5, manteremos o outline na cor vermelha, assim que a quantidade atingir 5 ou mais mudamos a cor para verde.
    const labelUser = document.querySelector("label[for='idNm']");

    if(inputUser.value.length < 5){
        inputUser.setAttribute("style","outline-color:#ff0000;");
        labelUser.setAttribute("style","color:#ff0000;");
    }else{
        inputUser.setAttribute("style","outline-color:#00ff00;");
        labelUser.setAttribute("style","color:#00ff00;");
    }

} );

//Adicionando um evento click ao icone de olho!
const eyePass = document.querySelector(".fa-eye");

eyePass.addEventListener("click", ()=>{
    const inputPass = document.querySelector("input[name='txtPass']");

    if(inputPass.getAttribute("type") == "password"){
        inputPass.setAttribute("type","text");
    }else{
        inputPass.setAttribute("type","password");
    }
    
});