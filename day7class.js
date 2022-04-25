console.log(num);
var num=10;   //we will get undefined as output because var is accessible for the entire code


//console.log(num1);
//let num1=10;   //Cannot access 'num1' before initialization


let num3=1;
if(num3===1){
    let num3=2;
    console.log(num3); //2
}
console.log(num3); //1


let num4=1;
if(num4===1){
    num4=2;
    console.log(num4);  //2
}
console.log(num4);  //2
//here we are just reassining it first num4 is holding value after going inside the
//if block the value in num4 is updated as 2  


//let num5=10;
//var num5=5;
//console.log(num5); //Identifier 'num5' has already been declared 
//because it is declared as let and we cannot re assign it 


//for(var i=0;i<10;i++){
//    console.log(i); //0 to 9
//}
//console.log(i); //here we are getting 10 because var is accessible throughout the program


//it is a functional scope (with in a function) 
//when we use var inside the function it will be accessible only inside the function


//global is anywhere inside the function or outside the function


for(let i=0;i<10;i++){
    console.log(i); //0 to 9
}
//console.log(i); //i is not defined
////because here we used let and this is not accessible in the whole program when used inside the block


//const num6=1;
//num6=10;
//console.log(num6); //error: Assignment to constant variable.


//const num7=1;
//if(num7===1){
//    const num7=2;
//    num7=3;
//    console.log(num7);
//}
//console.log(num7); //


let course="MERN";
if(course==="MERN"){
    var dept1="React developer";
    let dept2="full stack developer";
}
console.log(course); //MERN
console.log(dept1);  //React developer
//console.log(dept2);  //error: dept2 is not defined


function myfun(){
    var num8=1;
    let num9=2;
    const num10=3;
    {
        var num8=100;
        let num9=200;
        const num10=300;
        console.log("inside block",num8); //100
        console.log("inside block",num9); //200
        console.log("inside block",num10); //300
    }
    console.log("outside block",num8); //100
    console.log("outside block",num9); //2
    console.log("outside block",num10);  //3
}
//console.log("outside fun",num8); //num8 is not defined
myfun();


//array destruction
let array=[10,20,30,40,50]; //lets create 4 different variables and 
//store values of array in multiple variables
let n1,n2,n3,n4;
[n1,n2,n3,n4]=array; //array destruction
console.log(n1); //10
console.log(n2);  //20
console.log(n3);  //30
console.log(n4);  //40


//object destruction
//inreal time we use object destruction
let student1={
    name2:"Tanusha",
    age2:22,
    course2:"MERN",
    address2:{
        city2:"gudivada",
        state2:"AP",
        country2:"India"
    }
}
let {name2,age2,course2}=student1; //destructuring of object
//template literal -- using this we can create our own customized string
let name1=`${name2} is ${age2} years old and he is studying ${course2}`;
console.log(name1);
//access city,state,and country using destructing
let {address2:{city2,state2,country2}}=student1;
console.log(`${name2} lives in ${city2}, ${state2} and ${country2}`);
//one more format
console.log(`
City: ${city2}
State: ${state2}
Country: ${country2}
`)
//string interpolation
console.log("City: "+city2,"State: "+state2,"Country: "+country2);



//task: take simple list of elements with parameters fname,lname,gender,age,loc using array and obj destruction
//array destruction
let array1=["keerthi","ramidi","female",22,"hyderabad"];
let fname,lname,gender,age,loc;
[fname,lname,gender,age,loc]=array1;
console.log(fname);
console.log(lname);
console.log(gender);
console.log(age);
console.log(loc);
//object destruction
let student={
    fname1:"Keerthi",
    lname1:"Ramidi",
    gender1:"Female",
    age1:22,
    loc1:"hyderabad"
}
let{fname1,lname1,gender1,age1,loc1}=student;
console.log(`
Fname1: ${fname1}
Lname1: ${lname1}
Gender1: ${gender1}
Age1: ${age1}
Loc1: ${loc1}
`)