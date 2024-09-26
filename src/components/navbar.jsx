import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {Context} from '../store/appContext';
import '../App.css';

function Navbar() {
    const {store} = useContext(Context);
    const {favoritos} = store;

    return (
        <>
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <Link to='/home' className="navbar-brand">Home</Link>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Encuentra a tu mascota" aria-label="Search" />
                        <button className="btn btn-outline-dark" type="submit">Buscar</button>
                    </form>


                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                            Favoritos
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            {favoritos.length==0 && <span>Vacío</span> }
                            {favoritos.map((mascota)=> <li><a className="dropdown-item" href="#">{mascota.nombre}</a></li>)}  
                        </ul>
                    </li>



                </div>
            </nav>
        </>
    );
}

export default Navbar;
