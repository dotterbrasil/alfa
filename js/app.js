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
			"Format: " + result.format + "\n"; /*+"Cancelled: " + result.cancelled;*/
	alert("hey: "+s);
			resultDiv.innerHTML = s;
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		}
	);

}
