import { Link } from 'react-router-dom';

function Card({producto}) {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{producto.title}</h5>
                    <p className="card-text">{producto.description}</p>
                    <Link to={`/details/${producto.id}`} className="btn btn-primary">
                        {producto.price}
                    </Link>
                </div>
            </div >
        </>
    );
}

export default Card;