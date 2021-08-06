# palindrome-checking-app
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
        <style>
            *{
    padding:0;
    margin:0;
    box-sizing:border-box;
}

body {
    display:flex;  
    justify-content:center;
    flex-direction: column;
    min-height:100vh;
}
.allHolder{
    background:rd;
    position:absolute;
    top:80px;
    left:50%;
    transform:translate(-50%, -40px);  
    text-align:center;
}
.allHolder > div{
    background-color:ble;
    display:flex;
}
input{
    height:40px;
    font-size:15px;
    padding:7px;
    outline:none;
}
h1{
    font-size:20px;
    font-weight:bold;
}
input[type="text"]{
    border: 1px solid #dfdfdf;
    border-radius:20px;
    padding-left:15px;
    margin-right:8px;
}
input[type="button"]{
    border-radius:50px;
    border: 0;
   background-color: lightblue;
}
.footer{
    position:absolute ;
    bottom:0;
    height:40px;
    width:100%;
    border-top:1px solid #dfdfdf;
    font-size:14px;
    padding-left:10px;
}
.footer p{
    line-height:40px;
    color:;
}

.result{
    background:rgba(0,0,0,.3);
    padding:10px 12px;
    max-width:200px;
    width:auto;
    border-radius:20px;
    position:absolute ;
    top: 135px;
    left:50%;
    transform:translateX(-80%);
    display:none;
    color:#fff;
    font-size:13px;
}
        </style>
    </head>
    <body>

    
        <div class="allHolder">
        <h1>Palindrome Checker</h1><br/>
        <div class="fr_holder">
        <input type="text"placeholder="word goes here" />
        <input type="button" value="check" onclick="check()">
        </div>
        </div>
        <div class="result"> </div>
        
        
  <div class="footer">
  <p>check me on youtube(Emms Code): <a href="https://bit.ly/3zPIQev">here</a></p>
    </body>
    
    <script>
        
alert('A palindrome is any word that spells the same backwards. this program will check if a word is palindrome or not. \n give a star if you like or check my youtube channel Emms Code');

function check(){
    let box = document.getElementsByTagName("input")[0];

    let word = String(box.value).toLowerCase();
    let txtLength = word.length;
    let checkTxt = "";
 let res = document.querySelector(".result");
 
for(let i=txtLength-1; i>=0; i--){
        word[i];
        checkTxt += word[i];
    }
  if(checkTxt === word){
  res.style.display = "block";
  res.innerHTML = `${word} is a palindrome because<br> spelt backwards is still <span style="color:lime;">${checkTxt}</span>`;
  box.value="";
    }
    
  else{
  res.innerHTML = `${word} is not a palindrome because<br> spelt backwards is <span style="color:lime">${checkTxt}</span>`;
  res.style.display = "block";
  box.value="";
    }
}
    </script>
</html>
