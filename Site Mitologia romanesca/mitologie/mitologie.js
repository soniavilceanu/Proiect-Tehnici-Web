window.onload = function() {
    aparitieText();
    aparitieText2();
    NumaraCuvinte();
    };
    
function aparitieText() {

    var txt = document.getElementById("demo1").innerText;
    document.getElementById("demo1").innerText="";
    
    var words = txt.split(" ");
      
      for (var i=0;i<words.length;i++) {
    
    
       (function(ind) {
           setTimeout(function(){document.getElementById("demo1").innerHTML += words[ind] += " ";}, 333 * ind);
           
       })(i);
    }
}

function aparitieText2() {

    var txt = document.getElementById("demo2").innerText;
    document.getElementById("demo2").innerText="";
    
    var words = txt.split(" ");
      
      for (var i=0;i<words.length;i++) {
    
    
       (function(ind) {
           setTimeout(function(){document.getElementById("demo2").innerHTML += words[ind] += " ";}, 333 * ind);
           
       })(i);
    }
}



function NumaraCuvinte() {

    var txt = document.body.innerText;
    
    var words = txt.split(" ");
      
           
    var cuv = document.getElementById("cuvinte");
    cuv.innerHTML += words.length;
  }