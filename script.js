var request=new XMLHttpRequest();
request.open("GET","https://api.covid19api.com/total/country/india");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    for(var i=0;i<data.length;i++){
    console.log(`Active:${data[i].Active} Deaths:${data[i].Deaths} Recovered:${data[i].Recovered}`);
  }
}