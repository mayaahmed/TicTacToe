var i=0;
var button= [];
for(i=1;i<10;i++)
   button[i]=document.getElementById('canvas'+i);
var ctx=[];
for(i=1;i<10;i++)
    ctx[i]=button[i].getContext('2d');  

var bDisabled=[];
for(i=1;i<10;i++)
    bDisabled[i]=false;
var isResult=false;
var content=[];


function loop(x,a){
  if(!bDisabled[x]){
    bDisabled[x]=true;
    button[x].style.opacity=0.7;
    content[x]='x';
    button[x].style.Transform="rotateY(180deg)";
    button[x].style.webkitTransform="rotateY(180deg)";
    button[x].style.MozTransform="rotateY(180deg)";
    button[x].style.msTransform="rotateY(180deg)";
  
    
        ctx[x].lineWidth=3;
        ctx[x].beginPath();
        ctx[x].moveTo(10,10);
        ctx[x].lineTo(60,60);
        ctx[x].moveTo(60,10);
        ctx[x].lineTo(10,60);
        ctx[x].stroke();
        ctx[x].closePath();
      
        checkWinner();
       
        setTimeout(function(){
        if(!isResult){
          if(a==1) advancedComputerTurn();
          else computerTurn();
          checkWinner(); 
        }},700);
  }
} //end of function


