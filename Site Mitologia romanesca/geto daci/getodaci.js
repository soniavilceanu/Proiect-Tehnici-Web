window.onload = function() {
    this.submitQuiz
    this.NumaraCuvinte();
    };

function submitQuiz() {

// get each answer score
    function answerScore (qName) {
        var radiosNo = document.getElementsByName(qName);
        k = 0;
        nAnswers = 0;

        for (var i = 0, length = radiosNo.length; i < length; i++) {
               if(Number(radiosNo[i].value)==1) nAnswers++;
              
               if (radiosNo[i].checked) {
                //radiosNo[i].checked = false;
                if(radiosNo[i].value==1) k++;
                 else return 0;
            }
            else if(radiosNo[i].value==1) return 0; 
        }

        if(nAnswers = k) return 1;
        else return 0;
    }


    
    var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4'));


    radiosNo1 = document.getElementsByName('q1');
    radiosNo2 = document.getElementsByName('q2');
    radiosNo3 = document.getElementsByName('q3');
    radiosNo4 = document.getElementsByName('q4');

    for (var i = 0, length = radiosNo1.length; i < length; i++) {
      radiosNo1[i].disabled=true;
      radiosNo2[i].disabled=true;
      radiosNo3[i].disabled=true;
      radiosNo4[i].disabled=true;

    }
    var questionCountArray = document.getElementsByClassName('question');

    var questionCounter = 0;
    for (var i = 0, length = questionCountArray.length; i < length; i++) {
        questionCounter++;
    }



    var showScore = "Your Score: " + calcScore +"/" + questionCounter;

    if (calcScore === questionCounter) {
        showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
    };
    document.getElementById('userScore').innerHTML = showScore;
  

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
