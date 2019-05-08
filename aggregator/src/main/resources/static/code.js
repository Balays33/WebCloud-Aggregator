/*
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    // automatt get geolocation to the progarm
    
    getTime();
});
*/

$(document).ready(function(){
    getTime();
});
/*
function getTime( ){
    var d = new Date();
    var d1 = new Date().toLocaleTimeString(); // 11:18:48 AM
    
    document.getElementById("gettimes").innerHTML = d1;
    console.log(d1);

    var today = new Date().toLocaleDateString();
       //  07-06-2016 06:38:34
    //var dd = String(today.getDate()).padStart(2, '0');
    //var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    //var yyyy = today.getFullYear();

    //today = mm + '/' + dd + '/' + yyyy;
    document.getElementById("getmount").innerHTML = today;
    //document.write(today);

    setTimeout(getTime, 1000);
    
}
*/

var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("gettimes").innerHTML = d.toLocaleTimeString();
}
function kiir(){

    document.getElementById("test").innerHTML = "Balazs";
}