function computerTurn(){
  var r=Math.random();
  if(content[1]=='0' && content[2]=='0' && !bDisabled[3])
    draw0steps(3);
  else if(content[1]=='0' && content[3]=='0' && !bDisabled[2])
    draw0steps(2);
  else if(content[2]=='0' && content[3]=='0' && !bDisabled[1])
    draw0steps(1);
  else if(content[4]=='0' && content[5]=='0' && !bDisabled[6])
    draw0steps(6);
  else if(content[4]=='0' && content[6]=='0' && !bDisabled[5])
    draw0steps(5);
  else if(content[5]=='0' && content[6]=='0' && !bDisabled[4])
    draw0steps(4);
  else if(content[7]=='0' && content[8]=='0' && !bDisabled[9])
    draw0steps(9);
  else if(content[7]=='0' && content[9]=='0' && !bDisabled[8])
    draw0steps(8);
  else if(content[8]=='0' && content[9]=='0' && !bDisabled[7])
    draw0steps(7);
  else if(content[1]=='0' && content[4]=='0' && !bDisabled[7])
    draw0steps(7);
  else if(content[1]=='0' && content[7]=='0' && !bDisabled[4])
    draw0steps(4);
  else if(content[4]=='0' && content[7]=='0' && !bDisabled[1])
    draw0steps(1);
  else if(content[2]=='0' && content[5]=='0' && !bDisabled[8])
    draw0steps(8);
  else if(content[2]=='0' && content[8]=='0' && !bDisabled[5])
    draw0steps(5);
  else if(content[5]=='0' && content[8]=='0' && !bDisabled[2])
    draw0steps(2);
  else if(content[3]=='0' && content[6]=='0' && !bDisabled[9])
    draw0steps(9);
  else if(content[3]=='0' && content[9]=='0' && !bDisabled[6])
    draw0steps(6);
  else if(content[6]=='0' && content[9]=='0' && !bDisabled[3])
    draw0steps(3);
  else if(content[1]=='0' && content[5]=='0' && !bDisabled[9])
    draw0steps(9);
  else if(content[1]=='0' && content[9]=='0' && !bDisabled[5])
    draw0steps(5);
  else if(content[5]=='0' && content[9]=='0' && !bDisabled[1])
    draw0steps(1);
  else if(content[3]=='0' && content[5]=='0' && !bDisabled[7])
    draw0steps(7);
  else if(content[3]=='0' && content[7]=='0' && !bDisabled[5])
    draw0steps(5);
  else if(content[5]=='0' && content[7]=='0' && !bDisabled[3])
    draw0steps(3);

  else if(content[1]=='x' && content[2]=='x' && !bDisabled[3])
    draw0steps(3);
  else if(content[1]=='x' && content[3]=='x' && !bDisabled[2])
    draw0steps(2);
  else if(content[2]=='x' && content[3]=='x' && !bDisabled[1])
    draw0steps(1);
  else if(content[4]=='x' && content[5]=='x' && !bDisabled[6])
    draw0steps(6);
  else if(content[4]=='x' && content[6]=='x' && !bDisabled[5])
    draw0steps(5);
  else if(content[5]=='x' && content[6]=='x' && !bDisabled[4])
    draw0steps(4);
  else if(content[7]=='x' && content[8]=='x' && !bDisabled[9])
    draw0steps(9);
  else if(content[7]=='x' && content[9]=='x' && !bDisabled[8])
    draw0steps(8);
  else if(content[8]=='x' && content[9]=='x' && !bDisabled[7])
    draw0steps(7);
  else if(content[1]=='x' && content[4]=='x' && !bDisabled[7])
    draw0steps(7);
  else if(content[1]=='x' && content[7]=='x' && !bDisabled[4])
    draw0steps(4);
  else if(content[4]=='x' && content[7]=='x' && !bDisabled[1])
    draw0steps(1);
  else if(content[2]=='x' && content[5]=='x' && !bDisabled[8])
    draw0steps(8);
  else if(content[2]=='x' && content[8]=='x' && !bDisabled[5])
    draw0steps(5);
  else if(content[5]=='x' && content[8]=='x' && !bDisabled[2])
    draw0steps(2);
  else if(content[3]=='x' && content[6]=='x' && !bDisabled[9])
    draw0steps(9);
  else if(content[3]=='x' && content[9]=='x' && !bDisabled[6])
    draw0steps(6);
  else if(content[6]=='x' && content[9]=='x' && !bDisabled[3])
    draw0steps(3);
  else if(content[1]=='x' && content[5]=='x' && !bDisabled[9])
    draw0steps(9);
  else if(content[1]=='x' && content[9]=='x' && !bDisabled[5])
    draw0steps(5);
  else if(content[5]=='x' && content[9]=='x' && !bDisabled[1])
    draw0steps(1);
  else if(content[3]=='x' && content[5]=='x' && !bDisabled[7])
    draw0steps(7);
  else if(content[3]=='x' && content[7]=='x' && !bDisabled[5])
    draw0steps(5);
  else if(content[5]=='x' && content[7]=='x' && !bDisabled[3])
    draw0steps(3);
  // else if(!bDisabled[5]) draw0steps(5);
  else if(r<0.1 && !bDisabled[1]) draw0steps(1);
  else if(r<0.2 && !bDisabled[2]) draw0steps(2);
  else if(r<0.3 && !bDisabled[3]) draw0steps(3);
  else if(r<0.4 && !bDisabled[4]) draw0steps(4);
  else if(r<0.5 && !bDisabled[5]) draw0steps(5);
  else if(r<0.6 && !bDisabled[6]) draw0steps(6);
  else if(r<0.7 && !bDisabled[7]) draw0steps(7);
  else if(r<0.8 && !bDisabled[8]) draw0steps(8);
  else if(r<1 && !bDisabled[9]) draw0steps(9);
  else computerTurn();
}

function draw0steps(x){
  bDisabled[x]=true;
  button[x].style.opacity=0.7;
  content[x]='0';
  button[x].style.Transform="rotateY(180deg)";
  button[x].style.webkitTransform="rotateY(180deg)";
  button[x].style.MozTransform="rotateY(180deg)";
  button[x].style.msTransform="rotateY(180deg)";
      ctx[x].beginPath();
      ctx[x].lineWidth=3;
      ctx[x].arc(35,35,25,0,Math.PI*2,false);
      ctx[x].stroke();
      ctx[x].closePath();
}//end of fn


