var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("gettimes").innerHTML = d.toLocaleTimeString();
  //document.getElementById("gettimes").innerHTML = d.getTime();
  var autoUpdateTime = d.getTime();
  console.log(autoUpdateTime);
  sendDataIsoServerAUpdateTime(autoUpdateTime);
  sendDataUtcServerAUpdateTime(autoUpdateTime);


}



function sendDataIsoServer(){
    var http = new XMLHttpRequest();
    //const url = 'http://isodate.kubernetes.cafe/1234567/isodate';
    const url = 'http://localhost:8081/timestamp/'+document.getElementById("Timestamp").value;
    console.log('timestamp value : '+document.getElementById("Timestamp").value);
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
    var http = new XMLHttpRequest();
    const url = 'http://localhost:8081/utcDate/'+document.getElementById("Timestamp").value;
    console.log('timestamp value : '+document.getElementById("Timestamp").value);
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


function sendDataIsoServerAUpdateTime(autoUpdateTime){
    var http = new XMLHttpRequest();
    //const url = 'http://isodate.kubernetes.cafe/1234567/isodate';
    const url = 'http://localhost:8081/timestamp/'+autoUpdateTime;
    console.log('timestamp value : '+autoUpdateTime);
    http.open("GET", url);
    http.send();
    http.onreadystatechange = (e) => {
        var response = http.responseText;
        console.log(response);
        var responseJSON = JSON.parse(response);
        console.log('Data back frome Isodata server : '+responseJSON);
        var isoDate = responseJSON.isoDate;
        console.log('iso date: '+ isoDate);
        document.getElementById('isodataHolderAuto').innerHTML= isoDate;
       
    }

}

function sendDataUtcServerAUpdateTime(autoUpdateTime){
    var http = new XMLHttpRequest();
    const url = 'http://localhost:8081/utcDate/'+autoUpdateTime;
    console.log('timestamp value : '+autoUpdateTime);
    http.open("GET", url);
    http.send();
    http.onreadystatechange = (e) => {
        var response = http.responseText;
        console.log(response);
        var responseJSON = JSON.parse(response);
        console.log('Data back frome Utcdata server : '+responseJSON);
        var utcDate = responseJSON.date;
        console.log('utc date: '+ utcDate);
        document.getElementById('utcdataHolderAuto').innerHTML= utcDate;
       
    }

}
