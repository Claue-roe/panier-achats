import "./ListeProduits.scss";
import Produit from "./Produit";
import tabProduits from "./data/produits.json";
import instanceFirebase from 'firebase/app';
import "firebase/firestore";

//Code pour intégrer Firebase temporairement placé ici
//Configuration du projet FB
const firebaseConfig = {
  apiKey: "AIzaSyCALR26mfBqim8lJw9DongwsXO3agomG7Y",
  authDomain: "panier-achats-cpatry.firebaseapp.com",
  projectId: "panier-achats-cpatry",
  storageBucket: "panier-achats-cpatry.appspot.com",
  messagingSenderId: "834323949561",
  appId: "1:834323949561:web:c4a89652abde78b46dff28",
  measurementId: "G-N0T5DY59QR"
};

//Obtenir une instance de l'API Firebase
if(instanceFirebase.apps.length){
  instanceFirebase.initializeApp(firebaseConfig);
}

//Obtenir une instance de la BD Firestore
const bd = instanceFirebase.firestore;

//AJAX et dponc Promise et donc Asynx
// let mesProduits = bd.collection("produits").get();

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
