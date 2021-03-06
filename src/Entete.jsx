import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import SommairePanier from './SommairePanier';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Entete(props) {
  // const etatCacherSommairePanier = useState(true);
  // console.log("La variable statCacherSommairPanier : ", etatCacherSommairePanier);
  
  // // Array/Object DESTRUCTURING (décomposition des tableaux et objets)

  // const valeurEtatCacher = etatCacherSommairePanier[0];
  // console.log("Valeur état : ", valeurEtatCacher);

  // const fonctionSetDeEtatCacher = etatCacherSommairePanier[1];
  // console.log("Fonction qui modifie l'état : ", fonctionSetDeEtatCacher);

  // Avec la décomposition de tableau, c'est plus facile :
  const [cacheSommaire, setCacheSommaire] = useState(true);
  //console.log("Etat du SP : ", cacheSommaire);
  
  const basculerSommairePanier =  () => setCacheSommaire(!cacheSommaire);
  
  //Accéder à l'état du panier qui est reçu dans les props

  const [panier] = props.etatPanier; // décomposition de tableaux (et d'objets)

    // Calculer le nombre d'Article total du panier
    // Méthode 1 : programmation impérative (moins expressive)
    // const articlesTab = Object.values(panier);
    // let nbArticles = 0;
    // for (let i = 0; i < articlesTab.length; i++) {
    //   nbArticles += articlesTab[i].qte;
    // }

    // Calculer le nombre d'Article total du panier
    // Méthode 2 : programmation déclarative (plus expressive)
    //[ {prix:19, qte:3}, {prix:26.9, qte:13}, {prix:254, qte:4}, {prix:25, qte:3}]
    // const nbArticles = Object.values(panier).reduce( (accumulateur, eltCourant) => accumulateur + eltCourant.qte, 0 );

  /*
   let h = document.createElement("header");
   h.setAttribute("class","Entete");
   h.appendChild();
  */
  return (
    
    <header className="Entete">
      <div><Link to="/">Logo</Link></div>
      <ul className="navPrincipale">
        <li><Link to="/nos-produits">Produits</Link></li>
        <li><Link to="/a-propos-de-magasin">À propos de nous</Link></li>
        <li><Link to="/contact">Contactez-nous</Link></li>
      </ul>
      <ul className="navUtil">
        <li>
          <Badge onClick={basculerSommairePanier} badgeContent={Object.values(panier).reduce((accumulateur, eltCourant) => accumulateur + eltCourant.qte, 0)} color="primary">
            <ShoppingCartIcon />
          </Badge>
          <SommairePanier cacher={cacheSommaire} etatPanier={props.etatPanier} />
        </li>
        <li>Mon compte</li>
      </ul>
    </header>
  );
}
