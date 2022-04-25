//1.	How to compare two JSON have the same properties without order?
//      a.	var obj1 = { name: "Person 1", age:5 };
//      b.	var obj2 = { age:5, name: "Person 1" };
var obj1 = { 
    name: "Person 1", 
    age:5 
    };
  var obj2 = { 
    age:5, 
    name: "Person 1" 
    };
  var any = (a,b)=>{
      let keys1 = Object.keys(a);
      let keys2 = Object.keys(b);
      let flag = false;
  
      if(keys1.length == keys2.length)
      for(var key in a){
          if(a[key] == b[key])
          flag = true;
          else{
              flag= false;
              break;
          }
      }
      return flag;
  }
  
  console.log(any(obj1,obj2));

//2.    Use the rest countries API url -> https://restcountries.eu/rest/v2/all and 
//      display all the country flags in console
var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    for(var i=0;i<data.length;i++){
    console.log(data[i].flag);
  }
}


//3.   Use the same rest countries and print all countries name, region, sub region and population
var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
for(var i=0;i<data.length;i++){
    console.log(`Name:${data[i].name} Region:${data[i].region} Subregion:${data[i].subregion} Population:${data[i].population}`);
  }
}