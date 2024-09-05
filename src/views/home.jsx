import { Link } from 'react-router-dom';
import Navbar from '../components/navbar'

function Home() {
    return (
        <>
            <Navbar></Navbar>
            <div className='d-flex flex-column align-items-center'>
                <h1><i class="fa-solid fa-paw"></i> ADOPTA UN HUACHITO!! ♥♥♥ </h1>
                <Link to='/list' className="btn">Ver Catálogo de Mascotas</Link>
            </div>
        </>
    );
}

export default Home;