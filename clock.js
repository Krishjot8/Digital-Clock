const clock =  document.getElementById("clock");

setInterval(myFunction);

function myFunction() {
  let d = new Date();
  clock.innerHTML=
  d.toLocaleString('en-US', { hour: 'numeric', minute:'numeric', hour12: true })
  clock.style.fontFamily = "Digital-7 "
  clock.style.fontSize = '200px'
  

}

      