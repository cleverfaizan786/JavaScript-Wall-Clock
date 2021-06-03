
let seconds=document.getElementById('seconds');
let minute=document.getElementById('minute');

let hour=document.getElementById('hour');

/*
console.log(time.getHours())
console.log(time.getMilliseconds())
console.log(time.getSeconds());
console.log(time.getMinutes())
*/


setInterval(function(){
  
time=new Date();
hours=0.5*(60*time.getHours()+time.getMinutes());
  seconds.style.transform=`rotate(${6*time.getSeconds()}deg)`;
  minute.style.transform=`rotate(${6*time.getMinutes()}deg)`;
  
hour.style.transform=`rotate(${hours}deg)`;

  

},1000)



