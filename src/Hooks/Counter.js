import React, { useState } from 'react';

const Counter = (props) => {

    // const tableau = useState(1);

    // const compteur = tableau[0];
    // const setCompteur = tableau[1];
    //équivalent à : 
    const [compteur, setCompteur] = useState(1);

    const handleChange = () => {
        setCompteur(compteur + 1);
    };

    return (
        //avec la première version c'était : onClick={()=> setCompteur(compteur+1)}
        <div>
            {compteur} 
            <button
                className="btn btn-primary m-3"
                onClick={handleChange}
            >Ajouter
             </button>
        </div>
    )
}

export default Counter;