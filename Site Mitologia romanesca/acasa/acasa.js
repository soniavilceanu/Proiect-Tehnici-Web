window.onload = function() {
    myMove();
    //rightMenu();
    NumaraCuvinte();
    };

function clickTitlu(){
    var x=document.getElementById("demo");
    if(x.innerHTML==="<i>...paganisme, stafii, strigoi si balauri...</i>")
        x.innerHTML="<i>...despre geti, daci si traci...</i>";
    else x.innerHTML="<i>...paganisme, stafii, strigoi si balauri...</i>";
}

function afiseazaCuprins(){
    var x=document.getElementById("linkuriRezumatt");
    if(x.style.display==="none")
        x.style.display="block";
    else x.style.display="none";
    
}

//culori tematica site

/*
document.getElementById('greyButton').onclick = switchGrey;
document.getElementById('greenButton').onclick = switchGreen;
document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('redButton').onclick = switchRed;
*/

function switchGrey() {
  var items=document.getElementsByClassName('card');
 
  for(var i=0;i<items.length;i++){
      items[i].style.backgroundColor = 'rgb(107, 103, 103)'; 
      items[i].style.color = 'black'; 
  }
   var items2=document.getElementById('navbarul');

  items2.style.backgroundColor = 'rgb(107, 103, 103)'; 
  items2.style.borderBottom = "3px solid black";

  var x =document.getElementById('myAnimation');
x.style.backgroundColor = 'grey';
x.style.border = '5px solid white'; 
var y =document.getElementById('patratAnimat');
y.style.backgroundColor = 'black';
y.style.border = '5px solid white'; 

}



  

function switchGreen() {
    var items=document.getElementsByClassName('card');
    for(var i=0;i<items.length;i++){
        items[i].style.backgroundColor = 'green'; 
        items[i].style.color = 'white';
    }
    var items2=document.getElementById('navbarul');

    items2.style.backgroundColor = 'green'; 
    items2.style.borderBottom = "3px solid white";

    var x =document.getElementById('myAnimation');
    x.style.backgroundColor = 'green';
    x.style.border = '5px solid black'; 
    var y =document.getElementById('patratAnimat');
    y.style.backgroundColor = 'white';
    y.style.border = '5px solid black'; 

}

function switchBlue() {
    var items=document.getElementsByClassName('card');
    for(var i=0;i<items.length;i++){
        items[i].style.backgroundColor = 'rgb(0, 89, 255)'; 
        items[i].style.color = 'black';  
}
var items2=document.getElementById('navbarul');

items2.style.backgroundColor = 'rgb(0, 89, 255)'; 
items2.style.borderBottom = "3px solid black";

var x =document.getElementById('myAnimation');
x.style.backgroundColor = 'blue';
x.style.border = '5px solid white'; 
var y =document.getElementById('patratAnimat');
y.style.backgroundColor = 'black';
y.style.border = '5px solid white'; 

}

function switchRed() {
    var items=document.getElementsByClassName('card');
    for(var i=0;i<items.length;i++){
        items[i].style.backgroundColor = 'rgb(196, 6, 6)'; 
        items[i].style.color = 'white'; 
}
var items2=document.getElementById('navbarul');

items2.style.backgroundColor = 'rgb(196, 6, 6)'; 
items2.style.borderBottom = "3px solid white";

var x =document.getElementById('myAnimation');
x.style.backgroundColor = 'red';
x.style.border = '5px solid orange'; 
var y =document.getElementById('patratAnimat');
y.style.backgroundColor = 'white';
y.style.border = '5px solid orange'; 
}

function switchKhaki() {
    var items=document.getElementsByClassName('card');
    for(var i=0;i<items.length;i++){
        items[i].style.backgroundColor = 'khaki'; 
        items[i].style.color = 'black';
    }
    var items2=document.getElementById('navbarul');

    items2.style.backgroundColor = 'black'; 
    items2.style.borderBottom = "3px solid khaki";


    var x =document.getElementById('myAnimation');
x.style.backgroundColor = 'khaki';
x.style.border = '5px solid white'; 
var y =document.getElementById('patratAnimat');
y.style.backgroundColor = 'black';
y.style.border = '5px solid white'; 
}

function getInputValue(){
    var inputVal = document.getElementById("myInput").value;
    setTimeout(function(){ alert(inputVal); }, 3000);
    //setInterval(function(){ alert(inputVal); }, 3000);
    
}


function sendInformation(){
    let name = document.getElementById('name').value;
    let comment = document.getElementById('comment').value;

    fetch("http://localhost:3000", {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify({name: name, comment: comment})
    }).then((data) => {
        return data.json()
    }).then((json)=>{
        if(json.Status === 'OK'){
            document.getElementById('responseArea').innerText='Informatia s-a trimis !';
        } else {
            document.getElementById('responseArea').innerText='Informatia nu s-a trimis !';
        }
        console.log(json);
    })
}


function myMove() {
    var elem = document.getElementById("myAnimation");   
    var pos = 0;
    var id = setInterval(frame, 10);
    var id2;
    var id3;
    var id4;
    var id5;
    var id6;
    var id7;
    function frame() {
      if (pos == 125) {
        
        id2 = setInterval(frame2, 10);
           clearInterval(id)
            frame2();
      
      } else {
        pos++; 
        elem.style.top = pos + 'px'; 
        elem.style.left = pos + 'px'; 
      }
    }
    
    
    function frame2(){
       
       
       
       if (pos == 0) {
            clearInterval(id2);
            id5 = setInterval(frame5, 10);
            pos=125;
            frame5();
  
          } else {
            pos--; 
            elem.style.top = pos + 'px'; 
            //elem.style.left = pos + 'px'; 
          }
    }
    
     function frame5() {
      if (pos == 147) {
        
        id3 = setInterval(frame3, 10);
           clearInterval(id5)
            frame3();
      
      } else {
        pos++; 
        //elem.style.top = pos + 'px'; 
        elem.style.left = pos + 'px'; 
      }
    }
    
    function frame3(){
       
       
       
       if (pos == 50) {
            clearInterval(id3);
            id4 = setInterval(frame4, 10);
            pos = 100;
            frame4();
            
  
          } else {
            pos--; 
            elem.style.top = 150 - pos + 'px'; 
            elem.style.left = pos + 'px'; 
          }
    }
     
    function frame4(){     
       
       
       if (pos == 25) {
            clearInterval(id4);
            id6 = setInterval(frame6, 10);
                      pos = 50;
  
            frame6();
  
          } else {
            pos--; 
            elem.style.top = pos + 'px';
            //elem.style.top = 350 - pos + 'px';
            //elem.style.left = pos + 'px'; 
          }
    }
     function frame6(){     
       
       
       if (pos == 100) {
            clearInterval(id6);
            id7 = setInterval(frame7, 10);
            pos = 25;
            frame7();
  
          } else {
            pos++; 
            //elem.style.top = pos + 'px';
            //elem.style.top = 350 - pos + 'px';
            elem.style.left = 100 - pos + 'px'; 
          }
    }
     function frame7(){     
       
       
       if (pos == 0) {
            clearInterval(id7);
            id = setInterval(frame, 10);
            frame();
  
          } else {
            pos--; 
            elem.style.top = pos + 'px';
            //elem.style.top = 350 - pos + 'px';
            //elem.style.left = 200 - pos + 'px'; 
          }
    }
    }







  if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {
  var modal = document.getElementById('myModal');

  modal.style.display = "block";
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