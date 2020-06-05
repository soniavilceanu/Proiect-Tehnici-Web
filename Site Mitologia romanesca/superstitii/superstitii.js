window.onload = function() {
    NumaraCuvinte();
    };


document.addEventListener("keyup",myKeyPress);
document.addEventListener("click",myMouseClick);
//document.addEventListener("scroll",myMouseScroll);

function myKeyPress(keey) {
    //alert("You pressed");
    document.getElementById("divLog").style.display="block";
    /*
    if(y.style.display === "none") {
         y.style.display = "block";
    }else {
        y.style.display = "block";
      }
      */ 
    var d =new Date();
    document.getElementById("eventLog").innerHTML += d.getFullYear();
    document.getElementById("eventLog").innerHTML += "/";

    if(d.getMonth() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getMonth() + 1;
    document.getElementById("eventLog").innerHTML += "/";

    if(d.getDate() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getDate();
    document.getElementById("eventLog").innerHTML += ", ";

    if(d.getHours() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getHours();
    document.getElementById("eventLog").innerHTML += ":";

    if(d.getMinutes() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getMinutes();
    document.getElementById("eventLog").innerHTML += ":";

    if(d.getSeconds() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getSeconds();
    document.getElementById("eventLog").innerHTML += "  ";


    document.getElementById("eventLog").innerHTML += "Keydown, Tasta: ";
    document.getElementById("eventLog").innerHTML += keey.key;
    document.getElementById("eventLog").innerHTML += "<br>";
   
  }



function myMouseClick(ck){
    document.getElementById("divLog").style.display="block";

    var d =new Date();
    document.getElementById("eventLog").innerHTML += d.getFullYear();
    document.getElementById("eventLog").innerHTML += "/";

    if(d.getMonth() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getMonth() + 1;
    document.getElementById("eventLog").innerHTML += "/";

    if(d.getDate() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getDate();
    document.getElementById("eventLog").innerHTML += ", ";

    if(d.getHours() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getHours();
    document.getElementById("eventLog").innerHTML += ":";

    if(d.getMinutes() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getMinutes();
    document.getElementById("eventLog").innerHTML += ":";

    if(d.getSeconds() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getSeconds();
    document.getElementById("eventLog").innerHTML += "  ";


    document.getElementById("eventLog").innerHTML += ", MouseClick, la coord: ";
    document.getElementById("eventLog").innerHTML += ck.clientX;
    document.getElementById("eventLog").innerHTML += ", ";
    document.getElementById("eventLog").innerHTML += ck.clientY;

    document.getElementById("eventLog").innerHTML += "<br>";

}



function myMouseRightClick(ck){
    document.getElementById("divLog").style.display="block";

    var d =new Date();
    document.getElementById("eventLog").innerHTML += d.getFullYear();
    document.getElementById("eventLog").innerHTML += "/";

    if(d.getMonth() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getMonth() + 1;
    document.getElementById("eventLog").innerHTML += "/";

    if(d.getDate() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getDate();
    document.getElementById("eventLog").innerHTML += ", ";

    if(d.getHours() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getHours();
    document.getElementById("eventLog").innerHTML += ":";

    if(d.getMinutes() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getMinutes();
    document.getElementById("eventLog").innerHTML += ":";

    if(d.getSeconds() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getSeconds();
    document.getElementById("eventLog").innerHTML += "  ";


    document.getElementById("eventLog").innerHTML += ", Mouse Right-Click, la coord: ";
    document.getElementById("eventLog").innerHTML += ck.clientX;
    document.getElementById("eventLog").innerHTML += ", ";
    document.getElementById("eventLog").innerHTML += ck.clientY;

    document.getElementById("eventLog").innerHTML += "<br>";

}


 
function myMouseOverx(m){
    document.getElementById("divLog").style.display="block";

    var d =new Date();
    document.getElementById("eventLog").innerHTML += d.getFullYear();
    document.getElementById("eventLog").innerHTML += "/";

    if(d.getMonth() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getMonth() + 1;
    document.getElementById("eventLog").innerHTML += "/";

    if(d.getDate() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getDate();
    document.getElementById("eventLog").innerHTML += ", ";

    if(d.getHours() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getHours();
    document.getElementById("eventLog").innerHTML += ":";

    if(d.getMinutes() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getMinutes();
    document.getElementById("eventLog").innerHTML += ":";

    if(d.getSeconds() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getSeconds();
    document.getElementById("eventLog").innerHTML += "  ";


    document.getElementById("eventLog").innerHTML += ", Mouseover, pe Imagine";

    document.getElementById("eventLog").innerHTML += "<br>";

}

function myMouseOvery(m){
    document.getElementById("divLog").style.display="block";

    var d =new Date();
    document.getElementById("eventLog").innerHTML += d.getFullYear();
    document.getElementById("eventLog").innerHTML += "/";

    if(d.getMonth() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getMonth() + 1;
    document.getElementById("eventLog").innerHTML += "/";

    if(d.getDate() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getDate();
    document.getElementById("eventLog").innerHTML += ", ";

    if(d.getHours() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getHours();
    document.getElementById("eventLog").innerHTML += ":";

    if(d.getMinutes() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getMinutes();
    document.getElementById("eventLog").innerHTML += ":";

    if(d.getSeconds() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getSeconds();
    document.getElementById("eventLog").innerHTML += "  ";


    document.getElementById("eventLog").innerHTML += ", Mouseover, pe Link";

    document.getElementById("eventLog").innerHTML += "<br>";

}

function myMouseOverminiImg(m){
    document.getElementById("divLog").style.display="block";

    var d =new Date();
    document.getElementById("eventLog").innerHTML += d.getFullYear();
    document.getElementById("eventLog").innerHTML += "/";

    if(d.getMonth() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getMonth() + 1;
    document.getElementById("eventLog").innerHTML += "/";

    if(d.getDate() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getDate();
    document.getElementById("eventLog").innerHTML += ", ";

    if(d.getHours() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getHours();
    document.getElementById("eventLog").innerHTML += ":";

    if(d.getMinutes() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getMinutes();
    document.getElementById("eventLog").innerHTML += ":";

    if(d.getSeconds() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getSeconds();
    document.getElementById("eventLog").innerHTML += "  ";


    document.getElementById("eventLog").innerHTML += ", Mouseover, pe Mini Img";

    document.getElementById("eventLog").innerHTML += "<br>";

}

function myMouseOverz(m){
    document.getElementById("divLog").style.display="block";

    var d =new Date();
    document.getElementById("eventLog").innerHTML += d.getFullYear();
    document.getElementById("eventLog").innerHTML += "/";

    if(d.getMonth() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getMonth() + 1;
    document.getElementById("eventLog").innerHTML += "/";

    if(d.getDate() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getDate();
    document.getElementById("eventLog").innerHTML += ", ";

    if(d.getHours() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getHours();
    document.getElementById("eventLog").innerHTML += ":";

    if(d.getMinutes() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getMinutes();
    document.getElementById("eventLog").innerHTML += ":";

    if(d.getSeconds() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getSeconds();
    document.getElementById("eventLog").innerHTML += "  ";


    document.getElementById("eventLog").innerHTML += ", Mouseover, pe Navbar";

    document.getElementById("eventLog").innerHTML += "<br>";

}

function myMouseMove(m){
    document.getElementById("divLog").style.display="block";

    var d =new Date();
    document.getElementById("eventLog").innerHTML += d.getFullYear();
    document.getElementById("eventLog").innerHTML += "/";

    if(d.getMonth() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getMonth() + 1;
    document.getElementById("eventLog").innerHTML += "/";

    if(d.getDate() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getDate();
    document.getElementById("eventLog").innerHTML += ", ";

    if(d.getHours() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getHours();
    document.getElementById("eventLog").innerHTML += ":";

    if(d.getMinutes() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getMinutes();
    document.getElementById("eventLog").innerHTML += ":";

    if(d.getSeconds() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getSeconds();
    document.getElementById("eventLog").innerHTML += "  ";


    document.getElementById("eventLog").innerHTML += ", Mousemove, pe LOGO!";

    document.getElementById("eventLog").innerHTML += "<br>";

}

function myMouseOverL(m){
    document.getElementById("divLog").style.display="block";

    var d =new Date();
    document.getElementById("eventLog").innerHTML += d.getFullYear();
    document.getElementById("eventLog").innerHTML += "/";

    if(d.getMonth() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getMonth() + 1;
    document.getElementById("eventLog").innerHTML += "/";

    if(d.getDate() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getDate();
    document.getElementById("eventLog").innerHTML += ", ";

    if(d.getHours() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getHours();
    document.getElementById("eventLog").innerHTML += ":";

    if(d.getMinutes() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getMinutes();
    document.getElementById("eventLog").innerHTML += ":";

    if(d.getSeconds() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getSeconds();
    document.getElementById("eventLog").innerHTML += "  ";


    document.getElementById("eventLog").innerHTML += ", Mouseover, pe Logo!";

    document.getElementById("eventLog").innerHTML += "<br>";

}

function myMouseOverB(m){
    document.getElementById("divLog").style.display="block";

    var d =new Date();
    document.getElementById("eventLog").innerHTML += d.getFullYear();
    document.getElementById("eventLog").innerHTML += "/";

    if(d.getMonth() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getMonth() + 1;
    document.getElementById("eventLog").innerHTML += "/";

    if(d.getDate() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getDate();
    document.getElementById("eventLog").innerHTML += ", ";

    if(d.getHours() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getHours();
    document.getElementById("eventLog").innerHTML += ":";

    if(d.getMinutes() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getMinutes();
    document.getElementById("eventLog").innerHTML += ":";

    if(d.getSeconds() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getSeconds();
    document.getElementById("eventLog").innerHTML += "  ";


    document.getElementById("eventLog").innerHTML += ", Mouseover pe Banner!";

    document.getElementById("eventLog").innerHTML += "<br>";

}


function myMouseScroll(m){
    document.getElementById("divLog").style.display="block";

    var d =new Date();
    document.getElementById("eventLog").innerHTML += d.getFullYear();
    document.getElementById("eventLog").innerHTML += "/";

    if(d.getMonth() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getMonth() + 1;
    document.getElementById("eventLog").innerHTML += "/";

    if(d.getDate() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getDate();
    document.getElementById("eventLog").innerHTML += ", ";

    if(d.getHours() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getHours();
    document.getElementById("eventLog").innerHTML += ":";

    if(d.getMinutes() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getMinutes();
    document.getElementById("eventLog").innerHTML += ":";

    if(d.getSeconds() + 1 < 10)  document.getElementById("eventLog").innerHTML += "0";
    document.getElementById("eventLog").innerHTML += d.getSeconds();
    document.getElementById("eventLog").innerHTML += "  ";


    document.getElementById("eventLog").innerHTML += ", Ai Scrolat!";

    document.getElementById("eventLog").innerHTML += "<br>";

}
function Clear(){
    document.getElementById("eventLog").innerHTML = "";
}
function Hide(){
    document.getElementById("divLog").style.visibility = "hidden";
}





if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
    var modal = document.getElementById('myModal');
  
    modal.style.display = "block";
/////////

    modal.style.top = e.clientY  + 'px';
    modal.style.left = e.clientX  + 'px';
  
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        modal.style.display = "none";   
      }
    e.preventDefault();
    myMouseRightClick();

    }, false);

    }
    
    else {
    document.attachEvent('oncontextmenu', function() {
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        modal.style.display = "none";
    }
  window.event.returnValue = false;
  });
  }
  
  function linkul1(){
    document.body.style.color = "green";
  }
  function linkul2(){
    document.body.style.color = "brown";
  }
  function linkul3(){
    document.body.style.color = "blue";
  }
  function linkul4(){
    window.location = '#Sus';
  }
  function linkul5(){
    var tags = document.getElementsByClassName('rightClick');
  
  
    var elements = document.getElementsByClassName('imagineDiv');
    for(var i=0; i<elements.length; i++) { 
  
      if(elements[i].style.display === "none"){
        tags[4].innerText = "Ascunde imaginile";
  
        elements[i].style.display = "block";
      }
      else{
      elements[i].style.display='none';
      tags[4].innerText = "Arata imaginile";
  
      }
  }
  
    elements = document.getElementsByClassName('populare');
    for(var i=0; i<elements.length; i++) { 
      if(elements[i].style.display === "none") elements[i].style.display = "block";
      else{
      elements[i].style.display='none';
      }
    }
  }
  
  function linkul6(){
    var tags = document.getElementsByClassName('rightClick');
  
  
    var elements = document.getElementsByTagName("h4");
    for(var i=0; i<elements.length; i++) { 
  
      if( elements[i].style.visibility === "hidden"){
        tags[5].innerText = "Ascunde textul";
        elements[i].style.visibility = "visible";
          }
      else{
        elements[i].style.visibility = "hidden";
        tags[5].innerText = "Arata textul";
  
      }
  
  
  }

  elements = document.getElementsByTagName("h2");
  for(var i=0; i<elements.length; i++) { 
    if( elements[i].style.visibility === "hidden"){
      elements[i].style.visibility = "visible";
        }
    else{
      elements[i].style.visibility = "hidden";
  }
  }
  
  
  elements = document.getElementsByTagName("p");
  for(var i=0; i<elements.length; i++) { 
    if( elements[i].style.visibility === "hidden"){
      elements[i].style.visibility = "visible";
        }
    else{
      elements[i].style.visibility = "hidden";
    }
  }
  
  
  elements = document.getElementsByTagName("a");
  for(var i=0; i<elements.length; i++) { 
   if( elements[i].style.visibility === "hidden"){
        elements[i].style.visibility = "visible";
          }
      else{
        elements[i].style.visibility = "hidden";
  }
  }
}


function NumaraCuvinte() {

    var txt = document.body.innerText;
    
    var words = txt.split(" ");
      
           
    var cuv = document.getElementById("cuvinte");
    cuv.innerHTML += words.length;
  }