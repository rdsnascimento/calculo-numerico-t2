function funcao(numero){ // x^3 -9x + 5
	if($("#menu").val() == 1){
		return (Math.pow(numero,3) - 9 * numero + 5);
	} else if(($("#menu").val() == 2)){
		return (Math.cos(numero) + 2 * Math.sin(numero) + Math.pow(numero, 2));
	} else if(($("#menu").val() == 3)){
		return (Math.exp(numero) * Math.cos(numero));
	} else if(($("#menu").val() == 4)){
		return (Math.pow(numero,2) - 2);
	}
}

function derivada(numero){ 
	if($("#menu").val() == 1){ // 3x^2 - 9
		return (3 * Math.pow(numero,2) - 9);
	} else if(($("#menu").val() == 2)){ //2x - sin(x) + 2 cos(x)
		return (2 * numero - Math.sin(numero) + 2 * Math.cos(numero));
	} else if(($("#menu").val() == 3)){ //e^x (cos(x) - sin(x))
		return (Math.exp(numero) * (Math.cos(numero) - Math.sin(numero)));
	} else if(($("#menu").val() == 4)){ //2x
		return (2 * numero);
	}
}

function newton(){
	var x0 = parseFloat($("#x0").val());
	var e = parseFloat($("#e").val());
	var k = 1;
	var xAnterior, e, fx, fLinha, xAtual, erro, texto;
	fx = funcao(x0);
	fLinha = derivada(x0);
	texto  += ("<tr><th scope='row'>"+ k +"</th><td>"+ x0.toFixed(8) +"</td><td>"+ fx.toFixed(8) +"</td><td>"+ fLinha.toFixed(8) +"</td></tr>");
	xAnterior = x0;

	do{
		k++;
		xAtual = xAnterior - (fx/fLinha);
		fx = funcao(xAtual);
		fLinha = derivada(xAtual);
		texto  += ("<tr><th scope='row'>"+ k +"</th><td>"+ xAtual.toFixed(8) +"</td><td>"+ fx.toFixed(8) +"</td><td>"+ fLinha.toFixed(8) +"</td></tr>");
		erro = Math.abs(xAtual - xAnterior);
		xAnterior = xAtual;
	} while(erro > e);

	//mostra o resultado
	$("#tabela").css("display", "inline");
	$("#result").html(texto);
	
	return false;
}

function main(){
	if(!($("#x0").val())){
		$("#x0").focus();
	} else if (!($("#e").val())){
		$("#e").focus();
	} else {
		newton();
	}
}
