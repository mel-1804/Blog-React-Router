import { Link } from 'react-router-dom';
import Navbar from '../components/navbar'
import '../App.css';

function Home() {
    return (
        <>
            <Navbar></Navbar>
            <div className='d-flex flex-column align-items-center bg-light p-4'>
                <h1 className='my-3 text-secondary'><i className="fa-solid fa-paw"></i> ADOPTA UN HUACHITO!! ♥♥♥ </h1>
                <Link to='/list' className="btn btn-success my-3">Ver Catálogo de Mascotas</Link>
            </div>
        </>
    );
}

export default Home;