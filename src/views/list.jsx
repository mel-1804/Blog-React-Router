import { useState, useEffect } from 'react';
import Card from '../components/card';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import '../App.css';

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
    }, []);


    return (
        <>
            <Navbar></Navbar>
            <div className='d-flex flex-column align-items-center bg-light p-4'>
                <h1 className='text-secondary'>Catálogo de Mascotas</h1>
                <Link to='/home' className="btn btn-success">Volver al Home</Link>
            </div>
            <div className='row gap-2'>
                    {mascotas.map((mascota) => {
                        return (
                            <Card key={mascota.id} mascota={mascota} />
                        )
                    })}
            </div>
        </>
    );
}

export default List;