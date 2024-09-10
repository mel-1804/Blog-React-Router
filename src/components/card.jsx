import { Link } from 'react-router-dom';
import '../App.css';

function Card({mascota}) {
    return (
        <>
            <div className="card col-4" style={{ width: "18rem" }}>
                <img src={mascota.imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className='tituloCard d-flex justify-content-between'>
                        <h5 className="card-title">{mascota.nombre}</h5><i class="fa-regular fa-heart"></i>
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