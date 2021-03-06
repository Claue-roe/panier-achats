import Entete from './Entete';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Contact from './Contact';
import PiedPage from './PiedPage';
import ListeProduits from './ListeProduits';
import './Page.scss';
import useLocalStorageState from './hooks/useLocalStorageState';
import {Switch,Route} from 'react-router-dom';

export default function Page(props) {
  // // Exemple de comment je vais stocker les articles dans le panier
  // // const bonPanier = ({
  // //   prd0001 : {prix: 10.99,qte :2},
  // //   prd0005 : {prix: 24.95,qte :1}
  // // })

  // // Impossible de savoir si le id existe déja
  // // const mauvaisPanier = [
  // //   {id: prd0001, prix: 10.99, qte :2},
  // //   {id: prd0005, prix: 24.95, qte :1},
  // //   {id: prd0002, prix: 12.95, qte :1}
  // // ]


 // On utilise notre hook personnalisè pour créer un état qui sera sauvergarder dans localStorage
 //Cet état aura comme valeur initiale : {} et l'étiquette localStorage sera : "panier-pvr"
 const etatPanier = useLocalStorageState({},'panier-pvr');

  //Autre exemples d'utilisation du même hook
  // const etatConnesion = useLocalStorageState(false, "utilisateur-connexion");
  // const choixLangue = useLocalStorageState("fr", "choix-langue");

  // Exemple d'utilisation sans hook
  // const etatPanier = useState(() => {
  //   const panierLS = window.localStorage.getItem('panier-pvr-gr1')
  //   return(panierLS !== null) ?JSON.parse(panierLS) : {}
  // });
  // const [panier, setPanier] = etatPanier;

  // // SAuvergarder le panier dans le localStorage
  // useEffect(() => 
  //   window.localStorage.setItem('panier-pvr-gr1', JSON.stringify(panier)),
  //   [panier]); 
  

  return (
    <div className="Page">
      <Entete etatPanier={etatPanier}/>

      <section className="contenuPrincipal">
        <Switch>
          <Route path="/" component={Accueil} exact/>
          <Route path="/nos-produits" exact>
            <ListeProduits etatPanier={etatPanier}/>
          </Route>
          <Route path="/a-propos-de-magasin" component={Apropos} exact/>
          <Route path="/contact" component={Contact} exact/>
        </Switch>  
      </section>

      <PiedPage avecNom="Tim" phrase="Tous droits réservés." />
    </div>
  );  
}
