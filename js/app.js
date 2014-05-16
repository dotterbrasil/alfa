var resultDiv;

document.addEventListener("deviceready", init, false);
function init() {
	resultDiv = document.getElementByid('results');
}

function startScan() {
alert("teste");
	var scanner = cordova.require("cordova/plugin/BarcodeScanner");
	scanner.scan(
		function (result) {
			var s = "Result: " + result.text + "<br/>" +
			"Format: " + result.format + "<br/>" +
			"Cancelled: " + result.cancelled;
			resultDiv.innerHTML = s;
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		}
	);

}
