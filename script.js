//Déclaration fonction identité
function DisplayName() {
//déclartion des variables
var lastname = document.getElementById('lastname').value;
var firstname = document.getElementById('firstname').value;
var city = document.getElementById('city').value;
var regex = /^[a-zA-Z\-éèîç]+$/;
//Boite de dialogue avec appel des variables
if((regex.test(lastname) == true) && (regex.test(firstname) == true) && (regex.test(city) == true) ){
alert('Non : ' + lastname  + '\n' + 'Prénom : ' + firstname   + '\n' + 'Ville : ' + city);
//affichage des variables avec concaténation
}
else{
  alert('Recommencez sans les chiffres ou caractères spéciaux');
  }
}
