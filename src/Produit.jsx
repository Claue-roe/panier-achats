import BtnAjoutPanier from './BtnAjoutPanier';
import './Produit.scss';
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

export default function Produit(props) {
    //console.log("Panier dans Produit : ", props.etatPanier);

    /**
     * Ajoute l'article au panier
     */
    function ajouterArticle() {
        const [panier, setPanier] = props.etatPanier;
        if(panier[props.id]) {
            panier[props.id].qte++;
        }
        else {
            panier[props.id] = {prix: props.prix, qte: 1}
        }
        // Maintenant il faut changer l'état du panier avec setPanier
        // Il faut passer à setPanier un nouvel objet (obtenu par clonage)
        //setPanier(JSON.parse(JSON.stringify(panier))); 
        setPanier({...panier}); //Spread operator
        //setPanier(Object.assign({}, panier));     
        console.log(panier);
    }

    return (
        <li className="Produit">
            <div className="image">
                <img src={'images-produits/' + props.id + '.webp'} alt={props.nom}/>
            </div>
            <div className="info">
                <h3>{props.nom}</h3>
                <p className="prix">{props.prix} $CA</p>
                <BtnAjoutPanier onClick={ajouterArticle} etiquette="Ajouter au panier" etiquetteClick={<AddCircleOutlineIcon/>}/>
            </div>
        </li>
    );
}