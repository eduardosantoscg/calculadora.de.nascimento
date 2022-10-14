botao = document.querySelector("#btn")
botao.onclick=function(){
if(document.form1.data_nasc.value==""){
    alert("campo obrigatorio")
}
else{


    idade = 0
    data = new Date()
    ano_atual = data.getFullYear()
    datanasc = document.form1.data_nasc.value
    ano_nasc = datanasc.slice(6,10)
    idade = ano_atual - ano_nasc
    document.form1.idade.value=idade
}

}
datamasc = document.querySelector("#dataid")
datamasc.onkeypress = function(e){
    d = e.target.value.replace(/\D/g,"")
    d = d.replace(/(\d{2})(\d)/,"$1/$2")
    d = d.replace(/(\d{2})(\d)/,"$1/$2")
    e.target.value = d
}