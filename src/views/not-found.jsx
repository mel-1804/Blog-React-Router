import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <div className="d-flex flex-column align-items-center my-5 text-secondary">
                <h1>NOT FOUND</h1>
                <h6 className="my-3">Tal vez quisiste visitar la página de Huachitos?</h6>
                <div className="bg-secondary text-white d-flex justify-content-around p-3 rounded-3 my-3">
                    <i className="pataDerecha fa-solid fa-paw"></i>
                    <i className="pataIzquierda fa-solid fa-paw"></i> 
                    <i className="pataDerecha fa-solid fa-paw"></i> 
                    <i className="pataIzquierda fa-solid fa-paw"></i>
                    <i className="pataDerecha fa-solid fa-paw"></i>
                    <i className="pataIzquierda fa-solid fa-paw"></i>
                    <i className="pataDerecha fa-solid fa-paw"></i>
                    <i className="pataIzquierda fa-solid fa-paw"></i>
                </div>
                <Link to='/home' className="btn btn-secondary">Ir a Huachitos</Link>
            </div>
        </>
    );
}

export default NotFound;