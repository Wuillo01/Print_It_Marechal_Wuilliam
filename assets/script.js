// La variable sert à suivre la position de la diapositive actuellement affichée dans le carrousel d'images. En commençant à 0, cela indique que la première diapositive du tableau sera affichée en premier.
let currentSlideIndex = 0;

//sélectionne le premier élément qui possède la classe CSS dots et le stocke dans la variable div Dots (permettant de naviguer entre les diapositives).
const divDots = document.querySelector(".dots");

 //commence la déclaration du tableau "slides".
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Flèche gauche
// ************* 
const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", goToPreviousSlide);

// Flèche droite
// *************
const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", goToNextSlide);

// Ajout des bullet points au slider
// *********************************
//Initialise une variable i à 0, continue à exécuter le bloc de code tant que i est inférieur à la longueur de la collection slides, À chaque itération, i est incrémenté de 1.
for (let i = 0; i < slides.length; i++) {
	
	//Crée un nouvel élément HTML <i>, qui est  utilisé pour des icônes ou des éléments décoratifs.
	const bulletPoint = document.createElement("i");
 
	//Attribue à cet élément une liste de classes CSS, pour afficher une icône de cercle .
	bulletPoint.classList = "fa-circle dot";

	//Si c’est le premier bullet, on ajoute la classe dot_selected pour indiquer que c’est le bullet sélectionné ou actif par défaut.
	if (i == 0) {
		bulletPoint.classList.add("dot_selected")
	};

	//Ajoute le nouvel élément <i> à un conteneur divDots, qui doit être un élément HTML existant dans le DOM où tous ces bullets sont affichés
	divDots.appendChild(bulletPoint);
};

// Fonctions
//**********
// changer le bullet point actif
function displayImage(currentSlideIndex) {
	
	resetAllDots()
	const bullets = divDots.querySelectorAll('.dot')
	const bullet = bullets[currentSlideIndex]
	bullet.classList.add('dot_selected')
	//changer l'image
	const bannerImg = document.querySelector(".banner-img")

	//changer le texte correspondant à l'image
	bannerImg.src = "./assets/images/slideshow/" + slides[currentSlideIndex].image

	const bannerP = document.querySelector("#banner p")
	bannerP.innerHTML = slides[currentSlideIndex].tagLine
};

// Permet de naviguer vers la diapositive précédente dans une galerie ou un diaporama.
function goToNextSlide() {

	//Affiche dans la console du navigateur le message "Flèche droite cliquée" pour indiquer que cette fonction a été déclenchée.
	console.log("Flèche droite cliquée")
	
	//Incrémente la variable currentSlideIndex de 1, ce qui signifie qu'on veut passer à la diapositive suivante.
	currentSlideIndex = currentSlideIndex + 1

	//Vérifie si l'index actuel dépasse le nombre total de diapositives (slides.length). Si c'est le cas, il revient à la première diapositive en assignant 0 à currentSlideIndex. Cela permet de faire une boucle infinie dans le carrousel.
	if (currentSlideIndex >= slides.length) {
		currentSlideIndex = 0
	};

	//Appelle la fonction qui affiche l'image correspondant à l'index currentSlideIndex.
	displayImage(currentSlideIndex)
};
// Permet de naviguer vers la diapositive précédente dans une galerie ou un diaporama.
function goToPreviousSlide() {

	// Affiche dans la console du navigateur le message "Flèche gauche cliquée" pour indiquer que l'utilisateur a cliqué sur la flèche gauche pour revenir à la diapositive précédente.
	console.log("Flèche gauche cliquée")

	// Diminue l'indice de la diapositive actuelle de 1, pour passer à la diapositive précédente.
	currentSlideIndex = currentSlideIndex - 1

	//Vérifie si l'indice est devenu négatif (c'est-à-dire si on était à la première diapositive et qu'on veut revenir en arrière). Si c'est le cas, il remet l'indice à la dernière diapositive du tableau slides, créant ainsi une boucle pour revenir du début à la fin.
	if (currentSlideIndex < 0) {

		// Appelle une fonction pour afficher la diapositive correspondant à l'indice actuel.
		currentSlideIndex = (slides.length - 1)
	};

	// signifie que la fonction displayImage est appelée avec l'argument currentSlideIndex. Cette instruction demande au programme d'exécuter la fonction displayImage en lui passant la valeur contenue dans la variable currentSlideIndex.
	displayImage(currentSlideIndex)
};

// Sert à réinitialiser l’état de tous les éléments ayant la classe .dot à l’intérieur d’un conteneur divDots.
function resetAllDots() {

	//Sélectionne tous les éléments enfants de divDots qui ont la classe dot et forEach, parcourt chaque élément dot dans cette liste.
	document.querySelectorAll('.dot_selected').forEach(dot => {

		//Supprime la classe dot_selected de chaque dot. Ce qui a pour effet de désélectionner un point ou de réinitialiser leur style.
		dot.classList.remove('dot_selected')
	})
}
