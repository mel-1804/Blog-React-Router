import {Link} from 'react-router-dom';

function Home() {
    return (
        <>
            <h1>Home hola</h1>
            <Link to='/list' className="btn btn-primary">Ver Catálogo de Personajes</Link>
        </>
    );
}

export default Home;