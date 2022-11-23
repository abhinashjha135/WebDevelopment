console.log("avinash")

let arr=document.getElementsByClassName('button');

console.log(arr.length)
let str="";
 for(let i=0;i<arr.length;i++){
    arr[i].addEventListener("click",myfunction);
    function myfunction(){
        
        if(arr[i].innerHTML=='='){
            str=eval(str);
            document.getElementsByClassName('aj')[0].value=str;
            return ;
        }
        str=str+arr[i].innerHTML;
        document.getElementsByClassName('aj')[0].value=str;
    }
 }
 

// document.getElementsByClassName('avinash')[0].addEventListener("click", myFunction);

// function myFunction() {
//   console.log("dfklskldfjksldf");
// }