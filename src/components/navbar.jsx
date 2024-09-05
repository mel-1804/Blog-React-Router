import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Home</a>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Busca tu nueva mascota" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
