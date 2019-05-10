/*
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    // automatt get geolocation to the progarm
    
    getTime();
});
*/

/*
$(document).ready(function(){
    getTime();
});
*/
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
    console.log('should wrk ');
    document.getElementById("test").innerHTML = "Balazs";
}


function sendDataIsoServer(){
    //console.log(Latitude, Longitude);
    var http = new XMLHttpRequest();
    const url = 'http://isodate.kubernetes.cafe/1234567/isodate';
    http.open("GET", url);
    http.send();
    http.onreadystatechange = (e) => {
        var response = http.responseText;
        console.log(response);
        var responseJSON = JSON.parse(response);
        console.log('Data back frome Isodata server : '+responseJSON);
        var isoDate = responseJSON.isoDate;
        console.log('iso date: '+ isoDate);
        document.getElementById('isodataHolder').innerHTML= isoDate;
       
    }

}

function sendDataUtcServer(){
    console.log('hu ha');
    var http = new XMLHttpRequest();
    const url = 'http://localhost:8081/utcDate/1234567';
    http.open("GET", url);
    http.send();
    http.onreadystatechange = (e) => {
        var response = http.responseText;
        console.log(response);
        var responseJSON = JSON.parse(response);
        console.log('Data back frome Utcdata server : '+responseJSON);
        var utcDate = responseJSON.date;
        console.log('utc date: '+ utcDate);
        document.getElementById('utcdataHolder').innerHTML= utcDate;
       
    }

}

