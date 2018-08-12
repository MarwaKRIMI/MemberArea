function valider() 
//validation de la longueur du mot de passe

{
alert("dgfhj")
    let psw = document.getElementById("psw").value;
   
    if (psw.length<6 )
    {
     
       alert("invalid length");
    }
  


//password.onchange = validatePassword;
//confirm_password.onkeyup = validatePassword;

//validation de la longueur du nom


    
    
   



// validation si le pseudo nom contient combinaison of lettres et nombre ou non
var pseudo = document.getElementById('pseudo')
var letters = /^[0-9a-zA-Z]+$/;
if(pseudo.value.match(letters))
{
alert('Your registration number have accepted : you can try another');

return true;
}
else
{
alert('Please input alphanumeric characters only');
return false;
}
}

  
