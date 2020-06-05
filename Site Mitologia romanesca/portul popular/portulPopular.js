window.onload = function() {
    NumaraCuvinte();
    };

function NumaraCuvinte() {

        var txt = document.body.innerText;
        
        var words = txt.split(" ");
          
               
        var cuv = document.getElementById("cuvinte");
        cuv.innerHTML += words.length;
}