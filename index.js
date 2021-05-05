function converter(){
    let valor = parseFloat(document.getElementById("valorDolar").value);

    let resp = valor * 5.56;
    document.getElementById("resp").value = resp.toFixed(2);
}

function limpar(){
    document.getElementById("valorDolar").value = "";
    document.getElementById("resp").value = "";
}    