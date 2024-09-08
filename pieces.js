const response = await fetch("pieces-autos.json");
const piece = await response.json();

console.log(piece);

const article = piece[0];
const imageElement = document.createElement("img");
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${
  article.prix < 35 ? "€" : "€€€"
})`;
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
const descriptionElement = document.createElement("p");
descriptionElement.innerText =
  article.description ?? "(Pas de description pour le moment)";
const stockElement = document.createElement("p");
stockElement.innerText = article.disponibilite
  ? "En stock"
  : "En rupture de stock";

const sectionFiches = document.querySelector(".fiches");

sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(stockElement);
