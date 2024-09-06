import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <div className="d-flex flex-column align-items-center my-5 text-secondary">
                <h1>NOT FOUND</h1>
                <h6 className="my-3">Tal vez quisiste visitar la página de Huachitos?</h6>
                <container className="bg-secondary text-white d-flex justify-content-around p-3 rounded-3 my-3">
                    <i class="pataDerecha fa-solid fa-paw"></i>
                    <i class="pataIzquierda fa-solid fa-paw"></i> 
                    <i class="pataDerecha fa-solid fa-paw"></i> 
                    <i class="pataIzquierda fa-solid fa-paw"></i>
                    <i class="pataDerecha fa-solid fa-paw"></i>
                    <i class="pataIzquierda fa-solid fa-paw"></i>
                    <i class="pataDerecha fa-solid fa-paw"></i>
                    <i class="pataIzquierda fa-solid fa-paw"></i>
                </container>
                <Link to='/home' className="btn btn-secondary">Ir a Huachitos</Link>
            </div>
        </>
    );
}

export default NotFound;