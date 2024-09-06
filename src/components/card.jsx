import { Link } from 'react-router-dom';
import '../App.css';

function Card({mascota}) {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={mascota.imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{mascota.nombre}</h5>
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