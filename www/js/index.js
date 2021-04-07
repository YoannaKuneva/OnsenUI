function testAction() {    
	document.querySelector('#largeBtn').setAttribute('modifier', 'cta');
  }; //извън

document.addEventListener('init', function(event) {

ons.ready(function() {
  // JS код и използване на Cordova API 
document.getElementById("deviceInfo").innerHTML="Version " + device.version + ". Platform " + device.platform;
	
window.addEventListener("batterystatus", example, false);
 
function example (status) {
    document.getElementById("batteryInfo").innerHTML="Заряд: " + status.level + "%; Включено зарядно: " + status.isPlugged;
}

});

});
