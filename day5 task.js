//1. Do the below programs in anonymous function & IIFE

//a. Print odd numbers in an array
(function(){
    let a = [11,12,13,14,15,16,17,18];
     console.log(a.filter(ele => ele%2!==0))
 })();   

 //b. Convert all the strings to title caps in a string array
(function(){
    let name = 'ramidi keerthi'
    console.log(
        name.split(" ")
        .map(ele => ele[0].toUpperCase()+ele.substring(1))
        .join(" ")
        )
    })();

//c. Sum of all numbers in an array
(function(){
    let a=[1,2,3,4];
    console.log(a.reduce((total,ele)=>total+ele,0));
})();

//d. Return all the prime numbers in an array
(function(){
    let a=[1,2,3,4,5,6,7];
    console.log(a.filter(ele => {
        for(let i = 2 ; i<= Math.sqrt(ele) ; i++){
            if(ele % i ==0)
            return false;
        }
        return true;
    }))
})();

//e. Return all the palindromes in an array
(function(a){
    var res="";
    var ans="";
    for(var i=0;i<a.length;i++)
    {
        res+=a[i];
        var count=0
        
        for(var j=0;j<res.length;j++)
        {
            if(res[j]===res[((res.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===res.length)
        {
            ans+=res+" "
        }
        res="";
    }
    console.log(ans);
 
}) ([5,55,434,411,575,900]);

//f. Return median of two sorted arrays of the same size
var arr=function(a,b){
    var c=[];
    var n=a.length;
    var p=b.length;
    var i=0;
    var j=0;
    var med=0;
    while(i<n && j<p)
    {
        if(a[i]<b[j])
        {
            c.push(a[i])
            i++
        }
        else
        {
            c.push(b[j])
            j++
        }
    }
     if(i<n)
     {
         for(let k=i;k<n;k++)
         {
             c.push(a[k])
         }
     }
     else if(j<p)
     {
         for(let m=j;m<p;m++)
         {
             c.push(b[m])
         }
     }
     if(c.length%2===0)
     {
         med=(c[(c.length/2)-1]+c[c.length/2])/2
     }
     else
     {
         med=c[Math.floor(c.length/2)]
     }
     return med;   
}
console.log(arr([5,6,7,8],[4,5,6,8]));

//g. Remove duplicates from an array
(function(){
    let arr = [1,2,3,4,2,1,6,5];
    console.log(
        arr.filter((ele,index)=> arr.indexOf(ele) === index)
    );
})();

//h. Rotate an array by k times
(function(){
    let arr = [1,2,3,4,5]
    let rotate = 4;
    while(rotate>0){
        arr.unshift(arr.pop());
        rotate--;
    }
    console.log(arr);
})();


//3. Do the below programs in arrow functions

//a. Print odd numbers in an array
const oddNum = (arr)=>{
    console.log(arr.filter(ele => ele%2!==0));
};


//b. Convert all the strings to title caps in a string array
const titleCap = (name)=>{
    console.log(
        name.split(" ")
        .map(ele => ele[0].toUpperCase()+ele.substring(1))
        .join(" ")
    );
    
};

//c. Sum of all numbers in an array
const sum = ()=>{
    console.log(a.reduce((total,ele)=>total+ele,0));
};


//d. Return all the prime numbers in an array
const prime = (arr)=>{
    console.log(arr.filter(ele => {
        for(let i = 2 ; i<= Math.sqrt(ele) ; i++){
            if(ele % i ==0)
            return false;
        }
        return true;
    }));
};


//e. Return all the palindromes in an array
const palandrom = (num)=>{
    let temp = num.toString().split("");
    console.log(pal());
    function pal(){
        for(let i = 0;i<temp.length/2;i++)
    if(temp[i]!== temp[temp.length -1 - i]){
        return false; 
    }
    return true;
    }
}; 