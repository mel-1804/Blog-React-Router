import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import '../App.css';
import Navbar from '../components/navbar';

function Details() {
    const [mascota, setMascota] = useState({});
    const { id } = useParams()
    // console.log('este es useParams', useParams())

    useEffect(() => {
        fetch(`https://huachitos.cl/api/animal/${id}`)
            .then((respuesta) => {
                if (respuesta.ok) {
                    return respuesta.json();
                } else {
                    throw new Error("Hubo un error");
                }
            })
            .then((result) => {
                setMascota(result.data);
                // console.log(result)
            })
            .catch((error) => console.log(error));
    }, []);

    console.log(mascota.desc_fisica)
    
    return (
        <>
            <Navbar></Navbar>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={mascota.imagenes && mascota.imagenes[0].imagen} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{mascota.nombre}</h5>
                                <p className="card-text">{mascota.edad}, {mascota.genero} {mascota.desc_fisica?.replace(/<p>/g, "").replace(/<\/p>/g, "")}</p>
                                <p className="card-text"><small className="text-muted">Región: {mascota.region}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Details;