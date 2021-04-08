let rotateAngle = 180;

function rotate(image) {
  image.setAttribute("style", "transform: rotate(" + rotateAngle + "deg)");
  rotateAngle = rotateAngle + 180;
}
function proveraForme(){
	let email = document.forms["kontaktforma"]["emailadresa"].value;
	let poruka = document.forms["kontaktforma"]["poruka"].value;
	let naslov = document.forms["kontaktforma"]["naslov"].value;

	if (email.length<1) {
        document.getElementById('error-email').innerHTML = " Molimo upišite vaš email"
    }
    if (poruka.length<1) {
        document.getElementById('error-poruka').innerHTML = " Molimo upišite vašu poruku ";
    }
    if (naslov.length<1) {
        document.getElementById('error-naslov').innerHTML = " Molimo upišite naslov ";
    }       
    if(email.length<1 || poruka.length<1 || naslov.length<1){
       	return false;
    }

}
function resize(h3, percent) { h3.style.fontSize = percent; }
function opacityslike(img,value){img.style.opacity=value;}
function opacityinput(input,value){input.style.opacity=value;}