import { useState, useEffect } from 'react';
import Card from '../components/card';
import { Link } from 'react-router-dom';

function List() {

    
    const [mascotas, setMascotas] = useState([]);

    useEffect(() => {
        fetch(`https://huachitos.cl/api/animales`)
            .then((respuesta) => {
                if (respuesta.ok) {
                    return respuesta.json();
                } else {
                    throw new Error("Hubo un error");
                }
            })
            .then((result) => {
                setMascotas(result.data);
                console.log(result);
            })
            .catch((error) => console.log(error));
    },[]);


    return (
        <>
            <h1>Catalogo de Mascotas</h1>
            <Link to='/home' className="btn btn-primary">Volver al Home</Link>
            <Link>
                {mascotas.map((mascota) => {
                    return (
                        <Card key={mascota.id} mascota={mascota} />
                    )
                })}
            </Link>
        </>
    );
}

export default List;