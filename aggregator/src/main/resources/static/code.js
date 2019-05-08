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

function sendDataIsoUtc(){
    console.log(Latitude, Longitude);
    var http = new XMLHttpRequest();
    const url = 'https://api.opencagedata.com/geocode/v1/json?q=47.499663+19.075570&key=a36ac62bfab44ff09eb13691ba88ea47';
    http.open("GET", url);
    http.send();
    http.onreadystatechange = (e) => {
        var response = http.responseText;
        var responseJSON = JSON.parse(response);
        console.log('openCageCC : '+responseJSON);
        currencyCODE = responseJSON.results[0].annotations.currency.iso_code;
        console.log('This is sending the location currency :'+currencyCODE);
        var countryCode = responseJSON.results[0].components.country_code;
        document.getElementById('littleFlagExchange').src = "https://www.countryflags.io/" + countryCode + "/shiny/32.png";
        document.getElementById('currentcyTEXTL').innerHTML=currencyCODE;
        document.getElementById('littleFlagExchangeLocal').src = "https://www.countryflags.io/" + countryCode + "/shiny/32.png";
        document.getElementById('currentcyTEXTLC').innerHTML=currencyCODE;
        //convert(currencyCODE);
        //convertlocal(currencyCODE);
    }

}