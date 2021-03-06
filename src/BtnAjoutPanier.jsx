import "./BtnAjoutPanier.scss";
import Badge from "@material-ui/core/Badge";
import { useState } from "react";

export default function BtnAjoutPanier(props) {
  // État du badge du bouton
  const [btnQte, setBtnQte] = useState(0);
  const [btnTexte, setBtnTexte] = useState(props.etiquette);

  return (
    <Badge badgeContent={btnQte} color="secondary">
      <button
        onClick={(event) => {
          props.onClick();
          setBtnQte(btnQte+1);
          setBtnTexte(props.etiquetteClick);
          event.target.classList.add("rouge");
        }}
        className="BtnAjoutPanier"
      >
        {btnTexte}
      </button>
    </Badge>
  );
}
