import { useState, useEffect } from 'react';

/**
 * Obtient un état React qui sera sauvergarder dans localStorage
 * 
 * @param {*} valeurInitiale valeur quelconque avec laquelle on veut initialiser l'état
 * @param {string} etiquetteLS chaîne de caractère pour l'étiquette localStorage
 * @returns {array} Tableau retourner par useState
 */
export default function useLocalStorageState(valeurInitiale, etiquetteLS){
    const [etat, setEtat] = useState(
        () => JSON.parse(window.localStorage.getItem(etiquetteLS)) || valeurInitiale
    );

    useEffect(
        () => window.localStorage.setItem(etiquetteLS, JSON.stringify(etat)),
         [etat , etiquetteLS]
        );

        //Retourner l'état
        return [etat, setEtat];
}