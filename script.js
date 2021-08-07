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
