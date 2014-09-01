var resultDiv;

document.addEventListener("deviceready", init, false);
function init() {
	resultDiv = document.getElementByid('results');
}

function startScan() {

	var scanner = cordova.require("cordova/plugin/BarcodeScanner");
	scanner.scan(
		function (result) {
			var s = "Result: " + result.text + "\n" +
<<<<<<< HEAD
			"Format: " + result.format + "\n" /*+"Cancelled: " + result.cancelled*/;
=======
			"Format: " + result.format + "\n"; /*+"Cancelled: " + result.cancelled;*/
>>>>>>> b2914831c8b4bf1cc300ac52d45ff53893514dbe
	alert("hey: "+s);
			resultDiv.innerHTML = s;
			separa(result.text);
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		}
	);

}

function separa(n) {

separador = String.fromCharCode(29);
tamanho = n.length;
GTIN = "";
reg_anvisa = "";
serial = "";
validade = "";
lote = "";

for (i=0;i<4;i++) {
	if (n.substring(0,1)==separador) {n = n.substring(1,n.length);}
	campo = n.substring(0,2);
	fim_de_campo = n.indexOf(separador);
	if(fim_de_campo<0){fim_de_campo = n.length;}
	switch(campo)
		{
		case "01":
		GTIN = n.substring(2,16);
		n = n.substring(16,n.length);
		break;
	case "21":
		serial = n.substring(2,fim_de_campo);
		n = n.substring(fim_de_campo,n.length);
		break;
	case "17":
		validade = n.substring(2,8);
		n = n.substring(8,n.length);
		break;
	case "10":
		lote = n.substring(2,fim_de_campo);
		n = n.substring(fim_de_campo,n.length);
		break;
	case "713":
		reg_anvisa = n.substring(2,fim_de_campo);
		n = n.substring(fim_de_campo,n.length);
		break;


	default:
		alert("Este não é um código válido!");i=10;
		break;
		}
}
document.getElementById("resultado").value = "GTIN: "+GTIN+"\n"+"Serial: "+serial+"\n"+"Lote: "+lote+"\n"+"Validade: "+validade;


}
