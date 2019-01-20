function funcao(numero){ 
	if($("#menu").val() == 1){
		return (Math.cos(numero) + 2 * Math.sin(numero) + Math.pow(numero, 2));
	} else if($("#menu").val() == 2){
		return (Math.exp(numero) * Math.cos(numero));
	} else if($("#menu").val() == 3){
		return (Math.pow(numero,2) - 2);
	}
}

function secante(){
	var x0 = parseFloat($("#x0").val());
	var x1 = parseFloat($("#x1").val());
	var e = parseFloat($("#e").val());
	var k = 1;
	var xAnterior1, xAnterior2, fx1, fx2, xAtual, erro, texto;

	fx1 = funcao(x0);
	fx2 = funcao(x1);

	texto  += ("<tr><th scope='row'>"+ k +"</th><td>"+ x0.toFixed(8) +"</td><td>"+ fx1.toFixed(8) +"</td></tr>");
	k++;
	texto  += ("<tr><th scope='row'>"+ k +"</th><td>"+ x1.toFixed(8) +"</td><td>"+ fx2.toFixed(8) +"</td></tr>");
	k++;

	xAnterior1 = x0;
	xAnterior2 = x1;

	do{
		xAtual = xAnterior2 - ((fx2 * (xAnterior2 - xAnterior1)) / (fx2-fx1));

		erro = Math.abs(xAtual - xAnterior2);

		xAnterior1 = xAnterior2;
		xAnterior2 = xAtual;

		fx1 = funcao(xAnterior1);
		fx2 = funcao(xAnterior2);

		texto  += ("<tr><th scope='row'>"+ k +"</th><td>"+ xAtual.toFixed(8) +"</td><td>"+ fx2.toFixed(8) +"</td></tr>");

		k++;
	} while(erro > e);

	//mostra o resultado
	$("#tabela").css("display", "inline");
	$("#result").html(texto);
	
	return false;
}

function main(){
	if(!($("#x0").val())){
		$("#x0").focus();
	} else if (!($("#x1").val())){
		$("#x1").focus();
	} else if (!($("#e").val())){
		$("#e").focus();
	} else {
		secante();
	}
}