function ajustaNumeros(v){
    //remove os caracteres não numéricos 
    v.value = v.value.replace(/\D/g, "");
}

function ajustaTelefone(v){
    v.value = v.value.replace(/\D/g, "");
    //adiciona parênteses no DDD
    v.value = v.value.replace(/^(\d\d)(\d)/g, "($1) $2");
    //adiciona hífen no número de telefone
    v.value = v.value.replace(/(\d{4})(\d)/, "$1-$2");
}