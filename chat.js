
 function Update(){
   var state={
       num:true
   }
   var a=document.getElementById('span')
   var b='send';
   var c='mic'
if(state.num==true) {
  a.innerHTML=b
}
else {
  a.innerHTML=c;
}
   }

function MessageDate(){
  var day=new Date().getDate();
  var month =new Date().getMonth()
  var year ='2021'
  var dom=document.getElementById('lightblue');
  dom.innerHTML=day +'/'+month+'/'+year;
 
}
function Normal(){
var state={
    num:true
}
var a=document.getElementById('span')
   var b='send';
   var c='mic'
if(state.num==true) {
  a.innerHTML=c
}
else {
  a.innerHTML=b;
}
}

