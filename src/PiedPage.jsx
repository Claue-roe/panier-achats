import './PiedPage.scss';

export default function PiedPage(props) {
    //Obtenir l'année courante
    const annee = (new Date()).getFullYear();
    return(
        <footer>
            &copy; {props.avecNom} - {annee} - {props.phrase}
        </footer>
    );
}