function numbersRound(){
	//Recibe la cotización xxxx.xxxxx por argumento
	var cotizacion  			= WScript.Arguments.Item(0);	
	var m  = Number((Math.abs(cotizacion) * 100).toPrecision(15));
    var n = Math.round(m) / 100 ; //* Math.sign(cotizacion);
	
	//Retorna la cotización xxxx.xx con redondeo a 2 decimales
	WScript.StdOut.WriteLine(n);
}
numbersRound();
