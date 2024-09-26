import { Link } from 'react-router-dom';
import '../App.css';
import { useContext } from 'react';
import {Context} from '../store/appContext';
import { useState } from 'react';

function Card({mascota}) {

    const {actions, store} = useContext(Context);
    const {addFavorites, removeFavorites} = actions;
    const [favorites, setFavorites] = useState(false)
    function handlerFavorites(mascota) {
        if(favorites){
            removeFavorites(mascota)
            setFavorites(!favorites)
        }else{
            setFavorites(!favorites)
            addFavorites(mascota)
        }

    }

    return (
        <>
            <div className="card col-4" style={{ width: "18rem" }}>
                <img src={mascota.imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className='tituloCard d-flex justify-content-between'>
                        <h5 className="card-title">{mascota.nombre}</h5>
                        <div onClick={() => handlerFavorites(mascota)}>
                            {favorites? <i class="fa-solid fa-heart"></i>: <i className="fa-regular fa-heart"></i>}
                        </div>
                    </div>
                    <p className="card-text">{mascota.tipo}, {mascota.edad}</p>
                    <Link to={`/details/${mascota.id}`} className="btn btn-secondary">
                        Conocer más sobre {mascota.nombre}
                    </Link>
                </div>
            </div >
        </>
    );
}

export default Card;