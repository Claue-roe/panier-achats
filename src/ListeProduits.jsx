import "./ListeProduits.scss";
import Produit from "./Produit";
import tabProduits from "./data/produits.json";
import instanceFirebase from 'firebase/app';
import "firebase/firestore";
import { ContactSupportOutlined } from "@material-ui/icons";

//Code pour intégrer Firebase temporairement placé ici

// Tout ce code sera organiséadéquatement dans des fichiers/hooks séparés

//Étape 1 : Objet de configuration pour utiliser les produits FB
const firebaseConfig = {
  apiKey: "AIzaSyCALR26mfBqim8lJw9DongwsXO3agomG7Y",
  authDomain: "panier-achats-cpatry.firebaseapp.com",
  projectId: "panier-achats-cpatry",
  storageBucket: "panier-achats-cpatry.appspot.com",
  messagingSenderId: "834323949561",
  appId: "1:834323949561:web:c4a89652abde78b46dff28",
  measurementId: "G-N0T5DY59QR"
};

//Étape 2 : Obtenir une instance de l'API Firebase
if(!instanceFirebase.apps.length){
  instanceFirebase.initializeApp(firebaseConfig);
}

// Étape 3 : Obtenir une instance de la BD Firestore
const bd = instanceFirebase.firestore();

//Étape 4 : Quelques exemples d"écriture et de lecture de donnée

//Ex1 : ajouter tous les produits su fichier JSON dans la collection "produits" sur Firestore
  // tabProduits.forEach(
  //   prd => bd.collection("produits").add(prd).then(
  //     refDoc => console.log("le document est ajouté avec Identifiant", refDoc.id)
  //   )
  // );

// Ex2 : Cherhcer ddes documents dans une collection
// bd.collection("produits").where("prix",">", 15).get().then(
//   reponse => reponse.forEach(
//     article => console.log("Produit plus cher que 15$ : ", article.data())
//   )
// )   

//Ex3 : Observer une collection
// Pas le bon cas d'utilisation mais c'est sickk
// bd.collection("produits").onSnapshot(
//   snapshot => snapshot.docChanges().forEach(
//     changement => {
//       if(changement.type == "added"){
//         console.log(changement.doc.data());
//       }
//     }
//   )
// )

function ListeProduits(props) {
  //console.log("Panier dans ListeProduits", props.etatPanier);
  return (
    <div className="ListeProduits">
      <h2>Produits disponibles</h2>
      <ul>
        {tabProduits.map((prd) => (
          <Produit
            key={prd.id}
            etatPanier={props.etatPanier}
            id={prd.id}
            nom={prd.nom}
            prix={prd.prix}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListeProduits;
