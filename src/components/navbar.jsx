import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Home</a>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Encuentra a tu mascota" aria-label="Search"/>
                            <button className="btn btn-outline-dark" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