function checkWinner(){
  if(!isResult){
     if(content[1]=='x' && content[2]=='x'&& content[3]=='x') 
       showWinner('You Win');
     else if(content[4]=='x' && content[5]=='x'&& content[6]=='x') 
       showWinner('You Win');
      else if(content[7]=='x' && content[8]=='x'&& content[9]=='x') 
        showWinner('You Win');
      else if(content[1]=='x' && content[4]=='x'&& content[7]=='x') 
        showWinner('You Win');
      else if(content[2]=='x' && content[5]=='x'&& content[8]=='x') 
        showWinner('You Win');
      else if(content[3]=='x' && content[6]=='x'&& content[9]=='x') 
        showWinner('You Win');
      else if(content[1]=='x' && content[5]=='x'&& content[9]=='x')
        showWinner('You Win');
      else if(content[3]=='x' && content[5]=='x'&& content[7]=='x') 
        showWinner('You Win');

      else  if(content[1]=='0' && content[2]=='0'&& content[3]=='0') 
        showWinner('You lose');
      else if(content[4]=='0' && content[5]=='0'&& content[6]=='0') 
        showWinner('You lose');
      else if(content[7]=='0' && content[8]=='0'&& content[9]=='0') 
        showWinner('You lose');
      else if(content[1]=='0' && content[4]=='0'&& content[7]=='0') 
        showWinner('You lose');
      else if(content[2]=='0' && content[5]=='0'&& content[8]=='0') 
        showWinner('You lose');
      else if(content[3]=='0' && content[6]=='0'&& content[9]=='0') 
        showWinner('You lose');
      else if(content[1]=='0' && content[5]=='0'&& content[9]=='0')
        showWinner('You lose');
      else if(content[3]=='0' && content[5]=='0'&& content[7]=='0') 
        showWinner('You lose');

      else if(
        (content[1]=='x' || content[1]=='0') &&
        (content[2]=='x' || content[2]=='0') &&
        (content[3]=='x' || content[3]=='0') &&
        (content[4]=='x' || content[4]=='0') &&
        (content[5]=='x' || content[5]=='0') &&
        (content[6]=='x' || content[6]=='0') &&
        (content[7]=='x' || content[7]=='0') &&
        (content[8]=='x' || content[8]=='0') &&
        (content[9]=='x' || content[9]=='0')) 
        showWinner('Game is a draw. Play again!');
 }

}//end of fn




    
function advancedComputerTurn(){
  var r=Math.random();
  if(content[1]=='0' && content[2]=='0' && !bDisabled[3])
    draw0steps(3);
  else if(content[1]=='0' && content[3]=='0' && !bDisabled[2])
    draw0steps(2);
  else if(content[2]=='0' && content[3]=='0' && !bDisabled[1])
    draw0steps(1);
  else if(content[4]=='0' && content[5]=='0' && !bDisabled[6])
    draw0steps(6);
  else if(content[4]=='0' && content[6]=='0' && !bDisabled[5])
    draw0steps(5);
  else if(content[5]=='0' && content[6]=='0' && !bDisabled[4])
    draw0steps(4);
  else if(content[7]=='0' && content[8]=='0' && !bDisabled[9])
    draw0steps(9);
  else if(content[7]=='0' && content[9]=='0' && !bDisabled[8])
    draw0steps(8);
  else if(content[8]=='0' && content[9]=='0' && !bDisabled[7])
    draw0steps(7);
  else if(content[1]=='0' && content[4]=='0' && !bDisabled[7])
    draw0steps(7);
  else if(content[1]=='0' && content[7]=='0' && !bDisabled[4])
    draw0steps(4);
  else if(content[4]=='0' && content[7]=='0' && !bDisabled[1])
    draw0steps(1);
  else if(content[2]=='0' && content[5]=='0' && !bDisabled[8])
    draw0steps(8);
  else if(content[2]=='0' && content[8]=='0' && !bDisabled[5])
    draw0steps(5);
  else if(content[5]=='0' && content[8]=='0' && !bDisabled[2])
    draw0steps(2);
  else if(content[3]=='0' && content[6]=='0' && !bDisabled[9])
    draw0steps(9);
  else if(content[3]=='0' && content[9]=='0' && !bDisabled[6])
    draw0steps(6);
  else if(content[6]=='0' && content[9]=='0' && !bDisabled[3])
    draw0steps(3);
  else if(content[1]=='0' && content[5]=='0' && !bDisabled[9])
    draw0steps(9);
  else if(content[1]=='0' && content[9]=='0' && !bDisabled[5])
    draw0steps(5);
  else if(content[5]=='0' && content[9]=='0' && !bDisabled[1])
    draw0steps(1);
  else if(content[3]=='0' && content[5]=='0' && !bDisabled[7])
    draw0steps(7);
  else if(content[3]=='0' && content[7]=='0' && !bDisabled[5])
    draw0steps(5);
  else if(content[5]=='0' && content[7]=='0' && !bDisabled[3])
    draw0steps(3);

  else if(content[1]=='x' && content[2]=='x' && !bDisabled[3])
    draw0steps(3);
  else if(content[1]=='x' && content[3]=='x' && !bDisabled[2])
    draw0steps(2);
  else if(content[2]=='x' && content[3]=='x' && !bDisabled[1])
    draw0steps(1);
  else if(content[4]=='x' && content[5]=='x' && !bDisabled[6])
    draw0steps(6);
  else if(content[4]=='x' && content[6]=='x' && !bDisabled[5])
    draw0steps(5);
  else if(content[5]=='x' && content[6]=='x' && !bDisabled[4])
    draw0steps(4);
  else if(content[7]=='x' && content[8]=='x' && !bDisabled[9])
    draw0steps(9);
  else if(content[7]=='x' && content[9]=='x' && !bDisabled[8])
    draw0steps(8);
  else if(content[8]=='x' && content[9]=='x' && !bDisabled[7])
    draw0steps(7);
  else if(content[1]=='x' && content[4]=='x' && !bDisabled[7])
    draw0steps(7);
  else if(content[1]=='x' && content[7]=='x' && !bDisabled[4])
    draw0steps(4);
  else if(content[4]=='x' && content[7]=='x' && !bDisabled[1])
    draw0steps(1);
  else if(content[2]=='x' && content[5]=='x' && !bDisabled[8])
    draw0steps(8);
  else if(content[2]=='x' && content[8]=='x' && !bDisabled[5])
    draw0steps(5);
  else if(content[5]=='x' && content[8]=='x' && !bDisabled[2])
    draw0steps(2);
  else if(content[3]=='x' && content[6]=='x' && !bDisabled[9])
    draw0steps(9);
  else if(content[3]=='x' && content[9]=='x' && !bDisabled[6])
    draw0steps(6);
  else if(content[6]=='x' && content[9]=='x' && !bDisabled[3])
    draw0steps(3);
  else if(content[1]=='x' && content[5]=='x' && !bDisabled[9])
    draw0steps(9);
  else if(content[1]=='x' && content[9]=='x' && !bDisabled[5])
    draw0steps(5);
  else if(content[5]=='x' && content[9]=='x' && !bDisabled[1])
    draw0steps(1);
  else if(content[3]=='x' && content[5]=='x' && !bDisabled[7])
    draw0steps(7);
  else if(content[3]=='x' && content[7]=='x' && !bDisabled[5])
    draw0steps(5);
  else if(content[5]=='x' && content[7]=='x' && !bDisabled[3])
    draw0steps(3);
  else if(!bDisabled[5]) draw0steps(5);
  else if(!bDisabled[1]) draw0steps(1);
  else if(!bDisabled[3]) draw0steps(3);
  else if(!bDisabled[7]) draw0steps(7);
  else if(!bDisabled[9]) draw0steps(9);
  else if(r<0.1 && !bDisabled[1]) draw0steps(1);
  else if(r<0.2 && !bDisabled[2]) draw0steps(2);
  else if(r<0.3 && !bDisabled[3]) draw0steps(3);
  else if(r<0.4 && !bDisabled[4]) draw0steps(4);
  else if(r<0.5 && !bDisabled[5]) draw0steps(5);
  else if(r<0.6 && !bDisabled[6]) draw0steps(6);
  else if(r<0.7 && !bDisabled[7]) draw0steps(7);
  else if(r<0.8 && !bDisabled[8]) draw0steps(8);
  else if(r<1 && !bDisabled[9]) draw0steps(9);
  else computerTurn();
}


function showWinner(x){
  setTimeout(function(){
      alert(x);},900);
isResult=true;
}

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}




/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

  
